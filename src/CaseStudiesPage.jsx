// Case Studies Page — built from Figma node 1:1855 (Landing Page - Dark-cASE STUDY)
import { useRef, useState } from 'react'
import useResponsive from './useResponsive'

import Footer from './Footer'
const G     = '#34cc32'
const DARK  = '#000718'
const CARD  = '#0f1520'
const MUTED = 'rgba(255,255,255,0.7)'
const DIM   = '#666a74'
const BORDER = 'rgba(255,255,255,0.1)'

// ─── Figma assets ─────────────────────────────────────────────────────────────
const imgMahindraPhoto   = '/figma/case-study/img-mahindra2.png'
const imgAxisPhoto       = '/figma/case-study/img-mahindra4.jpg'
const imgSBIPhoto        = '/figma/case-study/img-mahindra3.jpg'
const imgLACPhoto        = '/figma/case-study/img-mahindra5.jpg'
const imgMahindraLogo    = '/mahindra-logo.png'
const imgAxisLogo        = '/axis-bank-logo.png'
const imgSBILogo         = '/sbi-logo.png'
const imgLACLogo         = '/figma/case-study/img-image30.png'

// ─── Case study data ──────────────────────────────────────────────────────────
const CASES = [
  {
    photo: imgMahindraPhoto,
    video: '/mahindra.mp4',
    poster: '/mahindra-poster.jpg',
    logoBg: '#fff',
    logo: '/mahindra-logo.png',
    name: 'Mahindra & Mahindra',
    type: 'Content creation',
    stats: [{ val: '96%', label: 'Surge in website actions' }, { val: '10x', label: 'Revenue increase' }, { val: '96%', label: 'Increase in sales' }],
  },
  {
    photo: imgAxisPhoto,
    video: '/axis-bank.mp4',
    poster: '/axis-bank-poster.jpg',
    logoBg: '#ae285d',
    logo: '/axis-bank-logo.png',
    name: 'Axis bank',
    type: 'Location pages',
    stats: [{ val: '96%', label: 'Surge in website actions' }, { val: '10x', label: 'Revenue increase' }, { val: '96%', label: 'Increase in sales' }],
  },
  {
    photo: imgSBIPhoto,
    logoBg: '#292075',
    logo: '/sbi-logo.png',
    name: 'SBI',
    type: 'Content creation',
    stats: [{ val: '96%', label: 'Surge in website actions' }, { val: '10x', label: 'Revenue increase' }, { val: '96%', label: 'Increase in sales' }],
  },
  {
    photo: imgLACPhoto,
    logoBg: '#fffef2',
    logo: '/lc-logo.webp',
    name: 'Love & Cheesecake',
    type: 'Location pages',
    stats: [{ val: '96%', label: 'Surge in website actions' }, { val: '10x', label: 'Revenue increase' }, { val: '96%', label: 'Increase in sales' }],
  },
]

const INDUSTRIES = ['AUTO', 'ALL', 'FMCG', 'RETAIL', 'FSI', 'OTHERS']

// ─── Components ───────────────────────────────────────────────────────────────
function CaseCard({ c, onClick }) {
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef(null)
  // Freeze the clip on the frame under the cursor while the stats are showing
  const setHover = (on) => {
    setHovered(on)
    const v = videoRef.current
    if (!v) return
    if (on) v.pause()
    else v.play().catch(() => {})
  }
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9', cursor: onClick ? 'pointer' : 'default', background: '#1a2235' }}
    >
      {c.video ? (
        <video
          ref={videoRef}
          autoPlay muted loop playsInline preload="metadata"
          poster={c.poster}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
        >
          <source src={c.video} type="video/mp4" />
        </video>
      ) : (
        <img src={c.photo} alt={c.name} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }} />
      )}
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered ? 'rgba(0,7,24,0.85)' : 'rgba(0,7,24,0.45)',
        transition: 'background 0.4s ease',
      }} />

      {/* Top — type tag, boxed like the industry pills */}
      <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 3 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', height: 30, padding: '0 14px',
          background: 'transparent',
          border: `2px solid ${BORDER}`,
          fontFamily: "'Saira Condensed', sans-serif",
          fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase',
          color: '#fff',
        }}>{c.type}</span>
      </div>

      {/* Centre logo — revealed on hover, alongside the stats */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateY(-9%) scale(1)' : 'translateY(-9%) scale(0.85)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        pointerEvents: 'none',
        zIndex: 2,
      }}>
        <img src={c.logo} alt={c.name} style={{ width: 220, maxWidth: '60%', height: 80, objectFit: 'contain', filter: 'brightness(0) invert(1) drop-shadow(0 4px 20px rgba(0,0,0,0.5))' }} />
      </div>

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 180,
        background: 'linear-gradient(to top, rgba(0,7,24,0.95) 0%, transparent 100%)',
        pointerEvents: 'none',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />

      {/* Bottom — brand name always visible, stats slide up on hover */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, zIndex: 2,
      }}>
        <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 26, fontWeight: 700, color: '#fff', textTransform: 'uppercase', lineHeight: 1, marginBottom: hovered ? 14 : 0 }}>{c.name}</p>
        <div style={{
          display: 'flex', gap: 20,
          maxHeight: hovered ? 200 : 0, overflow: 'hidden',
          opacity: hovered ? 1 : 0,
          transition: 'max-height 0.45s ease, opacity 0.35s ease',
        }}>
          {c.stats.map((s, i) => (
            <div key={i}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 52, fontWeight: 800, color: G, lineHeight: 1, margin: 0 }}>{s.val}</p>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: MUTED, lineHeight: '16px', marginTop: 6 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Green border on hover */}
      <div style={{ position: 'absolute', inset: 0, border: `2px solid ${G}`, opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }} />
    </div>
  )
}

export default function CaseStudiesPage({ onNavigate }) {
  const { isMobile, isSmall } = useResponsive()
  return (
    <div style={{ background: DARK, minHeight: '100vh', paddingTop: 106, color: '#fff' }}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0', display: 'flex', flexDirection: 'column', gap: 'clamp(56px, 8vw, 100px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center' }}>
            <h1 style={{
              fontFamily: "'Saira Condensed', sans-serif",
              fontSize: 'clamp(56px, 14vw, 150px)', fontWeight: 800, lineHeight: 1,
              textTransform: 'uppercase', letterSpacing: '-3px', margin: 0,
              whiteSpace: 'nowrap',
            }}>
              <span style={{ color: '#fff' }}>WE </span>
              <span style={{ color: G }}>DARE </span>
              <span style={{ color: '#fff' }}>YOU</span>
            </h1>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: '#fff', lineHeight: '24px', maxWidth: 798, margin: 0 }}>
              Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover us.
            </p>
          </div>

          {/* Industry filter pills */}
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
          {INDUSTRIES.map((ind, i) => (
            <div key={ind} className="pill-hover" style={{
              height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box',
              background: CARD,
              border: i === 1 ? `1px solid ${G}` : 'none',
              backdropFilter: 'blur(10px)',
              fontFamily: "'Saira Condensed', sans-serif",
              fontSize: 16, fontWeight: i === 1 ? 700 : 500,
              color: i === 1 ? G : DIM,
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}>{ind}</div>
          ))}
          </div>
        </div>
      </section>

      {/* ── Case study grid ────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 8, width: '100%' }}>
            {CASES.map((c, i) => (
              <CaseCard
                key={i}
                c={c}
                onClick={i === 0 && onNavigate ? () => onNavigate('mahindra') : undefined}
              />
            ))}
          </div>

          {/* Load more */}
          <button className="btn-outline" style={{
            marginTop: 10,
            background: 'transparent', border: `1px solid ${G}`,
            height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif",
            fontSize: 16, fontWeight: 700, color: G,
            textTransform: 'uppercase', cursor: 'pointer',
            backdropFilter: 'blur(10px)',
          }}>LOAD MORE</button>
        </div>
      </section>

      {/* ── Contact: "We will shoot you" ───────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            paddingBottom: 10, paddingTop: 5, borderBottom: `2px solid ${G}`,
          }}>
            <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: '#fff' }}>Connect with us</span>
          </div>
          <h2 style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, lineHeight: 1,
            textTransform: 'uppercase', textAlign: 'center', margin: 0,
          }}>
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
          <button type="submit" className="btn-outline" style={{
            background: 'transparent', color: '#fff', border: '1px solid #fff',
            height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif",
            fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
            cursor: 'pointer', width: isMobile ? '100%' : 'auto',
          }}>Send Message</button>
        </form>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
