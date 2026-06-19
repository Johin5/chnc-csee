import { useRef, useState, useEffect, lazy, Suspense } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from 'framer-motion'
import CHNCDock from './ui/dock'
import useResponsive from './useResponsive'

import CHNCPlaceholder from './CHNCPlaceholder'

// Lazy load heavy components — they load in background while user sees hero/clients
const CHNCDashboard = lazy(() => import('./CHNCDashboard'))
const AboutPage = lazy(() => import('./AboutPage'))
const SolutionsPage = lazy(() => import('./SolutionsPage'))
const CaseStudiesPage = lazy(() => import('./CaseStudiesPage'))
const MahindraPage = lazy(() => import('./MahindraPage'))
const TeamPage = lazy(() => import('./TeamPage'))
const BlogPage = lazy(() => import('./BlogPage'))
const BlogReadPage = lazy(() => import('./BlogReadPage'))
const CareersPage = lazy(() => import('./CareersPage'))
const WorkPage = lazy(() => import('./WorkPage'))
const SocialsPage = lazy(() => import('./SocialsPage'))

// ─── Assets ──────────────────────────────────────────────────────────────────
const logoC    = '/figma/home/logo-c.svg'
const logoText = '/figma/home/logo-text.svg'
const teamPhoto= '/figma/home/img-logo-team1.png'
const clientLL = '/figma/home/img-ll-logo1.png'
const clientMG = '/figma/home/img-mg-logo.png'
const clientMH = '/figma/home/img-mahindra-m.png'
const clientMC = '/figma/home/img-mind-craft.png'
const clientFV = '/figma/home/img-flickvid.png'
const clientAP = '/figma/home/img-aptech-logo.png'
const clientKT = '/figma/home/img-kotak-mf.png'
const clientHM = '/figma/home/img-himalaya.png'
const funnel1  = '/figma/home/funnel1.png'
const platform = '/figma/home/img-asset11.png'
const platformSide = '/figma/home/img-asset31.png'
const realityImg = '/figma/home/reality.png'
const testiPhoto = '/figma/home/img-image111.png'
const boardImg = '/figma/home/board.png'
const imgBlogs   = '/figma/blog/img-mahindra2.jpg'
const imgSocials = '/creative-1.jpg'
const imgWork    = '/figma/work/macbook2.png'
const teamImg1 = '/figma/home/img-angel-chaturvedi12.jpg'
const teamImg2 = '/figma/home/img-angel-chaturvedi13.jpg'
const teamImg3 = '/figma/home/img-angel-chaturvedi14.jpg'
const teamImg4 = '/figma/home/img-angel-chaturvedi12.jpg'
const memeImg  = '/figma/home/img-meme1.png'
const partnerImg = '/figma/home/img-partner-rgb1.png'

// ─── Shared styles ────────────────────────────────────────────────────────────
const G = '#34cc32'
const DARK = '#000718'
const CARD = '#0f1520'
const MUTED = 'rgba(255,255,255,0.7)'
const DIM = '#666a74'
const BORDER = 'rgba(255,255,255,0.1)'

const SectionLabel = ({ children }) => (
  <div style={{
    display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start',
    width: 'fit-content', height: 32,
  }}>
    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: '#fff', flex: 1, display: 'flex', alignItems: 'center' }}>{children}</span>
    <div style={{ width: '100%', height: 2, background: G }} />
  </div>
)

const BtnGreen = ({ children, style, className, ...props }) => (
  <button {...props} className={`btn-green ${className || ''}`} style={{
    background: G, color: DARK, border: 'none',
    padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif",
    fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.02em', cursor: 'pointer', backdropFilter: 'blur(10px)',
    ...style,
  }}>{children}</button>
)

const BtnOutlineGreen = ({ children, style, className, ...props }) => (
  <button {...props} className={`btn-outline ${className || ''}`} style={{
    background: 'transparent', color: '#fff', border: '1px solid #fff',
    padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif",
    fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.02em', cursor: 'pointer', backdropFilter: 'blur(10px)',
    ...style,
  }}>{children}</button>
)

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav({ activePage = 'home', onNavigate }) {
  const links = ['Home', 'About', 'Solution', 'Case Studies', 'Blogs', 'Work', 'Career']
  const targetFor = (l) => ({ Home: 'home', About: 'about', Solution: 'solutions', 'Case Studies': 'case-studies', Blogs: 'blog', Work: 'work', Career: 'careers' }[l])
  const { isSmall } = useResponsive()
  const [open, setOpen] = useState(false)
  const go = (l) => { onNavigate(targetFor(l)); setOpen(false) }
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '8px clamp(16px, 5vw, 100px)',
      background: 'rgba(0,7,24,0.8)', backdropFilter: 'blur(10px)',
    }}>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 0, height: 24, position: 'relative', width: 176, cursor: 'pointer' }}
        onClick={() => onNavigate('home')}
      >
        <img src={logoC} alt="C" style={{ height: 24, width: 27, objectFit: 'contain' }} />
        <img src={logoText} alt="ConvergenSEE" style={{ height: 18, width: 146, objectFit: 'contain', marginLeft: 4 }} />
      </div>

      {!isSmall && (
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {links.map((l) => {
            const isActive = activePage === targetFor(l)
            return (
              <a
                key={l}
                className={isActive ? '' : 'nav-link'}
                onClick={(e) => { e.preventDefault(); go(l) }}
                style={{
                  padding: '10px', fontFamily: "'Saira Condensed', sans-serif",
                  fontSize: 16, textTransform: 'uppercase', cursor: 'pointer',
                  textDecoration: 'none',
                  color: isActive ? G : MUTED,
                  fontWeight: isActive ? 700 : 400,
                }}
              >{l}</a>
            )
          })}
        </div>
      )}

      {!isSmall && <BtnOutlineGreen style={{ padding: '8px 14px', fontSize: 16, fontWeight: 400 }}>Let's Connect</BtnOutlineGreen>}

      {isSmall && (
        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 8 }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              width: 24, height: 2, background: '#fff', display: 'block',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: open ? (i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none') : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      )}

      {isSmall && open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(0,7,24,0.97)', backdropFilter: 'blur(10px)',
          borderTop: `1px solid ${BORDER}`,
          display: 'flex', flexDirection: 'column', padding: '12px clamp(16px, 5vw, 100px) 24px', gap: 4,
        }}>
          {links.map((l) => {
            const isActive = activePage === targetFor(l)
            return (
              <a key={l} onClick={(e) => { e.preventDefault(); go(l) }} style={{
                padding: '12px 0', fontFamily: "'Saira Condensed', sans-serif",
                fontSize: 18, textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none',
                color: isActive ? G : MUTED, fontWeight: isActive ? 700 : 400,
                borderBottom: `1px solid ${BORDER}`,
              }}>{l}</a>
            )
          })}
          <BtnOutlineGreen style={{ marginTop: 14, fontSize: 16, fontWeight: 400 }}>Let's Connect</BtnOutlineGreen>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      position: 'relative', height: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', textAlign: 'center',
      background: DARK, padding: '0 20px',
    }}>
      {/* Background video */}
      <video
        autoPlay muted loop playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.35,
        }}
      >
        <source src="/people-tech.mp4" type="video/mp4" />
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
            whiteSpace: 'nowrap',
          }}>
            <span style={{ color: '#fff' }}>We </span>
            <span style={{ color: G }}>DARE </span>
            <span style={{ color: '#fff' }}>You</span>
          </h1>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, lineHeight: '24px', marginTop: 8 }}>
            Discover the power of our secure and rewarding copy. Explore our range of copy.
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
    <section style={{ background: DARK, padding: '56px 24px', borderTop: `1px solid ${BORDER}` }}>
      <div className="ticker-wrap" style={{ maxWidth: 1152, margin: '0 auto' }}>
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
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: isSmall ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: isSmall ? '100%' : 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <SectionLabel>About</SectionLabel>
            <h2 style={{
              fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800,
              textTransform: 'uppercase', lineHeight: 1, color: '#fff',
            }}>
              We are<br />
              Convergen<span style={{ color: G }}>SEE</span>
            </h2>
          </div>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: MUTED, lineHeight: 1.5, maxWidth: 531 }}>
            Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today. Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today.
          </p>
          <BtnGreen style={{ width: 'fit-content' }}>Meet the team</BtnGreen>
        </div>
        <div style={{ width: isSmall ? '100%' : 562, maxWidth: 562, height: isSmall ? 'clamp(320px, 80vw, 564px)' : 564, overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={teamPhoto} alt="Team" style={{
            width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center',
          }} />
        </div>
      </div>
    </section>
  )
}

// ─── Features ─────────────────────────────────────────────────────────────────
const featuresLeft = [
  { name: 'CreateIT', desc: 'Design, review and publish creatives across platforms' },
  { name: 'LocateIT', desc: 'Manage locations, listings and local presence at scale' },
  { name: 'AigenIT', desc: 'AI agents that automate workflows end to end' },
  { name: 'SocialiseIT', desc: 'Schedule, publish and track social media content' },
  { name: 'ScriptIT', desc: 'Generate scripts with AI in your brand voice' },
  { name: 'InvoiceIT', desc: 'Streamline proposals, invoicing and vendor management' },
]
const featuresRight = [
  { name: 'AmplifyIT', desc: 'Run and optimise paid campaigns across channels' },
  { name: 'InsightIT', desc: 'Real-time dashboards and performance analytics' },
  { name: 'InfluenceIT', desc: 'Discover, brief and manage influencer partnerships' },
  { name: 'SearchIT', desc: 'SEO tools and search visibility management' },
  { name: 'ConnectIT', desc: 'CRM integrations and customer data pipelines' },
  { name: 'TrackIT', desc: 'Campaign attribution and conversion tracking' },
]

function FeatureColumn({ items, align = 'left' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, width: 260 }}>
      {items.map((f) => {
        const split = f.name.replace(/(IT)$/, '|IT').split('|')
        return (
          <div key={f.name} style={{
            background: 'transparent', padding: '20px 22px',
            border: '1px solid rgba(255,255,255,0.15)',
            borderLeft: align === 'left' ? `2px solid ${G}` : '1px solid rgba(255,255,255,0.15)',
            borderRight: align === 'right' ? `2px solid ${G}` : '1px solid rgba(255,255,255,0.15)',
          }}>
            <p style={{
              fontFamily: "'Saira Condensed', sans-serif", fontSize: 20, fontWeight: 700,
              lineHeight: 1, marginBottom: 6, color: '#fff',
            }}>{split[0]}<span style={{ color: G }}>{split[1]}</span></p>
            <p style={{
              fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, lineHeight: '16px',
            }}>{f.desc}</p>
          </div>
        )
      })}
    </div>
  )
}

// ─── CHNC ─────────────────────────────────────────────────────────────────────
const chncStats = [
  { num: '200+', label: 'Clients served across industries' },
  { num: '₹50Cr+', label: 'Revenue generated for clients' },
  { num: '8+', label: 'Years of market expertise' },
]

const platformFeatures = [
  { icon: '/figma/features/pen.svg',    title: 'Create Content',         desc: 'Posting isn’t presence. We turn your content into real connection.' },
  { icon: '/figma/features/pin.svg',    title: 'Location Management',     desc: 'Posting isn’t presence. We turn your content into real connection.' },
  { icon: '/figma/features/atom.svg',   title: 'AI Agents',              desc: 'Posting isn’t presence. We turn your content into real connection.' },
  { icon: '/figma/features/happy.svg',  title: 'Social Media Management', desc: 'Posting isn’t presence. We turn your content into real connection.' },
  { icon: '/figma/features/file.svg',   title: 'Generate AI Scripts',    desc: 'Posting isn’t presence. We turn your content into real connection.' },
  { icon: '/figma/features/search.svg', title: 'Proposal Management',     desc: 'Posting isn’t presence. We turn your content into real connection.' },
  { icon: '/figma/features/pen.svg',    title: 'Amplify',                desc: 'Posting isn’t presence. We turn your content into real connection.' },
  { icon: '/figma/features/pin.svg',    title: 'MessageIT',              desc: 'Posting isn’t presence. We turn your content into real connection.' },
  { icon: '/figma/features/atom.svg',   title: 'InfluenceIT',            desc: 'Posting isn’t presence. We turn your content into real connection.' },
]

function CHNC({ onNavigate }) {
  const scrollRef = useRef()
  const { isSmall, isMobile, isTablet } = useResponsive()
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'

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
    InsightIT: { title: 'InsightIT', desc: 'Real-time dashboards, performance analytics and reporting that help you make data-driven decisions across all campaigns.' },
    LocateIT: { title: 'LocateIT', desc: 'Manage locations, listings and local presence at scale. Drive foot traffic with hyperlocal marketing.' },
    CreateIT: { title: 'CreateIT', desc: 'Gives your brand a steady flow of high-quality creatives at scale.', stats: [{ num: '42%', label: 'reduction in time for creative delivery' }, { num: '50%', label: 'reduction in time to market' }] },
    AmplifyIT: { title: 'AmplifyIT', desc: 'Run and optimise paid campaigns across channels. Maximise ROI with intelligent budget allocation.' },
    SocialiseIT: { title: 'SocialiseIT', desc: 'Schedule, publish and track social media content. Turn posting into meaningful audience engagement.' },
    InfluenceIT: { title: 'InfluenceIT', desc: 'Discover, brief and manage influencer partnerships from micro to mega tier across categories.' },
    ScriptIT: { title: 'ScriptIT', desc: 'Generate scripts with AI in your brand voice. Create compelling copy in multiple languages and tonalities.' },
    AigenIT: { title: 'AigenIT', desc: 'AI agents that automate workflows end to end. From content generation to campaign optimisation.' },
    SearchIT: { title: 'SearchIT', desc: 'SEO tools and search visibility management. Dominate organic rankings with data-driven strategies.' },
    InvoiceIT: { title: 'InvoiceIT', desc: 'Streamline proposals, invoicing and vendor management. One platform for all financial workflows.' },
    AdaptIT: { title: 'AdaptIT', desc: 'Localise and adapt campaigns for every market. Tailor content to regions, languages and audiences at scale.' },
    EngageIT: { title: 'EngageIT', desc: 'Build lasting customer relationships across channels. Automate journeys, conversations and retention.' },
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

  return (
    <section style={{ paddingTop: 0, marginTop: -60, background: DARK }}>
      {/* Section title + CHNC heading above dashboard */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, paddingTop: 80, marginBottom: 20, padding: '80px 20px 0' }}>
        <SectionLabel>Features &amp; Modules</SectionLabel>
        <h2 style={{
          fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(36px, 7vw, 80px)', fontWeight: 800,
          textTransform: 'uppercase', lineHeight: 1, textAlign: 'center',
        }}>
          What platform <span style={{ color: G }}>offers?</span>
        </h2>
      </div>

      {/* Feature grid (services) */}
      <div style={{ maxWidth: 1240, margin: '0 auto 60px', padding: '0 clamp(20px, 6vw, 100px)', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 20, width: '100%' }}>
          {platformFeatures.map((f) => (
            <div key={f.title} style={{ background: DARK, border: `2px solid ${BORDER}`, padding: 30, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
              <img src={f.icon} alt="" style={{ width: 40, height: 40, objectFit: 'contain', flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.1, color: '#fff', textTransform: 'uppercase', margin: 0 }}>{f.title}</p>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: '24px', margin: 0, maxWidth: 315 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'relative', height: isSmall ? 240 : 430, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img src={funnel1} alt="" style={{ position: 'absolute', left: 0, top: 0, width: 'clamp(180px, 30vw, 423px)', height: 'auto', objectFit: 'contain', opacity: 0.8 }} />
        <img src={funnel1} alt="" style={{ position: 'absolute', right: 0, top: 7, width: 'clamp(180px, 30vw, 423px)', height: 'auto', objectFit: 'contain', opacity: 0.8, transform: 'rotate(180deg) scaleY(-1)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(64px, 12vw, 113px)', fontWeight: 800, color: G, letterSpacing: '-3.27px', lineHeight: '50px' }}>CHNC</div>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM, letterSpacing: '4px', textTransform: 'uppercase', marginTop: 16 }}>
            The Opportunity Creators
          </p>
        </div>
      </div>

      <div ref={scrollRef} style={{ position: 'relative' }}>
        <div style={{ height: '140vh', position: 'relative' }}>
          <div style={{
            position: 'sticky', top: 84, height: 'calc(100vh - 84px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'flex-start',
            paddingTop: '20px', overflow: 'visible',
          }}>
            <div style={{ position: 'relative', width: isSmall ? '92%' : '88%', maxWidth: '1060px',
              transform: (!isSmall && cardVisible) ? 'translateX(230px)' : 'translateX(0)',
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
                                  fontFamily: "'Archivo', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.6)',
                                  lineHeight: '18px',
                                }}>{s.label}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {vLink ? (
                        <button
                          onClick={() => onNavigate && onNavigate('solutions')}
                          style={{
                            background: 'transparent', color: G, border: 'none', padding: 0,
                            fontFamily: "'Saira Condensed', sans-serif", fontSize: 15, fontWeight: 700,
                            textTransform: 'uppercase', letterSpacing: '0.02em', cursor: 'pointer',
                            alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8,
                          }}
                        >Learn more →</button>
                      ) : (
                        <button
                          onClick={() => onNavigate && onNavigate('solutions')}
                          style={{
                            background: G, color: DARK, border: 'none',
                            padding: '14px 20px', fontFamily: "'Saira Condensed', sans-serif",
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
                  <Suspense fallback={<CHNCPlaceholder />}>
                    <CHNCDashboard tilesTrigger={tilesReady} activeModule={activeModule} onModuleChange={setActiveModule} />
                  </Suspense>
                </motion.div>
              </div>
              <motion.div
                // Mirror the parent's edge-bleed shift with the same timing so the
                // dock stays viewport-centered the whole time (no slide of its own).
                animate={{ x: (!isSmall && cardVisible) ? -230 : 0 }}
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
  { num: '96%',  desc: 'Surge in website actions in just 3 months', tag: 'Automobile Brand' },
  { num: '1.3M+', desc: 'Fraud attempts tackled and resolved', tag: 'Finance Brand' },
  { num: '203K+', desc: 'Spike in online reviews in 8 months', tag: 'FMCG Brand' },
  { num: '32%',  desc: 'Fraud attempts tackled and resolved', tag: 'Technology Firm' },
]

function Impact() {
  const { isMobile } = useResponsive()
  return (
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <SectionLabel>Impact we made</SectionLabel>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
            Our <span style={{ color: G }}>impact</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20, width: '100%' }}>
          {impacts.map((s) => (
            <div key={s.num} style={{ border: `2px solid ${BORDER}`, padding: 'clamp(20px, 4vw, 30px)' }}>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 700, color: G, lineHeight: 1.1 }}>{s.num}</p>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: MUTED, lineHeight: '24px', marginTop: 10 }}>{s.desc}</p>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 600, color: G, textTransform: 'uppercase', marginTop: 10 }}>{s.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Brand Audit (Reality Check) ─────────────────────────────────────────────
const auditQs = [
  { q: 'Looking for an', qGreen: 'audit?', opts: ['YES', 'NO', 'MAYBE'], active: 0 },
  { q: 'Ready to enhance your', qGreen: 'strategies?', opts: ['JOIN OUR WEBINAR', 'CONTACT US', 'LEARN MORE'], active: 2 },
  { q: 'Need a', qGreen: 'financial', qEnd: ' review?', opts: ['VIEW OUR SERVICES', 'GET IN TOUCH', 'SCHEDULE A CALL'], active: 1 },
  { q: 'Curious about our', qGreen: 'process?', opts: ['CHECK OUR CASE STUDIES', 'READ CLIENT TESTIMONIALS', 'EXPLORE OUR METHODS'], active: 2 },
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
        padding: '15px 20px',
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
  const [selections, setSelections] = useState(auditQs.map(q => q.active))
  const handleSelect = (qi, oi) => {
    setSelections(prev => { const next = [...prev]; next[qi] = oi; return next })
  }
  return (
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <SectionLabel>Brand audit</SectionLabel>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
            Want a <span style={{ color: G }}>brand audit?</span>
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
              <img src={realityImg} alt="Reality Check" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 24, textAlign: 'center' }}>
              Ready for a <span style={{ color: G }}>Reality</span> check?
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: 20, alignItems: isSmall ? 'stretch' : 'flex-end', width: '100%' }}>
          {['Your name', 'Your name', 'Your name'].map((lbl, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>{lbl}</label>
              <input placeholder="Enter here" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', width: '100%', boxSizing: 'border-box' }} />
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
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <SectionLabel>Testimonials</SectionLabel>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, color: G, textAlign: 'center' }}>
            Testimonials
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 'clamp(8px, 1.5vw, 20px)', flexWrap: 'wrap', justifyContent: 'center' }}>
          {testiTabs.map((t, i) => (
            <button key={t} style={{
              background: 'transparent', border: i === 1 ? `1px solid ${G}` : '1px solid rgba(255,255,255,0.15)',
              padding: '15px 20px', fontFamily: "'Saira Condensed', sans-serif",
              fontSize: 16, fontWeight: i === 1 ? 700 : 500,
              color: i === 1 ? G : '#fff', textTransform: 'uppercase',
            }}>{t}</button>
          ))}
        </div>
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginBottom: 20 }}>
            <button style={{ width: 40, height: 40, borderRadius: 40, background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: 18 }}>‹</button>
            <button style={{ width: 40, height: 40, borderRadius: 40, background: G, border: 'none', color: DARK, fontSize: 18 }}>›</button>
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
                "ConvergenSEE changed the trajectory and <span style={{ color: '#2bb32a' }}>success</span> of my business, and I'm a lifelong user at this point."
              </p>
              <div style={{ display: 'flex', gap: 'clamp(16px, 5vw, 80px)', flexWrap: 'wrap' }}>
                {testiStats.map((s) => (
                  <div key={s.num} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', padding: 10 }}>
                    <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 6vw, 60px)', fontWeight: 700, lineHeight: 1.1 }}>{s.num}</p>
                    <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: MUTED, lineHeight: '24px', marginTop: 10 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ width: isSmall ? '100%' : 494, height: isSmall ? 'clamp(320px, 80vw, 505px)' : 505, position: 'relative', border: `2px solid ${BORDER}`, borderLeft: isSmall ? `2px solid ${BORDER}` : 'none', overflow: 'hidden', flexShrink: 0 }}>
              <img src={testiPhoto} alt="Alina Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

// ─── Want More ────────────────────────────────────────────────────────────────
const moreCards = [
  { img: imgBlogs, label: 'Blogs', desc: 'Insights, trends & thought leadership from our team', page: 'blog' },
  { img: imgSocials, label: 'Socials', desc: 'Follow our journey across platforms', page: 'socials' },
  { img: imgWork, label: 'Work', desc: 'Real results for real brands — see what we built', page: 'work' },
]

function WantMoreCard({ img, label, desc, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{ position: 'relative', flex: 1, aspectRatio: '4/5', overflow: 'hidden', cursor: 'pointer', background: CARD }}
    >
      <img src={img} alt={label} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        transform: hovered ? 'scale(1.06)' : 'scale(1)',
        transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered ? 'rgba(0,7,24,0.85)' : 'rgba(0,7,24,0.35)',
        transition: 'background 0.5s ease',
      }} />

      {/* Centre label — fades on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hovered ? 0 : 1,
        transform: hovered ? 'scale(0.85)' : 'scale(1)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        pointerEvents: 'none',
      }}>
        <p style={{
          fontFamily: "'Saira Condensed', sans-serif", fontWeight: 800,
          fontSize: 'clamp(28px, 4vw, 56px)', textTransform: 'uppercase',
          lineHeight: 1, color: '#fff', margin: 0, letterSpacing: '-0.02em',
        }}>
          Our <span style={{ color: G }}>{label}</span>
        </p>
      </div>

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
        background: 'linear-gradient(to top, rgba(0,7,24,0.95) 0%, transparent 100%)',
        pointerEvents: 'none',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />

      {/* Bottom — slides up on hover */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px',
        transform: hovered ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.45s ease',
      }}>
        <div style={{ width: hovered ? 40 : 0, height: 2, background: G, marginBottom: 14, transition: 'width 0.35s ease' }} />
        <p style={{
          fontFamily: "'Saira Condensed', sans-serif", fontSize: 32, fontWeight: 700,
          color: '#fff', textTransform: 'uppercase', lineHeight: 1, marginBottom: 8,
        }}>Our <span style={{ color: G }}>{label}</span></p>
        <p style={{
          fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED,
          lineHeight: '20px', marginBottom: 16,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease 0.1s',
        }}>{desc}</p>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease 0.15s',
        }}>
          <span style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 700, color: G, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore</span>
          <span style={{ color: G, fontSize: 18 }}>→</span>
        </div>
      </div>

      {/* Green border on hover */}
      <div style={{ position: 'absolute', inset: 0, border: `2px solid ${G}`, opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }} />
    </div>
  )
}

function WantMore({ onNavigate }) {
  const { isMobile } = useResponsive()
  return (
    <section id="want-more" style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px) 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <SectionLabel>More</SectionLabel>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
            Want <span style={{ color: G }}>more?</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 8, width: '100%' }}>
          {moreCards.map((c) => (
            <WantMoreCard key={c.label} {...c} onClick={c.page ? () => onNavigate(c.page) : undefined} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Team ─────────────────────────────────────────────────────────────────────
const teamMembers = [
  { img: teamImg1, name: 'Harper Langley', role: 'Product Manager' },
  { img: teamImg2, name: 'Dulce Dorwart', role: 'Designer' },
  { img: teamImg3, name: 'Dulce Dorwart', role: 'Designer' },
  { img: teamImg4, name: 'Dulce Dorwart', role: 'Designer' },
  { img: teamImg1, name: 'Harper Langley', role: 'Product Manager' },
]

function TeamCard({ member }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 320, flexShrink: 0, position: 'relative',
        overflow: 'hidden', cursor: 'pointer',
        border: `1px solid ${hovered ? G : 'transparent'}`,
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* Portrait image */}
      <div style={{ height: 440, overflow: 'hidden' }}>
        <img
          src={member.img} alt={member.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        />
      </div>

      {/* Persistent bottom gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
        background: 'linear-gradient(to top, rgba(0,7,24,0.95) 0%, rgba(0,7,24,0.6) 50%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Text overlay */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.35s ease',
      }}>
        {/* Green accent line */}
        <div style={{
          width: hovered ? 40 : 0, height: 2, background: G,
          marginBottom: 12,
          transition: 'width 0.35s ease',
        }} />
        <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: 28, lineHeight: 1, color: '#fff', margin: '0 0 6px', textTransform: 'uppercase' }}>{member.name}</p>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 13, color: hovered ? G : MUTED, margin: 0, letterSpacing: '1px', transition: 'color 0.3s ease' }}>{member.role}</p>
      </div>
    </div>
  )
}

function Team({ onNavigate }) {
  return (
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginBottom: 'clamp(40px, 6vw, 80px)', padding: '0 clamp(20px, 6vw, 100px)' }}>
        <SectionLabel>Team</SectionLabel>
        <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(36px, 7vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
          Meet the <span style={{ color: G }}>opportunity creators!</span>
        </h2>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', gap: 2, overflowX: 'auto', padding: '0 clamp(20px, 6vw, 100px)', scrollbarWidth: 'none' }}>
          {teamMembers.map((m, i) => (
            <TeamCard key={i} member={m} />
          ))}
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 160, background: 'linear-gradient(to right, #000718 60%, transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 160, background: 'linear-gradient(to left, #000718 60%, transparent)', pointerEvents: 'none' }} />
      </div>
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <BtnOutlineGreen onClick={() => onNavigate('team')}>Meet them all</BtnOutlineGreen>
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
        src={member.img}
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
  const { isMobile } = useResponsive()
  return (
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <SectionLabel>Board</SectionLabel>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
            <span style={{ color: G }}>Advisory </span>board
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16, width: '100%' }}>
          {boardMembers.map((m, i) => <BoardCard key={i} member={m} />)}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const { isMobile } = useResponsive()
  return (
    <section style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(36px, 5vw, 60px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <SectionLabel>Connect with us</SectionLabel>
          <h2 style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
            We will <span style={{ color: G }}>shoot</span> you
          </h2>
        </div>
        <form style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }} onSubmit={e => e.preventDefault()}>
          {[
            [['Your name', 'Contact number']],
            [['Company name', 'Designation']],
            [['Your email', null]],
          ].map((row, ri) => (
            <div key={ri} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20, width: '100%' }}>
              {row[0].map((lbl, fi) => lbl ? (
                <div key={fi} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>{lbl}</label>
                  <input placeholder="Enter here" className="input-glow" style={{ background: 'transparent', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', width: '100%', boxSizing: 'border-box' }} />
                </div>
              ) : <div key={fi} style={{ flex: 1 }} />)}
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <label style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>Requirements</label>
            <textarea rows={6} placeholder="Enter here" className="input-glow" style={{ background: 'transparent', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', resize: 'vertical', width: '100%' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <BtnGreen type="submit">Send Message</BtnGreen>
          </div>
        </form>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  const { isSmall } = useResponsive()
  return (
    <footer style={{ background: DARK, padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)', borderTop: '1px solid rgba(255,255,255,0.22)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(40px, 6vw, 144px)', alignItems: 'flex-start', justifyContent: isSmall ? 'center' : 'flex-start' }}>
          {/* Poison */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
            <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', textAlign: 'center' }}>
              Choose your <span style={{ color: G }}>poison</span>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ background: '#0e1620', border: `2px solid ${G}`, height: 150, width: '100%', maxWidth: 323, position: 'relative' }}>
                <img src={memeImg} alt="meme" style={{ position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)', width: 204, height: 177, objectFit: 'contain', maxWidth: '90%' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 323 }}>
                <BtnGreen style={{ width: '100%' }}>I skipped to the end</BtnGreen>
                <BtnOutlineGreen style={{ width: '100%' }}>I went through the whole website</BtnOutlineGreen>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', color: G }}>Quick links</p>
            {['Home', 'About us', 'Solutions'].map(l => (
              <a key={l} href="#" className="footer-link" style={{ display: 'flex', gap: 5, alignItems: 'center', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM, textDecoration: 'none' }}>
                <span style={{ color: G }}>›</span>{l}
              </a>
            ))}
          </div>
          {/* Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', color: G }}>Legal</p>
            {['Terms of Use', 'Privacy Policy'].map(l => (
              <a key={l} href="#" className="footer-link" style={{ display: 'flex', gap: 5, alignItems: 'center', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: DIM, textDecoration: 'none' }}>
                <span style={{ color: G }}>›</span>{l}
              </a>
            ))}
          </div>
          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 18, fontWeight: 600, textTransform: 'uppercase', color: G }}>Connect with us</p>
            <div>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 600, textTransform: 'uppercase', color: '#fff' }}>Address</p>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, lineHeight: '16px', marginTop: 5, maxWidth: 277 }}>A 303, Supreme Business Park, Hirandani Gardens, Powai, Mumbai, Maharashtra, 400076</p>
            </div>
            <div>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 600, textTransform: 'uppercase', color: '#fff' }}>Call us</p>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, marginTop: 5 }}>+91 9091399139</p>
            </div>
            <div>
              <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 600, textTransform: 'uppercase', color: '#fff' }}>Email us</p>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, marginTop: 5 }}>letsconnect@convergenseeasia.com</p>
            </div>
            <div style={{ display: 'flex', gap: 13, alignItems: 'center' }}>
              {/* Instagram */}
              <svg className="social-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="14" height="14" rx="4" stroke="#666a74" strokeWidth="1.5" fill="none"/>
                <circle cx="9" cy="9" r="3" stroke="#666a74" strokeWidth="1.5" fill="none"/>
                <circle cx="13" cy="5" r="1" fill="#666a74"/>
              </svg>
              {/* LinkedIn */}
              <svg className="social-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="14" height="14" rx="2" stroke="#666a74" strokeWidth="1.5" fill="none"/>
                <circle cx="6" cy="7" r="1" fill="#666a74"/>
                <rect x="5.5" y="9" width="1" height="4" fill="#666a74"/>
                <path d="M9 9v4m0-3a2 2 0 0 1 4 0v3" stroke="#666a74" strokeWidth="1.2" fill="none"/>
              </svg>
            </div>
            <img src={partnerImg} alt="Google Partner" style={{ width: 41, height: 39, objectFit: 'contain', marginTop: 20 }} />
          </div>
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)' }} />
        <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: isSmall ? 12 : 0, justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, lineHeight: 1.4 }}>© Copyright ConvergenSEE All Rights Reserved</p>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14 }}>
            Designed by <span style={{ color: G }}>ConvergenSEE</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPageRaw] = useState('home')
  const setPage = (p) => { setPageRaw(p); window.scrollTo(0, 0) }

  return (
    <>
      <Nav activePage={page} onNavigate={setPage} />
      <Suspense fallback={<div style={{ minHeight: '100vh', background: '#000718' }} />}>
      {page === 'about' ? (
        <AboutPage onNavigateHome={() => setPage('home')} />
      ) : page === 'solutions' ? (
        <SolutionsPage />
      ) : page === 'case-studies' ? (
        <CaseStudiesPage onNavigate={setPage} />
      ) : page === 'mahindra' ? (
        <MahindraPage onBack={() => setPage('case-studies')} />
      ) : page === 'team' ? (
        <TeamPage onBack={() => setPage('home')} />
      ) : page === 'blog' ? (
        <BlogPage onNavigate={setPage} />
      ) : page === 'blog-read' ? (
        <BlogReadPage onBack={() => setPage('blog')} />
      ) : page === 'careers' ? (
        <CareersPage onBack={() => setPage('home')} />
      ) : page === 'work' ? (
        <WorkPage onBack={() => setPage('home')} />
      ) : page === 'socials' ? (
        <SocialsPage onBack={() => setPage('home')} />
      ) : (
        <>
          <Hero />
          <Clients />
          <About />
          <CHNC onNavigate={setPage} />
          <Impact />
          <BrandAudit />
          <Testimonials />
          <Team onNavigate={setPage} />
          <AdvisoryBoard />
          <Contact />
          <Footer />
        </>
      )}
      </Suspense>
    </>
  )
}
