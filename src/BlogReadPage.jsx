// BlogReadPage — blog article read page built from Figma design

const G      = '#34cc32'
const DARK   = '#000718'
const CARD   = '#0f1520'
const MUTED  = 'rgba(255,255,255,0.7)'
const DIM    = '#666a74'
const BORDER = 'rgba(255,255,255,0.1)'

// ─── Assets ───────────────────────────────────────────────────────────────────
const imgHero       = 'https://www.figma.com/api/mcp/asset/57ef2701-2234-421d-ba6f-00a21c8b6b29'
const imgBody1      = 'https://www.figma.com/api/mcp/asset/77d66522-76da-4699-b04e-d1e11372d6a4'
const imgBody2      = 'https://www.figma.com/api/mcp/asset/0c2cd850-b80e-4545-b340-e2093039f913'
const imgBody3      = 'https://www.figma.com/api/mcp/asset/bb427c93-b7a5-4a67-9f1c-a24306c63f96'
const imgRelated1   = 'https://www.figma.com/api/mcp/asset/13b7873c-e360-45de-b9ee-a511eb4720f2'
const imgRelated2   = 'https://www.figma.com/api/mcp/asset/78672095-ea1a-44f4-abce-46e04fc0726f'
const imgAvatar     = 'https://www.figma.com/api/mcp/asset/befb549b-79f7-4946-8b55-e4f97c235d84'
const imgMeme       = 'https://www.figma.com/api/mcp/asset/70eeb9f0-c789-4e2c-bec3-9301bb277d05'
const imgPartner    = 'https://www.figma.com/api/mcp/asset/679ea41f-6316-4f11-80f0-58c7c0a47edb'

// ─── Lorem text ───────────────────────────────────────────────────────────────
const LOREM = 'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today.'

const LOREM_LONG = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'

// ─── Related blog card ────────────────────────────────────────────────────────
function RelatedCard({ img }) {
  return (
    <div className="card-hover" style={{ width: 600, background: CARD, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 30, paddingLeft: 30, paddingRight: 30 }}>
      <div style={{ width: 600, height: 317, overflow: 'hidden', marginLeft: -30, marginRight: -30, flexShrink: 0 }}>
        <img className="img-zoom" src={img} alt="Related blog" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ background: DARK, padding: 20, width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}>
        {/* Tags */}
        <div style={{ display: 'flex', gap: 10 }}>
          <span style={{ background: '#323fcc', padding: 5, fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED }}>Technology</span>
          <span style={{ background: '#cc32b0', padding: 5, fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED }}>Auto</span>
        </div>
        {/* Title + desc */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 32, lineHeight: 1.1, color: '#fff', margin: 0 }}>A relentless pursuit of perfection in product design</p>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: MUTED, lineHeight: '22px', margin: 0, maxWidth: 493 }}>Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy.</p>
        </div>
        {/* Author + date */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <img src={imgAvatar} alt="Becky Conner" style={{ width: 30, height: 30, borderRadius: '50%', objectFit: 'cover' }} />
            <div style={{ display: 'flex', gap: 5, alignItems: 'center', fontFamily: "'Archivo', sans-serif" }}>
              <span style={{ fontSize: 18, color: G, lineHeight: '18px' }}>Becky Conner</span>
              <span style={{ fontSize: 14, color: MUTED }}>.</span>
              <span style={{ fontSize: 14, color: MUTED }}>Content lead</span>
            </div>
          </div>
          <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: MUTED }}>Posted 11/12/2025</span>
        </div>
      </div>
    </div>
  )
}

export default function BlogReadPage({ onBack }) {
  return (
    <div style={{ background: DARK, minHeight: '100vh', paddingTop: 106, color: '#fff' }}>

      {/* ── Article section ─────────────────────────────────────────────────── */}
      <section style={{ padding: '0 100px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>

          {/* Breadcrumb */}
          <div
            onClick={onBack}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 5, cursor: 'pointer', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED, marginBottom: 30 }}
          >
            <span style={{ fontSize: 16 }}>&larr;</span>
            <span>Home</span>
            <span style={{ color: DIM }}>&gt;</span>
            <span>Blog..</span>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
            <span style={{ background: '#323fcc', padding: '5px 10px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED }}>Technology</span>
            <span style={{ background: '#cc32b0', padding: '5px 10px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED }}>Auto</span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 700,
            fontSize: 48,
            lineHeight: 1.1,
            color: '#fff',
            margin: 0,
            marginBottom: 30,
          }}>
            A relentless pursuit of perfection in product design
          </h1>

          {/* Author row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#ffdbb8', flexShrink: 0 }} />
              <div style={{ display: 'flex', gap: 5, alignItems: 'center', fontFamily: "'Archivo', sans-serif" }}>
                <span style={{ fontSize: 18, color: G, lineHeight: '18px' }}>Becky Conner</span>
                <span style={{ fontSize: 14, color: MUTED }}>.</span>
                <span style={{ fontSize: 14, color: MUTED }}>Content lead</span>
              </div>
            </div>
            <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: MUTED }}>Posted 11/12/2025</span>
          </div>

          {/* Hero image */}
          <div style={{ width: '100%', height: 426, overflow: 'hidden', marginBottom: 60 }}>
            <img src={imgHero} alt="Blog hero" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* ── Article body ──────────────────────────────────────────────────── */}

          {/* Section 1 */}
          <h2 style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontWeight: 600,
            fontSize: 30,
            color: '#fff',
            textTransform: 'uppercase',
            margin: 0,
            marginBottom: 20,
          }}>
            SECONDARY BLOG TITLE
          </h2>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: MUTED, lineHeight: '24px', margin: 0, marginBottom: 50 }}>
            {LOREM_LONG}
          </p>

          {/* Section 2 */}
          <h2 style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontWeight: 600,
            fontSize: 30,
            color: '#fff',
            textTransform: 'uppercase',
            margin: 0,
            marginBottom: 20,
          }}>
            SECONDARY BLOG TITLE
          </h2>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: MUTED, lineHeight: '24px', margin: 0, marginBottom: 50 }}>
            {LOREM_LONG}
          </p>

          {/* 3 images in a row */}
          <div style={{ display: 'flex', gap: 20, marginBottom: 50 }}>
            <img src={imgBody1} alt="Blog image 1" style={{ width: 400, height: 562, objectFit: 'cover', display: 'block' }} />
            <img src={imgBody2} alt="Blog image 2" style={{ width: 400, height: 562, objectFit: 'cover', display: 'block' }} />
            <img src={imgBody3} alt="Blog image 3" style={{ width: 400, height: 562, objectFit: 'cover', display: 'block' }} />
          </div>

          {/* More body text — 8 paragraphs */}
          {Array.from({ length: 8 }).map((_, i) => (
            <p key={i} style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: MUTED, lineHeight: '24px', margin: 0, marginBottom: 24 }}>
              {LOREM_LONG}
            </p>
          ))}

        </div>
      </section>

      {/* ── More Related Blogs ──────────────────────────────────────────────── */}
      <section style={{ padding: '100px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 60, alignItems: 'center' }}>
          <h2 style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 80,
            color: '#fff',
            textTransform: 'uppercase',
            margin: 0,
            textAlign: 'center',
          }}>
            MORE RELATED BLOGS
          </h2>
          <div style={{ display: 'flex', gap: 30 }}>
            <RelatedCard img={imgRelated1} />
            <RelatedCard img={imgRelated2} />
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 100px 100px', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', paddingBottom: 10, paddingTop: 5, borderBottom: `2px solid ${G}` }}>
            <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: '#fff' }}>Connect with us</span>
          </div>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 80, fontWeight: 800, lineHeight: '80px', textTransform: 'uppercase', textAlign: 'center', margin: 0 }}>
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
                  <input className="input-glow" placeholder="Enter here" style={{ background: CARD, border: 'none', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', width: '100%', boxSizing: 'border-box' }} />
                </div>
              ) : <div key={fi} style={{ flex: 1 }} />)}
            </div>
          ))}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>Requirements</label>
            <textarea className="input-glow" rows={6} placeholder="Enter here" style={{ background: CARD, border: 'none', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', resize: 'vertical', width: '100%', boxSizing: 'border-box' }} />
          </div>
          <button className="btn-green" type="submit" style={{ background: G, color: DARK, border: 'none', padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer' }}>
            Send Message
          </button>
        </form>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer style={{ background: CARD, padding: '100px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div style={{ display: 'flex', gap: 144, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', textAlign: 'center', color: '#fff', margin: 0 }}>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', color: G, margin: 0 }}>Quick links</p>
              {['Home', 'About us', 'Solutions'].map(l => (
                <a key={l} href="#" className="footer-link" style={{ display: 'flex', gap: 5, alignItems: 'center', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM, textDecoration: 'none' }}>
                  <span style={{ color: G }}>&rsaquo;</span>{l}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', color: G, margin: 0 }}>Legal</p>
              {['Terms of Use', 'Privacy Policy'].map(l => (
                <a key={l} href="#" className="footer-link" style={{ display: 'flex', gap: 5, alignItems: 'center', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM, textDecoration: 'none' }}>
                  <span style={{ color: G }}>&rsaquo;</span>{l}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', color: G, margin: 0 }}>Connect with us</p>
              <div>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 600, textTransform: 'uppercase', color: '#fff', margin: 0 }}>Address</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, lineHeight: '16px', marginTop: 5, maxWidth: 277 }}>A 303, Supreme Business Park, Hirandani Gardens, Powai, Mumbai, Maharashtra, 400076</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 600, textTransform: 'uppercase', color: '#fff', margin: 0 }}>Call us</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, marginTop: 5, marginBottom: 0 }}>+91 9091399139</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 600, textTransform: 'uppercase', color: '#fff', margin: 0 }}>Email us</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, marginTop: 5, marginBottom: 0 }}>letsconnect@convergenseeasia.com</p>
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
              <img src={imgPartner} alt="Google Partner" style={{ width: 41, height: 39, objectFit: 'contain', marginTop: 20 }} />
            </div>
          </div>
          <div style={{ height: 1, background: BORDER }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, lineHeight: 1.4, color: '#fff', margin: 0 }}>&copy; Copyright ConvergenSEE All Rights Reserved</p>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', margin: 0 }}>
              Designed by <span style={{ color: G }}>ConvergenSEE</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
