// Mahindra Case Study Page — built from Figma node 1:2843 (Landing Page - Dark-cASE STUDY-mahindra)

import useResponsive from './useResponsive'

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
const imgLlLogo        = '/figma/case-study-mahindra/img-ll-logo1.png'
const imgMgLogo        = '/figma/case-study-mahindra/img-mg-logo.png'
const imgMahindraM     = '/figma/case-study-mahindra/img-mahindra-m.png'
const imgAxisLogo      = '/figma/case-study-mahindra/img-axis-bank-id-jbxqb-hwi11.png'
const imgAirtel        = '/figma/case-study-mahindra/img-airtel-seeklogo1.png'
const imgAptech        = '/figma/case-study-mahindra/img-aptech-logo.png'
const imgKotakMf       = '/figma/case-study-mahindra/img-kotak-mf.png'
const imgMindCraft     = '/figma/case-study-mahindra/img-mind-craft.png'
const imgFlickvid      = '/figma/case-study-mahindra/img-flickvid.png'
const imgSBI           = '/figma/case-study-mahindra/img-sbi-logo332051.png'
const imgHimalaya      = '/figma/case-study-mahindra/img-himalaya.png'
const imgMeme          = '/figma/case-study-mahindra/img-meme1.png'
const imgPartnerRgb    = '/figma/case-study-mahindra/img-partner-rgb1.png'

export default function MahindraPage({ onBack }) {
  const { isMobile, isSmall } = useResponsive()
  return (
    <div style={{ background: DARK, minHeight: '100vh', paddingTop: 106, color: '#fff' }}>

      {/* ── Main content wrapper ────────────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* ── Hero section ──────────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>

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
          <div style={{ width: '100%', height: isSmall ? 'clamp(220px, 50vw, 426px)' : 426, overflow: 'hidden', position: 'relative' }}>
            <img src={imgMahindraHero} alt="Mahindra" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

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
              <div key={i} style={{ background: CARD, padding: 'clamp(20px, 4vw, 30px)', width: isSmall ? '100%' : 400, maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 10 }}>
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
              <div key={i} style={{ background: CARD, padding: 'clamp(20px, 4vw, 30px)', width: isSmall ? '100%' : 610, maxWidth: 610, display: 'flex', flexDirection: 'column', gap: 10 }}>
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
                    <input placeholder="Enter here" className="input-glow" style={{ background: CARD, border: 'none', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                ) : <div key={fi} style={{ flex: 1 }} />)}
              </div>
            ))}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>Requirements</label>
              <textarea rows={6} placeholder="Enter here" className="input-glow" style={{ background: CARD, border: 'none', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', resize: 'vertical', width: '100%', boxSizing: 'border-box' }} />
            </div>
            <button type="submit" className="btn-green" style={{ background: G, color: DARK, border: 'none', padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer', width: isMobile ? '100%' : undefined }}>
              Send Message
            </button>
          </form>
        </section>

        {/* ── Footer ──────────────────────────────────────────────────────────── */}
        <footer style={{ background: CARD, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
            <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: isSmall ? 48 : 'clamp(40px, 8vw, 144px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>

              {/* Choose your poison */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center', width: isMobile ? '100%' : 'auto' }}>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', textAlign: 'center', color: '#fff', margin: 0 }}>
                  Choose your <span style={{ color: G }}>poison</span>
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: isMobile ? '100%' : 'auto' }}>
                  <div style={{ background: '#0e1620', border: `2px solid ${G}`, height: 150, width: isMobile ? '100%' : 323, maxWidth: 323, position: 'relative', overflow: 'hidden' }}>
                    <img src={imgMeme} alt="meme" style={{ position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)', width: 204, height: 177, objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: isMobile ? '100%' : 'auto' }}>
                    <button className="btn-green" style={{ width: isMobile ? '100%' : 323, maxWidth: 323, background: G, border: 'none', padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, color: DARK, textTransform: 'uppercase', cursor: 'pointer' }}>I skipped to the end</button>
                    <button className="btn-outline" style={{ width: isMobile ? '100%' : 323, maxWidth: 323, background: CARD, border: `1px solid ${G}`, padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, color: G, textTransform: 'uppercase', cursor: 'pointer' }}>I went through the whole website</button>
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
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 12 : 0, justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center' }}>
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
