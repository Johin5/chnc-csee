'use client'

import { useEffect } from 'react'

// Warm a list of image URLs once the page has finished loading and the main
// thread has gone idle, so the first hover/tap swap (the roster pose shots)
// comes out of the browser cache instead of waiting on a fresh download.
// Fetches are flagged low priority — the point is to fill the cache behind the
// page, never to compete with it. Pass a module-level (stable) array: the
// effect re-runs when the array identity changes.
export default function useWarmImages(urls) {
  useEffect(() => {
    if (!urls || !urls.length) return
    let cancel = () => {}
    const warm = () => {
      urls.forEach((u) => {
        const img = new Image()
        img.fetchPriority = 'low'
        img.decoding = 'async'
        img.src = u
      })
    }
    const schedule = () => {
      if ('requestIdleCallback' in window) {
        const id = window.requestIdleCallback(warm, { timeout: 3000 })
        cancel = () => window.cancelIdleCallback(id)
      } else {
        const id = setTimeout(warm, 1200) // Safari has no requestIdleCallback
        cancel = () => clearTimeout(id)
      }
    }
    if (document.readyState === 'complete') schedule()
    else {
      window.addEventListener('load', schedule, { once: true })
      cancel = () => window.removeEventListener('load', schedule)
    }
    return () => cancel()
  }, [urls])
}
