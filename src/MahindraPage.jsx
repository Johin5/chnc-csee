// Mahindra Case Study Page — built from Figma node 1:2843 (Landing Page - Dark-cASE STUDY-mahindra)

const G      = '#34cc32'
const DARK   = '#000718'
const CARD   = '#0f1520'
const MUTED  = 'rgba(255,255,255,0.7)'
const DIM    = '#666a74'
const BORDER = 'rgba(255,255,255,0.1)'

// ─── Assets ───────────────────────────────────────────────────────────────────
const imgMahindraHero  = 'https://www.figma.com/api/mcp/asset/755848dc-fda3-41ea-9c4e-afd7e6eaee7e'
const imgMahindraLogo  = 'https://www.figma.com/api/mcp/asset/e42c86ec-90a0-437b-9120-e9f5224d38fc'
const imgConvergenC    = 'https://www.figma.com/api/mcp/asset/1e618d19-8d23-41a5-bdae-ddf1ce9c3286'
const imgGallery1      = 'https://www.figma.com/api/mcp/asset/f124bb23-5df9-4f9f-80a1-f075c15409f6'
const imgGallery2      = 'https://www.figma.com/api/mcp/asset/362ee7b9-f928-4f9d-8749-b01486f400b8'
const imgGallery3      = 'https://www.figma.com/api/mcp/asset/fa81c5c3-d4f9-449e-b8e4-25ec7e61cfdf'
const imgLlLogo        = 'https://www.figma.com/api/mcp/asset/482bd648-ab7b-4173-beb3-1bba9247a1d1'
const imgMgLogo        = 'https://www.figma.com/api/mcp/asset/ee34d6fc-14cf-46df-a558-575dd658d29f'
const imgMahindraM     = 'https://www.figma.com/api/mcp/asset/611649bf-fd9c-4fd3-acc7-fa27c521feb7'
const imgAxisLogo      = 'https://www.figma.com/api/mcp/asset/d338eedd-f11a-4f4b-8046-f80770028f19'
const imgAirtel        = 'https://www.figma.com/api/mcp/asset/2a59435d-288b-4f86-9a19-355b6ef6a723'
const imgAptech        = 'https://www.figma.com/api/mcp/asset/25ffce9f-8834-4742-9c1e-8daf1bbf1c1a'
const imgKotakMf       = 'https://www.figma.com/api/mcp/asset/52e7517e-f212-4c5c-afb0-1e7adfe93dcc'
const imgMindCraft     = 'https://www.figma.com/api/mcp/asset/a6cff8e3-ead4-43b5-958e-1bdebc679255'
const imgFlickvid      = 'https://www.figma.com/api/mcp/asset/48bb578a-f73f-4bb6-9f9e-e65564da571d'
const imgSBI           = 'https://www.figma.com/api/mcp/asset/99197a32-3de4-424a-90fc-17180aa8202e'
const imgHimalaya      = 'https://www.figma.com/api/mcp/asset/37bdf660-7b34-4744-a544-e2892aa744e0'
const imgMeme          = 'https://www.figma.com/api/mcp/asset/745818a3-4cd3-4a6b-861c-f57c78dd4cff'
const imgPartnerRgb    = 'https://www.figma.com/api/mcp/asset/d3d56718-ca2f-47b5-b1c9-b7741a6b4f4a'

export default function MahindraPage({ onBack }) {
  return (
    <div style={{ background: DARK, minHeight: '100vh', paddingTop: 106, color: '#fff' }}>

      {/* ── Main content wrapper ────────────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* ── Hero section ──────────────────────────────────────────────────── */}
        <section style={{ padding: '100px 100px 0', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>

          {/* Breadcrumb + Title */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <button
                onClick={onBack}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: "'Archivo', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 4 }}
              >
                ‹ Home
              </button>
              <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: '#fff' }}>Convergensee X Mahindra</span>
            </div>

            {/* Title: logos + description */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center' }}>
                {/* Logo lockup — Figma frame 1:2875, 205×66 */}
                <div style={{ width: 205, height: 66, display: 'flex', alignItems: 'center', gap: 25, justifyContent: 'center', flexShrink: 0 }}>
                  {/* C-2d: 60×53.5 */}
                  <div style={{ width: 60, height: 53.5, overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                    <img src={imgConvergenC} alt="ConvergenSEE" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'fill' }} />
                  </div>
                  {/* x */}
                  <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 60.4, color: '#2bb32a', letterSpacing: '-1.511px', lineHeight: 1, flexShrink: 0 }}>x</span>
                  {/* Mahindra white box 60×60 */}
                  <div style={{ width: 60, height: 60, background: '#fff', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={imgMahindraLogo} alt="Mahindra" style={{ width: 50, height: 23, objectFit: 'fill' }} />
                  </div>
                </div>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: '#fff', lineHeight: '24px', maxWidth: 566, textAlign: 'center', margin: 0 }}>
                  Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today.
                </p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div style={{ width: '100%', height: 426, overflow: 'hidden', position: 'relative' }}>
            <img src={imgMahindraHero} alt="Mahindra" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* Top stats row */}
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            {[
              { val: '96%',   label: 'Surge in website actions in just 3 months' },
              { val: '1.3M+', label: 'Fraud attempts tackled and resolved' },
              { val: '203K+', label: 'Spike in online reviews in 8 months' },
            ].map((s, i) => (
              <div key={i} style={{ width: 300, padding: 30, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: 80, lineHeight: '90px', color: G, margin: 0, textTransform: 'uppercase' }}>{s.val}</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, lineHeight: '24px', margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── The Challenge ─────────────────────────────────────────────────── */}
        <section style={{ padding: '100px 100px 0', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 800, fontSize: 80, lineHeight: '70px', color: '#fff', textTransform: 'uppercase', margin: 0 }}>
            The Challenge
          </h2>
          <div style={{ display: 'flex', gap: 20, alignItems: 'stretch' }}>
            {[
              { num: '1.', text: 'Data-driven insights revealed key performance metrics, highlighting areas for optimization and growth strategies.' },
              { num: '2.', text: 'Inconsistent local presence across thousands of agents' },
              { num: '3.', text: 'Data-driven insights revealed key performance metrics, highlighting areas for optimization and growth strategies.' },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, padding: 30, width: 400, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: 50, lineHeight: '50px', color: G, margin: 0, textTransform: 'uppercase' }}>{item.num}</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, lineHeight: '24px', margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Solution ──────────────────────────────────────────────────────── */}
        <section style={{ padding: '100px 100px 0', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 800, fontSize: 80, lineHeight: '70px', color: '#fff', textTransform: 'uppercase', margin: 0 }}>
            Solution
          </h2>
          <div style={{ width: 786, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover us.',
              'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today.',
              'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover us.',
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: '#fff', lineHeight: '30px', margin: 0 }}>
                <span style={{ color: G }}>🟢</span> {text}
              </p>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 20, alignItems: 'stretch' }}>
            {[
              { val: '96%',   label: 'Surge in website actions in just 3 months', tag: 'AUTOMOBILE BRAND' },
              { val: '1.3M+', label: 'Fraud attempts tackled and resolved',        tag: 'FINANCE BRAND' },
            ].map((s, i) => (
              <div key={i} style={{ background: CARD, padding: 30, width: 610, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: 80, lineHeight: '90px', color: G, margin: 0, textTransform: 'uppercase' }}>{s.val}</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, lineHeight: '24px', margin: 0 }}>{s.label}</p>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 16, color: G, textTransform: 'uppercase', margin: 0 }}>{s.tag}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gallery ───────────────────────────────────────────────────────── */}
        <section style={{ padding: '100px 100px 0', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 800, fontSize: 80, lineHeight: '70px', color: '#fff', textTransform: 'uppercase', margin: 0 }}>
            Gallery
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
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
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
              {[imgGallery1, imgGallery2, imgGallery3].map((src, i) => (
                <div key={i} className="card-hover" style={{ width: 400, height: 562, overflow: 'hidden', flexShrink: 0 }}>
                  <img src={src} alt={`Gallery ${i + 1}`} className="img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other brands ──────────────────────────────────────────────────── */}
        <section style={{ padding: '100px', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 800, fontSize: 80, lineHeight: '70px', color: '#fff', textTransform: 'uppercase', textAlign: 'center', margin: 0 }}>
            Check out the awesomeeeeee stuff we've done for{' '}
            <span style={{ color: G }}>other brands</span>
          </h2>

          {/* Client logos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 60, alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', gap: 68, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
              <img src={imgLlLogo}   alt="LL"        className="logo-item" style={{ height: 40, objectFit: 'contain' }} />
              <img src={imgMgLogo}   alt="MG"        className="logo-item" style={{ height: 40, objectFit: 'contain' }} />
              <img src={imgMahindraM} alt="Mahindra" className="logo-item" style={{ height: 40, objectFit: 'contain' }} />
              <img src={imgAxisLogo} alt="Axis"      className="logo-item" style={{ height: 32, objectFit: 'contain', opacity: 0.75 }} />
              <img src={imgAirtel}   alt="Airtel"    className="logo-item" style={{ height: 32, objectFit: 'contain', opacity: 0.6 }} />
              <img src={imgAptech}   alt="Aptech"    className="logo-item" style={{ height: 40, objectFit: 'contain' }} />
              <img src={imgKotakMf}  alt="Kotak MF"  className="logo-item" style={{ height: 40, objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'flex', gap: 68, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
              <img src={imgMindCraft} alt="MindCraft" className="logo-item" style={{ height: 30, objectFit: 'contain' }} />
              <img src={imgFlickvid}  alt="Flickvid"  className="logo-item" style={{ height: 40, objectFit: 'contain' }} />
              <img src={imgSBI}       alt="SBI"       className="logo-item" style={{ height: 32, objectFit: 'contain', opacity: 0.65 }} />
              <img src={imgAxisLogo}  alt="Axis"      className="logo-item" style={{ height: 32, objectFit: 'contain', opacity: 0.75 }} />
              <img src={imgAirtel}    alt="Airtel"    className="logo-item" style={{ height: 32, objectFit: 'contain', opacity: 0.6 }} />
              <img src={imgHimalaya}  alt="Himalaya"  className="logo-item" style={{ height: 40, objectFit: 'contain' }} />
            </div>
          </div>
        </section>

        {/* ── Contact: "We will shoot you" ────────────────────────────────────── */}
        <section style={{ padding: '0 100px 100px', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>
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
                    <input placeholder="Enter here" className="input-glow" style={{ background: CARD, border: 'none', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                ) : <div key={fi} style={{ flex: 1 }} />)}
              </div>
            ))}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>Requirements</label>
              <textarea rows={6} placeholder="Enter here" className="input-glow" style={{ background: CARD, border: 'none', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', resize: 'vertical', width: '100%', boxSizing: 'border-box' }} />
            </div>
            <button type="submit" className="btn-green" style={{ background: G, color: DARK, border: 'none', padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        </section>

        {/* ── Footer ──────────────────────────────────────────────────────────── */}
        <footer style={{ background: CARD, padding: '100px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
            <div style={{ display: 'flex', gap: 144, alignItems: 'flex-start' }}>

              {/* Choose your poison */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', textAlign: 'center', color: '#fff', margin: 0 }}>
                  Choose your <span style={{ color: G }}>poison</span>
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ background: '#0e1620', border: `2px solid ${G}`, height: 150, width: 323, position: 'relative', overflow: 'hidden' }}>
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
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', color: G, margin: 0 }}>Quick links</p>
                {['Home', 'About us', 'Solutions'].map(l => (
                  <a key={l} href="#" className="footer-link" style={{ display: 'flex', gap: 5, alignItems: 'center', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM, textDecoration: 'none' }}>
                    <span style={{ color: G }}>›</span>{l}
                  </a>
                ))}
              </div>

              {/* Legal */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', color: G, margin: 0 }}>Legal</p>
                {['Terms of Use', 'Privacy Policy'].map(l => (
                  <a key={l} href="#" className="footer-link" style={{ display: 'flex', gap: 5, alignItems: 'center', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM, textDecoration: 'none' }}>
                    <span style={{ color: G }}>›</span>{l}
                  </a>
                ))}
              </div>

              {/* Contact */}
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
                <img src={imgPartnerRgb} alt="Google Partner" style={{ width: 41, height: 39, objectFit: 'contain', marginTop: 10 }} />
              </div>
            </div>

            <div style={{ height: 1, background: BORDER }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, lineHeight: 1.4, color: '#fff', margin: 0 }}>© Copyright ConvergenSEE All Rights Reserved</p>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', margin: 0 }}>
                Designed by <span style={{ color: G }}>ConvergenSEE</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
