import { useEffect, useState } from 'react'

// Shared breakpoints for the whole site.
// mobile: <= 480px, tablet: 481–1024px, desktop: > 1024px
export const BP = { mobile: 480, tablet: 1024 }

export default function useResponsive() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  )

  useEffect(() => {
    let frame = null
    const onResize = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setWidth(window.innerWidth))
    }
    window.addEventListener('resize', onResize)
    onResize()
    return () => {
      window.removeEventListener('resize', onResize)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const isMobile = width <= BP.mobile
  const isTablet = width > BP.mobile && width <= BP.tablet
  return {
    width,
    isMobile,
    isTablet,
    isDesktop: width > BP.tablet,
    isSmall: width <= BP.tablet, // tablet OR mobile
  }
}
