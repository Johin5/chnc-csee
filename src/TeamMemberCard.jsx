'use client'

import { useEffect, useRef, useState } from 'react'
import useResponsive from './useResponsive'

// One card for every place a colleague appears — the home-page strip and the
// full Team page — so the two never drift apart. `variant` only changes how the
// card is sized by its parent: 'strip' is a fixed cell in a horizontal
// scroller, 'grid' fills a wrapping grid and collapses to full width on mobile.

const G     = '#34cc32'
const MUTED = 'rgba(255,255,255,0.7)'

export default function TeamMemberCard({ member, variant = 'grid' }) {
  const { name, role, photo, pose, video, bio } = member
  const [hovered, setHovered] = useState(false)
  const [poseLoaded, setPoseLoaded] = useState(false)
  // The pose/video only downloads once the card is first touched, so a 45-card
  // grid doesn't pull double its weight up front.
  const requested = useRef(false)
  const videoRef = useRef(null)
  const { isMobile, isSmall } = useResponsive()

  const close = () => setHovered(false)
  const open  = () => { requested.current = true; setHovered(true) }

  // Drive playback from an effect, not from the hover handler: on the first
  // hover the `src` is only attached by the render that `setHovered` triggers,
  // so calling play() inline would fire against a source-less element and the
  // clip would never start. `muted` is asserted here too — React can drop it on
  // first mount, and an unmuted video is refused autoplay.
  useEffect(() => {
    const v = videoRef.current
    if (!video || !v) return
    if (hovered) {
      v.muted = true
      v.play().catch(() => {})
    } else {
      v.pause()
      v.currentTime = 0
    }
  }, [hovered, video])

  // Deliberately not gated on a readiness event. The video carries the portrait
  // as its poster, so it stays pixel-identical to the still until the first
  // frame decodes — a clip that is slow to load (or never loads) degrades to the
  // photo rather than flashing an empty box or sticking on a missed event.
  const showVideo = video && hovered
  const showPose  = !video && pose && hovered && poseLoaded
  const revealed  = showVideo || showPose
  const isStrip   = variant === 'strip'

  return (
    <div
      onMouseEnter={open}
      onMouseLeave={close}
      onTouchStart={() => (hovered ? close() : open())}
      style={{
        width: isStrip || !isMobile ? 320 : '100%', maxWidth: 320,
        flex: isStrip ? '0 0 auto' : (isMobile ? '1 1 100%' : '0 0 auto'),
        flexShrink: isStrip ? 0 : (isMobile ? 1 : 0),
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        border: `1px solid ${hovered ? G : 'transparent'}`,
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* portrait — cross-fades to the person's own quirky pose on hover */}
      <div style={{
        height: isSmall && !isStrip ? 'clamp(300px, 70vw, 440px)' : 440,
        overflow: 'hidden', position: 'relative', background: '#e9eaec',
      }}>
        <img
          src={photo} alt={name} loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            opacity: revealed ? 0 : 1,
            transform: hovered && !pose && !video ? 'scale(1.06)' : 'scale(1)',
            transition: 'opacity 0.35s ease, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
        {video ? (
          <video
            ref={videoRef}
            src={requested.current ? video : undefined}
            // Nothing is fetched before the first hover because `src` is
            // withheld until then — so `preload` may as well be eager once it
            // does attach. `autoPlay` is the fallback for browsers that refuse
            // a programmatic play() outside a click/tap gesture.
            autoPlay={requested.current || undefined}
            poster={photo}
            muted loop playsInline preload="auto"
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              opacity: showVideo ? 1 : 0,
              transition: 'opacity 0.35s ease',
              pointerEvents: 'none',
            }}
          />
        ) : pose && (
          <img
            src={requested.current ? pose : undefined} alt="" aria-hidden="true"
            onLoad={() => setPoseLoaded(true)}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              opacity: showPose ? 1 : 0,
              transform: showPose ? 'scale(1.02)' : 'scale(1)',
              transition: 'opacity 0.35s ease, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>

      {/* bottom gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
        background: 'linear-gradient(to top, rgba(0,7,24,0.95) 0%, rgba(0,7,24,0.6) 50%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Deeper scrim, hover only — buys the bio enough contrast to read while
          still leaving the top of the frame (and the face) in the clear. */}
      {bio && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '78%',
          background: 'linear-gradient(to top, rgba(0,7,24,0.96) 30%, rgba(0,7,24,0.72) 62%, transparent 100%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: 'none',
        }} />
      )}

      {/* text overlay */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24,
        pointerEvents: 'none',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.35s ease',
      }}>
        {/* bio rows — grow upward from the bottom-anchored block on hover */}
        {bio && (
          <div style={{
            maxHeight: hovered ? 220 : 0,
            opacity: hovered ? 1 : 0,
            overflow: 'hidden',
            marginBottom: hovered ? 16 : 0,
            transition: 'max-height 0.4s ease, opacity 0.3s ease, margin-bottom 0.4s ease',
          }}>
            {bio.map(([label, value], i) => (
              <div key={label} style={{ marginTop: i ? 10 : 0 }}>
                <p style={{
                  fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: isSmall ? 12 : 11,
                  textTransform: 'uppercase', letterSpacing: '1.4px', color: G,
                  margin: '0 0 2px',
                }}>{label}</p>
                <p style={{
                  fontFamily: "'Archivo', sans-serif", fontSize: isSmall ? 12.5 : 11.5, lineHeight: 1.4,
                  color: 'rgba(255,255,255,0.7)', margin: 0,
                }}>{value}</p>
              </div>
            ))}
          </div>
        )}

        {/* green accent line */}
        <div style={{
          width: hovered ? 40 : 0, height: 2, background: G,
          marginBottom: 10,
          transition: 'width 0.35s ease',
        }} />
        <p style={{
          fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: 28,
          textTransform: 'uppercase', letterSpacing: '0.02em', color: '#fff',
          margin: 0, lineHeight: 1.1,
        }}>{name}</p>
        <p style={{
          fontFamily: "'Archivo', sans-serif", fontSize: 13, margin: '6px 0 0',
          color: hovered ? G : MUTED,
          transition: 'color 0.3s ease',
        }}>{role}</p>
      </div>
    </div>
  )
}
