// Blog Page — built from Figma node 1:2081 (Landing Page - Dark-Blog)
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
const imgBlog1      = '/figma/blog/img-mahindra2.jpg'
const imgBlog2      = '/figma/blog/img-mahindra3.jpg'
const imgBlog3      = '/figma/blog/img-mahindra4.jpg'
const imgBlog4      = '/figma/blog/img-mahindra5.jpg'
const imgAvatar     = '/figma/blog/img-placeholders.png'

const BLOGS = [
  { img: imgBlog1, tags: [{ label: 'Technology' }, { label: 'Auto' }], title: 'A relentless pursuit of perfection in product design', desc: 'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy.', author: 'Becky Conner', role: 'Content lead', date: 'Posted 11/12/2025' },
  { img: imgBlog2, tags: [{ label: 'Technology' }, { label: 'Auto' }], title: 'A relentless pursuit of perfection in product design', desc: 'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy.', author: 'Becky Conner', role: 'Content lead', date: 'Posted 11/12/2025' },
  { img: imgBlog3, tags: [{ label: 'Technology' }, { label: 'Auto' }], title: 'A relentless pursuit of perfection in product design', desc: 'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy.', author: 'Becky Conner', role: 'Content lead', date: 'Posted 11/12/2025' },
  { img: imgBlog4, tags: [{ label: 'Technology' }, { label: 'Auto' }], title: 'A relentless pursuit of perfection in product design', desc: 'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy.', author: 'Becky Conner', role: 'Content lead', date: 'Posted 11/12/2025' },
]

const FILTERS = ['ALL', 'AUTO', 'FMCG', 'RETAIL', 'FSI', 'OTHERS']

function BlogCard({ img, tags, title, desc, author, role, date, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9', cursor: onClick ? 'pointer' : 'default', background: CARD }}
    >
      <img src={img} alt={title} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        transform: hovered ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform 0.6s ease',
      }} />
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered ? 'rgba(0,7,24,0.85)' : 'rgba(0,7,24,0.45)',
        transition: 'background 0.4s ease',
      }} />

      {/* Top — tags + date */}
      <div style={{ position: 'absolute', top: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {tags.map((t, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', height: 30, padding: '0 14px',
              background: 'transparent',
              border: `2px solid ${BORDER}`,
              fontFamily: "'Saira Condensed', sans-serif",
              fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase',
              color: '#fff',
            }}>{t.label}</span>
          ))}
        </div>
        <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{date}</span>
      </div>

      {/* Centre title — visible when not hovered */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hovered ? 0 : 1,
        transform: hovered ? 'scale(0.85)' : 'scale(1)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        pointerEvents: 'none', padding: '0 40px', textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Saira Condensed', sans-serif",
          fontWeight: 800, fontSize: 'clamp(20px, 2.5vw, 36px)',
          textTransform: 'uppercase', lineHeight: 1.1,
          color: '#fff', margin: 0,
        }}>{title}</p>
      </div>

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 160,
        background: 'linear-gradient(to top, rgba(0,7,24,0.95) 0%, transparent 100%)',
        pointerEvents: 'none',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />

      {/* Bottom — slides up on hover */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24,
        transform: hovered ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.45s ease',
      }}>
        <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 24, fontWeight: 700, color: '#fff', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 8 }}>{title}</p>
        <p style={{
          fontFamily: "'Archivo', sans-serif", fontSize: 13, color: MUTED, lineHeight: '18px', marginBottom: 12,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease 0.1s',
        }}>{desc}</p>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center',
          opacity: hovered ? 1 : 0, transition: 'opacity 0.35s ease 0.15s',
        }}>
          <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 13, color: G, fontWeight: 600 }}>{author}</span>
          <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{role}</span>
        </div>
      </div>

      {/* Green border on hover */}
      <div style={{ position: 'absolute', inset: 0, border: `2px solid ${G}`, opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }} />
    </div>
  )
}

export default function BlogPage({ onNavigate }) {
  const [filter, setFilter] = useState('ALL')
  const { isMobile, isSmall } = useResponsive()

  return (
    <div style={{ background: DARK, minHeight: '100vh', paddingTop: 106, color: '#fff' }}>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 100px)', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
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
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 'clamp(8px, 1.5vw, 20px)', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            {FILTERS.map(f => (
              <button
                key={f}
                className="pill-hover"
                onClick={() => setFilter(f)}
                style={{
                  background: CARD,
                  border: f === filter ? `1px solid ${G}` : 'none',
                  height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box',
                  fontFamily: "'Saira Condensed', sans-serif",
                  fontSize: 16, fontWeight: f === filter ? 700 : 500,
                  color: f === filter ? G : DIM,
                  textTransform: 'uppercase', cursor: 'pointer',
                }}
              >{f}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog grid ────────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 8, width: '100%' }}>
          {BLOGS.map((b, i) => (
            <BlogCard key={i} {...b} onClick={i === 0 ? () => onNavigate('blog-read') : undefined} />
          ))}
        </div>
        {/* Load more */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
          <button className="btn-outline" style={{ background: CARD, border: `1px solid ${G}`, height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, color: G, textTransform: 'uppercase', cursor: 'pointer' }}>
            Load More
          </button>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────────── */}
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
                  <input className="input-glow" placeholder="Enter here" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', outline: 'none', height: 46, padding: '0 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', width: '100%', boxSizing: 'border-box' }} />
                </div>
              ) : <div key={fi} style={{ flex: 1 }} />)}
            </div>
          ))}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>Requirements</label>
            <textarea className="input-glow" rows={6} placeholder="Enter here" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', resize: 'vertical', width: '100%', boxSizing: 'border-box' }} />
          </div>
          <button className="btn-outline" type="submit" style={{ background: 'transparent', color: '#fff', border: '1px solid #fff', height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer', width: isMobile ? '100%' : undefined }}>
            Send Message
          </button>
        </form>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
