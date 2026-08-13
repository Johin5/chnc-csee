'use client'

// ─── Variant C — "Bold art-directed" job page ────────────────────────────────
// The loud one. Full-viewport hero with an outlined/solid split display title
// over a green radial glow, borderline-editorial two-column brief divided by a
// single rule, an edge-to-edge monochrome team strip, and a horizontal green
// hiring timeline. Ends with the shared apply form + footer.

import Link from 'next/link'
import useResponsive from '../useResponsive'
import Footer from '../Footer'
import JoinSection from '../JoinSection'
import { TEAM_GROUPS } from '../lib/careersTeams'
import { TEAM } from '../lib/teamRoster'
import { G, DARK, MUTED, DIM, BORDER } from '../careersAtoms'

const SAIRA = "'Saira Condensed', sans-serif"
const ARCHIVO = "'Archivo', sans-serif"

const STEPS = [
  { n: '01', title: 'Apply', desc: "Send your CV and your work. That's it — no cover-letter theatre." },
  { n: '02', title: 'Intro chat', desc: "30 minutes with the team lead about what you've made and what you want to make." },
  { n: '03', title: 'Craft task', desc: 'A short exercise close to the real work — never free work we ship.' },
  { n: '04', title: 'Offer', desc: "We move fast. If it's a yes, you'll hear within the week." },
]

export default function VariantC({ job }) {
  const { isMobile, isSmall } = useResponsive()

  const group = TEAM_GROUPS.find(g => g.name === job.team)
  const faces = (group?.members || [])
    .map(name => TEAM.find(p => p.name === name))
    .filter(p => p && p.photo)

  const words = job.title.trim().split(/\s+/)
  const lastWord = words[words.length - 1]
  const outlined = words.slice(0, -1).join(' ')

  const sideBrief = [
    { no: '01', heading: "What you'll do", items: job.responsibilities },
    { no: '02', heading: "What you'll bring", items: job.requirements },
  ]

  return (
    <div style={{ background: DARK, color: '#fff', overflowX: 'clip' }}>
      {/* Hover / scrollbar behaviour CSS can't do inline */}
      <style>{`
        .vc-strip { scrollbar-width: none; -ms-overflow-style: none; }
        .vc-strip::-webkit-scrollbar { display: none; }
        .vc-strip img { filter: grayscale(1); transition: filter .4s ease, transform .4s ease; }
        .vc-face:hover img { filter: grayscale(0); transform: scale(1.03); }
        .vc-face:hover p { color: #fff !important; }
      `}</style>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative', boxSizing: 'border-box',
        minHeight: isMobile ? '78vh' : 'min(88vh, 1000px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: isMobile ? '150px 18px 90px' : '170px 40px 110px',
        background: [
          'radial-gradient(ellipse 52% 42% at 50% 40%, rgba(52,204,50,0.14), rgba(52,204,50,0) 72%)',
          'radial-gradient(ellipse 30% 24% at 82% 88%, rgba(52,204,50,0.06), rgba(52,204,50,0) 70%)',
        ].join(', '),
      }}>
        <p style={{
          fontFamily: SAIRA, fontWeight: 700, fontSize: isMobile ? 13 : 15,
          textTransform: 'uppercase', letterSpacing: '0.42em', color: G, margin: 0,
        }}>We&apos;re hiring</p>

        <h1 style={{
          fontFamily: SAIRA, fontWeight: 800, textTransform: 'uppercase',
          lineHeight: 0.92, letterSpacing: '0.01em',
          margin: '22px 0 0', maxWidth: '100%',
          fontSize: isMobile ? 'clamp(50px, 16.5vw, 72px)' : 'clamp(84px, 10.2vw, 148px)',
        }}>
          {outlined && (
            <span style={{
              display: 'block', color: 'transparent',
              WebkitTextStroke: isMobile ? '1px rgba(255,255,255,0.92)' : '2px rgba(255,255,255,0.92)',
            }}>{outlined}</span>
          )}
          <span style={{ display: 'block', color: G, textShadow: '0 0 60px rgba(52,204,50,0.35)' }}>{lastWord}</span>
        </h1>

        <p style={{
          fontFamily: SAIRA, fontWeight: 600, color: MUTED, margin: isMobile ? '30px 0 0' : '38px 0 0',
          fontSize: isMobile ? 12 : 15, textTransform: 'uppercase',
          letterSpacing: isMobile ? '0.22em' : '0.34em', textIndent: isMobile ? '0.22em' : '0.34em',
        }}>{job.team} &middot; Mumbai &middot; Full-time</p>

        <Link href="#apply" className="btn-outline" style={{
          marginTop: isMobile ? 40 : 52, textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 14,
          height: isMobile ? 54 : 62, padding: isMobile ? '0 34px' : '0 48px',
          border: `1px solid ${G}`, color: G, boxSizing: 'border-box',
          fontFamily: SAIRA, fontWeight: 700, fontSize: isMobile ? 17 : 20,
          textTransform: 'uppercase', letterSpacing: '0.1em',
        }}>
          Apply now
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M9 2v12m0 0l-5-5m5 5l5-5" stroke={G} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {!isMobile && (
          <div style={{
            position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
          }}>
            <span style={{ fontFamily: SAIRA, fontSize: 11, fontWeight: 600, letterSpacing: '0.4em', textIndent: '0.4em', color: DIM, textTransform: 'uppercase' }}>Scroll</span>
            <span style={{ width: 1, height: 42, background: `linear-gradient(180deg, ${G}, rgba(52,204,50,0))`, display: 'block' }} />
          </div>
        )}
      </section>

      {/* ── The brief — two columns, one rule, no boxes ──────────────────── */}
      <section style={{
        maxWidth: 1280, margin: '0 auto', boxSizing: 'border-box',
        padding: isSmall ? '72px 20px 76px' : '120px clamp(40px, 6vw, 100px) 130px',
      }}>
        <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row' }}>
          {sideBrief.map((col, i) => (
            <div key={col.no} style={{
              flex: 1, minWidth: 0,
              paddingRight: !isSmall && i === 0 ? 'clamp(36px, 5vw, 80px)' : 0,
              paddingLeft: !isSmall && i === 1 ? 'clamp(36px, 5vw, 80px)' : 0,
              borderLeft: !isSmall && i === 1 ? `1px solid ${BORDER}` : 'none',
              borderTop: isSmall && i === 1 ? `1px solid ${BORDER}` : 'none',
              paddingTop: isSmall && i === 1 ? 52 : 0,
              marginTop: isSmall && i === 1 ? 52 : 0,
            }}>
              <p style={{ fontFamily: SAIRA, fontWeight: 600, fontSize: 14, color: DIM, letterSpacing: '0.32em', textTransform: 'uppercase', margin: 0 }}>{col.no}</p>
              <h2 style={{
                fontFamily: SAIRA, fontWeight: 800, textTransform: 'uppercase',
                color: G, letterSpacing: '0.04em', lineHeight: 1,
                fontSize: isMobile ? 30 : 'clamp(32px, 2.9vw, 42px)', margin: '10px 0 0',
              }}>{col.heading}</h2>
              <ul style={{ listStyle: 'none', margin: isMobile ? '30px 0 0' : '40px 0 0', padding: 0 }}>
                {col.items.map((item, k) => (
                  <li key={k} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginTop: k === 0 ? 0 : 22 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: G, flexShrink: 0, marginTop: 8, boxShadow: '0 0 10px rgba(52,204,50,0.5)' }} />
                    <span style={{ fontFamily: ARCHIVO, fontSize: isMobile ? 15.5 : 17, color: MUTED, lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── The team — edge-to-edge monochrome strip ─────────────────────── */}
      {faces.length > 0 && (
        <section style={{ padding: isSmall ? '70px 0 76px' : '110px 0 120px', borderTop: `1px solid ${BORDER}`, boxSizing: 'border-box' }}>
          <div style={{ padding: '0 clamp(20px, 6vw, 100px)', textAlign: 'center' }}>
            <p style={{ fontFamily: SAIRA, fontWeight: 700, fontSize: isMobile ? 13 : 15, color: G, letterSpacing: '0.42em', textIndent: '0.42em', textTransform: 'uppercase', margin: 0 }}>The {job.team} team</p>
            <h2 style={{
              fontFamily: SAIRA, fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.95,
              fontSize: isMobile ? 'clamp(34px, 9.4vw, 44px)' : 'clamp(44px, 4.6vw, 66px)',
              margin: '16px auto 0',
            }}>
              <span style={{ color: '#fff' }}>Who you&apos;ll </span>
              <span style={{ color: 'transparent', WebkitTextStroke: isMobile ? `1px ${G}` : `1.5px ${G}` }}>sit with</span>
            </h2>
            {group?.blurb && (
              <p style={{
                fontFamily: ARCHIVO, fontSize: isMobile ? 15.5 : 17, color: MUTED, lineHeight: 1.65,
                maxWidth: 620, margin: '24px auto 0',
              }}>{group.blurb}</p>
            )}
          </div>

          <div className="vc-strip" style={{
            display: 'flex', gap: isMobile ? 8 : 10, overflowX: 'auto',
            marginTop: isMobile ? 44 : 60,
            padding: '0 clamp(20px, 6vw, 100px)', boxSizing: 'border-box',
            WebkitOverflowScrolling: 'touch',
          }}>
            {faces.map(p => (
              <div key={p.name} className="vc-face" style={{ flex: '0 0 auto', width: isMobile ? 142 : 172, cursor: 'default' }}>
                <div style={{ overflow: 'hidden' }}>
                  <img
                    src={p.photo} alt={p.name} loading="lazy" draggable={false}
                    style={{ width: '100%', aspectRatio: '640 / 880', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <p style={{
                  fontFamily: SAIRA, fontWeight: 600, fontSize: 13, color: DIM,
                  textTransform: 'uppercase', letterSpacing: '0.14em',
                  margin: '12px 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  transition: 'color .3s ease',
                }}>{p.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Hiring — horizontal green timeline ───────────────────────────── */}
      <section style={{
        borderTop: `1px solid ${BORDER}`, boxSizing: 'border-box',
        padding: isSmall ? '72px 20px 80px' : '120px clamp(40px, 6vw, 100px) 130px',
      }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: SAIRA, fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.95,
            fontSize: isMobile ? 'clamp(34px, 9.4vw, 44px)' : 'clamp(44px, 4.6vw, 66px)',
            margin: 0, textAlign: isSmall ? 'left' : 'center',
          }}>
            <span style={{ color: '#fff' }}>How we </span>
            <span style={{ color: G }}>hire</span>
          </h2>

          {isSmall ? (
            /* Vertical: line down the left */
            <div style={{ position: 'relative', marginTop: 52, paddingLeft: 36 }}>
              <div style={{
                position: 'absolute', left: 5, top: 8, bottom: 8, width: 2,
                background: `linear-gradient(180deg, ${G} 0%, rgba(52,204,50,0.55) 70%, rgba(52,204,50,0) 100%)`,
              }} />
              {STEPS.map((s, i) => (
                <div key={s.n} style={{ position: 'relative', paddingBottom: i === STEPS.length - 1 ? 0 : 42 }}>
                  <span style={{
                    position: 'absolute', left: -36, top: 4, width: 12, height: 12, borderRadius: '50%',
                    background: G, boxShadow: '0 0 14px rgba(52,204,50,0.8)',
                  }} />
                  <p style={{ fontFamily: SAIRA, fontWeight: 700, fontSize: 14, color: G, letterSpacing: '0.3em', margin: 0, textTransform: 'uppercase' }}>{s.n}</p>
                  <h3 style={{ fontFamily: SAIRA, fontWeight: 700, fontSize: 24, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.03em', margin: '6px 0 0', lineHeight: 1 }}>{s.title}</h3>
                  <p style={{ fontFamily: ARCHIVO, fontSize: 15, color: MUTED, lineHeight: 1.55, margin: '10px 0 0', maxWidth: 440 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            /* Horizontal: one thin green line through four nodes */
            <div style={{ position: 'relative', marginTop: 76 }}>
              <div style={{
                position: 'absolute', left: 0, right: 0, top: 5, height: 2,
                background: `linear-gradient(90deg, rgba(52,204,50,0) 0%, rgba(52,204,50,0.55) 7%, rgba(52,204,50,0.55) 93%, rgba(52,204,50,0) 100%)`,
              }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(28px, 3.5vw, 56px)' }}>
                {STEPS.map(s => (
                  <div key={s.n} style={{ position: 'relative' }}>
                    <span style={{
                      display: 'block', width: 12, height: 12, borderRadius: '50%',
                      background: G, boxShadow: '0 0 14px rgba(52,204,50,0.8)',
                    }} />
                    <p style={{ fontFamily: SAIRA, fontWeight: 700, fontSize: 15, color: G, letterSpacing: '0.3em', margin: '24px 0 0', textTransform: 'uppercase' }}>{s.n}</p>
                    <h3 style={{ fontFamily: SAIRA, fontWeight: 700, fontSize: 'clamp(22px, 1.9vw, 27px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.03em', margin: '8px 0 0', lineHeight: 1 }}>{s.title}</h3>
                    <p style={{ fontFamily: ARCHIVO, fontSize: 15, color: MUTED, lineHeight: 1.6, margin: '12px 0 0' }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Apply + footer ───────────────────────────────────────────────── */}
      <div id="apply">
        <JoinSection
          headingSize="clamp(32px, 4.6vw, 60px)"
          position={job.title}
          sub="Just drop in your CVs below!"
          heading={<><span style={{ color: '#fff' }}>FUTURE </span><span style={{ color: G }}>OPPORTUNITIES</span><span style={{ color: '#fff' }}> START HERE</span></>}
        />
      </div>
      <Footer />
    </div>
  )
}
