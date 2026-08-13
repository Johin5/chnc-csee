'use client'

import Link from 'next/link'
import useResponsive from './useResponsive'
import { PATH_FOR } from './lib/routes'

// ─── Site footer — single source of truth ─────────────────────────────────────
// Every page renders <Footer />. Edit here only; do not copy this markup into
// a page.

const G = '#34cc32'
const DARK = '#000718'
const DIM = '#666a74'

const memeImg = '/figma/home/img-meme1.png'
const partnerImg = '/figma/home/img-partner-rgb1.png'

const QUICK_LINKS = [
  ['Home', 'home'],
  ['About us', 'about'],
  ['Solutions', 'solutions'],
  ['Case Studies', 'case-studies'],
  ['Blogs', 'blog'],
  // ['Work', 'work'], // hidden for now — restore when the Work page is ready
  ['Career', 'careers'],
]

const LEGAL_LINKS = ['Terms of Use', 'Privacy Policy']

const btnBase = {
  background: 'transparent', color: '#fff', border: '1px solid #fff',
  height: 46, padding: '0 20px',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  boxSizing: 'border-box',
  fontFamily: "'Saira Condensed', sans-serif",
  fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
  letterSpacing: '0.02em', cursor: 'pointer', backdropFilter: 'blur(10px)',
  width: '100%',
}

const colTitle = {
  fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600,
  textTransform: 'uppercase', color: G, margin: 0,
}

const linkStyle = {
  display: 'flex', gap: 5, alignItems: 'center',
  fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM,
  textDecoration: 'none', cursor: 'pointer',
}

const contactLabel = {
  fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 600,
  textTransform: 'uppercase', color: '#fff', margin: 0,
}

const contactText = {
  fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM,
  lineHeight: '16px', marginTop: 5, marginBottom: 0,
}

// ─── Choose your poison (footer CTA) ──────────────────────────────────────────
export function PoisonCTA({ style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center', ...style }}>
      <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', textAlign: 'center', color: '#fff', margin: 0 }}>
        Choose your <span style={{ color: G }}>poison</span>
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ background: '#0e1620', border: `2px solid ${G}`, height: 150, width: '100%', maxWidth: 323, position: 'relative' }}>
          <img loading="lazy" src={memeImg} alt="meme" style={{ position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)', width: 204, height: 177, objectFit: 'contain', maxWidth: '90%' }} />
          {/* The meme's bottom edge lands 1px inside the bottom border, and a
              positioned child always paints after the parent's border — so his
              coat cut a gap in the green line. Redraw that one edge on top of
              the image. Top border is left alone on purpose: his head is meant
              to break out over it. */}
          <div aria-hidden style={{ position: 'absolute', left: -2, right: -2, bottom: -2, height: 2, background: G, pointerEvents: 'none' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 323 }}>
          <button className="btn-outline btn-hover-red" style={btnBase}>I skipped to the end</button>
          <button className="btn-outline btn-hover-cyan" style={btnBase}>I went through the whole website</button>
        </div>
      </div>
    </div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  const { isSmall } = useResponsive()
  // On touch screens each link gets vertical padding so tap targets reach
  // ~32px; the column gap shrinks to compensate, keeping the same rhythm.
  const tapPad = isSmall ? { paddingTop: 9, paddingBottom: 9 } : null

  return (
    <footer style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)', borderTop: '1px solid rgba(255,255,255,0.22)', color: '#fff' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(40px, 6vw, 144px)', alignItems: 'flex-start', justifyContent: isSmall ? 'center' : 'flex-start' }}>
          {/* Poison */}
          <PoisonCTA />

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: isSmall ? 2 : 20 }}>
            <p style={colTitle}>Quick links</p>
            {QUICK_LINKS.map(([label, target]) => (
              <Link key={label} href={PATH_FOR[target]} className="footer-link" style={{ ...linkStyle, ...tapPad }}>
                <span style={{ color: G }}>›</span>{label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={colTitle}>Legal</p>
            {LEGAL_LINKS.map(l => (
              <span key={l} className="footer-link" style={linkStyle}>
                <span style={{ color: G }}>›</span>{l}
              </span>
            ))}
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={colTitle}>Connect with us</p>
            <div>
              <p style={contactLabel}>Address</p>
              <p style={{ ...contactText, maxWidth: 277 }}>A 303, Supreme Business Park, Hirandani Gardens, Powai, Mumbai, Maharashtra, 400076</p>
            </div>
            <div>
              <p style={contactLabel}>Call us</p>
              <a href="tel:+919091399139" style={{ ...contactText, display: 'block', ...tapPad }}>+91 9091399139</a>
            </div>
            <div>
              <p style={contactLabel}>Email us</p>
              <a href="mailto:letsconnect@convergenseeasia.com" style={{ ...contactText, display: 'block', ...tapPad }}>letsconnect@convergenseeasia.com</a>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              {/* Instagram */}
              <svg className="social-icon" width="26" height="26" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="14" height="14" rx="4" stroke={DIM} strokeWidth="1.5" fill="none"/>
                <circle cx="9" cy="9" r="3" stroke={DIM} strokeWidth="1.5" fill="none"/>
                <circle cx="13" cy="5" r="1" fill={DIM}/>
              </svg>
              {/* LinkedIn */}
              <svg className="social-icon" width="26" height="26" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="14" height="14" rx="2" stroke={DIM} strokeWidth="1.5" fill="none"/>
                <circle cx="6" cy="7" r="1" fill={DIM}/>
                <rect x="5.5" y="9" width="1" height="4" fill={DIM}/>
                <path d="M9 9v4m0-3a2 2 0 0 1 4 0v3" stroke={DIM} strokeWidth="1.2" fill="none"/>
              </svg>
            </div>
            <img loading="lazy" src={partnerImg} alt="Google Partner" style={{ width: 41, height: 39, objectFit: 'contain', marginTop: 20 }} />
          </div>
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)' }} />

        <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: isSmall ? 12 : 0, justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, lineHeight: 1.4, margin: 0 }}>© Copyright ConvergenSEE All Rights Reserved</p>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, margin: 0 }}>
            Designed by <span style={{ color: G }}>ConvergenSEE</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
