'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// Back/forward (swipe) scroll restoration. The browser's native restore fires
// while the previous page is still remounting — before LazyVideo placeholders
// and the one-frame useResponsive relayout settle — so it clamps to the top of
// the still-short document, and html{scroll-behavior:smooth} then animates the
// miss from the hero. We restore manually instead: remember each path's offset
// and, on popstate, re-apply it instantly every frame until the layout is tall
// enough to hold it (or the user scrolls themselves).
//
// Offsets are captured at interaction time — on every scroll (keyed by the
// live location, which Next has already updated by the time its own
// scroll-to-top event lands) and again on click/popstate — never in a React
// effect, where Next's post-commit scroll reset races the save and records 0.

const KEY = 'scroll:'

const save = (path) => {
  try { sessionStorage.setItem(KEY + path, String(Math.round(window.scrollY))) } catch {}
}

const saved = (path) => Number(sessionStorage.getItem(KEY + path)) || 0

function restore(y) {
  const html = document.documentElement
  const prevBehavior = html.style.scrollBehavior
  html.style.scrollBehavior = 'auto'
  let tries = 0
  let cancelled = false
  // Only clearly vertical input counts as the user taking over — the wheel
  // tail of the horizontal back-swipe gesture must not cancel the restore.
  const onWheel = (e) => {
    if (Math.abs(e.deltaY) > 4 && Math.abs(e.deltaY) > Math.abs(e.deltaX)) cancelled = true
  }
  const onTouch = () => { cancelled = true }
  window.addEventListener('wheel', onWheel, { passive: true })
  window.addEventListener('touchmove', onTouch, { passive: true })
  const step = () => {
    if (!cancelled && Math.abs(window.scrollY - y) > 1 && tries < 40) {
      window.scrollTo(0, y)
      tries++
      requestAnimationFrame(step)
    } else {
      html.style.scrollBehavior = prevBehavior
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchmove', onTouch)
    }
  }
  step()
}

export default function ScrollRestorer() {
  const pathname = usePathname()
  // Advanced only by the pathname effect, so during popstate it still names
  // the page being left.
  const pathRef = useRef(pathname)
  const popped = useRef(false)

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    const onScroll = () => save(window.location.pathname)
    // Capture-phase click: runs before Next starts the navigation, so the
    // offset recorded is exactly where the user clicked.
    const onClick = () => save(pathRef.current)
    const onPop = () => { save(pathRef.current); popped.current = true }
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('click', onClick, true)
    window.addEventListener('popstate', onPop)
    // Full page loads that should land where the user left off (reload, or a
    // swipe back into the site that missed the bfcache).
    const nav = performance.getEntriesByType('navigation')[0]
    if (nav && (nav.type === 'reload' || nav.type === 'back_forward')) {
      restore(saved(window.location.pathname))
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onClick, true)
      window.removeEventListener('popstate', onPop)
    }
  }, [])

  useEffect(() => {
    pathRef.current = pathname
    if (popped.current) {
      popped.current = false
      // Restore even a 0 offset: with native restoration off, the new page
      // would otherwise keep the old page's scroll position.
      restore(saved(pathname))
    }
  }, [pathname])

  return null
}
