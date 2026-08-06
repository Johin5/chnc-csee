// Mahindra Case Study Page — built from Figma node 1:2843 (Landing Page - Dark-cASE STUDY-mahindra)

import { useState } from 'react'
import useResponsive from './useResponsive'

import Footer from './Footer'
const G      = '#34cc32'
const DARK   = '#000718'
const CARD   = '#0f1520'
const MUTED  = 'rgba(255,255,255,0.7)'
const DIM    = '#666a74'
const BORDER = 'rgba(255,255,255,0.1)'

// ─── Assets ───────────────────────────────────────────────────────────────────
const imgMahindraHero  = '/figma/case-study-mahindra/img-mahindra1.png'
const imgMahindraLogo  = '/figma/case-study-mahindra/img-mahindra-m.png'
const imgConvergenC    = '/figma/case-study-mahindra/img-c2-d.svg'
const imgGallery1      = '/figma/case-study-mahindra/img-image111.jpg'
const imgGallery2      = '/figma/case-study-mahindra/img-image112.jpg'
const imgGallery3      = '/figma/case-study-mahindra/img-image113.jpg'

// ─── Other case studies — same set as the Case Studies grid, minus Mahindra ───
const OTHER_CASES = [
  {
    photo: '/figma/case-study/img-mahindra4.jpg',
    logo:  '/axis-bank-logo.png',
    name:  'Axis Bank',
    type:  'Location pages',
    stat:  { val: '96%', label: 'Surge in website actions' },
  },
  {
    photo: '/figma/case-study/img-mahindra3.jpg',
    logo:  '/sbi-logo.png',
    name:  'SBI',
    type:  'Content creation',
    stat:  { val: '10x', label: 'Revenue increase' },
  },
  {
    photo: '/figma/case-study/img-mahindra5.jpg',
    logo:  '/lc-logo.webp',
    name:  'Love & Cheesecake',
    type:  'Location pages',
    stat:  { val: '96%', label: 'Increase in sales' },
  },
]

// Tile that reads the same as a card on the Case Studies grid: photo, type pill,
// brand name always on, logo + headline stat revealed on hover.
function OtherCaseTile({ c, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10', cursor: onClick ? 'pointer' : 'default', background: '#1a2235' }}
    >
      <img src={c.photo} alt={c.name} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.6s ease',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: hovered ? 'rgba(0,7,24,0.85)' : 'rgba(0,7,24,0.45)', transition: 'background 0.4s ease' }} />

      {/* Type tag */}
      <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 3 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', height: 28, padding: '0 12px',
          border: `2px solid ${BORDER}`, fontFamily: "'Saira Condensed', sans-serif",
          fontSize: 12, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#fff',
        }}>{c.type}</span>
      </div>

      {/* Brand mark on hover */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateY(-12%) scale(1)' : 'translateY(-12%) scale(0.85)',
        transition: 'opacity 0.5s ease, transform 0.5s ease', pointerEvents: 'none', zIndex: 2,
      }}>
        <img src={c.logo} alt={c.name} style={{ width: 180, maxWidth: '60%', height: 64, objectFit: 'contain', filter: 'brightness(0) invert(1) drop-shadow(0 4px 20px rgba(0,0,0,0.5))' }} />
      </div>

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 160,
        background: 'linear-gradient(to top, rgba(0,7,24,0.95) 0%, transparent 100%)',
        pointerEvents: 'none', opacity: hovered ? 1 : 0, transition: 'opacity 0.4s ease',
      }} />

      {/* Name always on, stat slides up on hover */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, zIndex: 2 }}>
        <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', textTransform: 'uppercase', lineHeight: 1, margin: 0, marginBottom: hovered ? 12 : 0, transition: 'margin-bottom 0.35s ease' }}>{c.name}</p>
        <div style={{ maxHeight: hovered ? 120 : 0, overflow: 'hidden', opacity: hovered ? 1 : 0, transition: 'max-height 0.45s ease, opacity 0.35s ease' }}>
          <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 44, fontWeight: 800, color: G, lineHeight: 1, margin: 0 }}>{c.stat.val}</p>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: MUTED, lineHeight: '16px', margin: '6px 0 0' }}>{c.stat.label}</p>
        </div>
      </div>

      {/* Green border on hover */}
      <div style={{ position: 'absolute', inset: 0, border: `2px solid ${G}`, opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }} />
    </div>
  )
}

export default function MahindraPage({ onNavigate }) {
  const { isMobile, isSmall } = useResponsive()
  return (
    <div style={{ background: DARK, minHeight: '100vh', color: '#fff' }}>

      {/* ── Hero — runs under the fixed nav, same as the home page video ────── */}
      <section style={{ position: 'relative', width: '100%', height: isSmall ? 'calc(clamp(360px, 78vw, 480px) + 106px)' : 'calc(clamp(480px, 42vw, 560px) + 106px)', overflow: 'hidden' }}>
        <img src={imgMahindraHero} alt="Mahindra" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {/* Veil — dark at the top so the nav has something to sit on, dark at the
            foot so the image blends into the page; keeps the lockup legible. */}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${DARK} 0%, rgba(0,7,24,0.55) 22%, rgba(0,7,24,0.55) 55%, rgba(0,7,24,0.85) 100%)` }} />
        {/* Soft scrim behind the lockup. Both marks carry white/silver, which
            drops out over the light panels of the car — this buys the contrast
            back without putting a visible box around either logo. */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 46% 42% at 50% 52%, rgba(0,7,24,0.82) 0%, rgba(0,7,24,0.6) 40%, rgba(0,7,24,0) 78%)' }} />
        {/* Overlay content: logo lockup + description — offset for the nav */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center', justifyContent: 'center', padding: '106px clamp(20px, 6vw, 100px) 0', boxSizing: 'border-box', textAlign: 'center' }}>
          {/* Logo lockup — Figma frame 1:2875, 205×66 */}
          <div style={{ height: 66, display: 'flex', alignItems: 'center', gap: 25, justifyContent: 'center', flexShrink: 0 }}>
            {/* Both marks sit straight on the photo — no chips. A soft drop
                shadow keeps their light edges off the light parts of the car. */}
            <img src={imgConvergenC} alt="ConvergenSEE" style={{ width: 60, height: 53.5, objectFit: 'contain', flexShrink: 0, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.55))' }} />
            {/* x */}
            <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 60.4, color: '#2bb32a', letterSpacing: '-1.511px', lineHeight: 1, flexShrink: 0 }}>x</span>
            <img src={imgMahindraLogo} alt="Mahindra" style={{ height: 52, width: 'auto', objectFit: 'contain', flexShrink: 0, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.55))' }} />
          </div>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: '#fff', lineHeight: '24px', maxWidth: 566, textAlign: 'center', margin: 0 }}>
            Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today.
          </p>
        </div>
      </section>

      {/* ── Main content wrapper ────────────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>

          {/* Top stats row */}
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20, alignItems: isMobile ? 'stretch' : 'flex-start', width: '100%', justifyContent: 'center' }}>
            {[
              { val: '96%',   label: 'Surge in website actions in just 3 months' },
              { val: '1.3M+', label: 'Fraud attempts tackled and resolved' },
              { val: '203K+', label: 'Spike in online reviews in 8 months' },
            ].map((s, i) => (
              <div key={i} style={{ width: isMobile ? '100%' : 300, maxWidth: 300, padding: 'clamp(20px, 4vw, 30px)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: 'clamp(48px, 8vw, 80px)', lineHeight: 1.1, color: G, margin: 0, textTransform: 'uppercase' }}>{s.val}</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, lineHeight: '24px', margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── The Challenge ─────────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: 1, color: '#fff', textTransform: 'uppercase', margin: 0 }}>
            The Challenge
          </h2>
          <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: 20, alignItems: 'stretch', width: '100%', justifyContent: 'center' }}>
            {[
              { num: '1.', text: 'Data-driven insights revealed key performance metrics, highlighting areas for optimization and growth strategies.' },
              { num: '2.', text: 'Inconsistent local presence across thousands of agents' },
              { num: '3.', text: 'Data-driven insights revealed key performance metrics, highlighting areas for optimization and growth strategies.' },
            ].map((item, i) => (
              <div key={i} style={{ border: `2px solid ${BORDER}`, padding: 'clamp(20px, 4vw, 30px)', width: isSmall ? '100%' : 400, maxWidth: 400, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: 'clamp(36px, 6vw, 50px)', lineHeight: 1, color: G, margin: 0, textTransform: 'uppercase' }}>{item.num}</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, lineHeight: '24px', margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Solution ──────────────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: 1, color: '#fff', textTransform: 'uppercase', margin: 0 }}>
            Solution
          </h2>
          <div style={{ width: isSmall ? '100%' : 786, maxWidth: 786, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover us.',
              'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today.',
              'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover us.',
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: '#fff', lineHeight: '30px', margin: 0 }}>
                <span style={{ color: G }}>🟢</span> {text}
              </p>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: 20, alignItems: 'stretch', width: '100%', justifyContent: 'center' }}>
            {[
              { val: '96%',   label: 'Surge in website actions in just 3 months', tag: 'AUTOMOBILE BRAND' },
              { val: '1.3M+', label: 'Fraud attempts tackled and resolved',        tag: 'FINANCE BRAND' },
            ].map((s, i) => (
              <div key={i} style={{ border: `2px solid ${BORDER}`, padding: 'clamp(20px, 4vw, 30px)', width: isSmall ? '100%' : 610, maxWidth: 610, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: 'clamp(48px, 8vw, 80px)', lineHeight: 1.1, color: G, margin: 0, textTransform: 'uppercase' }}>{s.val}</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, lineHeight: '24px', margin: 0 }}>{s.label}</p>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 16, color: G, textTransform: 'uppercase', margin: 0 }}>{s.tag}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gallery ───────────────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: 1, color: '#fff', textTransform: 'uppercase', margin: 0 }}>
            Gallery
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', width: '100%' }}>
            {/* Arrows above images, right-aligned to match right edge of 3rd image */}
            <div style={{ display: 'flex', gap: 10, alignSelf: 'flex-end' }}>
              <div className="arrow-btn" style={{ width: 40, height: 40, borderRadius: 999, background: CARD, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ color: '#fff', fontSize: 18, lineHeight: 1 }}>‹</span>
              </div>
              <div className="arrow-btn" style={{ width: 40, height: 40, borderRadius: 999, background: G, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ color: DARK, fontSize: 18, lineHeight: 1 }}>›</span>
              </div>
            </div>
            {/* Photos */}
            <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: 20, justifyContent: 'center', width: '100%', alignItems: 'center' }}>
              {[imgGallery1, imgGallery2, imgGallery3].map((src, i) => (
                <div key={i} className="card-hover" style={{ width: isSmall ? '100%' : 400, maxWidth: 400, height: isSmall ? 'clamp(320px, 80vw, 562px)' : 562, overflow: 'hidden', flexShrink: 0 }}>
                  <img src={src} alt={`Gallery ${i + 1}`} className="img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other brands ──────────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(36px, 7vw, 80px)', lineHeight: 1.05, color: '#fff', textTransform: 'uppercase', textAlign: 'center', margin: 0 }}>
            Check out the awesomeeeeee stuff we've done for{' '}
            <span style={{ color: G }}>other brands</span>
          </h2>

          {/* Other case studies — tiles instead of a logo wall, so each one is a
              way into the work rather than just a badge. */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center', width: '100%', maxWidth: 1240 }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isSmall ? '1fr 1fr' : '1fr 1fr 1fr', gap: 8, width: '100%' }}>
              {OTHER_CASES.map((c, i) => (
                <OtherCaseTile
                  key={i}
                  c={c}
                  onClick={onNavigate ? () => onNavigate('case-studies') : undefined}
                />
              ))}
            </div>

            <button
              className="btn-outline"
              onClick={onNavigate ? () => onNavigate('case-studies') : undefined}
              style={{
                background: 'transparent', border: `1px solid ${G}`,
                height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box',
                fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, color: G,
                textTransform: 'uppercase', cursor: 'pointer', backdropFilter: 'blur(10px)',
              }}
            >
              View all case studies
            </button>
          </div>
        </section>

        {/* ── Contact: "We will shoot you" ────────────────────────────────────── */}
        <section style={{ padding: '0 clamp(20px, 6vw, 100px) clamp(56px, 8vw, 100px)', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', paddingBottom: 10, paddingTop: 5, borderBottom: `2px solid ${G}` }}>
              <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: '#fff' }}>Connect with us</span>
            </div>
            <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, lineHeight: 1, textTransform: 'uppercase', textAlign: 'center', margin: 0 }}>
              <span style={{ color: '#fff' }}>We will </span>
              <span style={{ color: G }}>shoot </span>
              <span style={{ color: '#fff' }}>you</span>
            </h2>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 1240, alignItems: 'center' }} onSubmit={e => e.preventDefault()}>
            {[['Your name', 'Contact number'], ['Company name', 'Designation'], ['Your email', null]].map((row, ri) => (
              <div key={ri} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20, width: '100%' }}>
                {row.map((lbl, fi) => lbl ? (
                  <div key={fi} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>{lbl}</label>
                    <input placeholder="Enter here" className="input-glow" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', outline: 'none', height: 46, padding: '0 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                ) : <div key={fi} style={{ flex: 1 }} />)}
              </div>
            ))}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>Requirements</label>
              <textarea rows={6} placeholder="Enter here" className="input-glow" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', resize: 'vertical', width: '100%', boxSizing: 'border-box' }} />
            </div>
            <button type="submit" className="btn-outline" style={{ background: 'transparent', color: '#fff', border: '1px solid #fff', height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer', width: isMobile ? '100%' : undefined }}>
              Send Message
            </button>
          </form>
        </section>

        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  )
}
