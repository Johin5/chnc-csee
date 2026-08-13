'use client'

// Job detail — Variant B "SPLIT RAIL".
// Desktop: a ~340px sticky info rail on the left (back link, quiet meta list
// with green rules, APPLY NOW, hiring-team faces) and a long-form right column
// (huge title → responsibilities → requirements → team blurb → vertical hiring
// timeline). Below 1024px the rail folds to the top and everything single-columns.
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import useResponsive from '../useResponsive'
import Footer from '../Footer'
import JoinSection from '../JoinSection'
import { TEAM_GROUPS } from '../lib/careersTeams'
import { TEAM } from '../lib/teamRoster'
import { G, DARK, MUTED, DIM, BORDER } from '../careersAtoms'

const SAIRA = "'Saira Condensed', sans-serif"
const ARCHIVO = "'Archivo', sans-serif"
const GREEN_RULE = 'rgba(52,204,50,0.35)'

// PLACEHOLDER COPY — drafted to brand voice, not approved. Swap freely.
const HIRING_STEPS = [
  { title: 'Apply', desc: 'Send your CV and your work. That’s it — no cover-letter theatre.' },
  { title: 'Intro chat', desc: '30 minutes with the team lead about what you’ve made and what you want to make.' },
  { title: 'Craft task', desc: 'A short exercise close to the real work — never free work we ship.' },
  { title: 'Offer', desc: 'We move fast. If it’s a yes, you’ll hear within the week.' },
]

// The site's green-dot bullet.
function Bullet({ children }) {
  return (
    <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <span aria-hidden="true" style={{
        width: 8, height: 8, background: G, borderRadius: '50%',
        flexShrink: 0, marginTop: 11,
      }} />
      <span style={{
        fontFamily: ARCHIVO, fontSize: 'clamp(16px, 2vw, 18px)',
        lineHeight: '30px', color: '#fff',
      }}>{children}</span>
    </li>
  )
}

// Right-column section: dim index + green heading over a thin top rule.
function RailSection({ index, title, children }) {
  return (
    <section style={{
      borderTop: `1px solid ${BORDER}`,
      paddingTop: 'clamp(28px, 3.4vw, 44px)',
      display: 'flex', flexDirection: 'column', gap: 'clamp(18px, 2.4vw, 26px)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
        <span style={{
          fontFamily: SAIRA, fontSize: 'clamp(13px, 1.5vw, 15px)',
          fontWeight: 700, color: DIM, letterSpacing: '0.1em',
        }}>{index}</span>
        <h2 style={{
          fontFamily: SAIRA, fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800,
          textTransform: 'uppercase', color: G, margin: 0, lineHeight: 1.05,
          letterSpacing: '0.01em',
        }}>{title}</h2>
      </div>
      {children}
    </section>
  )
}

// Quiet meta row for the rail — small dim label over a plain value, with a
// thin green rule underneath ("stacked quiet list with green rules").
function MetaRow({ label, value, accent }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 4,
      padding: '12px 0 14px', borderBottom: `1px solid ${GREEN_RULE}`,
    }}>
      <span style={{
        fontFamily: SAIRA, fontSize: 12, fontWeight: 700, color: DIM,
        textTransform: 'uppercase', letterSpacing: '0.14em',
      }}>{label}</span>
      <span style={{
        fontFamily: SAIRA, fontSize: 19, fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '0.03em', color: accent ? G : '#fff', lineHeight: 1.15,
      }}>{value}</span>
    </div>
  )
}

const RAIL_W = 340
const NAV_OFFSET = 110 // fixed-nav clearance the rail pins below

export default function VariantB({ job }) {
  const { isSmall, isMobile } = useResponsive()

  // The site's global `body { overflow-x: hidden }` turns body into a scroll
  // container, which silently defeats CSS position:sticky — so the rail pins
  // itself: static in flow at the top, fixed while the column scrolls past,
  // absolute-bottom once the rail would outrun the two-column block.
  const asideRef = useRef(null)
  const railRef = useRef(null)
  const [railMode, setRailMode] = useState('top')
  useEffect(() => {
    if (isSmall) { setRailMode('top'); return }
    let frame = null
    const measure = () => {
      frame = null
      const aside = asideRef.current
      const rail = railRef.current
      if (!aside || !rail) return
      const a = aside.getBoundingClientRect()
      const h = rail.offsetHeight
      if (a.top >= NAV_OFFSET) setRailMode('top')
      else if (a.bottom - NAV_OFFSET <= h) setRailMode('bottom')
      else setRailMode('fixed')
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    measure()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [isSmall])

  // The hiring team's blurb and faces, from the same data the careers page uses.
  const group = TEAM_GROUPS.find(g => g.name === job.team)
  const faces = (group?.members || [])
    .map(name => TEAM.find(p => p.name === name))
    .filter(Boolean)
  // The rail grid is 3×2 = 6 tiles; with more members the 6th becomes "+N".
  const shownFaces = faces.slice(0, faces.length > 6 ? 5 : 6)
  const extra = faces.length - shownFaces.length

  // Last word of the role goes green — DESIGNER, WRITER, MARKETER…
  const words = job.title.split(' ')
  const head = words.slice(0, -1).join(' ')
  const tail = words[words.length - 1]

  // ── Rail pieces (shared between the sticky desktop rail and the mobile top block)
  const backLink = (
    <Link href="/careers" style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, width: 'fit-content',
      color: G, textDecoration: 'none',
      fontFamily: SAIRA, fontSize: 15, fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: '0.08em',
    }}>&larr; All openings</Link>
  )

  const metaList = (
    <div style={{ display: 'flex', flexDirection: 'column', borderTop: `1px solid ${GREEN_RULE}` }}>
      <MetaRow label="Team" value={`${job.team} team`} accent />
      <MetaRow label="Location" value="Mumbai" />
      <MetaRow label="Type" value="Full-time" />
    </div>
  )

  const applyBtn = (
    <a href="#apply" className="btn-outline" style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: '100%', height: 52, boxSizing: 'border-box',
      background: 'transparent', color: G, border: `1px solid ${G}`,
      fontFamily: SAIRA, fontSize: 17, fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: '0.06em', textDecoration: 'none',
      backdropFilter: 'blur(10px)',
    }}>Apply now &darr;</a>
  )

  const facesGrid = group && faces.length > 0 && (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span style={{
        fontFamily: SAIRA, fontSize: 12, fontWeight: 700, color: DIM,
        textTransform: 'uppercase', letterSpacing: '0.14em',
      }}>Hiring team</span>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 8,
        maxWidth: isSmall ? 340 : 'none',
      }}>
        {shownFaces.map(p => (
          <div key={p.name} title={`${p.name} — ${p.role}`} style={{
            aspectRatio: '640/760', overflow: 'hidden', border: `1px solid ${BORDER}`,
          }}>
            <img
              src={p.photo} alt={p.name} loading="lazy" decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
        {extra > 0 && (
          <div style={{
            aspectRatio: '640/760', border: `1px solid ${GREEN_RULE}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: SAIRA, fontSize: 24, fontWeight: 700, color: G,
          }}>+{extra}</div>
        )}
      </div>
    </div>
  )

  const railContent = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
      {backLink}
      {metaList}
      {applyBtn}
      {facesGrid}
    </div>
  )

  return (
    <div style={{ background: DARK, minHeight: '100vh', color: '#fff', overflowX: 'clip' }}>

      <div style={{
        maxWidth: 1360, margin: '0 auto', boxSizing: 'border-box',
        padding: 'clamp(110px, 12vw, 140px) clamp(20px, 5vw, 72px) clamp(40px, 6vw, 80px)',
        display: 'flex', flexDirection: isSmall ? 'column' : 'row',
        gap: isSmall ? 44 : 'clamp(48px, 5vw, 84px)',
        alignItems: isSmall ? 'stretch' : 'flex-start',
      }}>

        {/* ── Left rail — sticky on desktop, folded to the top on small ──────── */}
        {isSmall ? (
          <div style={{ paddingBottom: 4 }}>{railContent}</div>
        ) : (
          <aside ref={asideRef} style={{ width: RAIL_W, flexShrink: 0, alignSelf: 'stretch', position: 'relative' }}>
            <div ref={railRef} style={{
              width: RAIL_W, boxSizing: 'border-box',
              ...(railMode === 'fixed' ? { position: 'fixed', top: NAV_OFFSET }
                : railMode === 'bottom' ? { position: 'absolute', bottom: 0, left: 0 }
                : { position: 'sticky', top: NAV_OFFSET }),
            }}>{railContent}</div>
          </aside>
        )}

        {/* ── Right column — the long read ───────────────────────────────────── */}
        <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(36px, 4.6vw, 64px)' }}>

          <h1 style={{
            fontFamily: SAIRA,
            fontSize: isSmall ? 'clamp(44px, 12vw, 84px)' : 'clamp(64px, 6.6vw, 96px)',
            fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-2px',
            lineHeight: 0.94, margin: 0, overflowWrap: 'break-word',
          }}>
            {head && <span style={{ color: '#fff' }}>{head} </span>}
            <span style={{ color: G }}>{tail}</span>
          </h1>

          <RailSection index="01" title="Responsibilities">
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {job.responsibilities.map(item => <Bullet key={item}>{item}</Bullet>)}
            </ul>
          </RailSection>

          <RailSection index="02" title="Requirements">
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {job.requirements.map(item => <Bullet key={item}>{item}</Bullet>)}
            </ul>
          </RailSection>

          {group && (
            <RailSection index="03" title="The team">
              <p style={{
                fontFamily: ARCHIVO, fontSize: 'clamp(16px, 2vw, 18px)',
                color: MUTED, lineHeight: 1.7, margin: 0, maxWidth: 640,
              }}>{group.blurb}</p>
              <Link href="/team" className="btn-outline" style={{
                background: 'transparent', border: `1px solid ${G}`, color: G,
                height: 44, padding: '0 20px', width: 'fit-content',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                boxSizing: 'border-box', textDecoration: 'none',
                fontFamily: SAIRA, fontSize: 15, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.04em', backdropFilter: 'blur(10px)',
              }}>The whole roster</Link>
            </RailSection>
          )}

          {/* Vertical hiring timeline — a thin green line threads the numbers. */}
          <RailSection index="04" title="How we hire">
            <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
              {HIRING_STEPS.map((s, i) => {
                const last = i === HIRING_STEPS.length - 1
                return (
                  <li key={s.title} style={{ display: 'flex', gap: isMobile ? 18 : 26, alignItems: 'stretch' }}>
                    {/* Marker column: the step number, then the connecting line. */}
                    <div style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      width: isMobile ? 40 : 52, flexShrink: 0,
                    }}>
                      <span style={{
                        fontFamily: SAIRA, fontSize: isMobile ? 26 : 34, fontWeight: 800,
                        color: G, lineHeight: 1,
                      }}>{String(i + 1).padStart(2, '0')}</span>
                      {!last && (
                        <span aria-hidden="true" style={{
                          width: 1, flex: 1, background: GREEN_RULE, margin: '10px 0',
                        }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: last ? 0 : 'clamp(28px, 3.4vw, 40px)', minWidth: 0 }}>
                      <p style={{
                        fontFamily: SAIRA, fontSize: 'clamp(18px, 2.2vw, 22px)', fontWeight: 700,
                        textTransform: 'uppercase', color: '#fff', margin: 0, lineHeight: 1.1,
                        letterSpacing: '0.03em',
                      }}>{s.title}</p>
                      <p style={{
                        fontFamily: ARCHIVO, fontSize: 15, color: MUTED,
                        lineHeight: '23px', margin: '8px 0 0', maxWidth: 560,
                      }}>{s.desc}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </RailSection>
        </main>
      </div>

      {/* ── Apply + footer — full width, below both columns ───────────────────── */}
      <div id="apply">
        <JoinSection
          headingSize="clamp(32px, 4.6vw, 60px)"
          position={job.title}
          sub="Just drop in your CVs below!"
          heading={<>
            <span style={{ color: '#fff' }}>FUTURE </span>
            <span style={{ color: G }}>OPPORTUNITIES</span>
            <span style={{ color: '#fff' }}> START HERE</span>
          </>}
        />
      </div>

      <Footer />
    </div>
  )
}
