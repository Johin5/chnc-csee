import { useState } from 'react'
import { Footer } from './App'
import useResponsive from './useResponsive'
// Team Page — built from Figma node 1:2311 (Landing Page - Dark-Team)

const G      = '#34cc32'
const DARK   = '#000718'
const CARD   = '#0f1520'
const MUTED  = 'rgba(255,255,255,0.7)'
const DIM    = '#666a74'
const BORDER = 'rgba(255,255,255,0.1)'

// ─── Assets ───────────────────────────────────────────────────────────────────
const imgPerson1 = '/figma/team/img-angel-chaturvedi12.jpg'
const imgPerson2 = '/figma/team/img-angel-chaturvedi13.jpg'
const imgPerson3 = '/figma/team/img-angel-chaturvedi14.jpg'
const imgMeme    = '/figma/team/img-meme1.png'
const imgPartner = '/figma/team/img-partner-rgb1.png'

// 4 rows × 3 cards = 12 members (Figma uses 3 rotating photos as placeholders)
const MEMBERS = [
  { photo: imgPerson1, name: 'Dulce Dorwart', role: 'Designer' },
  { photo: imgPerson2, name: 'Dulce Dorwart', role: 'Designer' },
  { photo: imgPerson3, name: 'Dulce Dorwart', role: 'Designer' },
  { photo: imgPerson1, name: 'Dulce Dorwart', role: 'Designer' },
  { photo: imgPerson2, name: 'Dulce Dorwart', role: 'Designer' },
  { photo: imgPerson3, name: 'Dulce Dorwart', role: 'Designer' },
  { photo: imgPerson1, name: 'Dulce Dorwart', role: 'Designer' },
  { photo: imgPerson2, name: 'Dulce Dorwart', role: 'Designer' },
  { photo: imgPerson3, name: 'Dulce Dorwart', role: 'Designer' },
  { photo: imgPerson1, name: 'Dulce Dorwart', role: 'Designer' },
  { photo: imgPerson2, name: 'Dulce Dorwart', role: 'Designer' },
  { photo: imgPerson3, name: 'Dulce Dorwart', role: 'Designer' },
]

function TeamCard({ photo, name, role }) {
  const [hovered, setHovered] = useState(false)
  const { isMobile, isSmall } = useResponsive()
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: isMobile ? '100%' : 320, maxWidth: 320, flexShrink: isMobile ? 1 : 0,
        flex: isMobile ? '1 1 100%' : '0 0 auto',
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        border: `1px solid ${hovered ? G : 'transparent'}`,
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* portrait */}
      <div style={{ height: isSmall ? 'clamp(300px, 70vw, 440px)' : 440, overflow: 'hidden' }}>
        <img
          src={photo} alt={name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
      </div>

      {/* bottom gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
        background: 'linear-gradient(to top, rgba(0,7,24,0.95) 0%, rgba(0,7,24,0.6) 50%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* text overlay */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.35s ease',
      }}>
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

export default function TeamPage({ onBack }) {
  const { isMobile, isSmall } = useResponsive()
  return (
    <div style={{ background: DARK, minHeight: '100vh', paddingTop: 106, color: '#fff' }}>

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0', display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: "'Saira Condensed', sans-serif",
          fontSize: 'clamp(56px, 14vw, 150px)', fontWeight: 800, lineHeight: 1,
          textTransform: 'uppercase', letterSpacing: '-3px', margin: 0,
          whiteSpace: 'nowrap',
        }}>
          <span style={{ color: '#fff' }}>MEET THE </span>
          <span style={{ color: G }}>TEAM</span>
        </h1>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: '#fff', lineHeight: '24px', maxWidth: 798, margin: 0 }}>
          Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover us.
        </p>
      </section>

      {/* ── Team grid ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[0, 1, 2, 3].map(row => (
            <div key={row} style={{ display: 'flex', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: 2, justifyContent: 'center' }}>
              {MEMBERS.slice(row * 3, row * 3 + 3).map((m, i) => (
                <TeamCard key={i} {...m} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 clamp(20px, 6vw, 100px) clamp(56px, 8vw, 100px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
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
                  <input placeholder="Enter here" className="input-glow" style={{ background: CARD, border: 'none', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', width: '100%', boxSizing: 'border-box' }} />
                </div>
              ) : (isMobile ? null : <div key={fi} style={{ flex: 1 }} />))}
            </div>
          ))}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>Requirements</label>
            <textarea rows={6} placeholder="Enter here" className="input-glow" style={{ background: CARD, border: 'none', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', resize: 'vertical', width: '100%', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" className="btn-green" style={{ background: G, color: DARK, border: 'none', padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer', width: isSmall ? '100%' : 'auto' }}>
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  )
}
