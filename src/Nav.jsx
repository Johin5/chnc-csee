'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PATH_FOR, keyForPath } from './lib/routes'

// ─── Assets ──────────────────────────────────────────────────────────────────
const logoC    = '/figma/home/logo-c.svg'
const logoText = '/figma/home/logo-text.svg'

// ─── Shared styles ────────────────────────────────────────────────────────────
const G = '#34cc32'
const MUTED = 'rgba(255,255,255,0.7)'
const BORDER = 'rgba(255,255,255,0.1)'

const BtnOutlineGreen = ({ children, style, className, ...props }) => (
  <button {...props} className={`btn-outline ${className || ''}`} style={{
    background: 'transparent', color: '#fff', border: '1px solid #fff',
    height: 46, padding: '0 20px',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    boxSizing: 'border-box',
    fontFamily: "'Saira Condensed', sans-serif",
    fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.02em', cursor: 'pointer', backdropFilter: 'blur(10px)',
    ...style,
  }}>{children}</button>
)

// ─── Nav ──────────────────────────────────────────────────────────────────────
export default function Nav() {
  const links = ['Home', 'About us', 'Solution', 'Case Studies', 'Blogs', 'Work', 'Career']
  const targetFor = (l) => ({ Home: 'home', 'About us': 'about', Solution: 'solutions', 'Case Studies': 'case-studies', Blogs: 'blog', Work: 'work', Career: 'careers' }[l])
  const activePage = keyForPath(usePathname() || '/')
  const [open, setOpen] = useState(false)
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '8px clamp(16px, 5vw, 100px)',
      background: 'rgba(0,7,24,0.8)', backdropFilter: 'blur(10px)',
    }}>
      <Link
        href="/"
        aria-label="ConvergenSEE home"
        style={{ display: 'flex', alignItems: 'center', gap: 0, height: 24, position: 'relative', width: 176, cursor: 'pointer' }}
      >
        <img src={logoC} alt="C" style={{ height: 24, width: 27, objectFit: 'contain' }} />
        <img src={logoText} alt="ConvergenSEE" style={{ height: 18, width: 146, objectFit: 'contain', marginLeft: 4 }} />
      </Link>

      <div className="nav-desktop" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {links.map((l) => {
            const isActive = activePage === targetFor(l)
            return (
              <Link
                key={l}
                href={PATH_FOR[targetFor(l)]}
                className={isActive ? '' : 'nav-link'}
                style={{
                  padding: '10px', fontFamily: "'Saira Condensed', sans-serif",
                  fontSize: 16, textTransform: 'uppercase', cursor: 'pointer',
                  textDecoration: 'none',
                  color: isActive ? G : MUTED,
                  fontWeight: isActive ? 700 : 400,
                }}
              >{l}</Link>
            )
          })}
      </div>

      <BtnOutlineGreen className="nav-desktop">Let's Connect</BtnOutlineGreen>

      <button
          className="nav-mobile"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 8 }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              width: 24, height: 2, background: '#fff', display: 'block',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: open ? (i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none') : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
      </button>

      {open && (
        <div className="nav-mobile" style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(0,7,24,0.97)', backdropFilter: 'blur(10px)',
          borderTop: `1px solid ${BORDER}`,
          display: 'flex', flexDirection: 'column', padding: '12px clamp(16px, 5vw, 100px) 24px', gap: 4,
        }}>
          {links.map((l) => {
            const isActive = activePage === targetFor(l)
            return (
              <Link key={l} href={PATH_FOR[targetFor(l)]} onClick={() => setOpen(false)} style={{
                padding: '12px 0', fontFamily: "'Saira Condensed', sans-serif",
                fontSize: 18, textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none',
                color: isActive ? G : MUTED, fontWeight: isActive ? 700 : 400,
                borderBottom: `1px solid ${BORDER}`,
              }}>{l}</Link>
            )
          })}
          <BtnOutlineGreen style={{ marginTop: 14 }}>Let's Connect</BtnOutlineGreen>
        </div>
      )}
    </nav>
  )
}
