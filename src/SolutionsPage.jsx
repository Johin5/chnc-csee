// Solutions Page — built from Figma node 1:1559 (Landing Page - Dark-Solution)
import { useState, useEffect, useRef } from 'react'
import CHNCDashboard from './CHNCDashboard'

const G     = '#34cc32'
const DARK  = '#000718'
const CARD  = '#0f1520'
const MUTED = 'rgba(255,255,255,0.7)'
const DIM   = '#666a74'
const BORDER = 'rgba(255,255,255,0.1)'

// ─── Figma assets ─────────────────────────────────────────────────────────────
const imgMeme        = 'https://www.figma.com/api/mcp/asset/8a0ee08c-cd01-4c3c-aee3-b8fad0837a48'
const imgPartner     = 'https://www.figma.com/api/mcp/asset/e523dd09-07f5-4166-b9db-66e5c8cafa52'

// ─── Shared atoms ─────────────────────────────────────────────────────────────
const BtnGreen = ({ children, style, ...p }) => (
  <button {...p} className="btn-green" style={{
    background: G, color: DARK, border: 'none',
    padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif",
    fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.02em', cursor: 'pointer', ...style,
  }}>{children}</button>
)
const BtnOutline = ({ children, style, active, onClick, ...p }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <button {...p}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: active ? 'transparent' : CARD,
        color: (active || hovered) ? G : DIM,
        border: (active || hovered) ? `1px solid ${G}` : '1px solid transparent',
        padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif",
        fontSize: 16, fontWeight: (active || hovered) ? 700 : 500,
        textTransform: 'uppercase', letterSpacing: '0.02em',
        cursor: 'pointer', backdropFilter: 'blur(10px)',
        transition: 'all 0.25s ease',
        ...style,
      }}>{children}</button>
  )
}
const Pill = ({ label, active, onClick }) => (
  <div className="pill-hover" onClick={onClick} style={{
    padding: '15px 20px', backdropFilter: 'blur(10px)',
    background: CARD, cursor: 'pointer',
    border: active ? `1px solid ${G}` : 'none',
    fontFamily: "'Saira Condensed', sans-serif",
    fontSize: 16, fontWeight: active ? 700 : 500,
    color: active ? G : DIM,
    transition: 'all 0.2s ease',
  }}>{label}</div>
)

// ─── Sections ─────────────────────────────────────────────────────────────────
function Hero({ active, onSelect }) {
  const services = ['InsightIT','LocateIT','CreateIT','AmplifyIT','SocialiseIT','InfluenceIT','ScriptIT','AigenIT','SearchIT','InvoiceIT']

  return (
    <section style={{ padding: '100px 100px 0', textAlign: 'center', position: 'relative' }}>
      {/* headline */}
      <h1 style={{
        fontFamily: "'Saira Condensed', sans-serif",
        fontSize: 150, fontWeight: 800, lineHeight: 1,
        textTransform: 'uppercase', letterSpacing: '-3px',
        margin: 0, whiteSpace: 'nowrap',
      }}>
        <span style={{ color: '#fff' }}>ALL IN </span>
        <span style={{ color: G }}>ONE </span>
        <span style={{ color: '#fff' }}>SOLUTION</span>
      </h1>

      {/* module pills */}
      <div style={{
        display: 'flex', gap: 20, justifyContent: 'center',
        flexWrap: 'wrap', marginTop: 40,
      }}>
        {services.map((l) => (
          <Pill key={l} label={l} active={l === active} onClick={() => onSelect(l)} />
        ))}
      </div>

      {/* CHNC glow */}
      <div style={{ marginTop: 40 }}>
        <p style={{
          fontFamily: "'Archivo', sans-serif",
          fontSize: 130, fontWeight: 800, lineHeight: '147px',
          color: G, letterSpacing: '-3.25px',
          textShadow: '0px 4px 35px rgba(52,204,50,0.5)',
          margin: 0,
        }}>CHNC</p>
      </div>
    </section>
  )
}

function ContentCreation() {
  const cards = [
    {
      top: (
        <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 80, fontWeight: 700, color: G, lineHeight: '90px' }}>60%</p>
      ),
      desc: 'Faster content creation',
    },
    {
      top: (
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <circle cx="45" cy="45" r="28" stroke={G} strokeWidth="1.5" fill="none" />
          <line x1="45" y1="32" x2="45" y2="45" stroke={G} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="45" y1="45" x2="56" y2="45" stroke={G} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      desc: 'Content localised and adapted in seconds',
    },
    {
      top: (
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <circle cx="38" cy="32" r="10" stroke={G} strokeWidth="1.5" fill="none" />
          <circle cx="55" cy="28" r="8" stroke={G} strokeWidth="1.5" fill="none" />
          <path d="M20 66 Q24 50 38 50 Q52 50 56 66" stroke={G} strokeWidth="1.5" fill="none" />
          <path d="M46 54 Q50 44 55 44 Q65 44 68 58" stroke={G} strokeWidth="1.5" fill="none" />
        </svg>
      ),
      desc: 'Real-time collaboration & approvals',
    },
  ]

  return (
    <section style={{ padding: '100px', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Saira Condensed', sans-serif",
          fontSize: 80, fontWeight: 800, lineHeight: '70px',
          textTransform: 'uppercase', color: '#fff', margin: 0,
        }}>CONTENT CREATION</h2>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, marginTop: 16 }}>
          Create Content and get approval in hours, not days.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 20, width: '100%', maxWidth: 1240 }}>
        {cards.map((c, i) => (
          <div key={i} className="card-hover" style={{
            flex: 1, background: CARD, padding: 30,
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            {c.top}
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, lineHeight: '24px' }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const MODULE_STEPS = {
  CreateIT: [
    { bold: 'Plan', rest: ' your content for organic/paid media' },
    { bold: 'Gather', rest: ' requirements from relevant stakeholders' },
    { bold: 'Visualise', rest: ' content on the go with generative AI and built-in guardrails' },
    { bold: 'Write Copy', rest: ' in multiple languages in line with brand tonality' },
    { bold: 'Create', rest: ' multiple content variations on the fly' },
    { bold: 'Match', rest: ' brand and stock images with our unique image recognition software' },
    { bold: 'Bring Life', rest: ' to your content with our design capabilities' },
    { bold: 'Publish', rest: ' content across platforms and measure performance' },
    { stat: true, text: '60% reduction in content creation time' },
  ],
}
const DEFAULT_STEPS = [
  { bold: 'Plan', rest: ' your strategy and set clear objectives' },
  { bold: 'Execute', rest: ' with precision using our platform tools' },
  { bold: 'Analyse', rest: ' results with real-time data and insights' },
  { bold: 'Optimise', rest: ' continuously for maximum performance' },
  { stat: true, text: 'Measurable results from day one' },
]

function WorkflowStack({ steps, count }) {
  const CARD_H = 68, GAP = 28, SLOT = CARD_H + GAP, PEEK = 18, MAX_VIS = 4

  const stackedN = Math.max(0, count - MAX_VIS)

  return (
    <div style={{ flex: 1, height: 540, position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes growW { from { width: 0 } to { width: 50% } }
        @keyframes growH { from { height: 0 } to { height: 100% } }
        @keyframes fillBg { from { background: transparent } to { background: ${CARD} } }
        @keyframes growConn { from { height: 0 } to { height: ${GAP}px } }
        @keyframes revealConn { from { clip-path: inset(0 0 100% 0) } to { clip-path: inset(0 0 0% 0) } }
      `}</style>

      {steps.map((s, i) => {
        const visible = i < count
        const stacked = i < stackedN

        let top, scale, opacity
        if (!visible) {
          // Hidden — sit at natural position, invisible
          top = i * SLOT
          scale = 0.93
          opacity = 0
        } else if (stacked) {
          // Stacked at top — transparent, only last stacked card shows text
          top = i * PEEK
          scale = 0.88 + i * 0.02
          opacity = 0.15 + i * 0.06
        } else {
          // Visible in main area
          const stackH = stackedN > 0 ? (stackedN - 1) * PEEK + CARD_H + 16 : 0
          const visIdx = i - stackedN
          top = stackH + visIdx * SLOT
          scale = 1
          opacity = 1
        }

        const isStat = !!s.stat

        return (
          <div key={i} style={{
            position: 'absolute', left: 0, right: 0,
            top, height: CARD_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            opacity,
            zIndex: i,
            transition: 'top 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease',
          }}>
            {/* Card body */}
            <div style={{
              background: 'transparent',
              padding: '16px 20px',
              display: 'flex', alignItems: 'center', justifyContent: isStat ? 'center' : 'flex-start', gap: 14,
              height: '100%', boxSizing: 'border-box',
              animation: visible && !stacked && !isStat ? `fillBg 0.3s ease forwards 0.65s` : undefined,
              transition: 'background 0.4s ease',
            }}>
              {isStat ? (
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: 32, color: G, lineHeight: '36px', margin: 0, textAlign: 'center' }}>
                  {s.text}
                </p>
              ) : (
                <>
                  <div style={{ width: 6, height: 6, flexShrink: 0, background: G, opacity: stacked && i < stackedN - 1 ? 0 : 1, transition: 'opacity 0.3s ease' }} />
                  <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: '20px', margin: 0, opacity: stacked && i < stackedN - 1 ? 0 : 1, transition: 'opacity 0.3s ease' }}>
                    <strong style={{ color: '#fff' }}>{s.bold}</strong>{s.rest}
                  </p>
                </>
              )}
            </div>

            {/* Border draw — only for non-stat cards */}
            {visible && !isStat && (
              <div key={`border-${i}`} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {/* Full border — visible when NOT an older stacked card, delayed fade to match stacking transition */}
                <div style={{ opacity: stacked && i < stackedN - 1 ? 0 : 1, transition: 'opacity 0.4s ease 0.6s' }}>
                  <div style={{ position: 'absolute', top: 0, right: '50%', height: 1, background: G, width: 0, animation: 'growW 0.2s ease forwards 0s' }} />
                  <div style={{ position: 'absolute', top: 0, left: '50%', height: 1, background: G, width: 0, animation: 'growW 0.2s ease forwards 0s' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 1, background: G, height: 0, animation: 'growH 0.25s ease forwards 0.2s' }} />
                  <div style={{ position: 'absolute', top: 0, right: 0, width: 1, background: G, height: 0, animation: 'growH 0.25s ease forwards 0.2s' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, height: 1, background: G, width: 0, animation: 'growW 0.2s ease forwards 0.45s' }} />
                  <div style={{ position: 'absolute', bottom: 0, right: 0, height: 1, background: G, width: 0, animation: 'growW 0.2s ease forwards 0.45s' }} />
                </div>
                {/* Stacked indicator — top line + short side stubs, only when older stacked */}
                {stacked && i < stackedN - 1 && (
                  <div style={{ opacity: 1 }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: G }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: 1, height: PEEK, background: G }} />
                    <div style={{ position: 'absolute', top: 0, right: 0, width: 1, height: PEEK, background: G }} />
                  </div>
                )}
              </div>
            )}

            {/* Connector line — between all visible non-stacked cards */}
            {visible && !stacked && i < steps.length - 1 && !steps[i].stat && (
              <div key={`conn-${i}`} style={{
                position: 'absolute', top: CARD_H, left: '50%',
                transform: 'translateX(-50%)',
                width: 1.5, height: GAP,
                background: G,
                clipPath: 'inset(0 0 100% 0)',
                animation: `revealConn 0.3s ease forwards 0.95s`,
                pointerEvents: 'none',
              }} />
            )}
          </div>
        )
      })}

    </div>
  )
}

function HowWeDoIt({ activeModule }) {
  const dashRef = useRef(null)
  const steps = MODULE_STEPS[activeModule] || DEFAULT_STEPS
  const [stepCount, setStepCount] = useState(0)
  const [inView, setInView] = useState(false)

  // Only start animation when dashboard is visible on screen
  useEffect(() => {
    if (!dashRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.5 }
    )
    observer.observe(dashRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    setStepCount(0)
    let c = 0
    const id = setInterval(() => {
      c++
      if (c > steps.length) { clearInterval(id); return }
      setStepCount(c)
    }, 1100)
    return () => clearInterval(id)
  }, [steps, inView])

  return (
    <section style={{ padding: '100px', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>
      <h2 style={{
        fontFamily: "'Saira Condensed', sans-serif",
        fontSize: 80, fontWeight: 800, lineHeight: '70px',
        textTransform: 'uppercase', textAlign: 'center', margin: 0,
      }}>
        <span style={{ color: '#fff' }}>How we do </span>
        <span style={{ color: G }}>IT?</span>
      </h2>

      <div style={{ display: 'flex', gap: 50, alignItems: 'center', width: '100%', maxWidth: 1280 }}>
        {/* CHNC Dashboard */}
        <div ref={dashRef} style={{ width: 836, height: 540, flexShrink: 0, borderRadius: 8, overflow: 'hidden', boxShadow: '0 0 0 1px rgba(52,204,50,0.2), 0 20px 60px rgba(0,0,0,0.6)' }}>
          <CHNCDashboard tilesTrigger={true} activeModule={activeModule} onModuleChange={() => {}} stepCount={stepCount} showWorkflow={true} />
        </div>

        {/* Workflow node canvas — Android recents stacking */}
        <WorkflowStack steps={steps} count={stepCount} />
      </div>

      <p style={{
        fontFamily: "'Archivo', sans-serif", fontSize: 18, color: '#fff',
        lineHeight: '24px', textAlign: 'center', maxWidth: 804,
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
      </p>
    </section>
  )
}

function AllOfThisWithJust() {
  const items = [
    'Brand briefs, objectives & guidelines',
    'Approved design/tonality references',
    'Content formats & publishing needs',
  ]
  return (
    <section style={{ padding: '100px', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Saira Condensed', sans-serif",
          fontSize: 80, fontWeight: 800, lineHeight: '70px',
          textTransform: 'uppercase', color: '#fff', margin: 0,
        }}>All of this with just...</h2>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, marginTop: 16 }}>
          Create Content and get approval in hours, not days.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 20, width: '100%', maxWidth: 1240 }}>
        {items.map((text, i) => (
          <div key={i} className="card-hover" style={{
            flex: 1, background: CARD, border: `1px solid ${G}`,
            padding: 30,
          }}>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, lineHeight: '24px', margin: 0 }}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const auditQs = [
  { q: 'Looking for an', qGreen: 'audit?', opts: ['YES', 'NO', 'MAYBE'], active: 0 },
  { q: 'Ready to enhance your', qGreen: 'strategies?', opts: ['JOIN OUR WEBINAR', 'CONTACT US', 'LEARN MORE'], active: 2 },
  { q: 'Need a', qGreen: 'financial', qEnd: ' review?', opts: ['VIEW OUR SERVICES', 'GET IN TOUCH', 'SCHEDULE A CALL'], active: 1 },
  { q: 'Curious about our', qGreen: 'process?', opts: ['CHECK OUR CASE STUDIES', 'READ CLIENT TESTIMONIALS', 'EXPLORE OUR METHODS'], active: 2 },
]

function ReadyToCreate() {
  const [selections, setSelections] = useState(
    auditQs.map(q => q.active)
  )

  const handleSelect = (qi, oi) => {
    setSelections(prev => {
      const next = [...prev]
      next[qi] = oi
      return next
    })
  }

  return (
    <section style={{ padding: '100px', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>
      <h2 style={{
        fontFamily: "'Saira Condensed', sans-serif",
        fontSize: 80, fontWeight: 800, lineHeight: '80px',
        textTransform: 'uppercase', textAlign: 'center', margin: 0,
      }}>
        <span style={{ color: '#fff' }}>Ready to Create </span>
        <span style={{ color: G }}>Content</span>
        <span style={{ color: '#fff' }}>?</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
        {auditQs.map((q, qi) => (
          <div key={qi} style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500, fontSize: 18, color: '#fff', textAlign: 'center' }}>
              {q.q} <span style={{ color: G }}>{q.qGreen}</span>{q.qEnd || ''}
            </p>
            <div style={{ display: 'flex', gap: 20 }}>
              {q.opts.map((opt, oi) => (
                <BtnOutline key={oi} active={oi === selections[qi]} onClick={() => handleSelect(qi, oi)}>{opt}</BtnOutline>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section style={{ padding: '100px', display: 'flex', flexDirection: 'column', gap: 80, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          paddingBottom: 10, paddingTop: 5, borderBottom: `2px solid ${G}`,
          marginBottom: 10,
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
        {[
          ['Your name', 'Contact number'],
          ['Company name', 'Designation'],
          ['Your email', null],
        ].map((row, ri) => (
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
        <BtnGreen type="submit">Send Message</BtnGreen>
      </form>
    </section>
  )
}

function Footer() {
  return (
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
                <BtnGreen style={{ width: 323 }}>I skipped to the end</BtnGreen>
                <button className="btn-outline" style={{
                  width: 323, background: CARD, border: `1px solid ${G}`,
                  padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif",
                  fontSize: 16, fontWeight: 700, color: G,
                  textTransform: 'uppercase', cursor: 'pointer',
                }}>I went through the whole website</button>
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
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function SolutionsPage() {
  const [activePill, setActivePill] = useState('CreateIT')
  const activeModule = activePill

  return (
    <div style={{ background: DARK, minHeight: '100vh', paddingTop: 106, color: '#fff' }}>
      <Hero active={activePill} onSelect={setActivePill} />
      <ContentCreation />
      <HowWeDoIt activeModule={activeModule} />
      <AllOfThisWithJust />
      <ReadyToCreate />
      <Contact />
      <Footer />
    </div>
  )
}
