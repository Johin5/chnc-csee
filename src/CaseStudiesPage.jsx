// Case Studies Page — built from Figma node 1:1855 (Landing Page - Dark-cASE STUDY)
import { useState } from 'react'

const G     = '#34cc32'
const DARK  = '#000718'
const CARD  = '#0f1520'
const MUTED = 'rgba(255,255,255,0.7)'
const DIM   = '#666a74'
const BORDER = 'rgba(255,255,255,0.1)'

// ─── Figma assets ─────────────────────────────────────────────────────────────
const imgMahindraPhoto   = 'https://www.figma.com/api/mcp/asset/6de30e55-a94c-4aab-96ca-d9eb167a8dd0'
const imgAxisPhoto       = 'https://www.figma.com/api/mcp/asset/6d0071c0-ef1d-4147-b77f-4a2af2049d97'
const imgSBIPhoto        = 'https://www.figma.com/api/mcp/asset/5dfc35df-c9fc-4c44-a384-61312dda3a10'
const imgLACPhoto        = 'https://www.figma.com/api/mcp/asset/08964222-8a0c-44aa-86fb-e6b53cdc8efe'
const imgMahindraLogo    = 'https://www.figma.com/api/mcp/asset/b005022a-b4fc-4f1f-9fdf-16184fb89ddb'
const imgAxisLogo        = 'https://www.figma.com/api/mcp/asset/a4cf5885-c36c-403a-b706-823e7cb8d1bb'
const imgSBILogo         = 'https://www.figma.com/api/mcp/asset/90b87a6f-12c3-4614-a5ef-7b472ff9ed60'
const imgLACLogo         = 'https://www.figma.com/api/mcp/asset/d0c517f7-6e3b-4233-84d7-21c56ceb8bb8'
const imgMeme            = 'https://www.figma.com/api/mcp/asset/4b346632-df10-420a-bf27-0dcf45ac6066'
const imgPartner         = 'https://www.figma.com/api/mcp/asset/d7894a73-18a8-48b6-8ab7-40b9e416d5d6'

// ─── Case study data ──────────────────────────────────────────────────────────
const CASES = [
  {
    photo: imgMahindraPhoto,
    logoBg: '#fff',
    logo: '/mahindra-logo.png',
    name: 'Mahindra & Mahindra',
    type: 'Content creation',
    stats: [{ val: '96%', label: 'Surge in website actions' }, { val: '10x', label: 'Revenue increase' }, { val: '96%', label: 'Increase in sales' }],
  },
  {
    photo: imgAxisPhoto,
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
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9', cursor: onClick ? 'pointer' : 'default', background: '#1a2235' }}
    >
      <img src={c.photo} alt={c.name} style={{
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

      {/* Top — type label only */}
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{c.type}</span>
      </div>

      {/* Centre logo — always visible, fades on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hovered ? 0 : 1,
        transform: hovered ? 'scale(0.7)' : 'scale(1)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        pointerEvents: 'none',
        zIndex: 2,
      }}>
        <img src={c.logo} alt={c.name} style={{ width: 220, height: 80, objectFit: 'contain', filter: 'brightness(0) invert(1) drop-shadow(0 4px 20px rgba(0,0,0,0.5))' }} />
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
  return (
    <div style={{ background: DARK, minHeight: '100vh', paddingTop: 106, color: '#fff' }}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '100px 100px 0', display: 'flex', flexDirection: 'column', gap: 100, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center' }}>
            <h1 style={{
              fontFamily: "'Saira Condensed', sans-serif",
              fontSize: 150, fontWeight: 800, lineHeight: 1,
              textTransform: 'uppercase', letterSpacing: '-3px', margin: 0,
              whiteSpace: 'nowrap',
            }}>
              <span style={{ color: '#fff' }}>WE </span>
              <span style={{ color: G }}>DARE </span>
              <span style={{ color: '#fff' }}>YOU</span>
            </h1>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: '#fff', lineHeight: '24px', maxWidth: 798, margin: 0 }}>
              Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover us.
            </p>
          </div>

          {/* Industry filter pills */}
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
          {INDUSTRIES.map((ind, i) => (
            <div key={ind} className="pill-hover" style={{
              padding: '15px 20px',
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
      <section style={{ padding: '100px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, width: '100%' }}>
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
            padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif",
            fontSize: 16, fontWeight: 700, color: G,
            textTransform: 'uppercase', cursor: 'pointer',
            backdropFilter: 'blur(10px)',
          }}>LOAD MORE</button>
        </div>
      </section>

      {/* ── Contact: "We will shoot you" ───────────────────────────────────── */}
      <section style={{ padding: '100px', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            paddingBottom: 10, paddingTop: 5, borderBottom: `2px solid ${G}`,
          }}>
            <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: '#fff' }}>Connect with us</span>
          </div>
          <h2 style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: 80, fontWeight: 800, lineHeight: '80px',
            textTransform: 'uppercase', textAlign: 'center', margin: 0,
          }}>
            <span style={{ color: '#fff' }}>We will </span>
            <span style={{ color: G }}>shoot </span>
            <span style={{ color: '#fff' }}>you</span>
          </h2>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 1240, alignItems: 'center' }} onSubmit={e => e.preventDefault()}>
          {[['Your name', 'Contact number'], ['Company name', 'Designation'], ['Your email', null]].map((row, ri) => (
            <div key={ri} style={{ display: 'flex', gap: 20, width: '100%' }}>
              {row.map((lbl, fi) => lbl ? (
                <div key={fi} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>{lbl}</label>
                  <input placeholder="Enter here" className="input-glow" style={{ background: CARD, border: 'none', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', width: '100%', boxSizing: 'border-box' }} />
                </div>
              ) : <div key={fi} style={{ flex: 1 }} />)}
            </div>
          ))}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>Requirements</label>
            <textarea rows={6} placeholder="Enter here" className="input-glow" style={{ background: CARD, border: 'none', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', resize: 'vertical', width: '100%' }} />
          </div>
          <button type="submit" className="btn-green" style={{
            background: G, color: DARK, border: 'none',
            padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif",
            fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
            cursor: 'pointer',
          }}>Send Message</button>
        </form>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer style={{ background: CARD, padding: '100px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div style={{ display: 'flex', gap: 144, alignItems: 'flex-start' }}>
            {/* Poison */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', textAlign: 'center', color: '#fff' }}>
                Choose your <span style={{ color: G }}>poison</span>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ background: '#0e1620', border: `2px solid ${G}`, height: 150, width: 323, position: 'relative' }}>
                  <img src={imgMeme} alt="meme" style={{ position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)', width: 204, height: 177, objectFit: 'contain' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <button className="btn-green" style={{ width: 323, background: G, border: 'none', padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, color: DARK, textTransform: 'uppercase', cursor: 'pointer' }}>I skipped to the end</button>
                  <button className="btn-outline" style={{ width: 323, background: CARD, border: `1px solid ${G}`, padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, color: G, textTransform: 'uppercase', cursor: 'pointer' }}>I went through the whole website</button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', color: G }}>Quick links</p>
              {['Home', 'About us', 'Solutions'].map(l => (
                <a key={l} href="#" className="footer-link" style={{ display: 'flex', gap: 5, alignItems: 'center', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM, textDecoration: 'none' }}>
                  <span style={{ color: G }}>›</span>{l}
                </a>
              ))}
            </div>

            {/* Legal */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', color: G }}>Legal</p>
              {['Terms of Use', 'Privacy Policy'].map(l => (
                <a key={l} href="#" className="footer-link" style={{ display: 'flex', gap: 5, alignItems: 'center', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM, textDecoration: 'none' }}>
                  <span style={{ color: G }}>›</span>{l}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', color: G }}>Connect with us</p>
              <div>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 600, textTransform: 'uppercase', color: '#fff' }}>Address</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, lineHeight: '16px', marginTop: 5, maxWidth: 277 }}>A 303, Supreme Business Park, Hirandani Gardens, Powai, Mumbai, Maharashtra, 400076</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 600, textTransform: 'uppercase', color: '#fff' }}>Call us</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, marginTop: 5 }}>+91 9091399139</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 600, textTransform: 'uppercase', color: '#fff' }}>Email us</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, marginTop: 5 }}>letsconnect@convergenseeasia.com</p>
              </div>
              <div style={{ display: 'flex', gap: 13, alignItems: 'center' }}>
                <svg className="social-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="4" stroke={DIM} strokeWidth="1.5" fill="none"/>
                  <circle cx="9" cy="9" r="3" stroke={DIM} strokeWidth="1.5" fill="none"/>
                  <circle cx="13" cy="5" r="1" fill={DIM}/>
                </svg>
                <svg className="social-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="2" stroke={DIM} strokeWidth="1.5" fill="none"/>
                  <circle cx="6" cy="7" r="1" fill={DIM}/>
                  <rect x="5.5" y="9" width="1" height="4" fill={DIM}/>
                  <path d="M9 9v4m0-3a2 2 0 0 1 4 0v3" stroke={DIM} strokeWidth="1.2" fill="none"/>
                </svg>
              </div>
              <img src={imgPartner} alt="Google Partner" style={{ width: 41, height: 39, objectFit: 'contain', marginTop: 10 }} />
            </div>
          </div>

          <div style={{ height: 1, background: BORDER }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, lineHeight: 1.4, color: '#fff' }}>© Copyright ConvergenSEE All Rights Reserved</p>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>
              Designed by <span style={{ color: G }}>ConvergenSEE</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
