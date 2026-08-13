'use client'

// ─── Variant A — "Quiet editorial" ───────────────────────────────────────────
// One narrow reading column, no boxed panels anywhere. A tracked-caps kicker
// replaces the chip row, sections open with a short green rule, and the team
// and hiring steps are typeset as quiet text — all the volume lives in the
// whitespace, not the chrome.

import Link from 'next/link'
import useResponsive from '../useResponsive'
import Footer from '../Footer'
import JoinSection from '../JoinSection'
import { TEAM_GROUPS } from '../lib/careersTeams'
import { TEAM } from '../lib/teamRoster'
import { G, DARK, MUTED, DIM, BORDER } from '../careersAtoms'

const SAIRA = "'Saira Condensed', sans-serif"
const ARCHIVO = "'Archivo', sans-serif"

const HIRING_STEPS = [
  { title: 'Apply', desc: 'Send your CV and your work. That’s it — no cover-letter theatre.' },
  { title: 'Intro chat', desc: '30 minutes with the team lead about what you’ve made and what you want to make.' },
  { title: 'Craft task', desc: 'A short exercise close to the real work — never free work we ship.' },
  { title: 'Offer', desc: 'We move fast. If it’s a yes, you’ll hear within the week.' },
]

// Short green rule + tracked-caps heading — the only ornament each section gets.
function SectionHeading({ children }) {
  return (
    <div>
      <div style={{ width: 44, height: 2, background: G }} />
      <h2 style={{
        fontFamily: SAIRA, fontSize: 16, fontWeight: 700, color: '#fff',
        textTransform: 'uppercase', letterSpacing: '0.24em',
        margin: '20px 0 0',
      }}>{children}</h2>
    </div>
  )
}

export default function VariantA({ job }) {
  const { width, isMobile } = useResponsive()

  // Resolve the hiring team's faces from the roster.
  const group = TEAM_GROUPS.find(g => g.name === job.team)
  const members = (group?.members || [])
    .map(name => TEAM.find(p => p.name === name))
    .filter(p => p && p.photo)
  const faces = members.slice(0, 6)

  const stepCols = width <= 480 ? 1 : width <= 680 ? 2 : 4
  const sectionGap = 'clamp(72px, 10vw, 112px)'
  const face = isMobile ? 30 : 36

  return (
    <div style={{ background: DARK, color: '#fff', minHeight: '100vh', overflowX: 'clip' }}>
      <main style={{
        maxWidth: 760, margin: '0 auto', boxSizing: 'border-box',
        padding: 'clamp(140px, 18vw, 184px) clamp(22px, 6vw, 40px) clamp(90px, 12vw, 140px)',
      }}>

        {/* ── Kicker + title ─────────────────────────────────────────────── */}
        <p style={{
          fontFamily: SAIRA, fontSize: 13, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.26em',
          margin: 0, lineHeight: 1.7,
        }}>
          <span style={{ color: G }}>Careers</span>
          <span style={{ color: DIM }}> &mdash; {job.team} team &middot; Mumbai &middot; Full-time</span>
        </p>

        <h1 style={{
          fontFamily: SAIRA, fontWeight: 800, textTransform: 'uppercase',
          fontSize: 'clamp(44px, 9vw, 76px)', lineHeight: 0.98,
          letterSpacing: '0.005em', margin: '26px 0 0', maxWidth: 640,
        }}>{job.title}</h1>

        <p style={{ margin: '34px 0 0' }}>
          <a href="#apply" style={{
            fontFamily: SAIRA, fontSize: 15, fontWeight: 700, color: G,
            textTransform: 'uppercase', letterSpacing: '0.14em',
            textDecoration: 'none', borderBottom: `1px solid ${G}`,
            paddingBottom: 3,
          }}>Apply for this role &rarr;</a>
        </p>

        {/* ── What you'll do ─────────────────────────────────────────────── */}
        <section style={{ marginTop: sectionGap }}>
          <SectionHeading>What you&rsquo;ll do</SectionHeading>
          <div style={{ marginTop: 28 }}>
            {job.responsibilities.map((r, i) => (
              <p key={i} style={{
                fontFamily: ARCHIVO, fontSize: isMobile ? 16 : 17.5,
                lineHeight: 1.75, color: MUTED, maxWidth: 620,
                margin: i === 0 ? 0 : '18px 0 0',
              }}>{r}</p>
            ))}
          </div>
        </section>

        {/* ── What you'll bring ──────────────────────────────────────────── */}
        <section style={{ marginTop: sectionGap }}>
          <SectionHeading>What you&rsquo;ll bring</SectionHeading>
          <div style={{ marginTop: 28 }}>
            {job.requirements.map((r, i) => (
              <p key={i} style={{
                fontFamily: ARCHIVO, fontSize: isMobile ? 16 : 17.5,
                lineHeight: 1.75, color: MUTED, maxWidth: 620,
                margin: i === 0 ? 0 : '18px 0 0',
              }}>{r}</p>
            ))}
          </div>
        </section>

        {/* ── The team ───────────────────────────────────────────────────── */}
        <section style={{ marginTop: sectionGap }}>
          <SectionHeading>The team</SectionHeading>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 16,
            marginTop: 28, flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex' }}>
              {faces.map((p, i) => (
                <img
                  key={p.name} src={p.photo} alt={p.name}
                  width={face} height={face}
                  style={{
                    width: face, height: face, borderRadius: '50%',
                    objectFit: 'cover', objectPosition: 'top',
                    border: `2px solid ${DARK}`, display: 'block',
                    marginLeft: i === 0 ? 0 : -10,
                  }}
                />
              ))}
            </div>
            <span style={{
              fontFamily: SAIRA, fontSize: 13, fontWeight: 700, color: DIM,
              textTransform: 'uppercase', letterSpacing: '0.2em',
            }}>{job.team} &middot; {members.length} people</span>
          </div>

          {group?.blurb && (
            <p style={{
              fontFamily: ARCHIVO, fontSize: isMobile ? 16 : 17.5,
              lineHeight: 1.75, color: MUTED, maxWidth: 620,
              margin: '22px 0 0',
            }}>{group.blurb}</p>
          )}

          <p style={{ margin: '24px 0 0' }}>
            <Link href="/team" style={{
              fontFamily: SAIRA, fontSize: 14, fontWeight: 700, color: G,
              textTransform: 'uppercase', letterSpacing: '0.14em',
              textDecoration: 'none',
            }}>The whole roster &rarr;</Link>
          </p>
        </section>

        {/* ── How we hire ────────────────────────────────────────────────── */}
        <section style={{ marginTop: sectionGap }}>
          <SectionHeading>How we hire</SectionHeading>

          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${stepCols}, 1fr)`,
            columnGap: 28, rowGap: 34, marginTop: 32,
          }}>
            {HIRING_STEPS.map((s, i) => (
              <div key={s.title}>
                <p style={{
                  fontFamily: SAIRA, fontSize: 17, fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                  margin: 0, color: '#fff', whiteSpace: 'nowrap',
                }}>
                  <span style={{ color: G, marginRight: 8 }}>0{i + 1}</span>
                  {s.title}
                </p>
                <p style={{
                  fontFamily: ARCHIVO, fontSize: 13.5, lineHeight: 1.65,
                  color: DIM, margin: '10px 0 0',
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Hairline before the shared form keeps the column from just ending. */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 clamp(22px, 6vw, 40px)' }}>
        <div style={{ height: 1, background: BORDER }} />
      </div>

      <div id="apply">
        <JoinSection headingSize="clamp(32px, 4.6vw, 60px)" position={job.title} sub="Just drop in your CVs below!" heading={<><span style={{ color: '#fff' }}>FUTURE </span><span style={{ color: G }}>OPPORTUNITIES</span><span style={{ color: '#fff' }}> START HERE</span></>} />
      </div>
      <Footer />
    </div>
  )
}
