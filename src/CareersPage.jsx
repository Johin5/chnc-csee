'use client'

// Careers Page — built from Figma design
import { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useResponsive from './useResponsive'
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'
import { TEAM } from './lib/teamRoster'
import { TEAM_GROUPS } from './lib/careersTeams'
import JoinSection from './JoinSection'

import Footer from './Footer'
import { jobPath } from './lib/routes'
import { BtnGreen, BtnOutline, G, DARK, CARD, MUTED, DIM, BORDER } from './careersAtoms'
import { NAV_H } from './theme'

// ─── Asset URLs (from Figma MCP) ─────────────────────────────────────────────
const imgTeam        = '/figma/careers-01/221.png'

// ─── Hero Section ────────────────────────────────────────────────────────────
// Blog-page hero shape — headline block on top, then the whole roster tiled
// edge to edge underneath it, so "doesn't take anyone" lands against the actual
// faces that made it. Tiles sit desaturated; hovering one brings it forward in
// full colour with that person's own pose shot.

// `interactive` off makes the tile a plain still — no pose swap, no lift, no
// name plate. The team cards use it; only the hero wall reacts to a cursor.
function FaceTile({ member, gridColumnStart, showName = false, interactive = true }) {
  const { name, role, photo, pose } = member
  const [hovered, setHovered] = useState(false)
  // Pose shots only download once a tile is first touched — a 40-odd face wall
  // would otherwise pull double its weight before the hero even paints.
  const requested = useRef(false)
  const open  = () => { requested.current = true; setHovered(true) }
  const close = () => setHovered(false)

  return (
    <div
      onMouseEnter={interactive ? open : undefined}
      onMouseLeave={interactive ? close : undefined}
      onTouchStart={interactive ? () => (hovered ? close() : open()) : undefined}
      style={{
        position: 'relative', overflow: 'hidden', gridColumnStart,
        background: '#0b1120', cursor: interactive ? 'pointer' : 'default',
        zIndex: hovered ? 3 : 'auto',
        outline: hovered ? `1px solid ${G}` : '1px solid transparent',
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
        filter: hovered ? 'none' : 'grayscale(1) brightness(0.72)',
        transition: 'transform 0.35s ease, filter 0.35s ease, outline-color 0.3s ease',
      }}
    >
      <img
        src={photo} alt={name} loading="lazy"
        style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: FACE_ANCHOR,
          display: 'block',
          opacity: hovered && pose ? 0 : 1, transition: 'opacity 0.35s ease',
        }}
      />
      {interactive && pose && (
        <img
          src={requested.current ? pose : undefined} alt="" aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: FACE_ANCHOR, display: 'block', pointerEvents: 'none',
            opacity: hovered ? 1 : 0, transition: 'opacity 0.35s ease',
          }}
        />
      )}
      {showName && interactive && (
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, padding: '30px 10px 10px',
          background: 'linear-gradient(to top, rgba(0,7,24,0.95) 25%, transparent 100%)',
          opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: 'none',
        }}>
          <p style={{
            fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: 15,
            lineHeight: 1.1, textTransform: 'uppercase', color: '#fff', margin: 0,
          }}>{name}</p>
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 10.5, lineHeight: 1.25,
            color: G, margin: '3px 0 0',
          }}>{role}</p>
        </div>
      )}
    </div>
  )
}

const GAP = 2
// The portraits are 640×880 (0.727) with the head starting ~15% down. A cell
// wider than that ratio makes object-fit trim vertically, so the crop is pinned
// near the top (see FACE_ANCHOR) and eats into the body, never the head. Past
// ~1.15 the tiles stop reading as portraits, so that is the ceiling.
const MAX_RATIO   = 0.75   // upright rectangles, near the 3:4 of the source crops
const FACE_ANCHOR = '50% 15%'

// Biggest tiles that still fit the whole roster inside the frame as complete
// rows — nobody half-cropped by the top or bottom edge of the hero. Fewer
// columns means bigger tiles, so the first column count that fits wins.
function fitWall(w, h, n, maxRatio = MAX_RATIO) {
  for (let cols = 1; cols <= Math.min(30, n); cols++) {
    const rows = Math.ceil(n / cols)
    const tw = (w - GAP * (cols - 1)) / cols
    const th = (h - GAP * (rows - 1)) / rows
    if (tw / th <= maxRatio) return { cols, rows }
  }
  return { cols: 30, rows: Math.ceil(n / 30) }
}

// The hero wall doesn't need every face — one row fewer than a full-roster
// fit, with the columns re-solved against the taller tiles, gives a wall of
// noticeably bigger portraits that still fills the frame edge to edge in
// complete rows. Whoever doesn't get a seat simply isn't on the hero.
function fitTrimmedWall(w, h, n) {
  const full = fitWall(w, h, n)
  const rows = Math.max(1, full.rows - 1)
  const th = (h - GAP * (rows - 1)) / rows
  for (let cols = 1; cols <= 30; cols++) {
    const tw = (w - GAP * (cols - 1)) / cols
    if (tw / th <= MAX_RATIO) return { cols, rows }
  }
  return { cols: 30, rows }
}

function Hero() {
  const { isSmall } = useResponsive()

  // Measured, not hard-coded: the frame is a clamp() of the viewport, so the
  // column count has to be solved against whatever size it actually resolves to.
  const wallRef = useRef(null)
  const [box, setBox] = useState({ w: 0, h: 0 })
  useIsomorphicLayoutEffect(() => {
    const el = wallRef.current
    if (!el) return
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight })
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const { cols, rows } = box.w && box.h
    ? fitTrimmedWall(box.w, box.h, TEAM.length)
    : { cols: 0, rows: 0 }
  // Exactly as many faces as the trimmed grid seats — no leftover short row.
  const shown = Math.min(TEAM.length, cols * rows)
  const remainder = cols ? shown % cols : 0
  const lastRowStart = shown - remainder

  return (
    <section style={{
      position: 'relative', width: '100%', overflow: 'hidden',
      // Same frame as the Mahindra case-study hero image — full-bleed, running
      // under the fixed nav (hence the +106).
      height: isSmall
        ? 'calc(clamp(360px, 78vw, 480px) + 106px)'
        : 'calc(clamp(480px, 42vw, 560px) + 106px)',
    }}>
      {/* ── The wall ─────────────────────────────────────────────────────────── */}
      <div ref={wallRef} style={{
        // starts right below the fixed nav, not under it — the top row's heads
        // would otherwise sit behind the header bar
        position: 'absolute', top: isSmall ? NAV_H.small : NAV_H.desktop, left: 0, right: 0, bottom: 0,
        display: 'grid', gap: GAP,
        gridTemplateColumns: cols ? `repeat(${cols}, 1fr)` : '1fr',
        gridTemplateRows: rows ? `repeat(${rows}, 1fr)` : '1fr',
        visibility: cols ? 'visible' : 'hidden',
      }}>
        {TEAM.slice(0, shown).map((m, i) => (
          <FaceTile
            key={m.name} member={m}
            // centre the final short row
            gridColumnStart={remainder && i === lastRowStart
              ? 1 + Math.floor((cols - remainder) / 2)
              : undefined}
          />
        ))}
      </div>

      {/* scrim — darkest through the middle so the headline holds */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: `radial-gradient(ellipse 72% 58% at 50% 50%, rgba(0,7,24,0.95) 0%, rgba(0,7,24,0.84) 48%, rgba(0,7,24,0.5) 100%),
                     linear-gradient(to bottom, ${DARK} 0%, rgba(0,7,24,0.15) 22%, rgba(0,7,24,0.15) 74%, ${DARK} 100%)`,
      }} />

      {/* ── Headline ─────────────────────────────────────────────────────────── */}
      <div style={{
        // above the lifted tile (z-index 3) — a face pops out of the wall
        // behind the type, never over it
        position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 30, boxSizing: 'border-box', textAlign: 'center',
        padding: `${isSmall ? NAV_H.small : NAV_H.desktop}px clamp(20px, 6vw, 100px) 0`,
      }}>
        <h1 style={{
          fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(56px, 14vw, 150px)', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '-3px', lineHeight: 1, margin: 0,
          maxWidth: 1000, textShadow: '0 4px 40px rgba(0,7,24,0.95)',
        }}>
          <span style={{ color: '#fff' }}>JOIN THE </span>
          <span style={{ color: G }}>DREAM TEAM</span>
        </h1>
        <p style={{
          fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: '#fff',
          lineHeight: 1.5, maxWidth: 700, margin: 0, textShadow: '0 2px 20px rgba(0,7,24,0.95)',
        }}>
          Your next opportunity starts here. {TEAM.length} people already made it onto the team —
          hover any face to meet them, then decide whether yours belongs up there too.
        </p>
      </div>
    </section>
  )
}

// ─── Open positions marquee ──────────────────────────────────────────────────
// Every vacancy across the teams, in team order — the roles the marquee scrolls
// are exactly the ones the team cards list, because both read this array.
const OPEN_ROLES = TEAM_GROUPS.flatMap(g => g.openings.map(o => ({ ...o, team: g.name })))

// Comfortable reading pace for scrolling type. Faster than this and the roles
// blur past before they can be read.
const MARQUEE_SPEED = 55 // px per second

function OpenRoles() {
  const trackRef = useRef(null)
  const [duration, setDuration] = useState(0)

  // The track holds two copies of the list and the keyframe travels -50%, so
  // one loop covers exactly one copy — hence scrollWidth / 2.
  useIsomorphicLayoutEffect(() => {
    const el = trackRef.current
    if (!el) return
    const measure = () => setDuration(el.scrollWidth / 2 / MARQUEE_SPEED)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`,
      background: '#050d1e', padding: 'clamp(12px, 2vw, 20px) 0',
    }}>
      {/* Fixed label — the roles scroll behind it, and the veil it sits on
          fades them out rather than letting them collide with the words. */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, zIndex: 2,
        display: 'flex', alignItems: 'center',
        padding: '0 clamp(64px, 9vw, 140px) 0 clamp(20px, 6vw, 100px)',
        background: `linear-gradient(to right, #050d1e 0%, #050d1e 82%, rgba(5,13,30,0.7) 92%, rgba(5,13,30,0) 100%)`,
        pointerEvents: 'none',
      }}>
        <span style={{
          fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700,
          fontSize: 'clamp(20px, 3vw, 34px)', textTransform: 'uppercase',
          letterSpacing: '0.02em', color: G, whiteSpace: 'nowrap',
        }}>Open Positions</span>
      </div>

      <div className="ticker-wrap">
        <div
          ref={trackRef} className="marquee-track"
          style={{ animationDuration: duration ? `${duration}s` : undefined }}
        >
          {[...OPEN_ROLES, ...OPEN_ROLES].map((job, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <Link
                href={jobPath(job)} className="marquee-role"
                style={{
                  fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700,
                  fontSize: 'clamp(20px, 3vw, 34px)', textTransform: 'uppercase',
                  letterSpacing: '0.02em', color: '#fff', whiteSpace: 'nowrap',
                }}
              >{job.title}</Link>
              <span aria-hidden="true" style={{
                color: G, fontFamily: "'Saira Condensed', sans-serif", fontWeight: 400,
                fontSize: 'clamp(20px, 3vw, 34px)', padding: '0 clamp(20px, 3vw, 40px)',
              }}>|</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── The teams you can be a part of ──────────────────────────────────────────
// Two-panel card: pick a team and the left side answers "what could I apply
// for here" — what the team does, then its live vacancies — while the right
// side shows who you'd be joining.

const byName = Object.fromEntries(TEAM.map(m => [m.name, m]))

function TeamPhotos({ members }) {
  const gridRef = useRef(null)
  const [box, setBox] = useState({ w: 0, h: 0 })
  useIsomorphicLayoutEffect(() => {
    const el = gridRef.current
    if (!el) return
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight })
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Same solver as the hero wall — every face on the team fits in whole rows,
  // however many of them there are. Squarer cells are allowed here so a team of
  // four lands as a 2×2 instead of a row of three and a lonely fourth.
  const { cols, rows } = box.w && box.h
    ? fitWall(box.w, box.h, members.length, 1.0)
    : { cols: 0, rows: 0 }
  const remainder = cols ? members.length % cols : 0
  const lastRowStart = members.length - remainder

  return (
    <div ref={gridRef} style={{
      position: 'absolute', inset: 0, display: 'grid', gap: GAP,
      gridTemplateColumns: cols ? `repeat(${cols}, 1fr)` : '1fr',
      gridTemplateRows: rows ? `repeat(${rows}, 1fr)` : '1fr',
      visibility: cols ? 'visible' : 'hidden',
    }}>
      {members.map((m, i) => (
        <FaceTile
          key={m.name} member={m} interactive={false}
          gridColumnStart={remainder && i === lastRowStart
            ? 1 + Math.floor((cols - remainder) / 2)
            : undefined}
        />
      ))}
    </div>
  )
}

function MeetTheTeams({ onOpenJob }) {
  const { isMobile, isSmall } = useResponsive()
  // Index 0 is the "All" tab; every other index is TEAM_GROUPS[active - 1].
  const [active, setActive] = useState(0)
  const group = active ? TEAM_GROUPS[active - 1] : null
  const members = group ? group.members.map(n => byName[n]).filter(Boolean) : []

  // Roles carry their team so the All view can say where each one sits.
  const openings = group
    ? group.openings.map(o => ({ ...o, team: group.name }))
    : TEAM_GROUPS.flatMap(g => g.openings.map(o => ({ ...o, team: g.name })))

  return (
    <section style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(40px, 6vw, 80px)',
      padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)',
    }}>
      <h2 style={{
        fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800,
        textTransform: 'uppercase', lineHeight: 1, margin: 0, textAlign: 'center',
      }}>
        <span style={{ color: '#fff' }}>THE TEAMS YOU CAN BE </span>
        <span style={{ color: G }}>A PART OF</span>
      </h2>

      {/* Switcher */}
      <div style={{
        display: 'flex', gap: 'clamp(8px, 1.5vw, 20px)', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'center',
      }}>
        {['All openings', ...TEAM_GROUPS.map(g => g.name)].map((label, i) => (
          <button
            key={label} className="pill-hover" onClick={() => setActive(i)}
            style={{
              background: CARD, border: i === active ? `1px solid ${G}` : '1px solid transparent',
              height: 46, padding: '0 20px',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif",
              fontSize: 16, fontWeight: i === active ? 700 : 500,
              color: i === active ? G : DIM, textTransform: 'uppercase', cursor: 'pointer',
            }}
          >{label}</button>
        ))}
      </div>

      {/* Openings — its own outlined panel, centred title over a 3-up grid of
          landscape tiles, above the team the roles belong to */}
      <div style={{
        width: '100%', maxWidth: 1240, border: `2px solid ${BORDER}`,
        padding: 'clamp(24px, 4vw, 50px)', boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(24px, 3vw, 36px)',
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em',
            lineHeight: 1, color: '#fff', margin: 0,
          }}>Come Build With Us</p>
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 14, color: G, margin: '8px 0 0',
          }}>{group ? group.name : 'Across every team'}</p>
        </div>

        {openings.length ? (
          <div style={{
            display: 'grid', gap: 20, width: '100%',
            // minmax(0, …) stops the 5/2 aspect-ratio tiles transferring their
            // content min-height into a min-width that blows out narrow viewports
            gridTemplateColumns: isMobile
              ? 'minmax(0, 1fr)'
              : isSmall ? 'repeat(2, minmax(0, 1fr))' : 'repeat(3, 1fr)',
          }}>
            {openings.map(job => (
              <button
                key={`${job.team}-${job.title}`} className="role-tile"
                onClick={() => onOpenJob(job)}
                style={{
                  aspectRatio: '5 / 2', background: 'transparent', border: `1px solid ${BORDER}`,
                  padding: 'clamp(12px, 2vw, 20px)', cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: 6, textAlign: 'center', color: '#fff', boxSizing: 'border-box',
                }}
              >
                <span style={{
                  fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700,
                  fontSize: 'clamp(16px, 2vw, 24px)', textTransform: 'uppercase',
                  letterSpacing: '0.02em', lineHeight: 1.1,
                }}>{job.title}</span>
                {!group && (
                  <span style={{
                    fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM,
                  }}>{job.team}</span>
                )}
              </button>
            ))}
          </div>
        ) : (
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 16, color: MUTED,
            lineHeight: '24px', margin: 0, textAlign: 'center',
          }}>
            Nothing open on this team right now &mdash; send your CV anyway, we keep the good ones.
          </p>
        )}
      </div>

      {/* The team itself — only once a specific team is picked */}
      {group && (
        <div style={{
          display: 'flex', flexDirection: isSmall ? 'column' : 'row',
          overflow: 'hidden', height: isSmall ? 'auto' : 440,
          justifyContent: 'center', width: '100%', maxWidth: 1240,
        }}>
          {/* Left — who they are */}
          <div style={{
            width: isSmall ? '100%' : 746, maxWidth: 746,
            background: 'transparent', border: `2px solid ${BORDER}`,
            padding: 'clamp(24px, 4vw, 50px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            gap: 14, flexShrink: 0, boxSizing: 'border-box',
          }}>
            <h3 style={{
              fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, color: G, margin: 0,
            }}>{group.name}</h3>
            <p style={{
              fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED, margin: 0,
            }}>
              {members.length} {members.length === 1 ? 'person' : 'people'} on this team
            </p>
            <p style={{
              fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(17px, 2.2vw, 21px)', color: '#fff',
              lineHeight: '30px', maxWidth: 658, margin: '6px 0 0',
            }}>{group.blurb}</p>
          </div>

          {/* Right — the faces on it */}
          <div style={{
            position: 'relative', width: isSmall ? '100%' : 494, maxWidth: 494,
            height: isSmall ? 'clamp(320px, 80vw, 440px)' : 440,
            overflow: 'hidden', flexShrink: 0,
          }}>
            <TeamPhotos key={group.name} members={members} />
          </div>
        </div>
      )}
    </section>
  )
}

// ─── We Are ConvergenSEE ─────────────────────────────────────────────────────
function WeAreSection() {
  const { isSmall } = useResponsive()
  return (
    <section style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '0 clamp(20px, 6vw, 100px) 0',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800,
        lineHeight: 1, margin: 0,
      }}>
        <span style={{ color: '#fff' }}>WE ARE </span>
        <span style={{ color: G }}>ConvergenSEE</span>
      </h2>
      <p style={{
        fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: '#fff',
        lineHeight: 1.5, maxWidth: 798, margin: '20px 0 0',
      }}>
        We are you, the dreamers who see what could be, the thinkers who question what is, the
        builders who refuse to settle. We exist in the space between your vision and reality,
        turning digital problems into opportunities with technology that actually works. We're not
        your brand. We're your people &mdash; solving, creating, and growing right alongside you.
      </p>

      {/* Team photo */}
      <div style={{
        position: 'relative', width: '100%', maxWidth: 1440,
        height: isSmall ? 'clamp(300px, 60vw, 785px)' : 785,
        overflow: 'hidden', marginTop: 'clamp(40px, 6vw, 60px)',
      }}>
        <img src={imgTeam} alt="ConvergenSEE Team" loading="lazy" decoding="async" style={{
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
// ─── Careers Page ────────────────────────────────────────────────────────────
export default function CareersPage() {
  const { isSmall } = useResponsive()
  // Every role has its own URL (/careers/copywriter) so an opening can be
  // linked straight from a job post; the detail view is that route's page.
  const router = useRouter()
  const openJob = (j) => router.push(jobPath(j))

  return (
    <div style={{ background: DARK, minHeight: '100vh', color: '#fff' }}>

      <Hero />
      <OpenRoles />
      <MeetTheTeams onOpenJob={openJob} />
      <WeAreSection />
      <JoinSection />

      <Footer />
    </div>
  )
}
