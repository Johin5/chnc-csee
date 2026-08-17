'use client'

// ─── Home page ────────────────────────────────────────────────────────────────
// Every section of the landing page, extracted from the old App.jsx (which also
// held the SPA router). Routing now lives in app/; this file is purely the
// home-page body.

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform, useMotionValue, useSpring, animate, useInView } from 'framer-motion'
import CHNCDock from './ui/dock'
import useResponsive from './useResponsive'
import { withPose } from './lib/teamRoster'
import TeamMemberCard from './TeamMemberCard'
import Footer from './Footer'
import ContactForm from './ContactForm'
import CHNCPlaceholder from './CHNCPlaceholder'
import SectionLabel from './SectionLabel'

// The dashboard is a 2,000-line interactive mock with timers and observers —
// no SEO-relevant text, so it loads client-side only, behind the placeholder.
const CHNCDashboard = dynamic(() => import('./CHNCDashboard'), { ssr: false, loading: () => <CHNCPlaceholder /> })

// ─── Assets ──────────────────────────────────────────────────────────────────
// The "We are ConvergenSEE" logo art, split into layers so each person can
// animate in individually. Positions are % of the 1080×1350 master canvas,
// measured by pixel-matching each cutout against the delivered composite
// (Logo Art.png). Array order = z-order, back to front.
const logoArtPeople = [
  { src: '/figma/home/logo-art/neha.png',     name: 'Neha',     left: 33.70, top: 11.85, width: 42.50 },
  { src: '/figma/home/logo-art/vishy.png',    name: 'Vishy',    left: 24.81, top: 11.48, width: 27.04 },
  { src: '/figma/home/logo-art/archana.png',  name: 'Archana',  left: 6.11,  top: 19.33, width: 31.76 },
  { src: '/figma/home/logo-art/krish.png',    name: 'Krish',    left: 11.39, top: 33.56, width: 26.94 },
  { src: '/figma/home/logo-art/rakshita.png', name: 'Rakshita', left: 48.89, top: 59.78, width: 28.80 },
  { src: '/figma/home/logo-art/akansha.png',  name: 'Akansha',  left: 22.96, top: 46.89, width: 28.98 },
  { src: '/figma/home/logo-art/kiran.png',    name: 'Kiran',    left: 68.89, top: 13.41, width: 22.31 },
  { src: '/figma/home/logo-art/bala.png',     name: 'Bala',     left: 32.96, top: 58.15, width: 29.44 },
]
const funnel1  = '/figma/home/funnel1.png'
const testiPhoto = '/figma/home/img-image111.png'
const boardImg = '/figma/home/board.png'

// ─── Shared styles ────────────────────────────────────────────────────────────
const G = '#34cc32'
const DARK = '#000718'
const CARD = '#0f1520'
const MUTED = 'rgba(255,255,255,0.7)'
const DIM = '#666a74'
const BORDER = 'rgba(255,255,255,0.1)'

const BtnGreen = ({ children, style, className, ...props }) => (
  <button {...props} className={`btn-outline ${className || ''}`} style={{
    background: 'transparent', color: '#fff', border: '1px solid #fff',
    height: 46, padding: '0 20px',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    boxSizing: 'border-box',
    fontFamily: "'Saira Condensed', sans-serif",
    fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.02em', cursor: 'pointer', backdropFilter: 'blur(10px)',
    ...style,
  }}>{children}</button>
)

const BtnOutlineGreen = ({ children, style, className, ...props }) => (
  <button {...props} className={`btn-outline ${className || ''}`} style={{
    background: 'transparent', color: '#fff', border: '1px solid #fff',
    height: 46, padding: '0 20px',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    boxSizing: 'border-box',
    fontFamily: "'Saira Condensed', sans-serif",
    fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.02em', cursor: 'pointer', backdropFilter: 'blur(10px)',
    ...style,
  }}>{children}</button>
)

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      position: 'relative', height: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', textAlign: 'center',
      background: DARK, padding: '0 20px',
    }}>
      {/* Background video — ConvergenSEE homepage showreel */}
      <video
        autoPlay muted loop playsInline preload="metadata"
        poster="/home-hero-poster.jpg"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.6,
        }}
      >
        <source src="/home-hero.mp4" type="video/mp4" />
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

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{
            fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(56px, 14vw, 150px)', fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '-3px', lineHeight: 1,
            whiteSpace: 'nowrap', textShadow: '0 2px 24px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.6)',
          }}>
            <span style={{ color: '#fff' }}>We </span>
            <span style={{ color: G }}>ARE </span>
            <span style={{ color: '#fff' }}>You</span>
          </h1>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: '#fff', lineHeight: '24px', marginTop: 8, maxWidth: 640, textShadow: '0 1px 12px rgba(0,0,0,0.8)' }}>
            Think of us as the part of your team you haven't met yet. We share your ambition, carry your goals, and stay through the messy middle where real growth happens. Every opportunity we find, we build together.
          </p>
        </div>
        <BtnGreen>Take the CHNC</BtnGreen>
      </div>
    </section>
  )
}

// ─── Clients ──────────────────────────────────────────────────────────────────
const clientLogos = [
  { src: '/ll-logo.png', alt: 'Living Liquidz' },
  { src: '/MG-Logo.png', alt: 'MG' },
  { src: '/mind-craft.png', alt: 'MindCraft' },
  { src: '/Aptech-Logo.png', alt: 'Aptech' },
  { src: '/kotak-mf.png', alt: 'Kotak Mutual Fund' },
  { src: '/flickvid.png', alt: 'Flickvid' },
  { src: '/mahindra-m.png', alt: 'Mahindra' },
]
const tickerLogos = [...clientLogos, ...clientLogos]

function Clients() {
  return (
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0', borderTop: `1px solid ${BORDER}` }}>
      <div className="ticker-wrap" style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div className="ticker-track">
          {tickerLogos.map((logo, i) => (
            <div className="ticker-item" key={`${logo.src}-${i}`}>
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const { isSmall } = useResponsive()
  return (
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: isSmall ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: isSmall ? '100%' : 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <SectionLabel>About</SectionLabel>
            <h2 style={{
              fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800,
              lineHeight: 1, color: '#fff',
            }}>
              WE ARE<br />
              Convergen<span style={{ color: G }}>SEE</span>
            </h2>
          </div>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: MUTED, lineHeight: 1.5, maxWidth: 531 }}>
            We are you, the dreamers who see what could be, the thinkers who question what is, the builders who refuse to settle. We exist in the space between your vision and reality, turning digital problems into opportunities with technology that actually works. We're not your brand. We're your people &mdash; solving, creating, and growing right alongside you.
          </p>
          <Link href="/team" className="btn-outline" style={{
            width: 'fit-content',
            background: 'transparent', color: '#fff', border: '1px solid #fff',
            height: 46, padding: '0 20px',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            boxSizing: 'border-box',
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', cursor: 'pointer', backdropFilter: 'blur(10px)',
          }}>Meet the team</Link>
        </div>
        <div style={{ width: isSmall ? '100%' : 562, maxWidth: 562, height: isSmall ? 'clamp(320px, 80vw, 564px)' : 564, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', height: '100%', aspectRatio: '1080 / 1350' }}>
            {logoArtPeople.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 26, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: 0.15 + i * 0.09, type: 'spring', duration: 0.6, bounce: 0.35 }}
                style={{ position: 'absolute', left: `${p.left}%`, top: `${p.top}%`, width: `${p.width}%` }}
              >
                <img
                  src={p.src} alt={p.name} loading="lazy" className="logo-art-float"
                  style={{ width: '100%', height: 'auto', display: 'block', animationDuration: `${3 + (i % 4) * 0.55}s`, animationDelay: `${-i * 0.7}s` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CHNC ─────────────────────────────────────────────────────────────────────
const chncStats = [
  { num: '200+', label: 'Clients served across industries' },
  { num: '₹50Cr+', label: 'Revenue generated for clients' },
  { num: '8+', label: 'Years of market expertise' },
]

const platformFeatures = [
  { title: 'Location Presence Management', icon: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    desc: "Manages your brand's presence across maps, listings, and local discovery platforms. Solves inconsistent information, low visibility, and lost walk-in opportunities." },
  { title: 'Performance Marketing', icon: <><path d="m3 11 18-5v12L3 14v-3Z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></>,
    desc: 'Plans and optimises paid campaigns across digital platforms to drive measurable growth. Solves wasted media spend, poor lead quality, and lack of performance accountability.' },
  { title: 'Social Media Management', icon: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></>,
    desc: "Runs your brand's ongoing social presence through structured content and engagement. Solves irregular posting, weak recall, and disconnected audience relationships." },
  { title: 'Content Creation', icon: <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z" />,
    desc: 'Produces consistent creative assets designed for ads, social, and digital channels. Solves content fatigue, production delays, and inconsistent brand communication.' },
  { title: 'AI Conversation & Automation', icon: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22l5.9-2Z" />,
    desc: 'Deploys AI voice and chat agents that interact, assist, and qualify customers instantly. Solves slow response times, manpower dependency, and missed customer enquiries.' },
  { title: 'SEO + AEO + GEO Optimisation', icon: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>,
    desc: "Improves your brand's visibility across search engines and generative discovery platforms. Solves low organic traffic, poor discoverability, and over-reliance on paid media." },
  { title: 'Influencer Marketing', icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    desc: 'Connects your brand with relevant creators to produce authentic, audience-led content. Solves credibility gaps, low engagement, and difficulty reaching new communities.' },
  { title: 'Creative Production & Script Development', icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8L14 2Z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></>,
    desc: 'Develops structured storytelling and performance scripts for campaigns and videos. Solves weak messaging, low viewer retention, and unclear communication.' },
  { title: 'Invoice Management', icon: <><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></>,
    desc: 'Centralises marketing invoices, spends, and vendor billing into one organised system. Solves financial confusion, reconciliation delays, and lack of spend visibility.' },
  { title: 'Analytics', icon: <><path d="M3 3v18h18" /><path d="M7 15v3M12 10v8M17 6v12" /></>,
    desc: 'Transforms campaign and customer data into actionable business intelligence. Solves fragmented reporting, unclear performance understanding, and slow decision-making.' },
]

function CHNC() {
  const router = useRouter()
  const scrollRef = useRef()
  const { isSmall, isMobile, isTablet, width } = useResponsive()
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'

  // Responsive edge-bleed: dashboard width + shift scale with the viewport so the
  // dashboard's right edge always sits ~4px past the screen (a hair of bleed, no
  // content clipped) and the left card always has room. At 1512px this resolves to
  // the original 1060px width + 230px shift, so wide screens look unchanged.
  const dashW = Math.min(1060, width - 360)   // leave ~360px for the left info card
  const dashH = Math.round(dashW * 930 / 1440) // rendered dashboard height (aspect 1440/930)
  const shiftX = Math.round((width - dashW) / 2 + 4)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  const { scrollYProgress: tiltProgress } = useScroll({
    target: scrollRef,
    offset: ['start 0.85', 'start -0.15'],
  })
  const rotateXRaw    = useTransform(tiltProgress, [0, 1], [32, 0])
  const introScaleRaw = useTransform(tiltProgress, [0, 1], [0.45, 0.88])

  const imageScaleRaw = introScaleRaw

  const [done, setDone] = useState(false)
  const [tilesReady, setTilesReady] = useState(true)
  const [cardReady, setCardReady] = useState(false)
  const [activeModule, setActiveModule] = useState('InsightIT')
  // Edge-bleed layout: text on the left, dashboard bleeds off the right edge
  const vTopAlign = true
  const vAccent   = true
  const vLink     = true
  const vBleed    = true
  const vRefined  = false
  const cardVisible = cardReady
  const lockedRotateX = useMotionValue(32)
  const lockedScale   = useMotionValue(0.45)
  const lockedDock    = useMotionValue(0)

  const MODULE_INFO = {
    InsightIT: { title: 'InsightIT', desc: "Gives your brand clarity on what's working and what to do next." },
    LocateIT: { title: 'LocateIT', desc: 'Helps your brand get discovered in the moments that matter.' },
    CreateIT: { title: 'CreateIT', desc: 'Gives your brand a steady flow of high-quality creatives at scale.', stats: [{ num: '42%', label: 'reduction in time for creative delivery' }, { num: '50%', label: 'reduction in time to market' }] },
    AmplifyIT: { title: 'AmplifyIT', desc: 'Turns your marketing spend into real demand and better leads.' },
    SocialiseIT: { title: 'SocialiseIT', desc: 'Keeps your brand visible, familiar, and remembered every day.' },
    InfluenceIT: { title: 'InfluenceIT', desc: 'Builds trust and traction through creators your audience already follows.' },
    ScriptIT: { title: 'ScriptIT', desc: 'Gives your brand scripts that hold attention and drive response.' },
    AigenIT: { title: 'AigenIT', desc: 'Helps your brand move faster with human-like, multi-language conversations.' },
    SearchIT: { title: 'SearchIT', desc: 'Brings in high-intent customers who are ready to take action.' },
    InvoiceIT: { title: 'InvoiceIT', desc: "Keeps your brand's spends, billing, and tracking clean and organised." },
    AdaptIT: { title: 'AdaptIT', desc: "Reshapes your brand's content to fit every platform it lands on." },
    EngageIT: { title: 'EngageIT', desc: 'Gives your brand messaging that speaks to each customer personally.' },
  }

  useEffect(() => {
    const unsubTilt = tiltProgress.on('change', (v) => {
      if (v >= 0.05 && !tilesReady) setTilesReady(true)

      // At 60% straightened, lock scroll and auto-complete the rest
      if (v >= 0.60 && !done) {
        lockedRotateX.set(rotateXRaw.get())
        lockedScale.set(imageScaleRaw.get())
        lockedDock.set(0)
        setDone(true)
        // Auto-complete the last 25% smoothly
        animate(lockedRotateX, 0, { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] })
        animate(lockedScale, 0.88, { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] })
        setTimeout(() => {
          animate(lockedDock, 1, { duration: 0.5, ease: 'easeOut' })
          setTimeout(() => setCardReady(true), 600)
        }, 500)
      }
    })
    return unsubTilt
  }, [tiltProgress, tilesReady, done, lockedRotateX, lockedScale, lockedDock, rotateXRaw, imageScaleRaw])

  const rotateX     = done ? lockedRotateX : rotateXRaw
  const imageScale  = done ? lockedScale   : imageScaleRaw
  const dockOpacity = done ? lockedDock    : 0

  // Funnel flow: service cards pour down + inward into the funnel neck as you
  // scroll, staggered row-by-row, and the CHNC logo reveals at the neck.
  const flowRef = useRef()
  // Start point is deliberately late ('start 0.25'): progress stays at 0 until the
  // grid's top has risen to a quarter down the viewport, i.e. all nine cards are on
  // screen and readable. Only then does scrolling begin to pour them into the funnel.
  const { scrollYProgress: flowRaw } = useScroll({ target: flowRef, offset: ['start 0.25', 'end 0.5'] })
  // Spring-smooth the raw scroll so motion glides instead of tracking wheel ticks.
  const flow = useSpring(flowRaw, { stiffness: 45, damping: 22, mass: 0.8 })

  // Row 0 = top (travels furthest, leaves last), Row 2 = bottom (nearest the funnel, leaves first).
  // Each row holds still for the first stretch of the range so nothing drifts on the
  // very first wheel tick — the bottom row leads, the top row follows.
  const yTop = useTransform(flow, [0.30, 1],    [0, 320])
  const sTop = useTransform(flow, [0.30, 1],    [1, 0.35])
  const oTop = useTransform(flow, [0.60, 0.95], [1, 0])
  const yMid = useTransform(flow, [0.20, 0.92], [0, 220])
  const sMid = useTransform(flow, [0.20, 0.92], [1, 0.4])
  const oMid = useTransform(flow, [0.50, 0.86], [1, 0])
  const yBot = useTransform(flow, [0.10, 0.82], [0, 120])
  const sBot = useTransform(flow, [0.10, 0.82], [1, 0.45])
  const oBot = useTransform(flow, [0.40, 0.76], [1, 0])
  // Ten cards make a fourth row; it sits nearest the funnel so it shares the
  // bottom row's timing.
  const rowY = [yTop, yMid, yBot, yBot]
  const rowS = [sTop, sMid, sBot, sBot]
  const rowO = [oTop, oMid, oBot, oBot]

  // Columns converge toward the centre (the funnel neck).
  const xLeft  = useTransform(flow, [0.10, 1], [0, 360])
  const xMid   = useTransform(flow, [0.10, 1], [0, 0])
  const xRight = useTransform(flow, [0.10, 1], [0, -360])
  const colX = [xLeft, xMid, xRight]


  const chncOpacity = useTransform(flow, [0.60, 0.95], [0, 1])
  const chncScale   = useTransform(flow, [0.60, 1],    [0.55, 1])

  return (
    <section style={{ paddingTop: 0, background: DARK }}>
      {/* Section title + CHNC heading above dashboard */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0' }}>
        <SectionLabel>Meet CHNC</SectionLabel>
        <h2 style={{
          fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800,
          textTransform: 'uppercase', lineHeight: 1, textAlign: 'center',
        }}>
          What's inside <span style={{ color: G }}>CHNC?</span>
        </h2>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: MUTED, lineHeight: 1.5, textAlign: 'center', maxWidth: 640, margin: 0 }}>
          Built to find the gaps, connect the dots, and turn every opportunity into something your brand can actually own.
        </p>
      </div>

      <div ref={flowRef}>
      {/* Feature grid (services) — cards flow into the funnel on scroll */}
      <div style={{ maxWidth: 1480, margin: '0 auto 60px', padding: '0 clamp(16px, 3vw, 48px)', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 24, width: '100%' }}>
          {platformFeatures.map((f, i) => {
            const cardStyle = { background: DARK, border: `2px solid ${BORDER}`, padding: '24px 26px', minHeight: 104, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14, boxSizing: 'border-box' }
            const r = Math.floor(i / 3), c = i % 3
            const animStyle = isSmall ? cardStyle : { ...cardStyle, x: colX[c], y: rowY[r], scale: rowS[r], opacity: rowO[r], willChange: 'transform, opacity' }
            return (
            <motion.div key={f.title} className="feature-card" style={animStyle}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 18 }}>
                <span className="feature-icon" style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 12, background: 'rgba(52,204,50,0.08)', border: '1px solid rgba(52,204,50,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                </span>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 'clamp(20px, 1.9vw, 26px)', lineHeight: 1.1, color: '#fff', textTransform: 'uppercase', margin: 0 }}>{f.title}</p>
              </div>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED, lineHeight: '21px', margin: 0 }}>{f.desc}</p>
            </motion.div>
            )
          })}
        </div>
      </div>

      <div style={{ position: 'relative', height: isSmall ? 240 : 430, maxWidth: 1240, margin: '0 auto', padding: '0 clamp(20px, 6vw, 100px) clamp(20px, 4vw, 48px)', boxSizing: 'border-box', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden' }}>
        <img loading="lazy" src={funnel1} alt="" style={{ position: 'absolute', left: 'clamp(16px, 3vw, 48px)', top: 0, width: 'clamp(180px, 28vw, 423px)', height: 'auto', objectFit: 'contain', opacity: 0.8 }} />
        <img loading="lazy" src={funnel1} alt="" style={{ position: 'absolute', right: 'clamp(16px, 3vw, 48px)', top: 7, width: 'clamp(180px, 28vw, 423px)', height: 'auto', objectFit: 'contain', opacity: 0.8, transform: 'rotate(180deg) scaleY(-1)' }} />
        <motion.div style={isSmall ? { position: 'relative', zIndex: 1, textAlign: 'center' } : { position: 'relative', zIndex: 1, textAlign: 'center', opacity: chncOpacity, scale: chncScale }}>
          <div style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(52px, 7.5vw, 113px)', fontWeight: 800, color: G, letterSpacing: '-3.27px', lineHeight: 1 }}>CHNC</div>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM, letterSpacing: '4px', textTransform: 'uppercase', marginTop: 16 }}>
            The Opportunity Creators
          </p>
        </motion.div>
      </div>
      </div>

      <div ref={scrollRef} style={{ position: 'relative' }}>
        {/* Stage height caps at the dashboard's rendered height + dock + pin
            runway: on tall screens the raw 100vh left a huge empty band
            between the dock and the next section. */}
        <div style={{ height: isSmall ? 'auto' : `min(100vh, ${dashH + 250}px)`, position: 'relative' }}>
          {/* Small screens: no 100vh scroll-pin (the shrunken dashboard left a
              huge blank gap) — normal flow, with bottom padding reserving room
              for the absolutely-positioned dock below the dashboard. */}
          <div style={{
            ...(isSmall
              ? { position: 'relative', paddingTop: 20, paddingBottom: 110 }
              : { position: 'sticky', top: 84, height: `min(calc(100vh - 220px), ${dashH + 20}px)`, paddingTop: '20px' }),
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'flex-start',
            overflow: 'visible',
          }}>
            <div style={{ position: 'relative', width: isSmall ? '92%' : dashW, maxWidth: isSmall ? '1060px' : undefined,
              transform: (!isSmall && cardVisible) ? `translateX(${shiftX}px)` : 'translateX(0)',
              transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              {/* Green glow bloom behind dashboard */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(52,204,50,0.32) 0%, rgba(52,204,50,0.12) 50%, transparent 78%)',
                filter: 'blur(40px)',
                borderRadius: 8,
                zIndex: 0,
                pointerEvents: 'none',
              }} />
              <div style={{ perspective: '1000px', position: 'relative', zIndex: 1 }}>
                {/* Green info card — inside perspective div so it shares dashboard height */}
                {(() => {
                  const info = MODULE_INFO[activeModule] || MODULE_INFO.InsightIT
                  return (
                    <div style={{
                      ...(isSmall
                        ? { position: 'relative', width: '100%', marginBottom: 24, paddingTop: 0, paddingBottom: 0, opacity: 1, transform: 'none' }
                        : {
                            position: 'absolute',
                            ...(vBleed ? { right: '100%', marginRight: 28 } : { left: '100%', marginLeft: 20 }),
                            top: '6%',
                            ...(vTopAlign ? { bottom: 'auto' } : { bottom: '6%' }),
                            width: vRefined ? 320 : 300,
                            paddingTop: 40, paddingBottom: 40,
                            opacity: cardVisible ? 1 : 0,
                            transform: cardVisible ? 'translateX(0)' : 'translateX(-60px)',
                          }),
                      zIndex: 2,
                      background: 'transparent',
                      borderLeft: vRefined ? `2px solid ${G}` : 'none',
                      paddingLeft: vRefined ? 24 : 28, paddingRight: 28,
                      display: 'flex', flexDirection: 'column',
                      justifyContent: vTopAlign ? 'flex-start' : 'space-between',
                      gap: vTopAlign ? 28 : 0,
                      transition: 'opacity 0.5s ease 0.2s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                    }}>
                      <div>
                        {vAccent && (
                          <div style={{ marginBottom: 14 }}>
                            <SectionLabel>Module</SectionLabel>
                          </div>
                        )}
                        <p style={{
                          fontFamily: "'Saira Condensed', sans-serif", fontSize: 36, fontWeight: 700,
                          color: '#fff', lineHeight: 1.1, marginBottom: 16,
                        }}>{info.title}</p>
                        <p style={{
                          fontFamily: "'Archivo', sans-serif", fontSize: 15, color: MUTED,
                          lineHeight: '22px',
                        }}>{info.desc}</p>
                        {info.stats && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                            {info.stats.map((s, si) => (
                              <div key={si}>
                                <p style={{
                                  fontFamily: "'Saira Condensed', sans-serif", fontSize: 64, fontWeight: 800,
                                  color: G, lineHeight: 1, marginBottom: 4,
                                }}>{s.num}</p>
                                <p style={{
                                  fontFamily: "'Archivo', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.6)',
                                  lineHeight: '18px',
                                }}>{s.label}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {vLink ? (
                        <button
                          onClick={() => router.push('/solutions')}
                          style={{
                            background: 'transparent', color: G, border: 'none', padding: 0,
                            fontFamily: "'Saira Condensed', sans-serif", fontSize: 15, fontWeight: 700,
                            textTransform: 'uppercase', letterSpacing: '0.02em', cursor: 'pointer',
                            alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8,
                            // Small screens: pad the text link up to a >=44px tap target
                            ...(isSmall ? { minHeight: 44 } : {}),
                          }}
                        >Learn more →</button>
                      ) : (
                        <button
                          onClick={() => router.push('/solutions')}
                          style={{
                            background: G, color: DARK, border: 'none',
                            height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif",
                            fontSize: 15, fontWeight: 700, textTransform: 'uppercase',
                            letterSpacing: '0.02em', cursor: 'pointer',
                            alignSelf: 'flex-start',
                          }}
                        >Explore Module →</button>
                      )}
                    </div>
                  )
                })()}
                <motion.div
                  style={{
                    width: '100%', aspectRatio: '1440/930',
                    boxShadow: '0 40px 120px rgba(0,0,0,0.7), 0 0 80px rgba(52,204,50,0.12)',
                    transformOrigin: 'center center', borderRadius: 8, overflow: 'hidden',
                    rotateX, scale: imageScale, willChange: 'transform',
                    background: '#f9f9fd',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <CHNCDashboard tilesTrigger={tilesReady} activeModule={activeModule} onModuleChange={setActiveModule} />
                </motion.div>
              </div>
              <motion.div
                // Mirror the parent's edge-bleed shift with the same timing so the
                // dock stays viewport-centered the whole time (no slide of its own).
                animate={{ x: (!isSmall && cardVisible) ? -shiftX : 0 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  position: 'absolute', top: '100%', left: 0, right: 0,
                  display: 'flex', justifyContent: 'center',
                  marginTop: done ? 20 : 8, opacity: dockOpacity,
                }}
              >
                <CHNCDock triggerOpacity={dockOpacity} activeModule={activeModule} onSelect={setActiveModule} />
              </motion.div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

// ─── Impact ───────────────────────────────────────────────────────────────────
const impacts = [
  { num: '1.3M+', desc: 'Local business locations managed globally' },
  { num: '110K+', desc: 'Business locations managed in India alone' },
  { num: '300+',  desc: 'Global enterprise brands managed across industries' },
  { num: '50%',   desc: 'Cut in go-to-market time' },
]

// Slot-machine odometer: each digit is a vertical 0-9 strip that spins through
// two full loops before settling on its target. Cell height must match the
// parent's lineHeight so digits sit exactly one glyph tall.
const SLOT_CELL = 1.1 // em

function SlotDigit({ char, inView, delay }) {
  const cellStyle = { display: 'block', height: `${SLOT_CELL}em`, lineHeight: `${SLOT_CELL}em` }
  if (!/\d/.test(char)) {
    return <span style={{ display: 'inline-block', height: `${SLOT_CELL}em`, lineHeight: `${SLOT_CELL}em` }}>{char}</span>
  }
  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .concat(Array.from({ length: +char + 1 }, (_, i) => i))
  // The hidden copy of the final digit sizes the column, so a narrow '1'
  // doesn't inherit the width of the '0'–'9' strip spinning behind it.
  return (
    <span style={{ position: 'relative', display: 'inline-block', overflow: 'hidden', height: `${SLOT_CELL}em`, verticalAlign: 'top' }}>
      <span style={{ visibility: 'hidden', display: 'block', height: `${SLOT_CELL}em`, lineHeight: `${SLOT_CELL}em` }}>{char}</span>
      <motion.span
        style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'block', textAlign: 'center' }}
        initial={{ y: 0 }}
        animate={inView ? { y: `-${(rows.length - 1) * SLOT_CELL}em` } : { y: 0 }}
        transition={{ duration: 1.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {rows.map((n, i) => <span key={i} style={cellStyle}>{n}</span>)}
      </motion.span>
    </span>
  )
}

function RollingNumber({ value, style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  return (
    <p ref={ref} style={{ ...style, lineHeight: SLOT_CELL }} aria-label={value}>
      <span aria-hidden="true">
        {value.split('').map((ch, i) => (
          <SlotDigit key={i} char={ch} inView={inView} delay={i * 0.12} />
        ))}
      </span>
    </p>
  )
}

function Impact() {
  const { isMobile } = useResponsive()
  return (
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <SectionLabel>Impact</SectionLabel>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
            Impact we have <span style={{ color: G }}>built</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20, width: '100%' }}>
          {impacts.map((s) => (
            <div key={s.num} style={{ border: `2px solid ${BORDER}`, padding: 'clamp(20px, 4vw, 30px)' }}>
              <RollingNumber value={s.num} style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 5.3vw, 80px)', fontWeight: 800, color: G, lineHeight: 1.1 }} />
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, lineHeight: '24px', marginTop: 10 }}>{s.desc}</p>
              {s.tag && <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 600, color: G, textTransform: 'uppercase', marginTop: 10 }}>{s.tag}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Brand Audit (Reality Check) ─────────────────────────────────────────────
// Every option carries its own reaction clip (muted looping mp4 — the gif
// look at a fraction of the size); picking one swaps the clip on the right.
// Nothing is selected initially, so the neutral default clip shows.
const auditDefaultGif = '/figma/home/oh-gifs/default.mp4'
const auditQs = [
  { q: 'What do you want to', qGreen: 'improve?', opts: ['VISIBILITY', 'LEADS', 'SALES', 'ALL'],
    gifs: ['ooh-wee', 'o-face', 'oh-i-see', 'jimbo'] },
  { q: "What's the main", qGreen: 'issue', qEnd: ' today?', opts: ['LOW LEADS', 'LOW QUALITY', 'INCONSISTENT', 'NOT SURE'],
    gifs: ['giphy-3', 'i-see-wow', 'matrix-ok', 'oh-snap'] },
  { q: "What's your current", qGreen: 'setup?', opts: ['TOO MANY VENDORS', 'SLOW IN-HOUSE', 'UNSTABLE RESULTS', 'STARTING FRESH'],
    gifs: ['giphy-4', 'stranger-things', 'tiffany', 'max-stranger'] },
]

function QuizPill({ label, isActive, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'transparent',
        border: `1px solid ${isActive ? G : hovered ? 'rgba(52,204,50,0.5)' : 'rgba(255,255,255,0.15)'}`,
        height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box',
        fontFamily: "'Saira Condensed', sans-serif",
        fontSize: 16,
        fontWeight: isActive || hovered ? 700 : 500,
        color: isActive || hovered ? G : '#fff',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        transform: hovered && !isActive ? 'scale(1.02)' : 'scale(1)',
      }}
    >{label}</button>
  )
}

function BrandAudit() {
  const { isSmall } = useResponsive()
  const [selections, setSelections] = useState(auditQs.map(() => null))
  const [gif, setGif] = useState(auditDefaultGif)
  // Warm the browser cache for every reaction clip so the swap on click is
  // instant — without this the old clip lingers while the next one downloads.
  useEffect(() => {
    auditQs.flatMap(q => q.gifs).forEach(name => {
      fetch(`/figma/home/oh-gifs/${name}.mp4`).catch(() => {})
    })
  }, [])
  const handleSelect = (qi, oi) => {
    setSelections(prev => { const next = [...prev]; next[qi] = oi; return next })
    setGif(`/figma/home/oh-gifs/${auditQs[qi].gifs[oi]}.mp4`)
  }
  return (
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <SectionLabel>Take the CHNC</SectionLabel>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
            Find your next <span style={{ color: G }}>opportunity</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: isSmall ? 40 : 'clamp(40px, 8vw, 229px)', alignItems: isSmall ? 'stretch' : 'flex-start', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, flexShrink: 0 }}>
            {auditQs.map((q, qi) => (
              <div key={qi} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500, fontSize: 18, color: '#fff' }}>
                  {q.q} <span style={{ color: G }}>{q.qGreen}</span>{q.qEnd || ''}
                </p>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  {q.opts.map((opt, oi) => (
                    <QuizPill key={oi} label={opt} isActive={oi === selections[qi]} onClick={() => handleSelect(qi, oi)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center', width: isSmall ? '100%' : 410, maxWidth: 410, flexShrink: 0, alignSelf: isSmall ? 'center' : 'auto' }}>
            <div style={{ width: '100%', height: isSmall ? 'clamp(280px, 70vw, 410px)' : 410, boxShadow: '0 4px 65px rgba(43,179,42,0.1)', overflow: 'hidden' }}>
              <video key={gif} src={gif} autoPlay muted loop playsInline aria-label="Reality check reaction" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 24, textAlign: 'center' }}>
              Ready for a <span style={{ color: G }}>Reality</span> check?
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: 20, alignItems: isSmall ? 'stretch' : 'flex-end', width: '100%' }}>
          {['Your name', 'Your email', 'Company name'].map((lbl, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>{lbl}</label>
              <input placeholder="Enter here" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', outline: 'none', height: 46, padding: '0 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', width: '100%', boxSizing: 'border-box' }} />
            </div>
          ))}
          <BtnGreen style={isSmall ? { width: '100%' } : undefined}>Know More</BtnGreen>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testiTabs = ['AUTOMOBILE', 'BANKING', 'FMCG', 'RETAIL', 'FSI', 'OTHER']
const testiStats = [
  { num: '96%', label: 'Increase in traffic growth' },
  { num: '10x', label: 'Revenue increase' },
  { num: '96%', label: 'Increase in sales' },
]

function Testimonials() {
  const { isSmall } = useResponsive()
  return (
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <SectionLabel>Testimonials</SectionLabel>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
            Brands who took the <span style={{ color: G }}>CHNC</span>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 'clamp(8px, 1.5vw, 20px)', flexWrap: 'wrap', justifyContent: 'center' }}>
          {testiTabs.map((t, i) => (
            <button key={t} style={{
              background: 'transparent', border: i === 1 ? `1px solid ${G}` : '1px solid rgba(255,255,255,0.15)',
              height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif",
              fontSize: 16, fontWeight: i === 1 ? 700 : 500,
              color: i === 1 ? G : '#fff', textTransform: 'uppercase',
            }}>{t}</button>
          ))}
        </div>
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginBottom: 20 }}>
            <button style={{ width: 40, height: 40, borderRadius: '50%', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: 18 }}>‹</button>
            <button style={{ width: 40, height: 40, borderRadius: '50%', background: G, border: 'none', color: DARK, fontSize: 18 }}>›</button>
          </div>
          <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', width: '100%' }}>
            <div style={{
              flex: 1, background: DARK, border: `2px solid ${BORDER}`,
              borderRight: isSmall ? `2px solid ${BORDER}` : 'none',
              borderBottom: isSmall ? 'none' : `2px solid ${BORDER}`,
              padding: 'clamp(24px, 4vw, 50px)', display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between', gap: 30, minHeight: isSmall ? 'auto' : 505,
            }}>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#fff', lineHeight: 1.3, maxWidth: 658 }}>
                "ConvergenSEE changed the trajectory and <span style={{ color: '#34cc32' }}>success</span> of my business, and I'm a lifelong user at this point."
              </p>
              <div style={{ display: 'flex', gap: 'clamp(16px, 5vw, 80px)', flexWrap: 'wrap' }}>
                {testiStats.map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 6vw, 60px)', fontWeight: 800, lineHeight: 1.1 }}>{s.num}</p>
                    <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, lineHeight: '24px', marginTop: 10 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ width: isSmall ? '100%' : 494, height: isSmall ? 'clamp(320px, 80vw, 505px)' : 505, position: 'relative', border: `2px solid ${BORDER}`, borderLeft: isSmall ? `2px solid ${BORDER}` : 'none', overflow: 'hidden', flexShrink: 0 }}>
              <img loading="lazy" src={testiPhoto} alt="Alina Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,7,24,0) 42%, #000718)' }} />
              <div style={{ position: 'absolute', bottom: 40, left: 38 }}>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 24 }}>Alina Sharma</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500, fontSize: 16, color: MUTED, marginTop: 8 }}>Mahindra</p>
              </div>
            </div>
          </div>
        </div>
        <BtnGreen>Know More</BtnGreen>
      </div>
    </section>
  )
}

// ─── Team ─────────────────────────────────────────────────────────────────────
// A slice of the real roster for the home-page strip — everyone here has a pose.
const teamMembers = withPose.slice(0, 12)

function Team() {
  return (
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) 0 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginBottom: 'clamp(40px, 6vw, 80px)', padding: '0 clamp(20px, 6vw, 100px)' }}>
        <SectionLabel>Team</SectionLabel>
        <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
          Meet the <span style={{ color: G }}>opportunity creators!</span>
        </h2>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', gap: 2, overflowX: 'auto', padding: '0 clamp(20px, 6vw, 100px)', scrollbarWidth: 'none' }}>
          {teamMembers.map(m => (
            <TeamMemberCard key={m.name} member={m} variant="strip" />
          ))}
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 160, background: 'linear-gradient(to right, #000718 60%, transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 160, background: 'linear-gradient(to left, #000718 60%, transparent)', pointerEvents: 'none' }} />
      </div>
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <Link href="/team" className="btn-outline" style={{
          background: 'transparent', color: '#fff', border: '1px solid #fff',
          height: 46, padding: '0 20px',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          boxSizing: 'border-box',
          fontFamily: "'Saira Condensed', sans-serif",
          fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.02em', cursor: 'pointer', backdropFilter: 'blur(10px)',
        }}>Meet them all</Link>
      </div>
    </section>
  )
}

// ─── Advisory Board ───────────────────────────────────────────────────────────
const boardMembers = [
  { name: 'Balaji Jagannathan (Bala)', title: 'CEO', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img: boardImg },
  { name: 'Balaji Jagannathan (Bala)', title: 'CEO', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img: boardImg },
  { name: 'Balaji Jagannathan (Bala)', title: 'CEO', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img: boardImg },
]

function BoardCard({ member }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1, position: 'relative', overflow: 'hidden',
        cursor: 'pointer', height: 561,
        border: `1px solid ${hovered ? G : BORDER}`,
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* Full image */}
      <img
        src={member.img} loading="lazy"
        alt={member.name}
        style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.6s ease',
          display: 'block',
        }}
      />

      {/* Gradient overlay — always a subtle base, deepens on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'rgba(0,7,24,0.88)'
          : 'linear-gradient(to top, rgba(0,7,24,0.6) 0%, rgba(0,7,24,0.0) 60%)',
        transition: 'background 0.4s ease',
      }} />

      {/* Green top border accent on hover */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: G,
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.4s ease',
      }} />

      {/* Text — slides up on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        padding: '32px 28px',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        transform: hovered ? 'translateY(0)' : 'translateY(24px)',
        opacity: hovered ? 1 : 0,
        transition: 'transform 0.45s ease, opacity 0.4s ease',
      }}>
        <p style={{
          fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED,
          lineHeight: '28px', marginBottom: 32, flex: 1, display: 'flex', alignItems: 'flex-start', paddingTop: 32,
        }}>{member.bio}</p>
        <div>
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontWeight: 700,
            fontSize: 36, lineHeight: '40px', color: '#fff', marginBottom: 10, textTransform: 'lowercase',
          }}>{member.name}</p>
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, letterSpacing: '1px',
          }}>{member.title}</p>
        </div>
      </div>

      {/* Name always visible at bottom (subtle, disappears on hover) */}
      <div style={{
        position: 'absolute', bottom: 24, left: 28,
        opacity: hovered ? 0 : 1,
        transition: 'opacity 0.3s ease',
      }}>
        <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 22, color: '#fff' }}>{member.name}</p>
      </div>
    </div>
  )
}

function AdvisoryBoard() {
  // Stack below 1024px too — three fixed-height portrait cards squeezed into a
  // tablet width crop the faces badly.
  const { isSmall } = useResponsive()
  return (
    <section id="advisory-board" style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <SectionLabel>Advisory Board</SectionLabel>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
            People who built <span style={{ color: G }}>CHNC</span> with us
          </h2>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: MUTED, lineHeight: 1.5, textAlign: 'center', maxWidth: 798, margin: 0 }}>
            CHNC was shaped by people who've built and scaled brands in the real world. Our advisory board has helped ConvergenSEE stay clear on direction and stronger in thinking. Their guidance has influenced how we build systems, execute, and measure impact. Even today, they continue to shape how CHNC grows.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: 20, width: '100%' }}>
          {boardMembers.map((m, i) => <BoardCard key={i} member={m} />)}
        </div>
      </div>
    </section>
  )
}


// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" style={{ background: DARK, padding: '0 clamp(20px, 6vw, 100px) clamp(56px, 8vw, 100px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <SectionLabel>Connect with us</SectionLabel>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
            We will <span style={{ color: G }}>shoot</span> you
          </h2>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}


// The landing page — every section that used to render when page === 'home'.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <CHNC />
      <Impact />
      <BrandAudit />
      <Testimonials />
      <Team />
      <AdvisoryBoard />
      <Contact />
      <Footer />
    </>
  )
}
