import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

// ─── Figma Assets (sidebar: node 64:4011) ────────────────────────────────────
const sbEllipse206  = '/figma/sidebar-chnc/ellipse-206.svg' // meatballs dots
const sbMahindra    = '/figma/sidebar-chnc/vector.svg' // mahindra logo
const sbChevron     = '/figma/sidebar-chnc/vector-9.svg' // chevron arrow
const sbEllipse4    = '/figma/sidebar-chnc/ellipse-4.svg' // pin body
const sbEllipse5    = '/figma/sidebar-chnc/ellipse-5.svg' // pin dot
const sbVec204      = '/figma/sidebar-chnc/vector-204.svg' // pen body
const sbEllipse73   = '/figma/sidebar-chnc/ellipse-73.svg' // pen dot
const sbVec205      = '/figma/sidebar-chnc/vector-205.svg' // pen line
const sbEllipse65   = '/figma/sidebar-chnc/ellipse-65.svg' // question circle
const sbEllipse93   = '/figma/sidebar-chnc/ellipse-93.svg' // question dot
const sbVec123      = '/figma/sidebar-chnc/vector-123.svg' // question mark
const sbVec57       = '/figma/sidebar-chnc/vector-57.svg' // book body
const sbVec55       = '/figma/sidebar-chnc/vector-55.svg' // book check
const sbVec10       = '/figma/sidebar-chnc/vector-10.svg' // play arrow
const sbEllipse47   = '/figma/sidebar-chnc/ellipse-47.svg' // video circle
const sbVec619      = '/figma/sidebar-chnc/vector-619.svg' // film strip
const sbRect4243    = '/figma/sidebar-chnc/rectangle-4243.svg' // file rect
const sbVec3        = '/figma/sidebar-chnc/vector-3.svg' // message body
const sbEllipse66   = '/figma/sidebar-chnc/ellipse-66.svg' // search circle
const sbVec109      = '/figma/sidebar-chnc/vector-109.svg' // search line
const sbVec58       = '/figma/sidebar-chnc/vector-58.svg' // notebook spiral
const sbVec59       = '/figma/sidebar-chnc/vector-59.svg' // notebook lines
const sbVec60       = '/figma/sidebar-chnc/vector-60.svg' // order lines
const sbVec70       = '/figma/sidebar-chnc/vector-70.svg' // money lines
const sbEllipse118  = '/figma/sidebar-chnc/ellipse-118.svg' // money circle
const sbC2D         = '/figma/sidebar-chnc/c-2d.svg' // ConvergenSEE C logo

// ─── Figma Assets (main panel: node 53:2908) ─────────────────────────────────
const imgVector          = '/figma/dashboard-chnc/img-search-vector.svg'
const imgCustomer11      = '/figma/dashboard-chnc/img-customer11.png'
const imgAvatar06        = '/figma/dashboard-chnc/img-avatar06.jpg'
const imgMemoji          = '/figma/dashboard-chnc/img-memoji.png'
const imgSubtract        = '/figma/dashboard-chnc/img-menu-subtract.svg'
const imgEllipse103      = '/figma/dashboard-chnc/img-ellipse103.svg'
const imgEllipse165      = '/figma/dashboard-chnc/img-ellipse165.svg'
const imgEllipse108      = '/figma/dashboard-chnc/img-ellipse108.svg'
const imgVector907       = '/figma/dashboard-chnc/img-vector907.svg'
const imgSubtract1       = '/figma/dashboard-chnc/img-bell-subtract.svg'
const imgEllipse45       = '/figma/dashboard-chnc/img-ellipse45.svg'
const imgEllipse65       = '/figma/dashboard-chnc/img-ellipse65-header.svg'
const imgEllipse93       = '/figma/dashboard-chnc/img-ellipse93-header.svg'
const imgVector123       = '/figma/dashboard-chnc/img-vector123-header.svg'
const imgSubtract2       = '/figma/dashboard-chnc/img-setting-subtract.svg'
const imgVector2         = '/figma/dashboard-chnc/img-vector9-expand.svg'
const imgGroupDuotoneFill= '/figma/dashboard-chnc/img-group-duotone-fill.svg'
const imgArrow           = '/figma/dashboard-chnc/img-arrow.svg'
const imgSubtract3       = '/figma/dashboard-chnc/img-subtract-pin.svg'
const imgVector10        = '/figma/dashboard-chnc/img-vector9-list.svg'
const imgVector204       = '/figma/dashboard-chnc/img-vector204-campaign.svg'
const imgEllipse73       = '/figma/dashboard-chnc/img-ellipse73-campaign.svg'
const imgVector205       = '/figma/dashboard-chnc/img-vector205-campaign.svg'

// ─── Sub-components ───────────────────────────────────────────────────────────

function SearchBar() {
  return (
    <div style={{ background: '#fff', border: '1px solid #dee0e7', display: 'flex', gap: 8, alignItems: 'center', padding: '12px 15px', width: 307, flexShrink: 0 }}>
      <div style={{ position: 'relative', width: 16, height: 16, flexShrink: 0 }}>
        <div style={{ position: 'absolute', inset: '12.5%' }}>
          <img alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={imgVector} />
        </div>
      </div>
      <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400, color: '#9fa3ac', fontSize: 14, lineHeight: '14px', whiteSpace: 'nowrap' }}>
        Search
      </p>
    </div>
  )
}


function PenIcon() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '66.67% 16.67% 16.67% 16.67%', border: '0.833px solid #000718', borderRadius: 23 }} />
      <div style={{ position: 'absolute', inset: '8.33% 16.67% 33.33% 16.67%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-6.06% -1.95% -4.29% -1.95%', display: 'block', width: '100%', height: '100%' }} src={imgVector204} />
      </div>
      <div style={{ position: 'absolute', inset: '33.33% 37.5% 41.67% 37.5%' }}>
        <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse73} />
      </div>
      <div style={{ position: 'absolute', bottom: '62.5%', left: '50%', right: '50%', top: '8.33%' }}>
        <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgVector205} />
      </div>
    </div>
  )
}

function PinIcon() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '16.67% 20.83% 17.16% 20.83%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-3.78% -4.29%', display: 'block', width: '100%', height: '100%' }} src={imgSubtract3} />
      </div>
    </div>
  )
}

function Contributors() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', paddingRight: 8 }}>
      <div style={{ background: '#b5e4ca', border: '1.429px solid #fefefe', marginRight: -8, overflow: 'hidden', borderRadius: 30, flexShrink: 0, width: 20, height: 20, position: 'relative' }}>
        <img alt="" style={{ position: 'absolute', inset: '-33.33% -48.44% -63.62% -48.44%', width: '100%', height: '100%', objectFit: 'cover' }} src={imgCustomer11} />
      </div>
      <div style={{ border: '1.469px solid #fefefe', marginRight: -8, position: 'relative', borderRadius: 62.632, flexShrink: 0, width: 24, height: 24, overflow: 'hidden' }}>
        <img alt="" style={{ position: 'absolute', height: '435.83%', left: '-116.5%', maxWidth: 'none', top: '-81.79%', width: '290.59%' }} src={imgAvatar06} />
      </div>
    </div>
  )
}

function CampaignCard({ controls, custom }) {
  return (
    <motion.div custom={custom} variants={{
      hidden: { opacity: 0, y: 16 },
      visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.4 + i * 0.12, duration: 0.45, ease: 'easeOut' } }),
    }} initial="hidden" animate={controls}
      style={{ background: '#fff', border: '1px solid #dee0e7', display: 'flex', flexDirection: 'column', gap: 15, height: 296, alignItems: 'flex-start', padding: 18, position: 'relative', flexShrink: 0, width: 353 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden', width: '100%' }}>
        <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, height: 20, lineHeight: '18px', color: '#000718', fontSize: 18, textTransform: 'uppercase', width: 159 }}>
          Recent campaign
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', justifyContent: 'center', padding: 18, width: '100%' }}>
        <div style={{ overflow: 'hidden', position: 'relative', flexShrink: 0, width: 40, height: 40 }}>
          <div style={{ position: 'absolute', background: 'rgba(124,50,204,0.3)', display: 'flex', alignItems: 'center', left: 0, padding: 10, width: 40, height: 40, top: 0 }}>
            <PenIcon />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center', lineHeight: '18px', textAlign: 'center', whiteSpace: 'nowrap' }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400, color: '#000718', fontSize: 14 }}>Mahindra XUV700 Awareness</p>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 300, color: '#666a74', fontSize: 12 }}>Created 30/07/2024</p>
        </div>
        <div style={{ background: '#eafdee', display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center', padding: '5px 10px' }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500, lineHeight: '16px', color: '#147129', fontSize: 11, textAlign: 'center', whiteSpace: 'nowrap' }}>Active</p>
        </div>
        <Contributors />
        <div style={{ background: '#fff', border: '1px solid #dee0e7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 15px' }}>
          <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, lineHeight: '24px', color: '#000718', fontSize: 14, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>See details</p>
        </div>
      </div>
    </motion.div>
  )
}

function LocationCard({ controls, custom }) {
  return (
    <motion.div custom={custom} variants={{
      hidden: { opacity: 0, y: 16 },
      visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.4 + i * 0.12, duration: 0.45, ease: 'easeOut' } }),
    }} initial="hidden" animate={controls}
      style={{ background: '#fff', border: '1px solid #dee0e7', display: 'flex', flexDirection: 'column', gap: 15, height: 296, alignItems: 'flex-start', padding: 18, position: 'relative', flexShrink: 0, width: 353 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden', width: '100%' }}>
        <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, height: 20, lineHeight: '18px', color: '#000718', fontSize: 18, textTransform: 'uppercase', width: 159 }}>
          Recent location
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', justifyContent: 'center', padding: 18, width: '100%' }}>
        <div style={{ overflow: 'hidden', position: 'relative', flexShrink: 0, width: 40, height: 40 }}>
          <div style={{ position: 'absolute', background: '#e3ebfe', display: 'flex', alignItems: 'center', left: 0, padding: 10, width: 40, height: 40, top: 0 }}>
            <PinIcon />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center', lineHeight: '18px', textAlign: 'center', whiteSpace: 'nowrap' }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400, color: '#000718', fontSize: 14 }}>Powai Hiranandani</p>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 300, color: '#666a74', fontSize: 12 }}>Created 30/07/2024</p>
        </div>
        <div style={{ background: '#eafdee', display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center', padding: '5px 10px' }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500, lineHeight: '16px', color: '#147129', fontSize: 11, textAlign: 'center', whiteSpace: 'nowrap' }}>Active</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', paddingRight: 8 }}>
          <div style={{ background: '#b5e4ca', border: '1.429px solid #fefefe', marginRight: -8, overflow: 'hidden', borderRadius: 30, flexShrink: 0, width: 20, height: 20, position: 'relative' }}>
            <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src={imgCustomer11} />
          </div>
          <div style={{ border: '1.469px solid #fefefe', position: 'relative', borderRadius: 62.632, flexShrink: 0, width: 24, height: 24, overflow: 'hidden' }}>
            <img alt="" style={{ position: 'absolute', height: '435.83%', left: '-116.5%', maxWidth: 'none', top: '-81.79%', width: '290.59%' }} src={imgAvatar06} />
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid #dee0e7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 15px' }}>
          <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, lineHeight: '24px', color: '#000718', fontSize: 14, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>See details</p>
        </div>
      </div>
    </motion.div>
  )
}

function ListItemRow({ isPen, label, sub }) {
  return (
    <div style={{ borderBottom: '0.5px solid #dee0e7', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <div style={{ display: 'flex', gap: 15, alignItems: 'center', padding: '15px 0', width: 254 }}>
        <div style={{ overflow: 'hidden', position: 'relative', flexShrink: 0, width: 40, height: 40 }}>
          <div style={{ position: 'absolute', background: isPen ? 'rgba(124,50,204,0.3)' : '#e3ebfe', display: 'flex', alignItems: 'center', left: 0, padding: 10, width: 40, height: 40, top: 0 }}>
            {isPen ? <PenIcon /> : <PinIcon />}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', lineHeight: '18px', whiteSpace: 'nowrap' }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400, color: '#000718', fontSize: 14 }}>
            {label || (isPen ? 'Mahindra XUV700 Awareness' : 'Powai Hiranandani')}
          </p>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 300, color: '#666a74', fontSize: 12 }}>{sub || 'Created 30/07/2024'}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '23px 18px', width: 89 }}>
        <div style={{ background: '#eafdee', display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center', padding: '5px 10px' }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500, lineHeight: '16px', color: '#147129', fontSize: 11, textAlign: 'center', whiteSpace: 'nowrap' }}>Active</p>
        </div>
      </div>
    </div>
  )
}

// ─── Sidebar icon helpers ─────────────────────────────────────────────────────
function SbChevron() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', bottom: '37.5%', display: 'flex', alignItems: 'center', justifyContent: 'center', left: '25%', right: '25%', top: '37.5%' }}>
        <div style={{ transform: 'rotate(-90deg) scaleY(-1)', width: 6, height: 12 }}>
          <img alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={sbChevron} />
        </div>
      </div>
    </div>
  )
}
function IconPin() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '18.75% 18.75% 10.42% 18.75%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-3.53% -4% -2.72% -4%', display: 'block', width: '100%', height: '100%' }} src={sbEllipse4} />
      </div>
      <div style={{ position: 'absolute', inset: '33.33%' }}>
        <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={sbEllipse5} />
      </div>
    </div>
  )
}
function IconPen() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '66.67% 16.67% 16.67% 16.67%', border: '0.833px solid #666a74', borderRadius: 23 }} />
      <div style={{ position: 'absolute', inset: '8.33% 16.67% 33.33% 16.67%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-6.06% -1.59% -4.29% -1.59%', display: 'block', width: '100%', height: '100%' }} src={sbVec204} />
      </div>
      <div style={{ position: 'absolute', inset: '33.33% 37.5% 41.67% 37.5%' }}>
        <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={sbEllipse73} />
      </div>
      <div style={{ position: 'absolute', bottom: '62.5%', left: '50%', right: '50%', top: '8.33%' }}>
        <img alt="" style={{ position: 'absolute', inset: '0 -0.5px', display: 'block', width: '100%', height: '100%' }} src={sbVec205} />
      </div>
    </div>
  )
}
function IconQuestion() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '12.5%' }}>
        <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={sbEllipse65} />
      </div>
      <div style={{ position: 'absolute', inset: '72.92% 47.92% 22.92% 47.92%' }}>
        <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={sbEllipse93} />
      </div>
      <div style={{ position: 'absolute', inset: '29.17% 37.5% 33.33% 37.5%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-6.67% -10% 0 -10%', display: 'block', width: '100%', height: '100%' }} src={sbVec123} />
      </div>
    </div>
  )
}
function IconBook() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '12.5% 16.67%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-3.33% -3.75%', display: 'block', width: '100%', height: '100%' }} src={sbVec57} />
      </div>
      <div style={{ position: 'absolute', bottom: '50%', left: '37.5%', right: '37.5%', top: '33.33%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-15% -10% -2.57% -10%', display: 'block', width: '100%', height: '100%' }} src={sbVec55} />
      </div>
    </div>
  )
}
function IconVideo() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', bottom: '29.17%', display: 'flex', alignItems: 'center', justifyContent: 'center', left: '33.33%', right: '25%', top: '29.17%' }}>
        <div style={{ transform: 'rotate(180deg) scaleY(-1)', width: 8.333, height: 8.333 }}>
          <img alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={sbVec10} />
        </div>
      </div>
      <div style={{ position: 'absolute', inset: '12.5%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-3.33%', display: 'block', width: '100%', height: '100%' }} src={sbEllipse47} />
      </div>
    </div>
  )
}
function IconAI() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', bottom: '25%', left: '39.58%', right: '35.42%', top: '50%' }}>
        <img alt="" style={{ position: 'absolute', inset: '2.32% 14.72% 2.32% -10%', display: 'block', width: '100%', height: '100%' }} src={sbVec619} />
      </div>
      <div style={{ position: 'absolute', inset: '14.58% 22.92%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-3.53% -4.62%', display: 'block', width: '100%', height: '100%' }} src={sbRect4243} />
      </div>
    </div>
  )
}
function IconMessage() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', bottom: '25%', left: '16.67%', right: '16.67%', top: '25%', border: '0.833px solid #666a74', borderRadius: 2 }} />
      <div style={{ position: 'absolute', inset: '37.5% 16.67% 45.83% 16.67%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-13.42% -1.68% -7.92% -1.68%', display: 'block', width: '100%', height: '100%' }} src={sbVec3} />
      </div>
    </div>
  )
}
function IconSearch() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '20.83% 29.17% 29.17% 20.83%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-5%', display: 'block', width: '100%', height: '100%' }} src={sbEllipse66} />
      </div>
      <div style={{ position: 'absolute', inset: '70.83% 16.67% 16.67% 70.83%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-20%', display: 'block', width: '100%', height: '100%' }} src={sbVec109} />
      </div>
    </div>
  )
}
function IconNotebook() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', bottom: '12.5%', left: '25%', right: '20.83%', top: '16.67%', border: '0.833px solid #666a74', borderRadius: 2 }} />
      <div style={{ position: 'absolute', inset: '33.33% 37.5% 58.33% 62.5%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-0.5px -30%', display: 'block', width: '100%', height: '100%' }} src={sbVec58} />
      </div>
      {['37.5% 66.67% 62.5% 16.67%','54.17% 66.67% 45.83% 16.67%','70.83% 66.67% 29.17% 16.67%'].map((inset, i) => (
        <div key={i} style={{ position: 'absolute', inset }}>
          <img alt="" style={{ position: 'absolute', inset: '-0.5px -15%', display: 'block', width: '100%', height: '100%' }} src={sbVec59} />
        </div>
      ))}
    </div>
  )
}
function IconOrder() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '16.67% 20.83% 12.5% 20.83%', border: '0.833px solid #666a74', borderRadius: 2 }} />
      {['37.5% 37.5% 62.5% 37.5%','54.17% 37.5% 45.83% 37.5%'].map((inset, i) => (
        <div key={i} style={{ position: 'absolute', inset }}>
          <img alt="" style={{ position: 'absolute', inset: '-0.5px -10%', display: 'block', width: '100%', height: '100%' }} src={sbVec60} />
        </div>
      ))}
      <div style={{ position: 'absolute', inset: '70.83% 45.83% 29.17% 37.5%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-0.5px -15%', display: 'block', width: '100%', height: '100%' }} src={sbVec59} />
      </div>
    </div>
  )
}
function IconMoney() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', bottom: '25%', left: '12.5%', right: '12.5%', top: '25%', border: '0.833px solid #666a74', borderRadius: 2 }} />
      {['37.5% 66.67% 62.5% 20.83%','62.5% 20.83% 37.5% 66.67%'].map((inset, i) => (
        <div key={i} style={{ position: 'absolute', inset }}>
          <img alt="" style={{ position: 'absolute', inset: '-0.5px -20%', display: 'block', width: '100%', height: '100%' }} src={sbVec70} />
        </div>
      ))}
      <div style={{ position: 'absolute', inset: '41.67%' }}>
        <img alt="" style={{ position: 'absolute', inset: '-15%', display: 'block', width: '100%', height: '100%' }} src={sbEllipse118} />
      </div>
    </div>
  )
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
const sbMenuItems = [
  { id: 'LocateIT',    label: 'LocateIT',    Icon: IconPin },
  { id: 'CreateIT',    label: 'CreateIT',    Icon: IconPen },
  { id: 'AmplifyIT',   label: 'AmplifyIT',   Icon: IconQuestion },
  { id: 'SocialiseIT', label: 'SocialiseIT', Icon: IconMessage },
  { id: 'InfluenceIT', label: 'InfluenceIT', Icon: IconBook },
  { id: 'ScriptIT',    label: 'ScriptIT',    Icon: IconVideo },
  { id: 'AigenIT',     label: 'AigenIT',     Icon: IconAI },
  { id: 'SearchIT',    label: 'SearchIT',    Icon: IconSearch },
  { id: 'InvoiceIT',   label: 'InvoiceIT',   Icon: IconOrder },
]

function Sidebar({ active }) {
  return (
    <div style={{
      position: 'absolute', left: 0, top: 0, bottom: 0, width: 256,
      background: '#000718', borderRight: '1px solid #dee0e7',
      display: 'flex', flexDirection: 'column',
      fontFamily: "'Archivo', sans-serif",
      overflow: 'hidden',
    }}>
      {/* Logo */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 33px', flexShrink: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5.486, alignItems: 'center' }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, lineHeight: 1, color: '#34cc32', fontSize: 47.887, letterSpacing: -1.3879, whiteSpace: 'nowrap' }}>CHNC</p>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, lineHeight: '5.951px', color: '#666a74', fontSize: 5.951, textAlign: 'center', letterSpacing: 1.8105, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>The Opportunity Creators</p>
        </div>
      </div>

      {/* Org + menus */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: 5, padding: '10px 18px', flexShrink: 0 }}>
        {/* Org switch */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', width: 164 }}>
            <div style={{ background: '#fff', overflow: 'hidden', position: 'relative', width: 30, height: 30, flexShrink: 0 }}>
              <img alt="Mahindra" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', height: 11.507, width: 25, display: 'block' }} src={sbMahindra} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center', whiteSpace: 'nowrap', minWidth: 0, flex: '1 0 0' }}>
              <p style={{ fontWeight: 600, lineHeight: '15px', fontSize: 14, color: '#fff' }}>Mahindra &amp; Mah..</p>
              <p style={{ fontWeight: 400, color: '#666a74', fontSize: 10 }}>Automobile Ind</p>
            </div>
          </div>
          {/* Meatballs */}
          <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
            {[['45.83%','45.83%','45.83%','45.83%'],['45.83%','70.83%','45.83%','20.83%'],['45.83%','20.83%','45.83%','70.83%']].map((p, i) => (
              <div key={i} style={{ position: 'absolute', top: p[0], right: p[1], bottom: p[2], left: p[3] }}>
                <div style={{ position: 'absolute', inset: '-50%' }}>
                  <img alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={sbEllipse206} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* InsightIT */}
        <div style={{ background: active === 'InsightIT' ? '#34cc32' : 'transparent', display: 'flex', height: 40, alignItems: 'center', justifyContent: 'space-between', padding: '12px 15px', flexShrink: 0, borderRadius: active === 'InsightIT' ? 0 : 10 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
              {[['16.67%','58.33%','58.33%','16.67%'],['58.33%','58.33%','16.67%','16.67%'],['58.33%','16.67%','16.67%','58.33%'],['16.67%','16.67%','58.33%','58.33%']].map((inset, i) => (
                <div key={i} style={{ position: 'absolute', top: inset[0], right: inset[1], bottom: inset[2], left: inset[3], border: `0.833px solid ${active === 'InsightIT' ? '#000718' : '#666a74'}`, borderRadius: 1 }} />
              ))}
            </div>
            <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, lineHeight: '24px', color: active === 'InsightIT' ? '#000718' : '#666a74', fontSize: 14, whiteSpace: 'nowrap' }}>InsightIT</p>
          </div>
        </div>

        {/* Other menu items */}
        {sbMenuItems.map(({ id, label, Icon }) => {
          const isActive = active === id
          return (
            <div key={id} style={{ background: isActive ? '#34cc32' : 'transparent', display: 'flex', height: 40, alignItems: 'center', justifyContent: 'space-between', padding: '12px 15px', borderRadius: isActive ? 0 : 10, flexShrink: 0 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Icon />
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: isActive ? 600 : 500, lineHeight: '24px', color: isActive ? '#000718' : '#666a74', fontSize: 14, whiteSpace: 'nowrap' }}>{label}</p>
              </div>
              {!isActive && <SbChevron />}
            </div>
          )
        })}
      </div>

      {/* Ad / upgrade section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', justifyContent: 'center', padding: '42px 20px', flexShrink: 0 }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: '16px', color: '#000718', fontSize: 12, textAlign: 'center', letterSpacing: -0.36, width: 216 }}>
          Let&apos;s create campaign for your brand!
        </p>
        <div style={{ border: '1px solid #fff', display: 'flex', height: 40, alignItems: 'center', justifyContent: 'center', padding: '10px 20px', width: 216 }}>
          <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, lineHeight: '24px', color: '#fff', fontSize: 14, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Upgrade now</p>
        </div>
      </div>

      {/* ConvergenSEE footer */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px 33px', flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
            <div style={{ height: 17.368, overflow: 'hidden', position: 'relative', width: 19.48, flexShrink: 0 }}>
              <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={sbC2D} />
            </div>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 14.999, color: '#fff', whiteSpace: 'nowrap' }}>
              <span style={{ fontWeight: 600 }}>Convergen</span>
              <span style={{ fontWeight: 800, color: '#34cc32' }}>SEE</span>
            </p>
          </div>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400, lineHeight: '24px', color: '#fff', fontSize: 12, whiteSpace: 'nowrap' }}>©2025</p>
        </div>
      </div>
    </div>
  )
}

// ─── Header ──────────────────────────────────────────────────────────────────
function Header() {
  return (
    <div style={{
      position: 'absolute', right: 0, top: 0, width: 1183, height: 70,
      background: '#fff', borderBottom: '1px solid #dee0e7',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 28px',
    }}>
      {/* Left: hamburger + search */}
      <div style={{ display: 'flex', gap: 20, alignItems: 'center', width: 388 }}>
        <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
          <div style={{ position: 'absolute', inset: '26.67% 18.33%' }}>
            <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgSubtract} />
          </div>
          <div style={{ position: 'absolute', inset: '16.67% 16.67% 66.67% 66.67%' }}>
            <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse103} />
          </div>
        </div>
        <SearchBar />
      </div>

      {/* Right: icons + user */}
      <div style={{ display: 'flex', gap: 15, alignItems: 'center', justifyContent: 'flex-end', width: 449 }}>
        {/* 4 icon groups */}
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          {/* Light mode */}
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
              <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse165} />
              <div style={{ position: 'absolute', left: 10, top: 10, width: 20, height: 20 }}>
                <div style={{ position: 'absolute', inset: '33.33%' }}>
                  <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse108} />
                </div>
              </div>
            </div>
            <div style={{ height: 22.5, width: 1, position: 'relative', flexShrink: 0 }}>
              <img alt="" style={{ position: 'absolute', inset: '0 -0.5px', display: 'block', width: '100%', height: '100%' }} src={imgVector907} />
            </div>
          </div>
          {/* Bell */}
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
              <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse165} />
              <div style={{ position: 'absolute', left: 10, top: 10, width: 20, height: 20 }}>
                <div style={{ position: 'absolute', inset: '14.17% 13.21% 22.5% 13.21%' }}>
                  <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgSubtract1} />
                </div>
                <div style={{ position: 'absolute', inset: '20.83% 20.83% 62.5% 62.5%' }}>
                  <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse45} />
                </div>
              </div>
            </div>
            <div style={{ height: 22.5, width: 1, position: 'relative', flexShrink: 0 }}>
              <img alt="" style={{ position: 'absolute', inset: '0 -0.5px', display: 'block', width: '100%', height: '100%' }} src={imgVector907} />
            </div>
          </div>
          {/* Question */}
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
              <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse165} />
              <div style={{ position: 'absolute', left: 10, top: 10, width: 20, height: 20 }}>
                <div style={{ position: 'absolute', inset: '12.5%' }}>
                  <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse65} />
                </div>
                <div style={{ position: 'absolute', inset: '72.92% 47.92% 22.92% 47.92%' }}>
                  <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse93} />
                </div>
                <div style={{ position: 'absolute', inset: '29.17% 37.5% 33.33% 37.5%' }}>
                  <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgVector123} />
                </div>
              </div>
            </div>
            <div style={{ height: 22.5, width: 1, position: 'relative', flexShrink: 0 }}>
              <img alt="" style={{ position: 'absolute', inset: '0 -0.5px', display: 'block', width: '100%', height: '100%' }} src={imgVector907} />
            </div>
          </div>
          {/* Settings */}
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
              <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse165} />
              <div style={{ position: 'absolute', left: 10, top: 10, width: 20, height: 20 }}>
                <div style={{ position: 'absolute', inset: '8.33%' }}>
                  <img alt="" style={{ position: 'absolute', inset: '-3%', display: 'block', width: '100%', height: '100%' }} src={imgSubtract2} />
                </div>
              </div>
            </div>
            <div style={{ height: 22.5, width: 1, position: 'relative', flexShrink: 0 }}>
              <img alt="" style={{ position: 'absolute', inset: '0 -0.5px', display: 'block', width: '100%', height: '100%' }} src={imgVector907} />
            </div>
          </div>
        </div>

        {/* User */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
          <div style={{ background: '#c5ecfd', overflow: 'hidden', borderRadius: 499.5, flexShrink: 0, width: 30, height: 30, position: 'relative' }}>
            <img alt="memoji" style={{ position: 'absolute', inset: '-1.67% -6.67% -11.67% -6.67%', width: '100%', height: '100%', objectFit: 'cover' }} src={imgMemoji} />
          </div>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400, color: '#000718', fontSize: 14, textAlign: 'center', whiteSpace: 'nowrap', lineHeight: 'normal' }}>Sledge Hammer</p>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 300, color: '#666a74', fontSize: 10, textAlign: 'center', whiteSpace: 'nowrap', lineHeight: 'normal' }}>sledge@gmail.com</p>
            </div>
            <div style={{ position: 'relative', borderRadius: 15, width: 20, height: 20, flexShrink: 0 }}>
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', height: 3, width: 12 }}>
                <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgVector2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Module definitions ───────────────────────────────────────────────────────
const MODULES = {
  InsightIT: {
    title: 'InsightIT',
    tiles: [
      { label: 'Google Reviews', value: '45',   growth: '+21.01%' },
      { label: 'Avg Rating',     value: '4.7',  growth: '+5.3%' },
      { label: 'Responded',      value: '38',   growth: '+31.2%' },
      { label: 'Sentiment Score',value: '87%',  growth: '+4.1%' },
    ],
  },
  LocateIT: {
    title: 'LocateIT',
    tiles: [
      { label: 'Total Listings',    value: '24',   growth: '+8.5%' },
      { label: 'Verified Listings', value: '18',   growth: '+12.3%' },
      { label: 'Profile Views',     value: '2.4K', growth: '+18.7%' },
      { label: 'Search Impress.',   value: '18K',  growth: '+24.1%' },
    ],
  },
  AmplifyIT: {
    title: 'AmplifyIT',
    tiles: [
      { label: 'Ad Spend',    value: '₹2.1L', growth: '+14.2%' },
      { label: 'ROAS',        value: '4.8x',  growth: '+22.7%' },
      { label: 'Impressions', value: '1.2M',  growth: '+38.5%' },
      { label: 'Conversions', value: '3,840', growth: '+19.3%' },
    ],
  },
  CreateIT: {
    title: 'CreateIT',
    tiles: [
      { label: 'Creatives',   value: '124',  growth: '+18.0%' },
      { label: 'Published',   value: '98',   growth: '+21.4%' },
      { label: 'In Review',   value: '14',   growth: '-5.2%' },
      { label: 'Avg CTR',     value: '3.2%', growth: '+9.7%' },
    ],
  },
  SocialiseIT: {
    title: 'SocialiseIT',
    tiles: [
      { label: 'Followers',   value: '84K',  growth: '+11.6%' },
      { label: 'Posts',       value: '312',  growth: '+8.3%' },
      { label: 'Total Reach', value: '2.9M', growth: '+27.4%' },
      { label: 'Eng. Rate',   value: '5.4%', growth: '+3.2%' },
    ],
  },
  InfluenceIT: {
    title: 'InfluenceIT',
    tiles: [
      { label: 'Influencers',  value: '48',   growth: '+16.0%' },
      { label: 'Total Reach',  value: '7.2M', growth: '+34.1%' },
      { label: 'Avg Eng.',     value: '6.1%', growth: '+8.5%' },
      { label: 'Campaigns',    value: '12',   growth: '+20.0%' },
    ],
  },
  ScriptIT: {
    title: 'ScriptIT',
    tiles: [
      { label: 'Scripts',      value: '67',   growth: '+14.3%' },
      { label: 'In Production',value: '8',    growth: '-10.0%' },
      { label: 'Completed',    value: '54',   growth: '+28.6%' },
      { label: 'Avg Days',     value: '4.2',  growth: '-18.2%' },
    ],
  },
  AigenIT: {
    title: 'AigenIT',
    tiles: [
      { label: 'Generated',    value: '2,140', growth: '+44.2%' },
      { label: 'Quality Score',value: '91%',   growth: '+6.8%' },
      { label: 'Time Saved',   value: '186h',  growth: '+52.1%' },
      { label: 'Tokens Used',  value: '4.7M',  growth: '+39.0%' },
    ],
  },
  SearchIT: {
    title: 'SearchIT',
    tiles: [
      { label: 'Keywords',     value: '892',  growth: '+7.3%' },
      { label: 'Avg Position', value: '4.1',  growth: '-18.4%' },
      { label: 'Organic Traffic',value:'38K', growth: '+29.7%' },
      { label: 'Backlinks',    value: '1,204',growth: '+12.1%' },
    ],
  },
  InvoiceIT: {
    title: 'InvoiceIT',
    tiles: [
      { label: 'Total Invoices',value: '84',   growth: '+6.3%' },
      { label: 'Paid',          value: '71',   growth: '+9.8%' },
      { label: 'Overdue',       value: '6',    growth: '-25.0%' },
      { label: 'This Month',    value: '₹8.4L',growth: '+17.2%' },
    ],
  },
}

// ─── Chart primitives ─────────────────────────────────────────────────────────
function StatTiles({ tiles, controls, tileVariants }) {
  return (
    <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
      {tiles.map((tile, i) => (
        <motion.div key={i} custom={i} variants={tileVariants} initial="hidden" animate={controls}
          style={{ background: 'rgba(52,204,50,0.1)', border: '1px solid #dee0e7', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 18, flexShrink: 0, width: 257 }}>
          <div style={{ display: 'flex', flexDirection: 'column', fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, gap: 15, alignItems: 'flex-start', color: '#000718' }}>
            <p style={{ lineHeight: '18px', fontSize: 14, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{tile.label}</p>
            <div style={{ display: 'flex', flexDirection: 'column', height: 50, justifyContent: 'flex-end', fontSize: 36, letterSpacing: -1 }}>
              <p style={{ lineHeight: '46px' }}>{tile.value}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', height: 83, alignItems: 'flex-end', justifyContent: 'space-between', width: 74 }}>
            <div style={{ position: 'relative', width: 30, height: 30, flexShrink: 0 }}>
              <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgGroupDuotoneFill} />
            </div>
            <div style={{ border: `1px solid ${tile.growth.startsWith('-') ? '#cc3232' : '#34cc32'}`, display: 'flex', gap: 5, alignItems: 'center', padding: 3 }}>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500, lineHeight: '16px', color: tile.growth.startsWith('-') ? '#cc3232' : '#34cc32', fontSize: 12, whiteSpace: 'nowrap' }}>{tile.growth}</p>
              {!tile.growth.startsWith('-') && (
                <div style={{ height: 7.09, position: 'relative', width: 10.279, flexShrink: 0 }}>
                  <img alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgArrow} />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function VertBars({ data, height = 140 }) {
  const max = Math.max(...data.map(d => d.v))
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end', height }}>
      {data.map((d, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flex: 1 }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 10, color: '#666a74', whiteSpace: 'nowrap' }}>{d.v}{d.unit||''}</p>
          <div style={{ width: '100%', background: i % 2 === 0 ? '#34cc32' : 'rgba(52,204,50,0.35)', height: Math.round((d.v / max) * (height - 30)) }} />
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 10, color: '#666a74', whiteSpace: 'nowrap', textAlign: 'center' }}>{d.l}</p>
        </div>
      ))}
    </div>
  )
}

function HorizRow({ label, value, max, unit = '' }) {
  const pct = Math.round((value / max) * 100)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: '#000718' }}>{label}</p>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, fontWeight: 600, color: '#34cc32' }}>{value}{unit}</p>
      </div>
      <div style={{ background: '#dee0e7', height: 6, width: '100%' }}>
        <div style={{ background: '#34cc32', height: '100%', width: `${pct}%` }} />
      </div>
    </div>
  )
}

function FunnelViz({ stages }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {stages.map((s, i) => {
        const w = 100 - i * (60 / stages.length)
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <div style={{ background: i === 0 ? '#34cc32' : `rgba(52,204,50,${0.75 - i * 0.15})`, height: 28, width: `${w}%`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 12, color: '#000718', whiteSpace: 'nowrap' }}>{s.l}</p>
              </div>
            </div>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 12, color: '#666a74', width: 40, textAlign: 'right', flexShrink: 0 }}>{s.v}</p>
          </div>
        )
      })}
    </div>
  )
}

function PipelineFlow({ stages }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
      {stages.map((s, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <div style={{ flex: 1, background: i === 0 ? '#34cc32' : i % 2 === 0 ? 'rgba(52,204,50,0.4)' : 'rgba(52,204,50,0.2)', border: '1px solid rgba(52,204,50,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px 4px', gap: 4 }}>
            <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 13, color: '#000718', textAlign: 'center', lineHeight: '14px' }}>{s.l}</p>
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 11, color: '#666a74' }}>{s.v}</p>
          </div>
          {i < stages.length - 1 && (
            <div style={{ width: 16, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '8px solid rgba(52,204,50,0.6)' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function ChartCard({ title, children, controls, custom, w = 353, h = 296 }) {
  return (
    <motion.div custom={custom} variants={{ hidden: { opacity: 0, y: 16 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.4 + i * 0.12, duration: 0.45, ease: 'easeOut' } }) }}
      initial="hidden" animate={controls}
      style={{ background: '#fff', border: '1px solid #dee0e7', display: 'flex', flexDirection: 'column', gap: 18, height: h, alignItems: 'flex-start', padding: 18, flexShrink: 0, width: w }}>
      <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, lineHeight: '18px', color: '#000718', fontSize: 18, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{title}</p>
      <div style={{ width: '100%', flex: 1 }}>{children}</div>
    </motion.div>
  )
}

function CTACard({ headline, sub, cta, controls, custom }) {
  return (
    <motion.div custom={custom} variants={{ hidden: { opacity: 0, y: 16 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.4 + i * 0.12, duration: 0.45, ease: 'easeOut' } }) }}
      initial="hidden" animate={controls}
      style={{ background: '#34cc32', display: 'flex', flexDirection: 'column', height: 296, alignItems: 'flex-start', justifyContent: 'space-between', padding: 18, flexShrink: 0, width: 353 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, lineHeight: '32px', color: '#000718', fontSize: 24, textTransform: 'uppercase' }}>{headline}</p>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500, lineHeight: '16px', fontSize: 12, color: 'rgba(0,7,24,0.6)' }}>{sub}</p>
      </div>
      <div style={{ background: '#fff', border: '1px solid #dee0e7', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 15px' }}>
        <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, lineHeight: '24px', color: '#000718', fontSize: 14, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{cta}</p>
      </div>
    </motion.div>
  )
}

// ─── Shared sub-views ─────────────────────────────────────────────────────────
function SeeAllChevron() {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, lineHeight: '18px', color: '#666a74', fontSize: 14, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>See All</p>
      <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
        <div style={{ position: 'absolute', bottom: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', left: '37.5%', right: '37.5%', top: '25%' }}>
          <img alt="" style={{ width: 5, height: 10, display: 'block' }} src={imgVector10} />
        </div>
      </div>
    </div>
  )
}

function ListCard({ title, rows }) {
  return (
    <div style={{ height: 382, overflow: 'hidden', flexShrink: 0, width: 545, position: 'relative' }}>
      <div style={{ background: '#fff', border: '1px solid #dee0e7', display: 'flex', flexDirection: 'column', gap: 15, alignItems: 'flex-start', padding: 18, width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden', width: '100%' }}>
          <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, height: 20, lineHeight: '18px', color: '#101010', fontSize: 18, textTransform: 'uppercase', width: 200 }}>{title}</p>
          <SeeAllChevron />
        </div>
        <div style={{ width: '100%' }}>
          {rows.map((row, i) => <ListItemRow key={i} isPen={row.isPen} label={row.label} sub={row.sub} />)}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 3, left: '50%', transform: 'translateX(-50%)', backdropFilter: 'blur(5px)', background: '#fff', height: 116, opacity: 0.7, width: 531 }} />
    </div>
  )
}

// ─── InsightIT content ────────────────────────────────────────────────────────
function InsightContent({ controls, tileVariants }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'flex-start', width: 1119 }}>
      <StatTiles tiles={MODULES.InsightIT.tiles} controls={controls} tileVariants={tileVariants} />
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <CTACard headline="Let's create campaign for your amazing brand!" sub="Track reviews, sentiment & ratings across all locations." cta="Go for it" controls={controls} custom={0} />
        <CampaignCard controls={controls} custom={1} />
        <LocationCard controls={controls} custom={2} />
      </div>
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <ListCard title="Recent Campaign" rows={[0,1,2,3,4,5,6].map(() => ({ isPen: true, label: 'Mahindra XUV700 Awareness', sub: 'Created 30/07/2024' }))} />
        <ListCard title="Recent Locations" rows={[0,1,2,3,4,5,6].map(() => ({ isPen: false, label: 'Powai Hiranandani', sub: 'Created 30/07/2024' }))} />
      </div>
    </div>
  )
}

// ─── LocateIT content (GBP Listings) ─────────────────────────────────────────
function LocateContent({ controls, tileVariants }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'flex-start', width: 1119 }}>
      <StatTiles tiles={MODULES.LocateIT.tiles} controls={controls} tileVariants={tileVariants} />
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <CTACard headline="Manage your GBP listings for maximum local visibility!" sub="Verify, optimise and track all your Google Business Profile locations in one place." cta="Add Listing" controls={controls} custom={0} />
        <ChartCard title="Listing Health" controls={controls} custom={1}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <HorizRow label="Verified" value={18} max={24} />
            <HorizRow label="Complete Profile" value={21} max={24} />
            <HorizRow label="With Photos" value={16} max={24} />
            <HorizRow label="Responding to Reviews" value={14} max={24} />
          </div>
        </ChartCard>
        <ChartCard title="Monthly Views" controls={controls} custom={2}>
          <VertBars data={[{l:'Oct',v:1.8},{l:'Nov',v:2.1},{l:'Dec',v:1.9},{l:'Jan',v:2.4},{l:'Feb',v:2.2},{l:'Mar',v:2.8}]} height={200} />
        </ChartCard>
      </div>
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <ListCard title="GBP Listings" rows={[
          { isPen: false, label: 'Mahindra XUV700 Showroom', sub: 'Powai, Mumbai' },
          { isPen: false, label: 'Mahindra Bandra West', sub: 'Bandra, Mumbai' },
          { isPen: false, label: 'Mahindra Andheri East', sub: 'Andheri, Mumbai' },
          { isPen: false, label: 'Mahindra Thane', sub: 'Thane, Mumbai' },
          { isPen: false, label: 'Mahindra Navi Mumbai', sub: 'Vashi, Navi Mumbai' },
        ]} />
        <ListCard title="Pending Verification" rows={[
          { isPen: false, label: 'Mahindra Pune Camp', sub: 'Camp, Pune' },
          { isPen: false, label: 'Mahindra Wakad', sub: 'Wakad, Pune' },
          { isPen: false, label: 'Mahindra Nashik Road', sub: 'Nashik Road, Nashik' },
          { isPen: false, label: 'Mahindra Aurangabad', sub: 'MIDC, Aurangabad' },
          { isPen: false, label: 'Mahindra Nagpur', sub: 'Sitabuldi, Nagpur' },
        ]} />
      </div>
    </div>
  )
}

// ─── AmplifyIT content (Performance Marketing) ───────────────────────────────
function AmplifyContent({ controls, tileVariants }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'flex-start', width: 1119 }}>
      <StatTiles tiles={MODULES.AmplifyIT.tiles} controls={controls} tileVariants={tileVariants} />
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <CTACard headline="Launch your next performance campaign!" sub="Meta & Google ads optimised for maximum ROAS across all placements." cta="New Campaign" controls={controls} custom={0} />
        <ChartCard title="Spend Split" controls={controls} custom={1}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <HorizRow label="Meta Ads" value={1.2} max={2.1} unit="L" />
            <HorizRow label="Google Search" value={0.6} max={2.1} unit="L" />
            <HorizRow label="Google Display" value={0.3} max={2.1} unit="L" />
          </div>
        </ChartCard>
        <ChartCard title="Campaign ROAS" controls={controls} custom={2}>
          <VertBars data={[{l:'XUV700',v:5.2},{l:'Thar',v:4.8},{l:'Scorpio',v:4.1},{l:'BE6',v:6.3},{l:'XEV9e',v:5.7}]} height={200} />
        </ChartCard>
      </div>
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <ListCard title="Active Campaigns" rows={[
          { isPen: true, label: 'XUV700 Brand Awareness – Meta', sub: 'Budget: ₹45K · ROAS: 5.2x' },
          { isPen: true, label: 'Thar Search – Google', sub: 'Budget: ₹28K · ROAS: 4.8x' },
          { isPen: true, label: 'Scorpio Retargeting – Meta', sub: 'Budget: ₹18K · ROAS: 4.1x' },
          { isPen: true, label: 'BE6 Launch – Google & Meta', sub: 'Budget: ₹62K · ROAS: 6.3x' },
          { isPen: true, label: 'XEV9e Awareness – YouTube', sub: 'Budget: ₹34K · ROAS: 5.7x' },
        ]} />
        <ListCard title="Top Performing Ads" rows={[
          { isPen: true, label: 'XUV700 Video – Reel Format', sub: 'CTR: 4.8% · CPC: ₹12' },
          { isPen: true, label: 'BE6 Image Carousel', sub: 'CTR: 3.9% · CPC: ₹9' },
          { isPen: true, label: 'Thar Search Ad #3', sub: 'CTR: 6.2% · CPC: ₹7' },
          { isPen: true, label: 'Scorpio Dynamic Product', sub: 'CTR: 2.9% · CPC: ₹14' },
          { isPen: true, label: 'XEV9e Brand Keyword', sub: 'CTR: 8.1% · CPC: ₹5' },
        ]} />
      </div>
    </div>
  )
}

// ─── CreateIT standard content (stat tiles, no workflow animation) ─────────────
function CreateStandardContent({ controls, tileVariants }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'flex-start', width: 1119 }}>
      <StatTiles tiles={MODULES.CreateIT.tiles} controls={controls} tileVariants={tileVariants} />
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <CTACard headline="Design & publish creatives at scale!" sub="Plan content for paid & organic campaigns with brand-approved templates." cta="Create Now" controls={controls} custom={0} />
        <ChartCard title="Creative Output" controls={controls} custom={1}>
          <VertBars data={[{l:'Oct',v:18},{l:'Nov',v:24},{l:'Dec',v:21},{l:'Jan',v:32},{l:'Feb',v:28},{l:'Mar',v:35}]} height={200} />
        </ChartCard>
        <ChartCard title="Approval Rate" controls={controls} custom={2}>
          <VertBars data={[{l:'Oct',v:82},{l:'Nov',v:88},{l:'Dec',v:85},{l:'Jan',v:91},{l:'Feb',v:94},{l:'Mar',v:96}]} height={200} />
        </ChartCard>
      </div>
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <ListCard title="Recent Creatives" rows={[
          { isPen: true, label: 'Thar Mountain Day Campaign', sub: 'Created 28/02/2025' },
          { isPen: true, label: 'Scorpio N Launch Carousel', sub: 'Created 25/02/2025' },
          { isPen: true, label: 'XUV400 EV Awareness', sub: 'Created 20/02/2025' },
          { isPen: true, label: 'BE6 Social Media Kit', sub: 'Created 18/02/2025' },
          { isPen: true, label: 'Thar Roxx Delhi Event', sub: 'Created 15/02/2025' },
        ]} />
        <ListCard title="Pending Approvals" rows={[
          { isPen: true, label: 'XEV9e Teaser Reel', sub: 'Sent for review' },
          { isPen: true, label: 'Tiramisu Recipe Carousel', sub: 'Awaiting feedback' },
          { isPen: true, label: 'Coffee Story Static', sub: 'In design' },
          { isPen: true, label: 'Tres Leches Campaign', sub: 'Copy review' },
          { isPen: true, label: 'Lifestyle Brand Shoot', sub: 'Draft' },
        ]} />
      </div>
    </div>
  )
}

// ─── CreateIT content (Creative Production) ───────────────────────────────────
function CreateContent({ controls, tileVariants, stepCount = 0 }) {
  const G = '#34cc32'

  // Self-contained timer: total elapsed ms since mount
  const [elapsed, setElapsed] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setElapsed(e => e + 60), 60)
    return () => clearInterval(id)
  }, [])

  // Timeline: cumulative ms for each frame start
  // Frame:    0=idle  1=Brief(3.5s)  2=Generate(5s)  3=Approve(4s)  4=Adapt(3.5s)  5=Copy(5s)  6=Merge(3.5s)  7=Publish(4s)  8=done
  const timeline = [0, 500, 4000, 9000, 13000, 16500, 21500, 25000, 29000]
  const totalDuration = 30000

  // Loop the animation
  const looped = elapsed % totalDuration

  // Determine which frame we're in and how far through it
  let frame = 0
  let t = 0
  for (let i = timeline.length - 1; i >= 0; i--) {
    if (looped >= timeline[i]) { frame = i; t = looped - timeline[i]; break }
  }

  const copyText = 'Celebrating the spirit of freedom! 🇮🇳 Happy Independence Day to every Indian heart.'

  // Cursor — moves smoothly within each frame
  const getCursorPos = () => {
    switch(frame) {
      case 1:
        if (t < 800) return [520, 140]
        if (t < 1600) return [520, 210]
        if (t < 2400) return [520, 280]
        return [520, 350]
      case 2:
        if (t < 1000) return [400, 175]
        if (t < 1500) return [250, 220]
        if (t < 2000) return [380, 220]
        if (t < 3500) return [500, 330]
        return [350, 420]
      case 3:
        if (t < 1000) return [580, 240]
        if (t < 1500) return [580, 195]
        if (t < 3000) return [400, 380]
        return [400, 380]
      case 4:
        if (t < 800) return [220, 260]
        if (t < 1600) return [440, 260]
        if (t < 2400) return [660, 260]
        return [350, 400]
      case 5:
        if (t < 500) return [520, 170]
        if (t < 1000) return [520, 225]
        if (t < 1500) return [520, 275]
        if (t < 3200) return [500, 345]
        return [500, 440]
      case 6:
        if (t < 700) return [350, 290]
        if (t < 1400) return [600, 290]
        if (t < 2000) return [480, 290]
        return [480, 410]
      case 7:
        if (t < 600) return [700, 160]
        if (t < 1200) return [700, 215]
        if (t < 1800) return [700, 270]
        if (t < 2400) return [700, 325]
        return [480, 430]
      default: return [400, 260]
    }
  }
  const [cx, cy] = getCursorPos()

  const overlays = [
    null,
    { main: 'Tell it what you need.', sub: 'Campaign name. Platform. That\'s it.' },
    { main: 'AI generates your visuals.', sub: 'Multiple options. Multiple AI engines. Seconds.' },
    { main: 'Pick one. Send for approval.', sub: 'One click. Done.' },
    { main: 'One image. Every format. Every language.', sub: 'Adapt it once. Use it everywhere.' },
    { main: 'AI writes the copy too.', sub: 'Multiple variations. Pick your favourite.' },
    { main: 'Image + copy come together.', sub: 'Your final creative. Ready to go.' },
    { main: 'Brief. Generate. Approve. Adapt. Publish.', sub: 'All in one place. All in minutes.' },
  ]
  const overlay = overlays[frame]
  const progressLabels = ['CAMPAIGN', 'BRIEF', 'PLANNING', 'APPROVE', 'ADAPT', 'COPY', 'PUBLISH']

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 1119, position: 'relative', height: '100%' }}>
      <style>{`
        @keyframes shimmer { 0% { background-position: -200px 0; } 100% { background-position: 200px 0; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes progressFill { from { width: 0; } to { width: 100%; } }
      `}</style>

      {/* Progress bar */}
      <div style={{ display: 'flex', gap: 0, padding: '14px 24px 0' }}>
        {progressLabels.map((l, i) => (
          <div key={l} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
            <div style={{ height: 3, width: '100%', background: i < frame ? G : (i === frame && frame > 0) ? G : '#dee0e7', borderRadius: 2, transition: 'background 0.6s ease', opacity: (i === frame && frame > 0) ? 0.5 : 1 }} />
            <span style={{ fontSize: 8, fontFamily: "'Archivo'", color: i <= frame && frame > 0 ? G : '#9fa3ac', fontWeight: i < frame ? 700 : 400, transition: 'all 0.3s ease' }}>{l}</span>
          </div>
        ))}
      </div>

      {/* Black cursor */}
      {frame > 0 && frame <= 7 && (
        <div style={{
          position: 'absolute', left: cx, top: cy, zIndex: 200,
          transition: 'left 0.9s cubic-bezier(0.25,0.1,0.25,1), top 0.9s cubic-bezier(0.25,0.1,0.25,1)',
          pointerEvents: 'none',
        }}>
          <svg width="16" height="22" viewBox="0 0 14 19" fill="none">
            <path d="M0 0V18L4.5 13.5L8 19L10 18L6.5 12.5H13L0 0Z" fill="#000" stroke="#fff" strokeWidth="1"/>
          </svg>
        </div>
      )}

      {/* Content area */}
      <div style={{ flex: 1, padding: '18px 24px', overflow: 'hidden' }}>

        {/* FRAME 1 — Brief IT (3.5s) */}
        {frame === 1 && (
          <div key="f1" style={{ animation: 'fadeUp 0.7s ease' }}>
            <h3 style={{ margin: '0 0 22px', fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase' }}>Create Campaign</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { label: 'Campaign Name', value: 'Independence Day Post' },
                { label: 'Platform', value: 'Instagram' },
                { label: 'Region', value: 'India — All States' },
                { label: 'Objective', value: 'Brand Awareness' },
              ].map((field, i) => {
                const show = t > i * 700
                const greenBorder = t > i * 700 + 500
                return (
                  <div key={i} style={{ opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(12px)', transition: 'all 0.7s ease' }}>
                    <label style={{ fontSize: 11, color: '#9fa3ac', fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 5 }}>{field.label}</label>
                    <div style={{ border: `1.5px solid ${greenBorder ? G : '#dee0e7'}`, padding: '9px 14px', fontSize: 13, fontFamily: "'Archivo'", color: '#333', transition: 'border-color 0.6s ease', borderRadius: 2 }}>
                      {show ? field.value : ''}
                      {show && !greenBorder && <span style={{ animation: 'blink 0.8s ease infinite', color: G, marginLeft: 1 }}>|</span>}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* FRAME 2 — Generate Images (5s) */}
        {frame === 2 && (
          <div key="f2" style={{ animation: 'fadeUp 0.7s ease' }}>
            <h3 style={{ margin: '0 0 16px', fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase' }}>Planning — Generate Images</h3>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 11, color: '#9fa3ac', fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 5 }}>Brief</label>
              <div style={{ border: `1.5px solid ${t > 600 ? G : '#dee0e7'}`, padding: '9px 14px', fontSize: 12, fontFamily: "'Archivo'", color: '#333', transition: 'border-color 0.6s ease', borderRadius: 2 }}>
                Festive post for independence day{t < 1200 && <span style={{ animation: 'blink 0.8s ease infinite', color: G, marginLeft: 1 }}>|</span>}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 20, marginBottom: 18 }}>
              {['GPT', 'Gemini 2.0'].map((p, i) => {
                const checked = t > 1000 + i * 500
                return (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 7, opacity: checked ? 1 : 0.3, transition: 'opacity 0.5s ease' }}>
                    <div style={{ width: 15, height: 15, borderRadius: 3, border: `2px solid ${checked ? G : '#ccc'}`, background: checked ? G : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.4s ease', transform: checked ? 'scale(1)' : 'scale(0.8)' }}>
                      {checked && <span style={{ color: '#fff', fontSize: 9, fontWeight: 800 }}>✓</span>}
                    </div>
                    <span style={{ fontSize: 12, fontFamily: "'Archivo'", color: '#333' }}>{p}</span>
                  </div>
                )
              })}
            </div>
            {t > 2000 && t < 3500 && (
              <div style={{ background: '#f5f6f8', borderRadius: 8, padding: 18, textAlign: 'center', border: '1px solid #dee0e7', animation: 'fadeUp 0.5s ease' }}>
                <p style={{ fontSize: 12, fontFamily: "'Archivo'", color: '#333', margin: '0 0 10px', fontWeight: 600 }}>Generating with Dual AI (GPT + Gemini 2.0)</p>
                <div style={{ height: 6, background: '#e0e0e0', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: G, width: `${Math.min(((t - 2000) / 1500) * 100, 100)}%`, borderRadius: 3, transition: 'width 0.1s linear' }} />
                </div>
              </div>
            )}
            {t > 3500 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                {[0,1,2,3,4,5].map(i => (
                  <div key={i} style={{
                    aspectRatio: '1/1', background: `hsl(${120 + i * 30}, 30%, ${75 - i * 5}%)`, borderRadius: 4,
                    opacity: t > 3500 + i * 250 ? 1 : 0, transform: t > 3500 + i * 250 ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
                    transition: 'all 0.6s ease', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    {t > 3500 + i * 250 && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)', backgroundSize: '200px 100%', animation: 'shimmer 2s ease infinite' }} />}
                    <span style={{ fontSize: 9, color: 'rgba(0,0,0,0.2)', fontFamily: "'Archivo'", position: 'relative' }}>{i < 3 ? 'Gemini' : 'GPT'}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* FRAME 3 — Approve (4s) */}
        {frame === 3 && (
          <div key="f3" style={{ animation: 'fadeUp 0.7s ease' }}>
            <h3 style={{ margin: '0 0 16px', fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase' }}>Select & Approve</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 20 }}>
              {[0,1,2,3,4,5].map(i => (
                <div key={i} style={{
                  aspectRatio: '1/1', background: `hsl(${120 + i * 30}, 30%, ${75 - i * 5}%)`, borderRadius: 4,
                  border: i === 2 && t > 1000 ? `3px solid ${G}` : '3px solid transparent',
                  position: 'relative', transition: 'border 0.5s ease',
                }}>
                  {i === 2 && t > 1000 && (
                    <div style={{ position: 'absolute', top: 5, right: 5, width: 18, height: 18, borderRadius: 9, background: G, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeUp 0.4s ease' }}>
                      <span style={{ color: '#fff', fontSize: 10, fontWeight: 800 }}>✓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {t > 1500 && t < 3000 && (
              <div style={{ background: '#fff8e1', border: '1px solid #ffd54f', borderRadius: 6, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, animation: 'fadeUp 0.5s ease' }}>
                <span style={{ fontSize: 16 }}>⏳</span>
                <span style={{ fontSize: 13, fontFamily: "'Archivo'", color: '#f57f17', fontWeight: 600 }}>Waiting for Approval...</span>
              </div>
            )}
            {t > 3000 && (
              <div style={{ background: '#e8fde8', border: `2px solid ${G}`, borderRadius: 6, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, animation: 'fadeUp 0.5s ease' }}>
                <span style={{ fontSize: 16 }}>✅</span>
                <span style={{ fontSize: 13, fontFamily: "'Archivo'", color: '#1b5e20', fontWeight: 700 }}>Approved by Stakeholder</span>
              </div>
            )}
          </div>
        )}

        {/* FRAME 4 — Adapt (3.5s) */}
        {frame === 4 && (
          <div key="f4" style={{ animation: 'fadeUp 0.7s ease' }}>
            <h3 style={{ margin: '0 0 16px', fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase' }}>Adapt — Resize & Localize</h3>
            <div style={{ display: 'flex', gap: 14, marginBottom: 22 }}>
              {[{ l: 'Square', r: '1/1' }, { l: 'Story', r: '9/16' }, { l: 'Banner', r: '16/9' }].map((f, i) => (
                <div key={f.l} style={{
                  flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                  opacity: t > i * 700 ? 1 : 0, transform: t > i * 700 ? 'scale(1)' : 'scale(0.88)',
                  transition: 'all 0.7s ease',
                }}>
                  <div style={{ width: '100%', aspectRatio: f.r, background: 'hsl(150, 30%, 70%)', borderRadius: 4, border: `2px solid ${G}`, maxHeight: 130 }} />
                  <span style={{ fontSize: 11, fontFamily: "'Archivo'", color: '#666' }}>{f.l}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, opacity: t > 2200 ? 1 : 0, transition: 'opacity 0.6s ease' }}>
              <label style={{ fontSize: 12, color: '#9fa3ac', fontFamily: "'Archivo'", fontWeight: 600 }}>Language:</label>
              {['English', 'Hindi', 'Tamil'].map((l, i) => (
                <div key={l} style={{ padding: '5px 14px', background: i === 0 ? G : '#f0f0f0', fontSize: 11, fontFamily: "'Archivo'", fontWeight: 600, color: i === 0 ? '#000' : '#666', borderRadius: 3 }}>{l}</div>
              ))}
            </div>
          </div>
        )}

        {/* FRAME 5 — Generate Copy (5s) */}
        {frame === 5 && (
          <div key="f5" style={{ animation: 'fadeUp 0.7s ease' }}>
            <h3 style={{ margin: '0 0 16px', fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase' }}>Generate Copy</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 18 }}>
              {[{ l: 'Description', v: 'Independence Day Post' }, { l: 'Ideation', v: 'Wish everyone Happy Independence Day' }, { l: 'Tone', v: 'Authentic' }].map((f, i) => {
                const show = t > i * 400
                const greenBorder = t > i * 400 + 300
                return (
                  <div key={i} style={{ opacity: show ? 1 : 0, transition: 'opacity 0.5s ease' }}>
                    <label style={{ fontSize: 10, color: '#9fa3ac', fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 4 }}>{f.l}</label>
                    <div style={{ border: `1.5px solid ${greenBorder ? G : '#dee0e7'}`, padding: '7px 12px', fontSize: 12, fontFamily: "'Archivo'", color: '#333', transition: 'border-color 0.5s ease', borderRadius: 2 }}>{f.v}</div>
                  </div>
                )
              })}
            </div>
            {t > 1500 && t < 3200 && (
              <div style={{ background: '#f5f6f8', borderRadius: 8, padding: 18, textAlign: 'center', border: '1px solid #dee0e7', animation: 'fadeUp 0.5s ease' }}>
                <p style={{ fontSize: 12, fontFamily: "'Archivo'", color: '#333', margin: '0 0 10px', fontWeight: 600 }}>Generating content...</p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 10 }}>
                  <span style={{ fontSize: 10, color: G, fontFamily: "'Archivo'" }}>✓ OpenAI</span>
                  <span style={{ fontSize: 10, color: t > 2200 ? G : '#9fa3ac', fontFamily: "'Archivo'" }}>{t > 2200 ? '✓' : '...'} Gemini</span>
                </div>
                <div style={{ height: 6, background: '#e0e0e0', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: G, width: `${Math.min(((t - 1500) / 1700) * 100, 100)}%`, borderRadius: 3, transition: 'width 0.1s linear' }} />
                </div>
              </div>
            )}
            {t > 3200 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[copyText, 'From struggle to strength. India shines brighter every year. #IndependenceDay', 'Jai Hind! 🇮🇳 Honoring the heroes who made our freedom possible.'].map((v, i) => (
                  <div key={i} style={{
                    padding: '10px 14px', background: i === 0 ? '#e8fde8' : '#f5f6f8',
                    border: i === 0 ? `2px solid ${G}` : '1px solid #dee0e7',
                    fontSize: 11, fontFamily: "'Archivo'", color: '#333', lineHeight: '16px', borderRadius: 4,
                    opacity: t > 3200 + i * 350 ? 1 : 0, transform: t > 3200 + i * 350 ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.6s ease',
                  }}>{v}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* FRAME 6 — Merge (3.5s) */}
        {frame === 6 && (
          <div key="f6" style={{ animation: 'fadeUp 0.7s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 28 }}>
            <h3 style={{ margin: 0, fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase', alignSelf: 'flex-start' }}>Merge & Preview</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: t > 1200 ? 0 : 70, transition: 'gap 1.2s cubic-bezier(0.25,0.1,0.25,1)', position: 'relative', minHeight: 150 }}>
              <div style={{ width: 130, height: 130, background: 'hsl(150, 30%, 70%)', borderRadius: 6, transition: 'transform 1s ease', transform: t > 1200 ? 'translateX(0)' : 'translateX(-25px)', boxShadow: '0 6px 20px rgba(0,0,0,0.12)' }} />
              <div style={{
                width: 130, height: 130, background: '#fff', border: '1.5px solid #dee0e7', borderRadius: 6, padding: 12,
                transition: 'all 1s ease', transform: t > 1200 ? 'translateX(-130px)' : 'translateX(25px)',
                opacity: t > 1200 ? 0 : 1, boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
              }}>
                <p style={{ fontSize: 9, color: '#333', fontFamily: "'Archivo'", lineHeight: '14px', margin: 0 }}>{copyText}</p>
              </div>
              {t > 1500 && (
                <div style={{ position: 'absolute', width: 170, background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.18)', animation: 'fadeUp 0.7s ease' }}>
                  <div style={{ height: 110, background: 'hsl(150, 30%, 70%)' }} />
                  <div style={{ padding: 10 }}>
                    <p style={{ fontSize: 9, color: '#333', fontFamily: "'Archivo'", lineHeight: '12px', margin: 0 }}>{copyText.slice(0, 60)}...</p>
                  </div>
                </div>
              )}
            </div>
            {t > 2200 && (
              <div style={{ width: '55%', height: 6, background: '#e0e0e0', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ height: '100%', background: G, animation: 'progressFill 1s ease forwards', borderRadius: 3 }} />
              </div>
            )}
          </div>
        )}

        {/* FRAME 7 — Publish (4s) */}
        {frame === 7 && (
          <div key="f7" style={{ animation: 'fadeUp 0.7s ease' }}>
            <h3 style={{ margin: '0 0 20px', fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase' }}>Publish & Schedule</h3>
            {['Meta — Reel · Scheduled 10:00 AM', 'Instagram — Carousel · Ready', 'Google Display — Static · Ready', 'YouTube — Video · In Review'].map((item, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px 14px', borderBottom: '1px solid #f0f0f0',
                opacity: t > i * 500 ? 1 : 0.15, transition: 'opacity 0.6s ease',
              }}>
                <p style={{ fontFamily: "'Archivo'", fontSize: 13, color: '#333', margin: 0 }}>{item}</p>
                {t > i * 500 + 600 && (
                  <div style={{ width: 20, height: 20, background: G, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeUp 0.4s ease' }}>
                    <svg width="10" height="10" viewBox="0 0 8 8"><path d="M1.5 4L3 5.5L6.5 2" stroke="#000" strokeWidth="1.2" fill="none"/></svg>
                  </div>
                )}
              </div>
            ))}
            {t > 2800 && (
              <div style={{ textAlign: 'center', marginTop: 28, animation: 'fadeUp 0.7s ease' }}>
                <p style={{ fontFamily: "'Saira Condensed'", fontWeight: 800, fontSize: 22, color: G, textTransform: 'uppercase', margin: '0 0 6px' }}>Campaign Live!</p>
                <p style={{ fontFamily: "'Archivo'", fontSize: 12, color: '#666', margin: 0 }}>Brief. Generate. Approve. Adapt. Publish.</p>
              </div>
            )}
          </div>
        )}

        {/* FRAME 0 — idle before start */}
        {frame === 0 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
            <div style={{ animation: 'fadeUp 0.5s ease' }}>
              <p style={{ fontFamily: "'Saira Condensed'", fontWeight: 800, fontSize: 22, color: G, textTransform: 'uppercase', margin: '0 0 6px' }}>CreateIT</p>
              <p style={{ fontFamily: "'Archivo'", fontSize: 12, color: '#666', margin: 0 }}>Your end-to-end content creation workflow</p>
            </div>
          </div>
        )}
      </div>

      {/* Step indicator — dark strip at bottom */}
      {overlay && (
        <div style={{
          background: 'rgba(0,7,24,0.92)', padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          opacity: t > 200 ? 1 : 0, transition: 'opacity 0.5s ease',
        }}>
          <p style={{ margin: 0, fontSize: 12, fontFamily: "'Archivo'", fontWeight: 600, color: '#fff' }}>{overlay.main}</p>
          <p style={{ margin: 0, fontSize: 10, fontFamily: "'Archivo'", color: G, fontWeight: 500 }}>{overlay.sub}</p>
        </div>
      )}
    </div>
  )
}

// ─── SocialiseIT content ──────────────────────────────────────────────────────
function SocialiseContent({ controls, tileVariants }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'flex-start', width: 1119 }}>
      <StatTiles tiles={MODULES.SocialiseIT.tiles} controls={controls} tileVariants={tileVariants} />
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <CTACard headline="Grow your brand across every social platform!" sub="Schedule, publish and track posts across Instagram, Facebook, Twitter & LinkedIn." cta="New Post" controls={controls} custom={0} />
        <ChartCard title="Platform Reach" controls={controls} custom={1}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <HorizRow label="Instagram" value={1.4} max={2.9} unit="M" />
            <HorizRow label="Facebook" value={0.9} max={2.9} unit="M" />
            <HorizRow label="LinkedIn" value={0.4} max={2.9} unit="M" />
            <HorizRow label="Twitter / X" value={0.2} max={2.9} unit="M" />
          </div>
        </ChartCard>
        <ChartCard title="7-Day Engagement" controls={controls} custom={2}>
          <VertBars data={[{l:'Mon',v:4.2},{l:'Tue',v:5.8},{l:'Wed',v:6.1},{l:'Thu',v:4.9},{l:'Fri',v:7.2},{l:'Sat',v:8.4},{l:'Sun',v:6.7}]} height={200} />
        </ChartCard>
      </div>
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <ListCard title="Scheduled Posts" rows={[
          { isPen: true, label: 'XUV700 Weekend Reel', sub: 'Instagram · 20 Mar 10:00' },
          { isPen: true, label: 'Mahindra Origins Story', sub: 'Facebook · 21 Mar 12:00' },
          { isPen: true, label: 'Thar Adventure Poll', sub: 'Twitter · 21 Mar 15:00' },
          { isPen: true, label: 'BE6 Launch Countdown', sub: 'LinkedIn · 22 Mar 09:00' },
          { isPen: true, label: 'XEV9e Sustainability Post', sub: 'Instagram · 23 Mar 11:00' },
        ]} />
        <ListCard title="Top Posts This Month" rows={[
          { isPen: true, label: 'XUV700 Thrill Reel', sub: '2.1M reach · 8.4% eng.' },
          { isPen: true, label: 'BE6 Feature Reveal', sub: '1.8M reach · 7.2% eng.' },
          { isPen: true, label: 'Mahindra 75 Years Post', sub: '1.4M reach · 9.1% eng.' },
          { isPen: true, label: 'Thar Off-Road Video', sub: '980K reach · 6.8% eng.' },
          { isPen: true, label: 'Scorpio-N Launch Live', sub: '3.2M reach · 11.4% eng.' },
        ]} />
      </div>
    </div>
  )
}

// ─── InfluenceIT content ──────────────────────────────────────────────────────
function InfluenceContent({ controls, tileVariants }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'flex-start', width: 1119 }}>
      <StatTiles tiles={MODULES.InfluenceIT.tiles} controls={controls} tileVariants={tileVariants} />
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <CTACard headline="Amplify reach through authentic influencer partnerships!" sub="Discover, brief and manage influencers from micro to mega tier." cta="Find Influencers" controls={controls} custom={0} />
        <ChartCard title="Tier Breakdown" controls={controls} custom={1} h={296}>
          <FunnelViz stages={[{l:'Mega (1M+)',v:'3'},{l:'Macro (100K+)',v:'9'},{l:'Micro (10K+)',v:'24'},{l:'Nano (<10K)',v:'12'}]} />
        </ChartCard>
        <ChartCard title="Campaign Performance" controls={controls} custom={2}>
          <VertBars data={[{l:'XUV700',v:6.1},{l:'Thar',v:5.4},{l:'BE6',v:7.8},{l:'Scorpio',v:4.9},{l:'XEV9e',v:6.6}]} height={200} />
        </ChartCard>
      </div>
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <ListCard title="Active Influencers" rows={[
          { isPen: true, label: '@RoadsideGypsy · Travel', sub: '2.1M followers · 6.4% eng.' },
          { isPen: true, label: '@MotoVlogs India · Auto', sub: '890K followers · 8.2% eng.' },
          { isPen: true, label: '@AdventureWithSam · Outdoors', sub: '340K followers · 7.1% eng.' },
          { isPen: true, label: '@CityDrivesMumbai · Lifestyle', sub: '125K followers · 5.9% eng.' },
          { isPen: true, label: '@TechAndWheels · Tech', sub: '78K followers · 9.3% eng.' },
        ]} />
        <ListCard title="Pending Briefs" rows={[
          { isPen: true, label: 'BE6 Review Brief', sub: 'Sent to 4 influencers' },
          { isPen: true, label: 'XEV9e EV Experience', sub: 'Sent to 6 influencers' },
          { isPen: true, label: 'Thar Night Drive', sub: 'Awaiting 2 responses' },
          { isPen: true, label: 'Scorpio-N Promo', sub: 'Draft – not sent' },
        ]} />
      </div>
    </div>
  )
}

// ─── ScriptIT content ─────────────────────────────────────────────────────────
function ScriptContent({ controls, tileVariants }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'flex-start', width: 1119 }}>
      <StatTiles tiles={MODULES.ScriptIT.tiles} controls={controls} tileVariants={tileVariants} />
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <CTACard headline="Write compelling scripts for every format & platform!" sub="Video scripts, ad copy and voiceovers — briefed, drafted and approved in one place." cta="New Script" controls={controls} custom={0} />
        <ChartCard title="Production Pipeline" controls={controls} custom={1} h={296}>
          <PipelineFlow stages={[{l:'Brief',v:'12'},{l:'Drafting',v:'8'},{l:'Review',v:'6'},{l:'Approved',v:'41'},{l:'Complete',v:'54'}]} />
        </ChartCard>
        <ChartCard title="Script Types" controls={controls} custom={2}>
          <VertBars data={[{l:'Ad',v:28},{l:'Video',v:19},{l:'VO',v:12},{l:'Social',v:8}]} height={200} />
        </ChartCard>
      </div>
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <ListCard title="Recent Scripts" rows={[
          { isPen: true, label: 'XUV700 – 30s TVC Script', sub: 'Approved · 15/03/2025' },
          { isPen: true, label: 'BE6 Launch Voiceover', sub: 'In Review · 14/03/2025' },
          { isPen: true, label: 'Thar Off-Road Reel VO', sub: 'Approved · 12/03/2025' },
          { isPen: true, label: 'Scorpio Social Ad Script', sub: 'Drafting · 11/03/2025' },
          { isPen: true, label: 'XEV9e EV Story Script', sub: 'Brief Received · 10/03/2025' },
        ]} />
        <ListCard title="In Review" rows={[
          { isPen: true, label: 'BE6 Launch Voiceover', sub: 'Reviewer: Priya S.' },
          { isPen: true, label: 'XUV700 Digital Pre-Roll', sub: 'Reviewer: Rahul M.' },
          { isPen: true, label: 'Bolero Neo Radio Ad', sub: 'Reviewer: Anita K.' },
          { isPen: true, label: 'Thar YouTube Bumper', sub: 'Reviewer: Dev P.' },
        ]} />
      </div>
    </div>
  )
}

// ─── AigenIT content ──────────────────────────────────────────────────────────
function AigenContent({ controls, tileVariants }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'flex-start', width: 1119 }}>
      <StatTiles tiles={MODULES.AigenIT.tiles} controls={controls} tileVariants={tileVariants} />
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <CTACard headline="Generate on-brand AI content at scale!" sub="Copy, captions, scripts and product descriptions — all AI-drafted, human-approved." cta="Generate" controls={controls} custom={0} />
        <ChartCard title="Generation by Type" controls={controls} custom={1}>
          <VertBars data={[{l:'Captions',v:820},{l:'Copy',v:540},{l:'Scripts',v:380},{l:'Product',v:400}]} height={200} />
        </ChartCard>
        <ChartCard title="Quality Score Trend" controls={controls} custom={2}>
          <VertBars data={[{l:'Oct',v:84},{l:'Nov',v:86},{l:'Dec',v:88},{l:'Jan',v:90},{l:'Feb',v:89},{l:'Mar',v:91}]} height={200} />
        </ChartCard>
      </div>
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <ListCard title="Recent Generations" rows={[
          { isPen: true, label: 'XUV700 Instagram Captions ×10', sub: 'Quality: 93% · 18/03/2025' },
          { isPen: true, label: 'BE6 Product Description', sub: 'Quality: 91% · 17/03/2025' },
          { isPen: true, label: 'Thar Social Copy ×5', sub: 'Quality: 89% · 16/03/2025' },
          { isPen: true, label: 'Scorpio Ad Headline Set', sub: 'Quality: 94% · 15/03/2025' },
          { isPen: true, label: 'XEV9e Email Newsletter', sub: 'Quality: 88% · 14/03/2025' },
        ]} />
        <ListCard title="Pending Approval" rows={[
          { isPen: true, label: 'BE6 Website Copy', sub: 'Generated 18/03/2025' },
          { isPen: true, label: 'XUV700 Search Ad Copy', sub: 'Generated 17/03/2025' },
          { isPen: true, label: 'Thar YouTube Description', sub: 'Generated 16/03/2025' },
          { isPen: true, label: 'Bolero Email Subject Lines', sub: 'Generated 15/03/2025' },
        ]} />
      </div>
    </div>
  )
}

// ─── SearchIT content ─────────────────────────────────────────────────────────
function SearchContent({ controls, tileVariants }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'flex-start', width: 1119 }}>
      <StatTiles tiles={MODULES.SearchIT.tiles} controls={controls} tileVariants={tileVariants} />
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <CTACard headline="Dominate search with data-driven SEO!" sub="Track rankings, identify opportunities and grow organic traffic across all models." cta="Keyword Research" controls={controls} custom={0} />
        <ChartCard title="Position Funnel" controls={controls} custom={1} h={296}>
          <FunnelViz stages={[{l:'Position 1–3',v:'124'},{l:'Position 4–10',v:'298'},{l:'Position 11–20',v:'341'},{l:'Position 21+',v:'129'}]} />
        </ChartCard>
        <ChartCard title="Traffic by Channel" controls={controls} custom={2}>
          <VertBars data={[{l:'Organic',v:38},{l:'Direct',v:21},{l:'Referral',v:12},{l:'Social',v:8},{l:'Email',v:4}]} height={200} />
        </ChartCard>
      </div>
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <ListCard title="Tracked Keywords" rows={[
          { isPen: false, label: 'mahindra xuv700 price', sub: 'Position: 2 · Volume: 18K' },
          { isPen: false, label: 'best suv india 2025', sub: 'Position: 5 · Volume: 22K' },
          { isPen: false, label: 'mahindra thar off road', sub: 'Position: 3 · Volume: 14K' },
          { isPen: false, label: 'electric suv india', sub: 'Position: 8 · Volume: 31K' },
          { isPen: false, label: 'mahindra be6 features', sub: 'Position: 1 · Volume: 9K' },
        ]} />
        <ListCard title="Backlink Sources" rows={[
          { isPen: false, label: 'autocarindia.com', sub: 'DA: 72 · 38 links' },
          { isPen: false, label: 'cardekho.com', sub: 'DA: 68 · 52 links' },
          { isPen: false, label: 'team-bhp.com', sub: 'DA: 61 · 91 links' },
          { isPen: false, label: 'zigwheels.com', sub: 'DA: 65 · 29 links' },
          { isPen: false, label: 'motorbeam.com', sub: 'DA: 54 · 18 links' },
        ]} />
      </div>
    </div>
  )
}

// ─── InvoiceIT content ────────────────────────────────────────────────────────
function InvoiceContent({ controls, tileVariants }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'flex-start', width: 1119 }}>
      <StatTiles tiles={MODULES.InvoiceIT.tiles} controls={controls} tileVariants={tileVariants} />
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <CTACard headline="Track, send and reconcile invoices effortlessly!" sub="Manage all agency billing and client invoices in one streamlined workflow." cta="New Invoice" controls={controls} custom={0} />
        <ChartCard title="Payment Status" controls={controls} custom={1}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <HorizRow label="Paid" value={71} max={84} />
            <HorizRow label="Due in 30 days" value={7} max={84} />
            <HorizRow label="Overdue" value={6} max={84} />
          </div>
        </ChartCard>
        <ChartCard title="Revenue by Client" controls={controls} custom={2}>
          <VertBars data={[{l:'Mah.',v:3.4},{l:'Hero',v:1.8},{l:'TATA',v:2.1},{l:'TVS',v:0.9},{l:'Other',v:0.2}]} height={200} />
        </ChartCard>
      </div>
      <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start', overflow: 'hidden' }}>
        <ListCard title="Recent Invoices" rows={[
          { isPen: false, label: 'INV-2025-084 · Mahindra', sub: '₹1.2L · Paid 15/03/2025' },
          { isPen: false, label: 'INV-2025-083 · Hero MotoCorp', sub: '₹68K · Paid 14/03/2025' },
          { isPen: false, label: 'INV-2025-082 · TATA Motors', sub: '₹94K · Paid 12/03/2025' },
          { isPen: false, label: 'INV-2025-081 · TVS Motor', sub: '₹42K · Paid 10/03/2025' },
          { isPen: false, label: 'INV-2025-080 · Mahindra', sub: '₹1.1L · Paid 08/03/2025' },
        ]} />
        <ListCard title="Overdue Invoices" rows={[
          { isPen: false, label: 'INV-2025-078 · Mahindra', sub: '₹38K · Overdue 14 days' },
          { isPen: false, label: 'INV-2025-076 · Hero MotoCorp', sub: '₹22K · Overdue 21 days' },
          { isPen: false, label: 'INV-2025-073 · Hyundai', sub: '₹55K · Overdue 30 days' },
          { isPen: false, label: 'INV-2025-071 · Kia India', sub: '₹18K · Overdue 45 days' },
        ]} />
      </div>
    </div>
  )
}

// ─── Main export ─────────────────────────────────────────────────────────────
export default function CHNCDashboard({ tilesTrigger, activeModule = 'InsightIT', onModuleChange, stepCount = 0, showWorkflow = false }) {
  const containerRef = useRef()
  const [scale, setScale] = useState(1)
  const controls = useAnimation()

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / 1440)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (tilesTrigger) controls.start('visible')
  }, [tilesTrigger, controls])

  useEffect(() => {
    controls.stop()
    controls.set('hidden')
    setTimeout(() => controls.start('visible'), 50)
  }, [activeModule])

  const tileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' } }),
  }

  const mod = MODULES[activeModule] || MODULES.InsightIT

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative', background: '#f9f9fd', borderRadius: 8 }}>
      <div style={{ width: 1440, height: 930, transform: `scale(${scale})`, transformOrigin: 'top left', position: 'relative', background: '#f9f9fd' }}>

        <Sidebar active={activeModule} />
        <Header />

        {/* Main content */}
        <div style={{ position: 'absolute', left: 257, top: 70, width: 1183, padding: '30px 32px 36px', display: 'flex', flexDirection: 'column', gap: 30 }}>

          {/* Page header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: 1120 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, height: 50, justifyContent: 'center' }}>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 300, color: '#101010', fontSize: 12, lineHeight: '20px' }}>Home</p>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, lineHeight: '38px', color: '#000718', fontSize: 24, whiteSpace: 'nowrap' }}>{mod.title}</p>
              </div>
              <div style={{ background: '#34cc32', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 15px' }}>
                <div style={{ display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
                    {[['4px','4px','4px','4px'],['4px','4px','11.33px','4px'],['4px','11.33px','4px','4px'],['11.33px','11.33px','4px','4px']].map(([t,r,b,l], i) => (
                      <div key={i} style={{ position: 'absolute', top: t, right: r, bottom: b, left: l, border: '1px solid #000718', borderRadius: 0.667, width: 4.667, height: 4.667 }} />
                    ))}
                  </div>
                  <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, lineHeight: '20px', color: '#000718', fontSize: 14, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Configure</p>
                </div>
              </div>
            </div>

            {/* Tab bar */}
            <div style={{ position: 'relative', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ position: 'absolute', background: '#dee0e7', height: 1, left: -32, top: 39, width: 1183 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', justifyContent: 'center', width: 91.667 }}>
                <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, lineHeight: '18px', color: '#000718', fontSize: 14, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Overview</p>
                <div style={{ background: '#000718', height: 2, width: '100%' }} />
              </div>
              {['Analytics', 'Reports'].map(tab => (
                <div key={tab} style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', justifyContent: 'center', width: 91.667 }}>
                  <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, lineHeight: '18px', color: '#666a74', fontSize: 14, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{tab}</p>
                  <div style={{ height: 2, width: '100%' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Module content */}
          <div style={{ position: 'relative', width: 1121 }}>
            {activeModule === 'LocateIT'    && <LocateContent    controls={controls} tileVariants={tileVariants} />}
            {activeModule === 'AmplifyIT'   && <AmplifyContent   controls={controls} tileVariants={tileVariants} />}
            {activeModule === 'CreateIT' && showWorkflow && <CreateContent controls={controls} tileVariants={tileVariants} stepCount={stepCount} />}
            {activeModule === 'CreateIT' && !showWorkflow && <CreateStandardContent controls={controls} tileVariants={tileVariants} />}
            {activeModule === 'SocialiseIT' && <SocialiseContent controls={controls} tileVariants={tileVariants} />}
            {activeModule === 'InfluenceIT' && <InfluenceContent controls={controls} tileVariants={tileVariants} />}
            {activeModule === 'ScriptIT'    && <ScriptContent    controls={controls} tileVariants={tileVariants} />}
            {activeModule === 'AigenIT'     && <AigenContent     controls={controls} tileVariants={tileVariants} />}
            {activeModule === 'SearchIT'    && <SearchContent    controls={controls} tileVariants={tileVariants} />}
            {activeModule === 'InvoiceIT'   && <InvoiceContent   controls={controls} tileVariants={tileVariants} />}
            {(activeModule === 'InsightIT' || !['LocateIT','AmplifyIT','CreateIT','SocialiseIT','InfluenceIT','ScriptIT','AigenIT','SearchIT','InvoiceIT'].includes(activeModule)) &&
              <InsightContent controls={controls} tileVariants={tileVariants} />}
          </div>
        </div>

      </div>
    </div>
  )
}
