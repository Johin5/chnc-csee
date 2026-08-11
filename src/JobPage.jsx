'use client'

// Job detail page — role-first redesign (2026-08).
// Anatomy: back link → meta chips → the role title as the hero + APPLY CTA →
// responsibilities/requirements panels → meet-the-team (blurb + real faces
// from the roster) → how-we-hire steps → the shared application form.
import Link from 'next/link'
import useResponsive from './useResponsive'
import Footer from './Footer'
import JoinSection from './JoinSection'
import { TEAM_GROUPS } from './lib/careersTeams'
import { TEAM } from './lib/teamRoster'
import { G, DARK, MUTED, DIM, BORDER } from './careersAtoms'

// PLACEHOLDER COPY — drafted to brand voice, not approved. Swap freely.
const HIRING_STEPS = [
  { title: 'Apply', desc: 'Send your CV and your work. That’s it — no cover-letter theatre.' },
  { title: 'Intro chat', desc: '30 minutes with the team lead about what you’ve made and what you want to make.' },
  { title: 'Craft task', desc: 'A short exercise close to the real work — never free work we ship.' },
  { title: 'Offer', desc: 'We move fast. If it’s a yes, you’ll hear within the week.' },
]

const chipStyle = {
  display: 'inline-flex', alignItems: 'center', height: 34, padding: '0 14px',
  border: `1px solid ${BORDER}`, color: MUTED,
  fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 600,
  textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap',
}

// The design bullets each open with a green dot rather than a list marker.
function Bullet({ children }) {
  return (
    <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <span aria-hidden="true" style={{
        width: 8, height: 8, background: G, borderRadius: '50%',
        flexShrink: 0, marginTop: 11,
      }} />
      <span style={{
        fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)',
        lineHeight: '30px', color: '#fff',
      }}>{children}</span>
    </li>
  )
}

function Panel({ index, title, items }) {
  return (
    <div style={{
      background: 'transparent', border: `2px solid ${BORDER}`, borderTop: `2px solid ${G}`,
      flex: 1, minWidth: 0,
      padding: 'clamp(28px, 4vw, 50px)', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', gap: 20,
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
        <span style={{
          fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)',
          fontWeight: 700, color: DIM, letterSpacing: '0.08em',
        }}>{index}</span>
        <h2 style={{
          fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(26px, 3.4vw, 32px)',
          fontWeight: 800, textTransform: 'uppercase', color: G, margin: 0, lineHeight: 1.1,
        }}>{title}</h2>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {items.map(item => <Bullet key={item}>{item}</Bullet>)}
      </ul>
    </div>
  )
}

export default function JobPage({ job }) {
  const { isSmall, isMobile } = useResponsive()

  // The hiring team's blurb and faces, resolved from the same data the
  // careers page uses. Missing lookups degrade to simply not rendering.
  const group = TEAM_GROUPS.find(g => g.name === job.team)
  const faces = (group?.members || [])
    .map(name => TEAM.find(p => p.name === name))
    .filter(Boolean)
  // 8 tiles fill the grid exactly (2×4 on desktop) — when there are more
  // members than that, the 8th tile becomes the +N counter instead.
  const shownFaces = faces.slice(0, faces.length > 8 ? 7 : 8)

  // Last word of the role goes green — DESIGNER, WRITER, MARKETER…
  const words = job.title.split(' ')
  const head = words.slice(0, -1).join(' ')
  const tail = words[words.length - 1]

  return (
    <div style={{ background: DARK, minHeight: '100vh', color: '#fff' }}>

      {/* ── Hero — the role is the headline ─────────────────────────────────── */}
      <section style={{ padding: 'clamp(120px, 16vw, 180px) clamp(20px, 6vw, 100px) clamp(40px, 6vw, 80px)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>
          <Link
            href="/careers" className="footer-link"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, width: 'fit-content',
              fontFamily: "'Saira Condensed', sans-serif", fontSize: 15, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.04em', color: DIM,
              textDecoration: 'none', padding: '8px 0',
            }}
          ><span style={{ color: G }}>&larr;</span> All openings</Link>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ ...chipStyle, color: G, borderColor: 'rgba(52,204,50,0.4)' }}>{job.team} team</span>
            <span style={chipStyle}>Mumbai</span>
            <span style={chipStyle}>Full-time</span>
          </div>

          <h1 style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: 'clamp(52px, 9.5vw, 140px)',
            fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-2px',
            lineHeight: 0.96, margin: 0, maxWidth: 1100,
          }}>
            {head && <span style={{ color: '#fff' }}>{head} </span>}
            <span style={{ color: G }}>{tail}</span>
          </h1>

          <a
            href="#apply" className="btn-green"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: isMobile ? '100%' : 'fit-content', height: 52, padding: '0 34px',
              background: G, color: DARK, border: 'none', boxSizing: 'border-box',
              fontFamily: "'Saira Condensed', sans-serif", fontSize: 17, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.04em', textDecoration: 'none',
              marginTop: 6,
            }}
          >Apply now &darr;</a>
        </div>
      </section>

      {/* ── The work — responsibilities / requirements ──────────────────────── */}
      <section style={{ padding: '0 clamp(20px, 6vw, 100px) clamp(56px, 8vw, 100px)' }}>
        <div style={{
          maxWidth: 1240, margin: '0 auto',
          display: 'flex', flexDirection: isSmall ? 'column' : 'row',
          gap: 20, alignItems: 'stretch',
        }}>
          <Panel index="01" title="Responsibilities" items={job.responsibilities} />
          <Panel index="02" title="Requirements" items={job.requirements} />
        </div>
      </section>

      {/* ── Meet the team ───────────────────────────────────────────────────── */}
      {group && shownFaces.length > 0 && (
        <section style={{ padding: '0 clamp(20px, 6vw, 100px) clamp(56px, 8vw, 100px)' }}>
          <div style={{
            maxWidth: 1240, margin: '0 auto', border: `2px solid ${BORDER}`,
            padding: 'clamp(28px, 4vw, 50px)', boxSizing: 'border-box',
            display: 'flex', flexDirection: isSmall ? 'column' : 'row',
            gap: 'clamp(28px, 4vw, 60px)', alignItems: isSmall ? 'flex-start' : 'center',
          }}>
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h2 style={{
                fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(30px, 4.5vw, 48px)',
                fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, margin: 0,
              }}>
                <span style={{ color: '#fff' }}>Meet the </span>
                <span style={{ color: G }}>{group.name}</span>
                <span style={{ color: '#fff' }}> team</span>
              </h2>
              <p style={{
                fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)',
                color: MUTED, lineHeight: 1.6, margin: 0, maxWidth: 560,
              }}>{group.blurb}</p>
              <Link href="/team" className="footer-link" style={{
                fontFamily: "'Saira Condensed', sans-serif", fontSize: 15, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.04em', color: G,
                textDecoration: 'none', width: 'fit-content', padding: '6px 0',
              }}>The whole roster &rarr;</Link>
            </div>

            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 8, flexShrink: 0,
              maxWidth: isSmall ? '100%' : 400,
            }}>
              {shownFaces.map(p => (
                <div key={p.name} title={`${p.name} — ${p.role}`} style={{ width: isMobile ? 72 : 88, aspectRatio: '640/880', overflow: 'hidden', border: `1px solid ${BORDER}` }}>
                  <img
                    src={p.photo} alt={p.name} loading="lazy" decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}
              {faces.length > shownFaces.length && (
                <div style={{
                  width: isMobile ? 72 : 88, aspectRatio: '640/880',
                  border: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Saira Condensed', sans-serif", fontSize: 20, fontWeight: 700, color: G,
                }}>+{faces.length - shownFaces.length}</div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── How we hire ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 clamp(20px, 6vw, 100px) clamp(56px, 8vw, 100px)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(28px, 4vw, 48px)' }}>
          <h2 style={{
            fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(30px, 4.5vw, 48px)',
            fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, margin: 0,
          }}>
            <span style={{ color: '#fff' }}>How we </span>
            <span style={{ color: G }}>hire</span>
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'minmax(0, 1fr)' : isSmall ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4, minmax(0, 1fr))',
            gap: 20,
          }}>
            {HIRING_STEPS.map((s, i) => (
              <div key={s.title} style={{
                border: `2px solid ${BORDER}`, padding: 'clamp(20px, 3vw, 30px)',
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <span style={{
                  fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(36px, 4vw, 48px)',
                  fontWeight: 800, color: G, lineHeight: 1,
                }}>{String(i + 1).padStart(2, '0')}</span>
                <p style={{
                  fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(20px, 2.4vw, 24px)',
                  fontWeight: 700, textTransform: 'uppercase', color: '#fff', margin: 0, lineHeight: 1.1,
                }}>{s.title}</p>
                <p style={{
                  fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED,
                  lineHeight: '21px', margin: 0,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply ───────────────────────────────────────────────────────────── */}
      <div id="apply">
        <JoinSection
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
