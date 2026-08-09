'use client'

// Job detail page — built from Figma node 1:1320 (Landing Page - Dark-careers-02)
// "JOIN OUR <TEAM> TEAM" over two panels (responsibilities / requirements),
// then the shared application form under "Future opportunities start here".
import Link from 'next/link'
import useResponsive from './useResponsive'
import Footer from './Footer'
import JoinSection from './JoinSection'
import { G, DARK, BORDER } from './careersAtoms'

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

function Panel({ title, items }) {
  const { isSmall } = useResponsive()
  return (
    <div style={{
      background: 'transparent', border: `2px solid ${BORDER}`,
      width: isSmall ? '100%' : 610, maxWidth: 610,
      padding: 'clamp(28px, 4vw, 50px)', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', gap: 20,
    }}>
      <h2 style={{
        fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(26px, 3.4vw, 32px)',
        fontWeight: 800, textTransform: 'uppercase', color: G, margin: 0, lineHeight: 1.1,
      }}>{title}</h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {items.map(item => <Bullet key={item}>{item}</Bullet>)}
      </ul>
    </div>
  )
}

export default function JobPage({ job }) {
  const { isSmall } = useResponsive()

  return (
    <div style={{ background: DARK, minHeight: '100vh', color: '#fff' }}>
      <section style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 'clamp(48px, 8vw, 100px)',
        padding: 'clamp(140px, 18vw, 206px) clamp(20px, 6vw, 100px) clamp(56px, 8vw, 100px)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <Link
            href="/careers" className="btn-outline"
            style={{
              background: 'transparent', border: `1px solid ${G}`, color: G,
              height: 40, padding: '0 18px', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              boxSizing: 'border-box', textDecoration: 'none',
              fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.02em',
            }}
          >&larr; All openings</Link>

          <h1 style={{
            fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(48px, 10vw, 150px)',
            fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-3px',
            lineHeight: 1, margin: 0, textAlign: 'center', maxWidth: 1100,
          }}>
            <span style={{ color: '#fff' }}>JOIN OUR </span>
            <span style={{ color: G }}>{job.team}</span>
            <span style={{ color: '#fff' }}> TEAM</span>
          </h1>

          <p style={{
            fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(20px, 2.6vw, 28px)',
            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em',
            color: '#fff', margin: 0, textAlign: 'center',
          }}>{job.title}</p>
        </div>

        <div style={{
          display: 'flex', flexDirection: isSmall ? 'column' : 'row',
          gap: 20, justifyContent: 'center', alignItems: 'stretch', width: '100%',
        }}>
          <Panel title="Responsibilities" items={job.responsibilities} />
          <Panel title="Requirements" items={job.requirements} />
        </div>
      </section>

      <JoinSection
        position={job.title}
        sub="Just drop in your CVs below!"
        heading={<>
          <span style={{ color: '#fff' }}>FUTURE </span>
          <span style={{ color: G }}>OPPORTUNITIES</span>
          <span style={{ color: '#fff' }}> START HERE</span>
        </>}
      />

      <Footer />
    </div>
  )
}
