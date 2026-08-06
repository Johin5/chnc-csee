// BlogReadPage — blog article read page built from Figma design

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
const imgHero       = '/figma/blog-read/img-rectangle-42042.jpg'
const imgBody1      = '/figma/blog-read/img-image-111.jpg'
const imgBody2      = '/figma/blog-read/img-image-112.jpg'
const imgBody3      = '/figma/blog-read/img-image-113.jpg'
const imgRelated1   = '/figma/blog-read/img-mahindra-2.jpg'
const imgRelated2   = '/figma/blog-read/img-mahindra-3.jpg'
const imgAvatar     = '/figma/blog-read/img-placeholders.png'

// ─── Lorem text ───────────────────────────────────────────────────────────────
const LOREM = 'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today.'

const LOREM_LONG = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'

// ─── Tag pill — same object as the type tag on the case study tiles ───────────
function Tag({ label, compact }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      height: compact ? 28 : 30, padding: compact ? '0 12px' : '0 14px',
      background: 'transparent',
      border: `2px solid ${BORDER}`,
      fontFamily: "'Saira Condensed', sans-serif",
      fontSize: compact ? 12 : 13, fontWeight: 600, letterSpacing: '0.04em',
      textTransform: 'uppercase', color: '#fff',
    }}>{label}</span>
  )
}

// ─── Related blogs — same set as the blog grid, minus the one being read ──────
const RELATED = [
  { img: imgRelated1, tags: ['Technology', 'Auto'], title: 'A relentless pursuit of perfection in product design', desc: 'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today.', author: 'Becky Conner', role: 'Content lead', date: 'Posted 11/12/2025' },
  { img: imgRelated2, tags: ['Technology', 'Auto'], title: 'A relentless pursuit of perfection in product design', desc: 'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today.', author: 'Becky Conner', role: 'Content lead', date: 'Posted 11/12/2025' },
]

// Tile that reads the same as a card on the Case Studies grid: photo, tag pills,
// title always on, description + byline revealed on hover.
function RelatedTile({ b, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10', cursor: onClick ? 'pointer' : 'default', background: '#1a2235' }}
    >
      <img src={b.img} alt={b.title} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.6s ease',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: hovered ? 'rgba(0,7,24,0.85)' : 'rgba(0,7,24,0.45)', transition: 'background 0.4s ease' }} />

      {/* Tags + date */}
      <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, zIndex: 3 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {b.tags.map(t => <Tag key={t} label={t} compact />)}
        </div>
        <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.6)', whiteSpace: 'nowrap' }}>{b.date}</span>
      </div>

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 160,
        background: 'linear-gradient(to top, rgba(0,7,24,0.95) 0%, transparent 100%)',
        pointerEvents: 'none', opacity: hovered ? 1 : 0, transition: 'opacity 0.4s ease',
      }} />

      {/* Title always on, copy + byline slide open on hover */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, zIndex: 2 }}>
        <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', textTransform: 'uppercase', lineHeight: 1.1, margin: 0, marginBottom: hovered ? 12 : 0, transition: 'margin-bottom 0.35s ease' }}>{b.title}</p>
        <div style={{ maxHeight: hovered ? 160 : 0, overflow: 'hidden', opacity: hovered ? 1 : 0, transition: 'max-height 0.45s ease, opacity 0.35s ease' }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 13, color: MUTED, lineHeight: '18px', margin: 0 }}>{b.desc}</p>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 12 }}>
            <img src={imgAvatar} alt={b.author} style={{ width: 26, height: 26, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 13, color: G, fontWeight: 600 }}>{b.author}</span>
            <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{b.role}</span>
          </div>
        </div>
      </div>

      {/* Green border on hover */}
      <div style={{ position: 'absolute', inset: 0, border: `2px solid ${G}`, opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }} />
    </div>
  )
}

export default function BlogReadPage({ onBack, onNavigate }) {
  const { isMobile, isSmall } = useResponsive()
  const SECTION = 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0'
  // Copy and gallery share one measure, so the text runs edge to edge with the
  // images below it at every width.
  const COLUMN  = { width: '100%', maxWidth: 1240 }

  return (
    <div style={{ background: DARK, minHeight: '100vh', color: '#fff' }}>

      {/* ── Hero — runs under the fixed nav, same as the case study pages ────── */}
      <section style={{ position: 'relative', width: '100%', height: isSmall ? 'calc(clamp(360px, 78vw, 480px) + 106px)' : 'calc(clamp(480px, 42vw, 560px) + 106px)', overflow: 'hidden' }}>
        <img src={imgHero} alt="Blog hero" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {/* Veil — dark at the top so the nav has something to sit on, dark at the
            foot so the image blends into the page; keeps the headline legible. */}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${DARK} 0%, rgba(0,7,24,0.55) 22%, rgba(0,7,24,0.55) 55%, rgba(0,7,24,0.85) 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 56% 46% at 50% 55%, rgba(0,7,24,0.82) 0%, rgba(0,7,24,0.6) 40%, rgba(0,7,24,0) 78%)' }} />

        {/* Overlay content: tags + headline + byline — offset for the nav */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', justifyContent: 'center', padding: '106px clamp(20px, 6vw, 100px) 0', boxSizing: 'border-box', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <Tag label="Technology" />
            <Tag label="Auto" />
          </div>
          <h1 style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 6vw, 72px)',
            lineHeight: 1,
            textTransform: 'uppercase',
            color: '#fff',
            maxWidth: 1000,
            margin: 0,
          }}>
            A relentless pursuit of perfection in product design
          </h1>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <img src={imgAvatar} alt="Becky Conner" style={{ width: 30, height: 30, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: G, fontWeight: 600 }}>Becky Conner</span>
            <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED }}>Content lead</span>
            <span style={{ color: DIM }}>&middot;</span>
            <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED }}>Posted 11/12/2025</span>
          </div>
        </div>
      </section>

      {/* ── Main content wrapper ────────────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* ── Article body — read column, same measure as the case study copy ── */}
        <section style={{ padding: SECTION, width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <div style={{ ...COLUMN, display: 'flex', flexDirection: 'column', gap: 50 }}>
            {['Secondary blog title', 'Secondary blog title'].map((heading, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h2 style={{
                  fontFamily: "'Saira Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  lineHeight: 1.1,
                  color: '#fff',
                  textTransform: 'uppercase',
                  margin: 0,
                }}>{heading}</h2>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: MUTED, lineHeight: '30px', margin: 0 }}>
                  {LOREM_LONG}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gallery — same three-up treatment as the case study gallery ────── */}
        <section style={{ padding: SECTION, width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <div style={{ ...COLUMN, display: 'grid', gridTemplateColumns: isSmall ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
            {[imgBody1, imgBody2, imgBody3].map((src, i) => (
              <div key={i} className="card-hover" style={{ width: '100%', aspectRatio: '400 / 562', overflow: 'hidden' }}>
                <img className="img-zoom" src={src} alt={`Blog image ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Rest of the article ───────────────────────────────────────────── */}
        <section style={{ padding: SECTION, width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ ...COLUMN, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <p key={i} style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: MUTED, lineHeight: '30px', margin: 0 }}>
                {LOREM_LONG}
              </p>
            ))}
          </div>
        </section>

        {/* ── More related blogs — tiles, mirroring "other brands" ──────────── */}
        <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <h2 style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 7vw, 80px)',
            lineHeight: 1.05,
            color: '#fff',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin: 0,
          }}>
            More related <span style={{ color: G }}>blogs</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center', width: '100%', maxWidth: 1240 }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 8, width: '100%' }}>
              {RELATED.map((b, i) => (
                <RelatedTile key={i} b={b} onClick={onNavigate ? () => onNavigate('blog') : undefined} />
              ))}
            </div>

            <button
              className="btn-outline"
              onClick={onNavigate ? () => onNavigate('blog') : onBack}
              style={{
                background: 'transparent', border: `1px solid ${G}`,
                height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box',
                fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, color: G,
                textTransform: 'uppercase', cursor: 'pointer', backdropFilter: 'blur(10px)',
              }}
            >
              View all blogs
            </button>
          </div>
        </section>

      {/* ── Contact: "We will shoot you" ───────────────────────────────────── */}
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
                  <input className="input-glow" placeholder="Enter here" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', outline: 'none', height: 46, padding: '0 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', width: '100%', boxSizing: 'border-box' }} />
                </div>
              ) : <div key={fi} style={{ flex: 1 }} />)}
            </div>
          ))}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>Requirements</label>
            <textarea className="input-glow" rows={6} placeholder="Enter here" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', resize: 'vertical', width: '100%', boxSizing: 'border-box' }} />
          </div>
          <button className="btn-outline" type="submit" style={{ background: 'transparent', color: '#fff', border: '1px solid #fff', height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
            Send Message
          </button>
        </form>
      </section>

      <Footer onNavigate={onNavigate} />
      </div>
    </div>
  )
}
