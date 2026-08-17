'use client'

// About Page — built from Figma node 1:841 (Landing Page - Dark-About)
import { useState, useEffect } from 'react'
import Image from 'next/image'
import useResponsive from './useResponsive'

import Footer from './Footer'
const G    = '#34cc32'
const DARK = '#000718'
const CARD = '#0f1520'
const MUTED = 'rgba(255,255,255,0.7)'
const DIM  = '#666a74'

// ─── Asset URLs (from Figma MCP) ─────────────────────────────────────────────
const imgTeam        = '/figma/about/img221.png'
const imgBala        = '/figma/about/img-image6.png'
const imgValCard1    = '/figma/about/img-component134.jpg'
const imgValWalk     = '/walk-the-talk.mp4'
const imgValFoolish  = '/be-foolish.mp4'

// ─── Value card ───────────────────────────────────────────────────────────────
function ValueCard({ line1, line1Green, line2, line2Green, bg, desc }) {
  const { isSmall } = useResponsive()
  return (
    <div className="card-hover" style={{
      position: 'relative', width: isSmall ? '100%' : 610, maxWidth: isSmall ? 'none' : 610, height: isSmall ? 'clamp(200px, 50vw, 300px)' : 300,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', flexShrink: 0,
    }}>
      {/* base */}
      <div style={{ position: 'absolute', inset: 0, background: CARD }} />
      {/* texture bg — an .mp4 plays as a muted loop, anything else is a still */}
      {bg.endsWith('.mp4') ? (
        <video src={bg} autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
      ) : (
        <Image src={bg} alt="" fill sizes="100vw" style={{ objectFit: 'cover', pointerEvents: 'none' }} />
      )}
      {/* dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,7,24,0.7)' }} />
      {/* text */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{
          fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 600,
          lineHeight: 1.05, textTransform: 'uppercase',
        }}>
          <span style={{ color: line1Green ? G : '#fff', fontWeight: line1Green ? 700 : 600 }}>{line1}</span>
          {line1Green ? '' : ''}
        </div>
        {line2 && (
          <div style={{
            fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: line2Green ? 700 : 600,
            lineHeight: 1.05, textTransform: 'uppercase',
            color: line2Green ? G : '#fff',
          }}>
            {line2}
          </div>
        )}
        {desc && (
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(13px, 1.6vw, 16px)', color: MUTED,
            lineHeight: 1.5, maxWidth: 460, margin: '14px auto 0', padding: '0 20px',
          }}>{desc}</p>
        )}
      </div>
    </div>
  )
}

// ─── About Page ───────────────────────────────────────────────────────────────
const WORDS = ['Think', 'Believe', 'Create']

export default function AboutPage() {
  const { isMobile, isSmall } = useResponsive()
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
        position: 'relative', height: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', textAlign: 'center',
        background: DARK, padding: '0 20px',
      }}>
        {/* Background video — ConvergenSEE about showreel */}
        <video
          autoPlay muted loop playsInline preload="metadata"
          poster="/about-hero-poster.jpg"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', opacity: 0.6,
          }}
        >
          <source src="/about-hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlays for text readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            linear-gradient(to bottom, ${DARK} 0%, rgba(0,7,24,0.2) 40%, rgba(0,7,24,0.2) 60%, ${DARK} 100%),
            linear-gradient(to right, ${DARK} 0%, transparent 30%, transparent 70%, ${DARK} 100%)
          `,
          zIndex: 1,
        }} />

        {/* Hero text */}
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <h1 style={{
              fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(56px, 14vw, 150px)', fontWeight: 800,
              textTransform: 'uppercase', letterSpacing: '-3px', lineHeight: 1, margin: 0,
              whiteSpace: 'nowrap', textShadow: '0 2px 24px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.6)',
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
              fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 400, color: '#fff', lineHeight: '30px', margin: 0,
              textShadow: '0 1px 12px rgba(0,0,0,0.8)',
            }}>
              We are <span style={{ color: G, fontWeight: 700 }}>ConvergenSEE</span>
            </p>
          </div>
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: '#fff',
            lineHeight: '24px', maxWidth: 798, textShadow: '0 1px 12px rgba(0,0,0,0.8)',
          }}>
            A team of thinkers, doers, and opportunity creators who genuinely care about the brands
            we work with. We're a Martech brand that believes technology should solve real problems.
            We research relentlessly, think deeply, and build with love because that's the only way
            we know how to work. From strategy to execution, we're right there with you &mdash; your
            people, your partners, making things happen together!
          </p>
        </div>
      </section>

      {/* ── Letter from Bala ────────────────────────────────────────────────── */}
      <section style={{ background: DARK, paddingLeft: isSmall ? 0 : 100 }}>
        <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', alignItems: 'stretch', justifyContent: 'space-between' }}>
          {/* Left: text */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 30,
            justifyContent: 'center', paddingTop: 80, paddingBottom: 80,
            paddingLeft: isSmall ? 'clamp(20px, 6vw, 100px)' : 0,
            paddingRight: isSmall ? 'clamp(20px, 6vw, 100px)' : 60,
            flexShrink: 0, maxWidth: isSmall ? '100%' : 538,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{
                fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800,
                lineHeight: 1, textTransform: 'uppercase',
              }}>
                <div style={{ color: '#fff' }}>Letter from</div>
                <div style={{ color: G }}>bala</div>
              </div>
            </div>
            <p style={{
              fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)',
              color: MUTED, lineHeight: '24px',
            }}>
              When we started ConvergenSEE, we set out to solve a problem we saw across the
              industry: marketing had become fragmented. Brands were working across multiple tools,
              platforms, and vendors, yet still unable to answer the one question that matters most
              &mdash; is this creating real business opportunity? Creativity, technology, and
              insight were operating in isolation, and that disconnect was costing brands time,
              money, and opportunity. ConvergenSEE was built to change that. As a MarTech platform,
              we bring creativity, technology, and intelligence together into a single system
              &mdash; one designed to help brands move faster and make decisions with confidence.
              We believe marketing alone does not create growth; growth comes from understanding an
              audience deeply and executing with precision. That belief is the foundation this
              brand is built on, and it is what every person here works toward &mdash; not
              marketing outputs, but real, measurable opportunity for the brands, and the
              businesses, we serve.
            </p>
          </div>

          {/* Right: Bala polaroid gif */}
          <div style={{ width: isSmall ? '100%' : 732, maxWidth: isSmall ? 'none' : 732, height: isSmall ? 'clamp(320px, 70vw, 702px)' : 702, overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
            <Image src="/bala-polaroid.gif" alt="Letter from Bala" fill sizes="100vw" style={{
              objectFit: 'contain', pointerEvents: 'none',
            }} />
          </div>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>

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
              fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800,
              textTransform: 'uppercase', lineHeight: 1, textAlign: 'center', margin: 0,
              whiteSpace: 'nowrap',
            }}>
              <span style={{ color: '#fff' }}>OUR </span>
              <span style={{ color: G }}>CORE </span>
              <span style={{ color: '#fff' }}>VALUES</span>
            </h2>
          </div>

          {/* 2×2 grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 1240, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: 20, width: '100%' }}>
              <ValueCard
                line1="Walk"
                line1Green
                line2="the talk"
                line2Green={false}
                bg={imgValWalk}
                desc="We don't just talk growth, we build it. Every promise we make to a brand is one we hold ourselves to first."
              />
              <ValueCard
                line1="Be "
                line1Green={false}
                line2="foolish"
                line2Green
                bg={imgValFoolish}
                desc="The best ideas rarely look safe at first. We'd rather take the leap than play it safe and watch someone else take the opportunity!"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: 20, width: '100%' }}>
              <ValueCard
                line1="OWN"
                line1Green
                line2=" IT"
                line2Green={false}
                bg={imgValCard1}
                desc="No passing the buck, no waiting to be told. If it's on our plate, we see it through — start to finish."
              />
              <div className="card-hover" style={{
                position: 'relative', width: isSmall ? '100%' : 610, maxWidth: isSmall ? 'none' : 610, height: isSmall ? 'clamp(200px, 50vw, 300px)' : 300,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden', flexShrink: 0,
              }}>
                <div style={{ position: 'absolute', inset: 0, background: CARD }} />
                <Image src={imgValCard1} alt="" fill sizes="100vw" style={{ objectFit: 'cover', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,7,24,0.7)' }} />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <div style={{
                    fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 600,
                    lineHeight: 1.05, textTransform: 'uppercase', color: '#fff',
                  }}>CHASE THE</div>
                  <div style={{
                    fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 700,
                    lineHeight: 1.05, textTransform: 'uppercase', color: G,
                  }}>CHNC</div>
                  <p style={{
                    fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(13px, 1.6vw, 16px)', color: MUTED,
                    lineHeight: 1.5, maxWidth: 460, margin: '14px auto 0', padding: '0 20px',
                  }}>Every gap is a chance waiting to be taken.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join the Chaos ───────────────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <h2 style={{
            fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800,
            textTransform: 'uppercase', lineHeight: 1, margin: 0,
            whiteSpace: 'nowrap',
          }}>
            <span style={{ color: '#fff' }}>JOIN THE </span>
            <span style={{ color: G }}>Chaos!</span>
          </h2>
          <button className="btn-outline" style={{
            background: 'transparent', color: '#fff', border: '1px solid #fff',
            height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif",
            fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', cursor: 'pointer',
          }}>TAKE THE CHNC</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
