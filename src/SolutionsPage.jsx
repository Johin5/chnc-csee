'use client'

// Solutions Page — built from Figma node 1:1559 (Landing Page - Dark-Solution)
import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import useResponsive from './useResponsive'
import CHNCPlaceholder from './CHNCPlaceholder'
import ContactForm from './ContactForm'

import Footer from './Footer'

const CHNCDashboard = dynamic(() => import('./CHNCDashboard'), { ssr: false, loading: () => <CHNCPlaceholder /> })

const G     = '#34cc32'
const DARK  = '#000718'
const CARD  = '#0f1520'
const MUTED = 'rgba(255,255,255,0.7)'
const DIM   = '#666a74'
const BORDER = 'rgba(255,255,255,0.1)'

// ─── Figma assets ─────────────────────────────────────────────────────────────

// ─── Shared atoms ─────────────────────────────────────────────────────────────
const BtnGreen = ({ children, style, ...p }) => (
  <button {...p} className="btn-outline" style={{
    background: 'transparent', color: '#fff', border: '1px solid #fff',
    height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif",
    fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.02em', cursor: 'pointer', backdropFilter: 'blur(10px)', ...style,
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
        background: 'transparent',
        color: (active || hovered) ? G : '#fff',
        border: `1px solid ${active ? G : hovered ? 'rgba(52,204,50,0.5)' : 'rgba(255,255,255,0.15)'}`,
        height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif",
        fontSize: 16, fontWeight: (active || hovered) ? 700 : 500,
        textTransform: 'uppercase', letterSpacing: '0.02em',
        cursor: 'pointer', backdropFilter: 'blur(10px)',
        transition: 'all 0.2s ease',
        transform: hovered && !active ? 'scale(1.02)' : 'scale(1)',
        ...style,
      }}>{children}</button>
  )
}
const Pill = ({ label, active, onClick }) => (
  <div className="pill-hover" onClick={onClick} style={{
    height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', backdropFilter: 'blur(10px)',
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
  const { isSmall } = useResponsive()
  const services = ['InsightIT','LocateIT','CreateIT','AmplifyIT','SocialiseIT','InfluenceIT','ScriptIT','AigenIT','SearchIT','InvoiceIT']

  return (
    <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0', textAlign: 'center', position: 'relative' }}>
      {/* CHNC */}
      <div style={{ marginBottom: 24 }}>
        <p style={{
          fontFamily: "'Archivo', sans-serif",
          fontSize: 'clamp(64px, 13vw, 130px)', fontWeight: 800, lineHeight: 1.1,
          color: G, letterSpacing: '-3.25px',
          margin: 0,
        }}>CHNC</p>
      </div>

      {/* headline */}
      <h1 style={{
        fontFamily: "'Saira Condensed', sans-serif",
        fontSize: isSmall ? 'clamp(48px, 12.2vw, 150px)' : 'clamp(56px, 14vw, 150px)', fontWeight: 800, lineHeight: 1,
        textTransform: 'uppercase', letterSpacing: '-3px',
        margin: 0, whiteSpace: 'nowrap',
      }}>
        <span style={{ color: '#fff' }}>ALL IN </span>
        <span style={{ color: '#fff' }}>ONE </span>
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

  const { isMobile } = useResponsive()

  return (
    <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Saira Condensed', sans-serif",
          fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, lineHeight: 1,
          textTransform: 'uppercase', color: '#fff', margin: 0,
        }}>CONTENT CREATION</h2>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: MUTED, marginTop: 16 }}>
          Create Content and get approval in hours, not days.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20, width: '100%', maxWidth: 1240 }}>
        {cards.map((c, i) => (
          <div key={i} className="card-hover" style={{
            flex: 1, background: 'transparent', border: `2px solid ${BORDER}`,
            padding: 'clamp(20px, 4vw, 30px)',
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
  LocateIT: [
    { bold: 'Create', rest: ' every listing — details, hours and map pin in one form' },
    { bold: 'Audit', rest: ' at scale — 42,318 checked, strays caught & fixed' },
    { bold: 'Manage', rest: ' — update once, publish to 312 locations' },
    { bold: 'Verify', rest: ' every location — submitted → verified, tracked live' },
    { bold: 'Go live', rest: ' on Google — every branch found, everywhere' },
    { bold: 'Optimise', rest: ' with ranked, high-impact actions done for you' },
    { bold: 'Perform', rest: ' — track impressions, actions and mobile share' },
    { stat: true, text: '10 stores or 10,000 — one dashboard' },
  ],
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
  const { isSmall } = useResponsive()
  const CARD_H = 68, GAP = 28, SLOT = CARD_H + GAP, PEEK = 18, MAX_VIS = 4

  const stackedN = Math.max(0, count - MAX_VIS)

  // In the small-screen column layout, `flex: 1` resolves to a 0-height flex
  // basis and collapses the stack — give it a fixed height + full width there.
  return (
    <div style={isSmall
      ? { width: '100%', flexShrink: 0, height: 540, position: 'relative', overflow: 'hidden' }
      : { flex: 1, height: 540, position: 'relative', overflow: 'hidden' }}>
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
              height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box',
              display: 'flex', alignItems: 'center', justifyContent: isStat ? 'center' : 'flex-start', gap: 14,
              height: '100%', boxSizing: 'border-box',
              animation: visible && !stacked && !isStat ? `fillBg 0.3s ease forwards 0.65s` : undefined,
              transition: 'background 0.4s ease',
            }}>
              {isStat ? (
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: isSmall ? 24 : 32, color: G, lineHeight: isSmall ? '28px' : '36px', margin: 0, textAlign: 'center' }}>
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
  const { isSmall } = useResponsive()
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
    // Variable durations per frame (ms): Brief, Generate, Approve, Adapt, Copy, Merge, Publish, stat
    const durations = [3000, 4000, 3500, 3000, 4000, 3000, 3500, 2000]
    let c = 0
    const advance = () => {
      c++
      if (c > steps.length) return
      setStepCount(c)
      setTimeout(advance, durations[c] || 3000)
    }
    const firstTimer = setTimeout(advance, durations[0] || 3000)
    return () => clearTimeout(firstTimer)
  }, [steps, inView])

  return (
    <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
      <h2 style={{
        fontFamily: "'Saira Condensed', sans-serif",
        fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, lineHeight: 1,
        textTransform: 'uppercase', textAlign: 'center', margin: 0,
      }}>
        <span style={{ color: '#fff' }}>How we do </span>
        <span style={{ color: G }}>IT?</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: 50, alignItems: 'center', width: '100%', maxWidth: 1280 }}>
        {/* CHNC Dashboard */}
        <div ref={dashRef} style={{ width: isSmall ? '100%' : 836, maxWidth: 836, height: isSmall ? 'clamp(300px, 60vw, 540px)' : 540, flexShrink: 0, borderRadius: 8, overflow: 'hidden', boxShadow: '0 0 0 1px rgba(52,204,50,0.2), 0 20px 60px rgba(0,0,0,0.6)' }}>
          <CHNCDashboard tilesTrigger={true} activeModule={activeModule} onModuleChange={() => {}} stepCount={stepCount} showWorkflow={true} />
        </div>

        {/* Workflow node canvas — Android recents stacking */}
        <WorkflowStack steps={steps} count={stepCount} />
      </div>

      <p style={{
        fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: '#fff',
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
  const { isMobile } = useResponsive()

  return (
    <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Saira Condensed', sans-serif",
          fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, lineHeight: 1,
          textTransform: 'uppercase', color: '#fff', margin: 0,
        }}>All of this with just...</h2>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: MUTED, marginTop: 16 }}>
          Create Content and get approval in hours, not days.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20, width: '100%', maxWidth: 1240 }}>
        {items.map((text, i) => (
          <div key={i} className="card-hover" style={{
            flex: 1, background: 'transparent', border: `2px solid ${BORDER}`,
            padding: 'clamp(20px, 4vw, 30px)',
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
    <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
      <h2 style={{
        fontFamily: "'Saira Condensed', sans-serif",
        fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, lineHeight: 1,
        textTransform: 'uppercase', textAlign: 'center', margin: 0,
      }}>
        <span style={{ color: '#fff' }}>Ready to Create </span>
        <span style={{ color: G }}>Content</span>
        <span style={{ color: '#fff' }}>?</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
        {auditQs.map((q, qi) => (
          <div key={qi} style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500, fontSize: 'clamp(15px, 2vw, 18px)', color: '#fff', textAlign: 'center' }}>
              {q.q} <span style={{ color: G }}>{q.qGreen}</span>{q.qEnd || ''}
            </p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
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
    <section style={{ padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
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
          fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, lineHeight: 1,
          textTransform: 'uppercase', textAlign: 'center', margin: 0,
        }}>
          <span style={{ color: '#fff' }}>We will </span>
          <span style={{ color: G }}>shoot </span>
          <span style={{ color: '#fff' }}>you</span>
        </h2>
      </div>

      <ContactForm />
    </section>
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
