'use client'

import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

// Zoom-proof replacement for framer-motion's useScroll({ target, offset }).
//
// framer resolves an element target's position by walking offsetTop (layout
// px) but reads the scroll position in visual px. Under the laptop-scale zoom
// in globals.css those two spaces differ by the zoom factor, so useScroll
// progress starts late on 1025–1727px viewports. getBoundingClientRect and
// window.innerHeight both live in visual px, so deriving progress purely from
// the current rect stays correct at any zoom (and needs no scrollY at all).
//
// Supports the "<elementEdge> <viewportPoint>" offset pairs used on this site,
// e.g. ['start start', 'end end'], ['start 0.85', 'start -0.15'].

const EDGE = { start: 0, center: 0.5, end: 1 }

function parseOffset(str) {
  const [e, v] = String(str).trim().split(/\s+/)
  const num = (t) => (t in EDGE ? EDGE[t] : parseFloat(t))
  return [num(e), num(v ?? e)]
}

export default function useVisualScrollProgress(ref, offset) {
  const progress = useMotionValue(0)
  const offsetKey = `${offset[0]}|${offset[1]}`

  useEffect(() => {
    const [[e0, v0], [e1, v1]] = offsetKey.split('|').map(parseOffset)
    let frame = null

    const update = () => {
      frame = null
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const H = window.innerHeight
      // Signed distance until each offset condition is met; 0 exactly when the
      // element edge crosses its viewport line. progress = d0 / (d0 - d1) is 0
      // at the first condition and 1 at the second.
      const d0 = rect.top + e0 * rect.height - v0 * H
      const d1 = rect.top + e1 * rect.height - v1 * H
      const denom = d0 - d1
      if (denom === 0) return
      progress.set(Math.min(1, Math.max(0, d0 / denom)))
    }

    const schedule = () => { if (frame === null) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    // Content above the target loading/expanding shifts its rect without a
    // scroll event — watch the target and the page for layout changes.
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(schedule) : null
    if (ro && ref.current) ro.observe(ref.current)
    if (ro) ro.observe(document.body)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (ro) ro.disconnect()
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [ref, progress, offsetKey])

  return progress
}
