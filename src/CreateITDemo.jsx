// CreateIT Animated Demo — 7-frame walkthrough simulating real product flow
// BRIEF IT → GENERATE IMAGE → APPROVE → ADAPT → GENERATE COPY → MERGE → PUBLISH
import { useState, useEffect, useRef } from 'react'
import useResponsive from './useResponsive'

const G = '#34cc32'
const DARK_BG = '#0d1117'
const SIDEBAR_BG = '#111820'
const CONTENT_BG = '#ffffff'
const CARD_BG = '#f5f6f8'
const BORDER = '#e2e4e8'
const TEXT = '#1a1a2e'
const TEXT_DIM = '#6b7280'
const GREEN_LIGHT = '#e8fde8'

// ─── Typewriter hook ────────────────────────────────────────────────────────
function useTypewriter(text, startTime, speed = 50) {
  const [typed, setTyped] = useState('')
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    setTyped('')
    setElapsed(0)
  }, [text, startTime])

  useEffect(() => {
    if (elapsed < startTime) {
      const wait = setTimeout(() => setElapsed(startTime), startTime - elapsed)
      return () => clearTimeout(wait)
    }
    if (typed.length >= text.length) return
    const id = setTimeout(() => setTyped(text.slice(0, typed.length + 1)), speed)
    return () => clearTimeout(id)
  }, [typed, text, startTime, speed, elapsed])

  return typed
}

// ─── Sidebar (constant across all frames) ───────────────────────────────────
function Sidebar({ activeStep }) {
  const { isMobile } = useResponsive()
  const modules = ['InsightIT', 'LocateIT', 'CreateIT', 'AmplifyIT', 'SocialiseIT', 'InfluenceIT', 'ScriptIT', 'AigenIT', 'SearchIT', 'InvoiceIT']
  return (
    <div style={{ width: isMobile ? 120 : 180, background: SIDEBAR_BG, display: 'flex', flexDirection: 'column', height: '100%', flexShrink: 0 }}>
      {/* CHNC Logo */}
      <div style={{ padding: '14px 16px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <span style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 900, fontSize: 22, color: G, letterSpacing: 2 }}>CHNC</span>
        <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 6.5, color: '#888', letterSpacing: 1.5, textTransform: 'uppercase' }}>The Opportunity Creators</span>
      </div>

      {/* Client */}
      <div style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ width: 28, height: 28, borderRadius: 4, background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#e53935', fontSize: 10, fontWeight: 800 }}>M</span>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 10, color: '#fff', fontFamily: "'Archivo', sans-serif", fontWeight: 600 }}>Mahindra & Mah..</p>
          <p style={{ margin: 0, fontSize: 8, color: '#6b7280', fontFamily: "'Archivo', sans-serif" }}>Automobile Ind</p>
        </div>
      </div>

      {/* Module list */}
      <div style={{ flex: 1, padding: '6px 8px', display: 'flex', flexDirection: 'column', gap: 1 }}>
        {modules.map(m => (
          <div key={m} style={{
            padding: '7px 10px', borderRadius: 4, fontSize: 10, fontFamily: "'Archivo', sans-serif",
            color: m === 'CreateIT' ? '#fff' : '#6b7280', fontWeight: m === 'CreateIT' ? 600 : 400,
            background: m === 'CreateIT' ? G : 'transparent',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{ fontSize: 10 }}>◎</span> {m}
          </div>
        ))}
      </div>

      {/* Upgrade */}
      <div style={{ padding: '10px 14px' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '6px', textAlign: 'center', fontSize: 9, color: '#fff', fontFamily: "'Archivo', sans-serif", fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>Upgrade Now</div>
      </div>
      <div style={{ padding: '6px 14px 10px', display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: 9, color: G }}>ConvergenSEE</span>
        <span style={{ fontSize: 7, color: '#6b7280' }}>©2025</span>
      </div>
    </div>
  )
}

// ─── Top bar ────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <div style={{ height: 40, background: CONTENT_BG, borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 12, color: TEXT_DIM }}>≡</span>
        <div style={{ background: CARD_BG, borderRadius: 4, padding: '4px 40px 4px 8px', fontSize: 9, color: TEXT_DIM, fontFamily: "'Archivo'" }}>🔍 Search</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {['○', '🔔', '⊙', '⚙'].map((ic, i) => <span key={i} style={{ fontSize: 10, color: TEXT_DIM }}>{ic}</span>)}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: '#ddd' }} />
          <span style={{ fontSize: 8, color: TEXT, fontFamily: "'Archivo'" }}>Sledge Hammer</span>
        </div>
      </div>
    </div>
  )
}

// ─── Progress bar ───────────────────────────────────────────────────────────
function ProgressBar({ step, total }) {
  const labels = ['CAMPAIGN', 'BRIEF', 'PLANNING', 'APPROVE', 'ADAPT', 'COPY', 'PUBLISH']
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, padding: '0 16px', marginBottom: 10 }}>
      {labels.map((l, i) => (
        <div key={l} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <div style={{ height: 3, width: '100%', background: i < step ? G : '#e0e0e0', borderRadius: 2, transition: 'background 0.5s ease' }} />
          <span style={{ fontSize: 6, fontFamily: "'Archivo'", color: i < step ? G : TEXT_DIM, fontWeight: i < step ? 700 : 400 }}>{l}</span>
        </div>
      ))}
    </div>
  )
}

// ─── Frame 1: Create Campaign ───────────────────────────────────────────────
function Frame1({ t }) {
  const name = useTypewriter('Independence Day Post', 300, 60)
  const showPlatform = t > 1200
  const showRegion = t > 1600

  return (
    <div style={{ padding: 16 }}>
      <ProgressBar step={1} />
      <h3 style={{ margin: '0 0 12px', fontSize: 13, fontFamily: "'Saira Condensed'", fontWeight: 700, color: TEXT, textTransform: 'uppercase' }}>Create Campaign</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Campaign Name */}
        <div>
          <label style={{ fontSize: 8, color: TEXT_DIM, fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 3 }}>Campaign Name</label>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 4, padding: '6px 10px', fontSize: 10, fontFamily: "'Archivo'", color: TEXT, minHeight: 14 }}>
            {name}<span style={{ opacity: t % 1000 > 500 ? 0 : 1, color: G }}>|</span>
          </div>
        </div>
        {/* Platform */}
        <div style={{ opacity: showPlatform ? 1 : 0, transform: showPlatform ? 'translateY(0)' : 'translateY(8px)', transition: 'all 0.4s ease' }}>
          <label style={{ fontSize: 8, color: TEXT_DIM, fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 3 }}>Platform</label>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 4, padding: '6px 10px', fontSize: 10, fontFamily: "'Archivo'", color: TEXT, display: 'flex', justifyContent: 'space-between' }}>
            <span>Instagram</span><span style={{ color: TEXT_DIM }}>▾</span>
          </div>
        </div>
        {/* Region */}
        <div style={{ opacity: showRegion ? 1 : 0, transform: showRegion ? 'translateY(0)' : 'translateY(8px)', transition: 'all 0.4s ease' }}>
          <label style={{ fontSize: 8, color: TEXT_DIM, fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 3 }}>Region</label>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 4, padding: '6px 10px', fontSize: 10, fontFamily: "'Archivo'", color: TEXT }}>India — All States</div>
        </div>
      </div>
    </div>
  )
}

// ─── Frame 2: Requirements ──────────────────────────────────────────────────
function Frame2({ t }) {
  const checks = [
    'Visual Direction for the creatives',
    'What is the brief?',
    'Target audience details',
    'Key messaging points',
  ]
  return (
    <div style={{ padding: 16 }}>
      <ProgressBar step={2} />
      <h3 style={{ margin: '0 0 12px', fontSize: 13, fontFamily: "'Saira Condensed'", fontWeight: 700, color: TEXT, textTransform: 'uppercase' }}>Assign Questions</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {checks.map((c, i) => {
          const checked = t > i * 400 + 200
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', background: checked ? GREEN_LIGHT : CARD_BG, borderRadius: 4, transition: 'background 0.3s ease' }}>
              <div style={{
                width: 14, height: 14, borderRadius: 3, border: `1.5px solid ${checked ? G : BORDER}`,
                background: checked ? G : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s ease', transform: checked ? 'scale(1.1)' : 'scale(1)',
              }}>
                {checked && <span style={{ color: '#fff', fontSize: 9, fontWeight: 800 }}>✓</span>}
              </div>
              <span style={{ fontSize: 9, fontFamily: "'Archivo'", color: TEXT }}>{c}</span>
            </div>
          )
        })}
      </div>
      {t > 1600 && (
        <div style={{ marginTop: 14, padding: '7px 16px', background: G, color: '#fff', fontSize: 9, fontFamily: "'Saira Condensed'", fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', borderRadius: 4, animation: 'pulse 1.5s infinite', letterSpacing: 0.5 }}>
          Send for Approval →
        </div>
      )}
    </div>
  )
}

// ─── Frame 3: Generate Images ───────────────────────────────────────────────
function Frame3({ t }) {
  const brief = useTypewriter('Festive post for independence day', 0, 40)
  const showGPT = t > 1200
  const showGemini = t > 1400
  const generating = t > 1800 && t < 2400
  const showGrid = t > 2400

  return (
    <div style={{ padding: 16 }}>
      <ProgressBar step={3} />
      <h3 style={{ margin: '0 0 8px', fontSize: 13, fontFamily: "'Saira Condensed'", fontWeight: 700, color: TEXT, textTransform: 'uppercase' }}>Planning — Generate Images</h3>

      {/* Brief input */}
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: 8, color: TEXT_DIM, fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 3 }}>Brief</label>
        <div style={{ border: `1px solid ${BORDER}`, borderRadius: 4, padding: '6px 10px', fontSize: 9, fontFamily: "'Archivo'", color: TEXT }}>{brief}</div>
      </div>

      {/* AI providers */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
        {[{ name: 'GPT', show: showGPT }, { name: 'Gemini 2.0', show: showGemini }].map(p => (
          <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 4, opacity: p.show ? 1 : 0.3, transition: 'opacity 0.3s' }}>
            <div style={{ width: 12, height: 12, borderRadius: 2, border: `1.5px solid ${p.show ? G : BORDER}`, background: p.show ? G : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {p.show && <span style={{ color: '#fff', fontSize: 7, fontWeight: 800 }}>✓</span>}
            </div>
            <span style={{ fontSize: 8, fontFamily: "'Archivo'", color: TEXT }}>{p.name}</span>
          </div>
        ))}
      </div>

      {/* Generate button */}
      {!generating && !showGrid && (
        <div style={{ padding: '6px 16px', background: t > 1600 ? G : CARD_BG, color: t > 1600 ? '#fff' : TEXT_DIM, fontSize: 9, fontFamily: "'Saira Condensed'", fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', borderRadius: 4, animation: t > 1600 ? 'pulse 1s infinite' : 'none' }}>Generate</div>
      )}

      {/* Loading modal */}
      {generating && (
        <div style={{ background: CARD_BG, borderRadius: 6, padding: 12, textAlign: 'center', border: `1px solid ${BORDER}` }}>
          <p style={{ fontSize: 8, fontFamily: "'Archivo'", color: TEXT, margin: '0 0 6px', fontWeight: 600 }}>Generating with Dual AI (GPT + Gemini 2.0)</p>
          <div style={{ height: 4, background: '#e0e0e0', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ height: '100%', background: G, width: `${Math.min(((t - 1800) / 600) * 100, 100)}%`, borderRadius: 2, transition: 'width 0.1s linear' }} />
          </div>
        </div>
      )}

      {/* Image grid */}
      {showGrid && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, marginTop: 8 }}>
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{
              aspectRatio: '1/1', background: `hsl(${120 + i * 30}, 30%, ${75 - i * 5}%)`, borderRadius: 4,
              opacity: t > 2400 + i * 150 ? 1 : 0, transform: t > 2400 + i * 150 ? 'translateY(0)' : 'translateY(6px)',
              transition: 'all 0.4s ease', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: 7, color: 'rgba(0,0,0,0.3)', fontFamily: "'Archivo'" }}>{i < 3 ? 'Gemini' : 'GPT'}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Frame 4: Approve ───────────────────────────────────────────────────────
function Frame4({ t }) {
  const selected = t > 400
  const sent = t > 1000
  const approved = t > 1500

  return (
    <div style={{ padding: 16 }}>
      <ProgressBar step={4} />
      <h3 style={{ margin: '0 0 12px', fontSize: 13, fontFamily: "'Saira Condensed'", fontWeight: 700, color: TEXT, textTransform: 'uppercase' }}>Select & Approve</h3>

      {/* Image grid with selection */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, marginBottom: 12 }}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{
            aspectRatio: '1/1', background: `hsl(${120 + i * 30}, 30%, ${75 - i * 5}%)`, borderRadius: 4,
            border: i === 2 && selected ? `2px solid ${G}` : '2px solid transparent',
            position: 'relative', transition: 'border 0.3s ease',
          }}>
            {i === 2 && selected && (
              <div style={{ position: 'absolute', top: 3, right: 3, width: 12, height: 12, borderRadius: 6, background: G, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: 7, fontWeight: 800 }}>✓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Send / Approval status */}
      {sent && !approved && (
        <div style={{ background: '#fff8e1', border: '1px solid #ffd54f', borderRadius: 4, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.4s ease' }}>
          <span style={{ fontSize: 12 }}>⏳</span>
          <span style={{ fontSize: 9, fontFamily: "'Archivo'", color: '#f57f17', fontWeight: 600 }}>Waiting for Approval...</span>
        </div>
      )}
      {approved && (
        <div style={{ background: GREEN_LIGHT, border: `1px solid ${G}`, borderRadius: 4, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6, animation: 'fadeInUp 0.4s ease' }}>
          <span style={{ fontSize: 12 }}>✅</span>
          <span style={{ fontSize: 9, fontFamily: "'Archivo'", color: '#1b5e20', fontWeight: 600 }}>Approved by Stakeholder</span>
        </div>
      )}
    </div>
  )
}

// ─── Frame 5: Adapt ─────────────────────────────────────────────────────────
function Frame5({ t }) {
  const formats = [
    { label: 'Square', ratio: '1/1', delay: 300 },
    { label: 'Story', ratio: '9/16', delay: 600 },
    { label: 'Banner', ratio: '16/9', delay: 900 },
  ]
  const lang = t < 1200 ? 'English' : t < 1500 ? 'Hindi' : 'Tamil'

  return (
    <div style={{ padding: 16 }}>
      <ProgressBar step={5} />
      <h3 style={{ margin: '0 0 12px', fontSize: 13, fontFamily: "'Saira Condensed'", fontWeight: 700, color: TEXT, textTransform: 'uppercase' }}>Adapt — Resize & Localize</h3>

      {/* Format grid */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
        {formats.map(f => (
          <div key={f.label} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            opacity: t > f.delay ? 1 : 0, transform: t > f.delay ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 0.4s ease',
          }}>
            <div style={{ width: '100%', aspectRatio: f.ratio, background: 'hsl(150, 30%, 70%)', borderRadius: 4, border: `1px solid ${BORDER}` }} />
            <span style={{ fontSize: 7, fontFamily: "'Archivo'", color: TEXT_DIM }}>{f.label}</span>
          </div>
        ))}
      </div>

      {/* Language switcher */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <label style={{ fontSize: 8, color: TEXT_DIM, fontFamily: "'Archivo'", fontWeight: 600 }}>Language:</label>
        <div style={{ border: `1px solid ${BORDER}`, borderRadius: 4, padding: '4px 10px', fontSize: 9, fontFamily: "'Archivo'", color: TEXT, transition: 'all 0.3s ease' }}>
          {lang} <span style={{ color: TEXT_DIM }}>▾</span>
        </div>
      </div>
    </div>
  )
}

// ─── Frame 6: Generate Copy ─────────────────────────────────────────────────
function Frame6({ t }) {
  const desc = useTypewriter('Independence Day Post', 0, 50)
  const ideation = useTypewriter('Wish everyone Happy Independence Day', 800, 40)
  const generating = t > 1600 && t < 2200
  const showVariations = t > 2200

  const variations = [
    'Celebrating the spirit of freedom! 🇮🇳 Happy Independence Day to every Indian heart.',
    'From struggle to strength. India shines brighter every year. #IndependenceDay',
    'Jai Hind! 🇮🇳 Honoring the heroes who made our freedom possible.',
  ]

  return (
    <div style={{ padding: 16 }}>
      <ProgressBar step={6} />
      <h3 style={{ margin: '0 0 8px', fontSize: 13, fontFamily: "'Saira Condensed'", fontWeight: 700, color: TEXT, textTransform: 'uppercase' }}>Generate Copy</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 10 }}>
        <div>
          <label style={{ fontSize: 8, color: TEXT_DIM, fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 3 }}>Description</label>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 4, padding: '5px 8px', fontSize: 9, fontFamily: "'Archivo'", color: TEXT }}>{desc}</div>
        </div>
        <div>
          <label style={{ fontSize: 8, color: TEXT_DIM, fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 3 }}>Ideation</label>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 4, padding: '5px 8px', fontSize: 9, fontFamily: "'Archivo'", color: TEXT }}>{ideation}</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div>
            <label style={{ fontSize: 8, color: TEXT_DIM, fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 3 }}>Tone</label>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 4, padding: '5px 8px', fontSize: 9, fontFamily: "'Archivo'", color: TEXT }}>Authentic</div>
          </div>
        </div>
      </div>

      {/* Loading */}
      {generating && (
        <div style={{ background: CARD_BG, borderRadius: 6, padding: 10, textAlign: 'center', border: `1px solid ${BORDER}` }}>
          <p style={{ fontSize: 8, fontFamily: "'Archivo'", color: TEXT, margin: '0 0 4px', fontWeight: 600 }}>Generating content...</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 4 }}>
            <span style={{ fontSize: 7, color: G }}>✓ OpenAI</span>
            <span style={{ fontSize: 7, color: t > 1900 ? G : TEXT_DIM }}>{t > 1900 ? '✓' : '...'} Gemini</span>
          </div>
          <div style={{ height: 3, background: '#e0e0e0', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ height: '100%', background: G, width: `${Math.min(((t - 1600) / 600) * 100, 100)}%`, borderRadius: 2 }} />
          </div>
        </div>
      )}

      {/* Variations */}
      {showVariations && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {variations.map((v, i) => (
            <div key={i} style={{
              padding: '6px 8px', background: i === 0 ? GREEN_LIGHT : CARD_BG, borderRadius: 4,
              border: i === 0 ? `1px solid ${G}` : `1px solid ${BORDER}`,
              fontSize: 8, fontFamily: "'Archivo'", color: TEXT, lineHeight: '12px',
              opacity: t > 2200 + i * 200 ? 1 : 0, transform: t > 2200 + i * 200 ? 'translateY(0)' : 'translateY(6px)',
              transition: 'all 0.4s ease',
            }}>{v}</div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Frame 7: Merge & Publish ───────────────────────────────────────────────
function Frame7({ t }) {
  const merging = t > 400 && t < 1200
  const merged = t > 1200
  const showLogo = t > 1800

  return (
    <div style={{ padding: 16 }}>
      <ProgressBar step={7} />
      <h3 style={{ margin: '0 0 12px', fontSize: 13, fontFamily: "'Saira Condensed'", fontWeight: 700, color: TEXT, textTransform: 'uppercase' }}>Merge & Publish</h3>

      {/* Merge animation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: merging ? 30 : 0, transition: 'gap 0.8s ease', marginBottom: 16, minHeight: 80 }}>
        {/* Image card */}
        <div style={{
          width: 80, height: 80, background: 'hsl(150, 30%, 70%)', borderRadius: 4,
          transform: merged ? 'translateX(0) scale(1)' : 'translateX(-20px)',
          transition: 'transform 0.6s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 7, color: 'rgba(0,0,0,0.3)' }}>Image</span>
        </div>

        {/* Text card */}
        <div style={{
          width: 80, height: 80, background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 4,
          transform: merged ? 'translateX(-80px) scale(1)' : 'translateX(20px)',
          transition: 'transform 0.6s ease', padding: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          opacity: merged ? 0 : 1,
        }}>
          <div style={{ fontSize: 5, color: TEXT, fontFamily: "'Archivo'", lineHeight: '7px' }}>Celebrating the spirit of freedom! 🇮🇳 Happy Independence Day...</div>
        </div>

        {/* Merged result */}
        {merged && (
          <div style={{
            position: 'absolute', width: 120, background: '#fff', borderRadius: 6, overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)', animation: 'fadeInUp 0.5s ease',
          }}>
            <div style={{ height: 70, background: 'hsl(150, 30%, 70%)' }} />
            <div style={{ padding: 6 }}>
              <div style={{ fontSize: 6, color: TEXT, fontFamily: "'Archivo'", lineHeight: '8px' }}>Celebrating the spirit of freedom! 🇮🇳</div>
            </div>
          </div>
        )}
      </div>

      {/* Progress complete */}
      {merged && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ height: 4, background: '#e0e0e0', borderRadius: 2, overflow: 'hidden', marginBottom: 8 }}>
            <div style={{ height: '100%', background: G, width: '100%', borderRadius: 2, transition: 'width 0.5s ease' }} />
          </div>
          <div style={{ padding: '7px 16px', background: G, color: '#fff', fontSize: 9, fontFamily: "'Saira Condensed'", fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', borderRadius: 4 }}>Published ✓</div>
        </div>
      )}

      {/* CHNC logo hold */}
      {showLogo && (
        <div style={{ textAlign: 'center', marginTop: 16, animation: 'fadeInUp 0.6s ease' }}>
          <span style={{ fontFamily: "'Saira Condensed'", fontWeight: 900, fontSize: 20, color: G, letterSpacing: 3 }}>CHNC</span>
        </div>
      )}
    </div>
  )
}

// ─── Overlay text ───────────────────────────────────────────────────────────
function OverlayText({ main, sub, visible }) {
  return (
    <div style={{
      position: 'absolute', bottom: 12, left: 0, right: 0, textAlign: 'center', zIndex: 10,
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)',
      transition: 'all 0.5s ease', pointerEvents: 'none',
    }}>
      <p style={{ margin: 0, fontSize: 11, fontFamily: "'Archivo'", fontWeight: 700, color: '#fff', textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>{main}</p>
      <p style={{ margin: '2px 0 0', fontSize: 8, fontFamily: "'Archivo'", color: G, textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>{sub}</p>
    </div>
  )
}

// ─── Cursor ─────────────────────────────────────────────────────────────────
function AnimatedCursor({ frame, t }) {
  const { isMobile, isSmall } = useResponsive()
  // Cursor positions per frame — relative to content area
  const positions = {
    0: { x: 280, y: 120 }, // Campaign name field
    1: { x: 180, y: 140 }, // Checkboxes
    2: { x: 300, y: 200 }, // Generate button area
    3: { x: 250, y: 130 }, // Image selection
    4: { x: 300, y: 180 }, // Format area
    5: { x: 300, y: 220 }, // Generate copy
    6: { x: 350, y: 260 }, // Publish
  }
  const raw = positions[frame] || { x: 300, y: 200 }
  // Narrower content area on small screens — keep the cursor in-bounds
  const cap = isMobile ? 180 : isSmall ? 240 : Infinity
  const pos = { x: Math.min(raw.x, cap), y: raw.y }

  return (
    <svg width="14" height="18" viewBox="0 0 14 18" style={{
      position: 'absolute', left: pos.x, top: pos.y, zIndex: 20,
      transition: 'left 0.8s cubic-bezier(0.4,0,0.2,1), top 0.8s cubic-bezier(0.4,0,0.2,1)',
      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
      pointerEvents: 'none',
    }}>
      <path d="M0 0L0 14L4 10L8 18L10 17L6 9L12 9Z" fill="#000" stroke="#fff" strokeWidth="0.5" />
    </svg>
  )
}

// ─── Main Demo Component ────────────────────────────────────────────────────
const FRAME_DURATIONS = [2000, 2000, 3000, 2000, 2000, 3000, 2000] // ms per frame
const OVERLAY_TEXT = [
  { main: 'Step 1. Tell it what you need.', sub: 'Campaign name. Platform. That\'s it.' },
  { main: 'Step 2. Pick what you want answered.', sub: 'No long briefs. Just check and go.' },
  { main: 'Step 3. AI generates your visuals.', sub: 'Multiple options. Multiple AI engines. Seconds.' },
  { main: 'Pick one. Send for approval.', sub: 'One click. Done.' },
  { main: 'Step 4. One image. Every format. Every language.', sub: 'Adapt it once. Use it everywhere.' },
  { main: 'Step 5. AI writes the copy too.', sub: 'Multiple variations. Pick your favourite.' },
  { main: 'Brief. Generate. Approve. Adapt. Publish.', sub: 'All in one place. All in minutes.' },
]

export default function CreateITDemo() {
  const [frame, setFrame] = useState(0)
  const [frameTime, setFrameTime] = useState(0)
  const startRef = useRef(Date.now())
  const frameStartRef = useRef(Date.now())

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      setFrameTime(now - frameStartRef.current)
    }
    const id = setInterval(tick, 50)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const duration = FRAME_DURATIONS[frame] || 2000
    const timer = setTimeout(() => {
      if (frame < 6) {
        setFrame(f => f + 1)
        setFrameTime(0)
        frameStartRef.current = Date.now()
      } else {
        // Loop back
        setTimeout(() => {
          setFrame(0)
          setFrameTime(0)
          frameStartRef.current = Date.now()
        }, 1500)
      }
    }, duration)
    return () => clearTimeout(timer)
  }, [frame])

  const frames = [Frame1, Frame2, Frame3, Frame4, Frame5, Frame6, Frame7]
  const ActiveFrame = frames[frame]
  const overlay = OVERLAY_TEXT[frame]

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', background: SIDEBAR_BG, position: 'relative', overflow: 'hidden', fontFamily: "'Archivo', sans-serif" }}>
      <style>{`
        @keyframes pulse { 0%,100% { opacity: 1 } 50% { opacity: 0.7 } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

      <Sidebar activeStep={frame} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <TopBar />

        {/* Breadcrumb */}
        <div style={{ padding: '6px 16px', background: CONTENT_BG, borderBottom: `1px solid ${BORDER}` }}>
          <span style={{ fontSize: 8, color: TEXT_DIM, fontFamily: "'Archivo'" }}>Home › </span>
          <span style={{ fontSize: 8, color: TEXT, fontFamily: "'Archivo'", fontWeight: 600 }}>CreateIT</span>
        </div>

        {/* Content area */}
        <div style={{ flex: 1, background: CONTENT_BG, overflow: 'hidden', position: 'relative' }}>
          <ActiveFrame t={frameTime} />
          <AnimatedCursor frame={frame} t={frameTime} />
        </div>

        {/* Overlay text */}
        <OverlayText main={overlay.main} sub={overlay.sub} visible={true} />
      </div>
    </div>
  )
}
