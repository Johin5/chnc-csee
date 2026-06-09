// Careers Page — built from Figma design
import { useState } from 'react'
import useResponsive from './useResponsive'

const G      = '#34cc32'
const DARK   = '#000718'
const CARD   = '#0f1520'
const MUTED  = 'rgba(255,255,255,0.7)'
const DIM    = '#666a74'
const BORDER = 'rgba(255,255,255,0.1)'

// ─── Asset URLs (from Figma MCP) ─────────────────────────────────────────────
const imgTestimonial = '/figma/careers-01/221.png'
const imgTeam        = '/figma/careers-01/221.png'
const imgMeme        = '/figma/careers-01/meme1.png'
const imgPartner     = '/figma/careers-01/partner-rgb1.png'

// ─── Shared atoms ────────────────────────────────────────────────────────────
const BtnGreen = ({ children, style, ...p }) => (
  <button {...p} className="btn-green" style={{
    background: G, color: DARK, border: 'none',
    padding: '15px 30px', fontFamily: "'Saira Condensed', sans-serif",
    fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.02em', cursor: 'pointer', ...style,
  }}>{children}</button>
)

const BtnOutline = ({ children, style, ...p }) => (
  <button {...p} className="btn-outline" style={{
    background: 'transparent', color: G,
    border: `1px solid ${G}`,
    padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif",
    fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.02em', cursor: 'pointer', ...style,
  }}>{children}</button>
)

const InputField = ({ label, style }) => (
  <input
    className="input-glow"
    placeholder={label}
    style={{
      flex: 1, background: CARD, border: `1px solid ${BORDER}`,
      padding: '18px 20px', color: '#fff',
      fontFamily: "'Archivo', sans-serif", fontSize: 16,
      outline: 'none', boxSizing: 'border-box', ...style,
    }}
  />
)

// ─── Hero Section ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      textAlign: 'center',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: 20, padding: 'clamp(140px, 18vw, 206px) clamp(20px, 6vw, 100px) clamp(56px, 8vw, 100px)',
    }}>
      <h1 style={{
        fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(56px, 14vw, 150px)', fontWeight: 800,
        textTransform: 'uppercase', letterSpacing: '-3px', lineHeight: 1, margin: 0,
      }}>
        <span style={{ color: '#fff' }}>WE </span>
        <span style={{ color: G }}>DARE</span>
        <span style={{ color: '#fff' }}> YOU</span>
      </h1>
      <p style={{
        fontFamily: "'Archivo', sans-serif", fontSize: 24,
        color: '#fff', margin: 0,
      }}>
        To take the <span style={{ fontWeight: 700, color: G }}>CHNC</span>
      </p>
      <p style={{
        fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: '#fff',
        lineHeight: '24px', maxWidth: 798, margin: 0,
      }}>
        Discover the power of our secure and rewarding copy. Explore our range of copy and take
        control of your copy today. Discover the power of our secure and rewarding copy. Explore
        our range of copy and take control of your copy today. Discover us.
      </p>
    </section>
  )
}

// ─── Testimonial Section ─────────────────────────────────────────────────────
function Testimonial() {
  const { isSmall } = useResponsive()
  const stats = [
    { value: '96%', label: 'Increase in traffic growth' },
    { value: '10x', label: 'Revenue increase' },
    { value: '96%', label: 'Increase in sales' },
  ]

  return (
    <section style={{
      display: 'flex', flexDirection: isSmall ? 'column' : 'row',
      overflow: 'hidden', height: isSmall ? 'auto' : 505,
      padding: '0 clamp(20px, 6vw, 100px)', justifyContent: 'center',
    }}>
      {/* Left card */}
      <div className="card-hover" style={{
        width: isSmall ? '100%' : 746, maxWidth: 746, background: CARD,
        padding: 'clamp(24px, 4vw, 50px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        gap: 30, flexShrink: 0, boxSizing: 'border-box',
      }}>
        <p style={{
          fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#fff',
          lineHeight: '32px', maxWidth: 658, margin: 0,
        }}>
          "ConvergenSEE changed the trajectory and{' '}
          <span style={{ color: G }}>success</span>{' '}
          of my business, and I'm a lifelong user at this point."
        </p>
        <div style={{ display: 'flex', gap: 'clamp(16px, 5vw, 80px)', flexWrap: 'wrap' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <p style={{
                fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 6vw, 60px)',
                fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1,
              }}>{s.value}</p>
              <p style={{
                fontFamily: "'Archivo', sans-serif", fontSize: 16,
                color: MUTED, margin: '8px 0 0', lineHeight: '20px',
              }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right card — photo */}
      <div style={{
        width: isSmall ? '100%' : 494, maxWidth: 494,
        height: isSmall ? 'clamp(320px, 80vw, 505px)' : 505, borderRadius: 15,
        overflow: 'hidden', position: 'relative', flexShrink: 0,
      }}>
        <img src={imgTestimonial} alt="Alina Sharma" style={{
          width: '100%', height: '100%', objectFit: 'cover',
        }} />
        {/* gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to bottom, rgba(0,0,0,0) 42%, ${DARK} 100%)`,
        }} />
        {/* name + role */}
        <div style={{ position: 'absolute', left: 38, bottom: 35, zIndex: 1 }}>
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 24, fontWeight: 700,
            color: '#fff', margin: 0,
          }}>Alina Sharma</p>
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 16, fontWeight: 500,
            color: '#fff', margin: '4px 0 0',
          }}>Mahindra</p>
        </div>
      </div>
    </section>
  )
}

// ─── We Are ConvergenSEE ─────────────────────────────────────────────────────
function WeAreSection() {
  const { isSmall } = useResponsive()
  return (
    <section style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      paddingTop: 'clamp(56px, 8vw, 100px)', padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800,
        textTransform: 'uppercase', lineHeight: 1, margin: 0,
      }}>
        <span style={{ color: '#fff' }}>WE ARE </span>
        <span style={{ color: G }}>CONVERGENSEE</span>
      </h2>
      <p style={{
        fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: '#fff',
        lineHeight: '24px', maxWidth: 798, margin: '20px 0 0',
      }}>
        Discover the power of our secure and rewarding copy. Explore our range of copy and take
        control of your copy today. Discover the power of our secure and rewarding copy. Explore
        our range of copy and take control of your copy today. Discover us.
      </p>

      {/* Team photo */}
      <div style={{
        position: 'relative', width: '100%', maxWidth: 1440,
        height: isSmall ? 'clamp(300px, 60vw, 785px)' : 785,
        overflow: 'hidden', marginTop: 'clamp(40px, 6vw, 60px)',
      }}>
        <img src={imgTeam} alt="ConvergenSEE Team" style={{
          width: '100%', height: '100%', objectFit: 'cover',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to bottom, rgba(0,0,0,0) 67.5%, ${DARK} 100%)`,
        }} />
      </div>
    </section>
  )
}

// ─── Join The Chaos — Contact Form ───────────────────────────────────────────
function JoinSection() {
  const { isMobile } = useResponsive()
  const [fileName] = useState('my-cv.pdf')
  const [progress] = useState(72)

  return (
    <section style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)',
    }}>
      <h2 style={{
        fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800,
        textTransform: 'uppercase', lineHeight: 1, margin: 0, textAlign: 'center',
      }}>
        <span style={{ color: '#fff' }}>JOIN THE </span>
        <span style={{ color: G }}>Chaos!</span>
      </h2>

      {/* Form fields */}
      <div style={{ maxWidth: 1240, width: '100%', marginTop: 'clamp(40px, 6vw, 60px)' }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20, marginBottom: 20 }}>
          <InputField label="Your name" />
          <InputField label="Contact number" />
        </div>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20 }}>
          <InputField label="Your email" />
          <InputField label="Position" />
        </div>
      </div>

      {/* File upload area */}
      <div style={{
        width: isMobile ? '100%' : 882, maxWidth: 882, background: CARD, border: `1px dashed ${BORDER}`,
        padding: 'clamp(20px, 4vw, 30px)', marginTop: 40, boxSizing: 'border-box',
      }}>
        <p style={{
          fontFamily: "'Saira Condensed', sans-serif", fontSize: 24, fontWeight: 600,
          color: '#fff', textTransform: 'uppercase', margin: 0,
        }}>UPLOAD FILES</p>
        <p style={{
          fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED,
          margin: '8px 0 0',
        }}>Select and upload the files of your choice</p>

        {/* Drop zone */}
        <div style={{
          border: `2px dashed ${BORDER}`, padding: '40px 20px',
          textAlign: 'center', marginTop: 20,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        }}>
          {/* Upload icon */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 28V12m0 0l-6 6m6-6l6 6" stroke={DIM} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 28v2a4 4 0 004 4h16a4 4 0 004-4v-2" stroke={DIM} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED, margin: 0,
          }}>
            Drag and drop image or{' '}
            <span style={{ color: G, cursor: 'pointer', textDecoration: 'underline' }}>Browse</span>
          </p>
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, margin: 0,
          }}>Max file size: 25MB &middot; PDF, DOC, DOCX</p>
        </div>

        {/* Browse button */}
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
          <BtnOutline>BROWSE</BtnOutline>
        </div>

        {/* Uploaded file item */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          marginTop: 24, padding: '14px 16px',
          background: DARK, border: `1px solid ${BORDER}`,
        }}>
          {/* File icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke={DIM} strokeWidth="1.5" fill="none"/>
            <path d="M14 2v6h6" stroke={DIM} strokeWidth="1.5" fill="none"/>
          </svg>
          <div style={{ flex: 1 }}>
            <p style={{
              fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff',
              margin: 0,
            }}>{fileName}</p>
            {/* Progress bar */}
            <div style={{
              width: '100%', height: 4, background: 'rgba(255,255,255,0.1)',
              borderRadius: 2, marginTop: 6,
            }}>
              <div style={{
                width: `${progress}%`, height: '100%', background: G,
                borderRadius: 2, transition: 'width 0.3s ease',
              }} />
            </div>
          </div>
          {/* Trash icon */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ cursor: 'pointer', flexShrink: 0 }}>
            <path d="M3 5h14M8 5V3h4v2m-7 0v10a2 2 0 002 2h6a2 2 0 002-2V5" stroke={DIM} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Send message */}
      <div style={{ marginTop: 40, width: isMobile ? '100%' : 'auto', maxWidth: 882 }}>
        <BtnGreen style={{ padding: '18px 60px', fontSize: 18, width: isMobile ? '100%' : 'auto' }}>SEND MESSAGE</BtnGreen>
      </div>
    </section>
  )
}

// ─── Careers Page ────────────────────────────────────────────────────────────
export default function CareersPage({ onBack }) {
  const { isSmall } = useResponsive()
  return (
    <div style={{ background: DARK, minHeight: '100vh', color: '#fff' }}>

      <Hero />
      <Testimonial />
      <WeAreSection />
      <JoinSection />

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer style={{ background: DARK, padding: 'clamp(56px, 8vw, 80px) clamp(20px, 6vw, 100px) 40px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(40px, 6vw, 144px)', alignItems: 'flex-start', justifyContent: isSmall ? 'center' : 'flex-start', marginBottom: 48 }}>

          {/* Meme CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <p style={{
              fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600,
              color: '#fff', textTransform: 'uppercase', letterSpacing: '0.02em',
            }}>
              Choose your <span style={{ color: G }}>poison</span>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{
                background: '#0e1620', border: `2px solid ${G}`,
                width: '100%', maxWidth: 323, height: 150, position: 'relative', overflow: 'visible',
              }}>
                <img src={imgMeme} alt="Meme" style={{
                  position: 'absolute', left: '50%', top: -32,
                  transform: 'translateX(-50%)',
                  width: 203, height: 177, objectFit: 'contain', maxWidth: '90%',
                }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 323 }}>
                <button className="btn-green" style={{
                  background: G, color: DARK, border: 'none',
                  padding: '15px 20px', width: '100%',
                  fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700,
                  textTransform: 'uppercase', cursor: 'pointer',
                }}>I skipped to the end</button>
                <div className="btn-outline" style={{
                  background: CARD, border: `1px solid ${G}`,
                  padding: '15px 20px', width: '100%',
                  fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700,
                  color: G, textTransform: 'uppercase', textAlign: 'center', cursor: 'pointer',
                  boxSizing: 'border-box',
                }}>I went through the whole website</div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, color: G, textTransform: 'uppercase' }}>Quick links</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Home', 'About us', 'Solutions'].map(link => (
                <div key={link} className="footer-link" style={{ display: 'flex', gap: 5, alignItems: 'center', cursor: 'pointer' }}
                  onClick={link === 'Home' ? onBack : undefined}>
                  <span style={{ color: DIM, fontSize: 12 }}>›</span>
                  <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM }}>{link}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, color: G, textTransform: 'uppercase' }}>Legal</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Terms of Use', 'Privacy Policy'].map(link => (
                <div key={link} className="footer-link" style={{ display: 'flex', gap: 5, alignItems: 'center', cursor: 'pointer' }}>
                  <span style={{ color: DIM, fontSize: 12 }}>›</span>
                  <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM }}>{link}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connect with us */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, color: G, textTransform: 'uppercase' }}>Connect with us</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, color: '#fff', textTransform: 'uppercase', fontWeight: 600 }}>Address</p>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, lineHeight: '16px', width: 277, fontWeight: 300 }}>
                A 303, Supreme Business Park, Hirandani Gardens, Powai, Mumbai, Maharashtra, 400076
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, color: '#fff', textTransform: 'uppercase', fontWeight: 600 }}>Call us</p>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, lineHeight: '16px', fontWeight: 300 }}>+91 9091399139</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, color: '#fff', textTransform: 'uppercase', fontWeight: 600 }}>Email us</p>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, lineHeight: '16px', fontWeight: 300 }}>letsconnect@convergenseeasia.com</p>
            </div>
            {/* Social */}
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
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

        <div style={{ height: 1, background: BORDER, marginBottom: 24 }} />
        <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: isSmall ? 12 : 0, justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, lineHeight: 1.4 }}>© Copyright ConvergenSEE All Rights Reserved</p>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14 }}>
            Designed by <span style={{ color: G }}>ConvergenSEE</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
