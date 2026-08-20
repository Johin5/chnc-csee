'use client'

// Muted looping decoration video that defers its download until the element
// nears the viewport (200px margin), then autoplays. Above-the-fold instances
// intersect on mount, so they still load immediately.
import { useEffect, useRef, useState } from 'react'

export default function LazyVideo({ src, videoRef, ...rest }) {
  const innerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  const attachRef = (el) => {
    innerRef.current = el
    if (typeof videoRef === 'function') videoRef(el)
    else if (videoRef) videoRef.current = el
  }

  useEffect(() => {
    const el = innerRef.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (visible) innerRef.current?.play().catch(() => {})
  }, [visible])

  return (
    <video
      ref={attachRef}
      src={visible ? src : undefined}
      autoPlay muted loop playsInline preload="none"
      {...rest}
    />
  )
}
