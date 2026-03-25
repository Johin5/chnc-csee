// About Page — built from Figma node 1:841 (Landing Page - Dark-About)
import { useState, useEffect } from 'react'

const G    = '#34cc32'
const DARK = '#000718'
const CARD = '#0f1520'
const MUTED = 'rgba(255,255,255,0.7)'
const DIM  = '#666a74'

// ─── Asset URLs (from Figma MCP) ─────────────────────────────────────────────
const imgTeam        = 'https://www.figma.com/api/mcp/asset/16d074f7-27a2-4c29-8bf4-76fd9e970bb9'
const imgBala        = 'https://www.figma.com/api/mcp/asset/e29d3e44-4624-4d44-b5d8-a4082aa08d35'
const imgValCard1    = 'https://www.figma.com/api/mcp/asset/232a3a23-f6ab-4454-ba6e-2c987bc14236'
const imgValCard2    = 'https://www.figma.com/api/mcp/asset/57a30c07-179e-4be7-8ee0-a5a46b6ffb1a'
const imgMeme        = 'https://www.figma.com/api/mcp/asset/9899f16d-9fe9-49c8-a60a-c039bebaa1ab'
const imgPartner     = 'https://www.figma.com/api/mcp/asset/610964a7-7f4c-4704-b425-6707afb4cf87'

// ─── Value card ───────────────────────────────────────────────────────────────
function ValueCard({ line1, line1Green, line2, line2Green, bg }) {
  return (
    <div className="card-hover" style={{
      position: 'relative', width: 610, height: 300,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', flexShrink: 0,
    }}>
      {/* base */}
      <div style={{ position: 'absolute', inset: 0, background: CARD }} />
      {/* texture bg */}
      <img src={bg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
      {/* dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,7,24,0.7)' }} />
      {/* text */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{
          fontFamily: "'Saira Condensed', sans-serif", fontSize: 60, fontWeight: 600,
          lineHeight: '64px', textTransform: 'uppercase',
        }}>
          <span style={{ color: line1Green ? G : '#fff', fontWeight: line1Green ? 700 : 600 }}>{line1}</span>
          {line1Green ? '' : ''}
        </div>
        {line2 && (
          <div style={{
            fontFamily: "'Saira Condensed', sans-serif", fontSize: 60, fontWeight: line2Green ? 700 : 600,
            lineHeight: '64px', textTransform: 'uppercase',
            color: line2Green ? G : '#fff',
          }}>
            {line2}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── About Page ───────────────────────────────────────────────────────────────
const WORDS = ['Think', 'Believe', 'Create']

export default function AboutPage({ onNavigateHome }) {
  const [wordIdx, setWordIdx] = useState(1) // start on "Believe"
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length)
        setVisible(true)
      }, 400)
    }, 1700)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ background: DARK, minHeight: '100vh', color: '#fff' }}>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative', background: DARK,
        paddingTop: 106, // space for nav
      }}>
        {/* Hero text */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 30, padding: '100px 100px 80px',
          textAlign: 'center',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <h1 style={{
              fontFamily: "'Saira Condensed', sans-serif", fontSize: 150, fontWeight: 800,
              textTransform: 'uppercase', letterSpacing: '-3px', lineHeight: 1, margin: 0,
              whiteSpace: 'nowrap',
            }}>
              <span style={{ color: '#fff' }}>WE </span>
              <span style={{
                color: G,
                display: 'inline-block',
                verticalAlign: 'top',
                clipPath: visible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
                transition: visible
                  ? 'clip-path 0.5s cubic-bezier(0.77, 0, 0.175, 1)'
                  : 'clip-path 0.3s cubic-bezier(0.77, 0, 0.175, 1)',
              }}>{WORDS[wordIdx]}</span>
              <span style={{ color: '#fff' }}> IT</span>
            </h1>
            <p style={{
              fontFamily: "'Archivo', sans-serif", fontSize: 24,
              fontWeight: 400, color: '#fff', lineHeight: '30px', margin: 0,
            }}>
              We are <span style={{ color: G, fontWeight: 700 }}>ConvergenSEE</span>
            </p>
          </div>
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 18, color: '#fff',
            lineHeight: '24px', maxWidth: 798,
          }}>
            Discover the power of our secure and rewarding copy. Explore our range of copy and take
            control of your copy today. Discover the power of our secure and rewarding copy. Explore
            our range of copy and take control of your copy today. Discover us.
          </p>
        </div>

        {/* Team photo with gradient fade */}
        <div style={{ position: 'relative', height: 785, overflow: 'hidden' }}>
          <img src={imgTeam} alt="ConvergenSEE Team" style={{
            position: 'absolute', left: 0, top: '-37.58%',
            width: '100%', height: '137.58%', objectFit: 'cover',
            pointerEvents: 'none',
          }} />
          {/* gradient fade to dark at bottom */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 67.5%, #000718 102%)',
          }} />
        </div>
      </section>

      {/* ── Letter from Bala ────────────────────────────────────────────────── */}
      <section style={{ background: CARD, paddingLeft: 100 }}>
        <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between' }}>
          {/* Left: text */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 30,
            justifyContent: 'center', paddingTop: 80, paddingBottom: 80,
            paddingRight: 60, flexShrink: 0, maxWidth: 538,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{
                fontFamily: "'Saira Condensed', sans-serif", fontSize: 80, fontWeight: 800,
                lineHeight: '80px', textTransform: 'uppercase',
              }}>
                <div style={{ color: '#fff' }}>Letter from</div>
                <div style={{ color: G }}>bala</div>
              </div>
            </div>
            <p style={{
              fontFamily: "'Archivo', sans-serif", fontSize: 18,
              color: MUTED, lineHeight: '24px',
            }}>
              Discover the power of our secure and rewarding copy. Explore our range of copy and
              take control of your copy today. Discover the power of our secure and rewarding copy.
              Explore our range of copy and take control of your copy today. Discover the power of
              our secure and rewarding copy. Explore our range of copy and take control of your copy
              today. Discover the power of our secure and rewarding copy. Explore our range of copy
              and take control of your copy today.
            </p>
          </div>

          {/* Right: photo */}
          <div style={{ width: 732, height: 702, overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: '#d9d9d9' }} />
            <img src={imgBala} alt="Letter from Bala" style={{
              position: 'absolute',
              left: '50%', top: 'calc(50% - 60px)',
              transform: 'translate(-50%, -50%)',
              width: 1115, height: 836,
              objectFit: 'cover', pointerEvents: 'none',
            }} />
          </div>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: '100px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>

          {/* Heading */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
            <div style={{
              border: `1px solid ${G}`, padding: '5px 10px',
              backdropFilter: 'blur(10px)',
            }}>
              <span style={{
                fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 600,
                color: '#fff', letterSpacing: '0.04em',
              }}>VALUES</span>
            </div>
            <h2 style={{
              fontFamily: "'Saira Condensed', sans-serif", fontSize: 80, fontWeight: 800,
              textTransform: 'uppercase', lineHeight: '70px', textAlign: 'center', margin: 0,
              whiteSpace: 'nowrap',
            }}>
              <span style={{ color: '#fff' }}>OUR </span>
              <span style={{ color: G }}>CORE </span>
              <span style={{ color: '#fff' }}>VALUES</span>
            </h2>
          </div>

          {/* 2×2 grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', gap: 20 }}>
              <ValueCard
                line1="Walk"
                line1Green
                line2="the talk"
                line2Green={false}
                bg={imgValCard1}
              />
              <ValueCard
                line1="Be "
                line1Green={false}
                line2="foolish"
                line2Green
                bg={imgValCard2}
              />
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <ValueCard
                line1="OWN"
                line1Green
                line2=" IT"
                line2Green={false}
                bg={imgValCard1}
              />
              <div className="card-hover" style={{
                position: 'relative', width: 610, height: 300,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden', flexShrink: 0,
              }}>
                <div style={{ position: 'absolute', inset: 0, background: CARD }} />
                <img src={imgValCard1} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,7,24,0.7)' }} />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <div style={{
                    fontFamily: "'Saira Condensed', sans-serif", fontSize: 60, fontWeight: 600,
                    lineHeight: '64px', textTransform: 'uppercase', color: '#fff',
                  }}>CHASE THE</div>
                  <div style={{
                    fontFamily: "'Saira Condensed', sans-serif", fontSize: 60, fontWeight: 700,
                    lineHeight: '64px', textTransform: 'uppercase', color: G,
                  }}>CHNC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join the Chaos ───────────────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: '100px', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <h2 style={{
            fontFamily: "'Saira Condensed', sans-serif", fontSize: 80, fontWeight: 800,
            textTransform: 'uppercase', lineHeight: '70px', margin: 0,
            whiteSpace: 'nowrap',
          }}>
            <span style={{ color: '#fff' }}>JOIN THE </span>
            <span style={{ color: G }}>Chaos!</span>
          </h2>
          <button className="btn-green" style={{
            background: G, color: DARK, border: 'none',
            padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif",
            fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', cursor: 'pointer',
          }}>TAKE THE CHNC</button>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer style={{ background: CARD, padding: '100px' }}>
        <div style={{ display: 'flex', gap: 144, alignItems: 'flex-start', marginBottom: 48 }}>

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
                width: 323, height: 150, position: 'relative', overflow: 'visible',
              }}>
                <img src={imgMeme} alt="Meme" style={{
                  position: 'absolute', left: '50%', top: -32,
                  transform: 'translateX(-50%)',
                  width: 203, height: 177, objectFit: 'contain',
                }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button className="btn-green" style={{
                  background: G, color: DARK, border: 'none',
                  padding: '15px 20px', width: 323,
                  fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700,
                  textTransform: 'uppercase', cursor: 'pointer',
                }}>I skipped to the end</button>
                <div className="btn-outline" style={{
                  background: CARD, border: `1px solid ${G}`,
                  padding: '15px 20px', width: 323,
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
                  onClick={link === 'Home' ? onNavigateHome : undefined}>
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

          {/* Contact */}
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

        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 24 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, lineHeight: 1.4 }}>© Copyright ConvergenSEE All Rights Reserved</p>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14 }}>
            Designed by <span style={{ color: G }}>ConvergenSEE</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
