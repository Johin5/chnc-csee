'use client'

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
          <img loading="lazy" alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={imgVector} />
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
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-6.06% -1.95% -4.29% -1.95%', display: 'block', width: '100%', height: '100%' }} src={imgVector204} />
      </div>
      <div style={{ position: 'absolute', inset: '33.33% 37.5% 41.67% 37.5%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse73} />
      </div>
      <div style={{ position: 'absolute', bottom: '62.5%', left: '50%', right: '50%', top: '8.33%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgVector205} />
      </div>
    </div>
  )
}

function PinIcon() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '16.67% 20.83% 17.16% 20.83%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-3.78% -4.29%', display: 'block', width: '100%', height: '100%' }} src={imgSubtract3} />
      </div>
    </div>
  )
}

function Contributors() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', paddingRight: 8 }}>
      <div style={{ background: '#b5e4ca', border: '1.429px solid #fefefe', marginRight: -8, overflow: 'hidden', borderRadius: 30, flexShrink: 0, width: 20, height: 20, position: 'relative' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-33.33% -48.44% -63.62% -48.44%', width: '100%', height: '100%', objectFit: 'cover' }} src={imgCustomer11} />
      </div>
      <div style={{ border: '1.469px solid #fefefe', marginRight: -8, position: 'relative', borderRadius: 62.632, flexShrink: 0, width: 24, height: 24, overflow: 'hidden' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', height: '435.83%', left: '-116.5%', maxWidth: 'none', top: '-81.79%', width: '290.59%' }} src={imgAvatar06} />
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
            <img loading="lazy" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src={imgCustomer11} />
          </div>
          <div style={{ border: '1.469px solid #fefefe', position: 'relative', borderRadius: 62.632, flexShrink: 0, width: 24, height: 24, overflow: 'hidden' }}>
            <img loading="lazy" alt="" style={{ position: 'absolute', height: '435.83%', left: '-116.5%', maxWidth: 'none', top: '-81.79%', width: '290.59%' }} src={imgAvatar06} />
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
          <img loading="lazy" alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={sbChevron} />
        </div>
      </div>
    </div>
  )
}
function IconPin() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '18.75% 18.75% 10.42% 18.75%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-3.53% -4% -2.72% -4%', display: 'block', width: '100%', height: '100%' }} src={sbEllipse4} />
      </div>
      <div style={{ position: 'absolute', inset: '33.33%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={sbEllipse5} />
      </div>
    </div>
  )
}
function IconPen() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '66.67% 16.67% 16.67% 16.67%', border: '0.833px solid #666a74', borderRadius: 23 }} />
      <div style={{ position: 'absolute', inset: '8.33% 16.67% 33.33% 16.67%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-6.06% -1.59% -4.29% -1.59%', display: 'block', width: '100%', height: '100%' }} src={sbVec204} />
      </div>
      <div style={{ position: 'absolute', inset: '33.33% 37.5% 41.67% 37.5%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={sbEllipse73} />
      </div>
      <div style={{ position: 'absolute', bottom: '62.5%', left: '50%', right: '50%', top: '8.33%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '0 -0.5px', display: 'block', width: '100%', height: '100%' }} src={sbVec205} />
      </div>
    </div>
  )
}
function IconQuestion() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '12.5%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={sbEllipse65} />
      </div>
      <div style={{ position: 'absolute', inset: '72.92% 47.92% 22.92% 47.92%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={sbEllipse93} />
      </div>
      <div style={{ position: 'absolute', inset: '29.17% 37.5% 33.33% 37.5%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-6.67% -10% 0 -10%', display: 'block', width: '100%', height: '100%' }} src={sbVec123} />
      </div>
    </div>
  )
}
function IconBook() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '12.5% 16.67%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-3.33% -3.75%', display: 'block', width: '100%', height: '100%' }} src={sbVec57} />
      </div>
      <div style={{ position: 'absolute', bottom: '50%', left: '37.5%', right: '37.5%', top: '33.33%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-15% -10% -2.57% -10%', display: 'block', width: '100%', height: '100%' }} src={sbVec55} />
      </div>
    </div>
  )
}
function IconVideo() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', bottom: '29.17%', display: 'flex', alignItems: 'center', justifyContent: 'center', left: '33.33%', right: '25%', top: '29.17%' }}>
        <div style={{ transform: 'rotate(180deg) scaleY(-1)', width: 8.333, height: 8.333 }}>
          <img loading="lazy" alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={sbVec10} />
        </div>
      </div>
      <div style={{ position: 'absolute', inset: '12.5%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-3.33%', display: 'block', width: '100%', height: '100%' }} src={sbEllipse47} />
      </div>
    </div>
  )
}
function IconAI() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', bottom: '25%', left: '39.58%', right: '35.42%', top: '50%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '2.32% 14.72% 2.32% -10%', display: 'block', width: '100%', height: '100%' }} src={sbVec619} />
      </div>
      <div style={{ position: 'absolute', inset: '14.58% 22.92%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-3.53% -4.62%', display: 'block', width: '100%', height: '100%' }} src={sbRect4243} />
      </div>
    </div>
  )
}
function IconMessage() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', bottom: '25%', left: '16.67%', right: '16.67%', top: '25%', border: '0.833px solid #666a74', borderRadius: 2 }} />
      <div style={{ position: 'absolute', inset: '37.5% 16.67% 45.83% 16.67%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-13.42% -1.68% -7.92% -1.68%', display: 'block', width: '100%', height: '100%' }} src={sbVec3} />
      </div>
    </div>
  )
}
function IconSearch() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '20.83% 29.17% 29.17% 20.83%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-5%', display: 'block', width: '100%', height: '100%' }} src={sbEllipse66} />
      </div>
      <div style={{ position: 'absolute', inset: '70.83% 16.67% 16.67% 70.83%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-20%', display: 'block', width: '100%', height: '100%' }} src={sbVec109} />
      </div>
    </div>
  )
}
function IconNotebook() {
  return (
    <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0 }}>
      <div style={{ position: 'absolute', bottom: '12.5%', left: '25%', right: '20.83%', top: '16.67%', border: '0.833px solid #666a74', borderRadius: 2 }} />
      <div style={{ position: 'absolute', inset: '33.33% 37.5% 58.33% 62.5%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-0.5px -30%', display: 'block', width: '100%', height: '100%' }} src={sbVec58} />
      </div>
      {['37.5% 66.67% 62.5% 16.67%','54.17% 66.67% 45.83% 16.67%','70.83% 66.67% 29.17% 16.67%'].map((inset, i) => (
        <div key={i} style={{ position: 'absolute', inset }}>
          <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-0.5px -15%', display: 'block', width: '100%', height: '100%' }} src={sbVec59} />
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
          <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-0.5px -10%', display: 'block', width: '100%', height: '100%' }} src={sbVec60} />
        </div>
      ))}
      <div style={{ position: 'absolute', inset: '70.83% 45.83% 29.17% 37.5%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-0.5px -15%', display: 'block', width: '100%', height: '100%' }} src={sbVec59} />
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
          <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-0.5px -20%', display: 'block', width: '100%', height: '100%' }} src={sbVec70} />
        </div>
      ))}
      <div style={{ position: 'absolute', inset: '41.67%' }}>
        <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-15%', display: 'block', width: '100%', height: '100%' }} src={sbEllipse118} />
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
              <img loading="lazy" alt="Mahindra" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', height: 11.507, width: 25, display: 'block' }} src={sbMahindra} />
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
                  <img loading="lazy" alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={sbEllipse206} />
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
              <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={sbC2D} />
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
            <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgSubtract} />
          </div>
          <div style={{ position: 'absolute', inset: '16.67% 16.67% 66.67% 66.67%' }}>
            <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse103} />
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
              <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse165} />
              <div style={{ position: 'absolute', left: 10, top: 10, width: 20, height: 20 }}>
                <div style={{ position: 'absolute', inset: '33.33%' }}>
                  <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse108} />
                </div>
              </div>
            </div>
            <div style={{ height: 22.5, width: 1, position: 'relative', flexShrink: 0 }}>
              <img loading="lazy" alt="" style={{ position: 'absolute', inset: '0 -0.5px', display: 'block', width: '100%', height: '100%' }} src={imgVector907} />
            </div>
          </div>
          {/* Bell */}
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
              <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse165} />
              <div style={{ position: 'absolute', left: 10, top: 10, width: 20, height: 20 }}>
                <div style={{ position: 'absolute', inset: '14.17% 13.21% 22.5% 13.21%' }}>
                  <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgSubtract1} />
                </div>
                <div style={{ position: 'absolute', inset: '20.83% 20.83% 62.5% 62.5%' }}>
                  <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse45} />
                </div>
              </div>
            </div>
            <div style={{ height: 22.5, width: 1, position: 'relative', flexShrink: 0 }}>
              <img loading="lazy" alt="" style={{ position: 'absolute', inset: '0 -0.5px', display: 'block', width: '100%', height: '100%' }} src={imgVector907} />
            </div>
          </div>
          {/* Question */}
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
              <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse165} />
              <div style={{ position: 'absolute', left: 10, top: 10, width: 20, height: 20 }}>
                <div style={{ position: 'absolute', inset: '12.5%' }}>
                  <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse65} />
                </div>
                <div style={{ position: 'absolute', inset: '72.92% 47.92% 22.92% 47.92%' }}>
                  <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse93} />
                </div>
                <div style={{ position: 'absolute', inset: '29.17% 37.5% 33.33% 37.5%' }}>
                  <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgVector123} />
                </div>
              </div>
            </div>
            <div style={{ height: 22.5, width: 1, position: 'relative', flexShrink: 0 }}>
              <img loading="lazy" alt="" style={{ position: 'absolute', inset: '0 -0.5px', display: 'block', width: '100%', height: '100%' }} src={imgVector907} />
            </div>
          </div>
          {/* Settings */}
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
              <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgEllipse165} />
              <div style={{ position: 'absolute', left: 10, top: 10, width: 20, height: 20 }}>
                <div style={{ position: 'absolute', inset: '8.33%' }}>
                  <img loading="lazy" alt="" style={{ position: 'absolute', inset: '-3%', display: 'block', width: '100%', height: '100%' }} src={imgSubtract2} />
                </div>
              </div>
            </div>
            <div style={{ height: 22.5, width: 1, position: 'relative', flexShrink: 0 }}>
              <img loading="lazy" alt="" style={{ position: 'absolute', inset: '0 -0.5px', display: 'block', width: '100%', height: '100%' }} src={imgVector907} />
            </div>
          </div>
        </div>

        {/* User */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
          <div style={{ background: '#c5ecfd', overflow: 'hidden', borderRadius: 499.5, flexShrink: 0, width: 30, height: 30, position: 'relative' }}>
            <img loading="lazy" alt="memoji" style={{ position: 'absolute', inset: '-1.67% -6.67% -11.67% -6.67%', width: '100%', height: '100%', objectFit: 'cover' }} src={imgMemoji} />
          </div>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400, color: '#000718', fontSize: 14, textAlign: 'center', whiteSpace: 'nowrap', lineHeight: 'normal' }}>Sledge Hammer</p>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 300, color: '#666a74', fontSize: 10, textAlign: 'center', whiteSpace: 'nowrap', lineHeight: 'normal' }}>sledge@gmail.com</p>
            </div>
            <div style={{ position: 'relative', borderRadius: 15, width: 20, height: 20, flexShrink: 0 }}>
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', height: 3, width: 12 }}>
                <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgVector2} />
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
              <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgGroupDuotoneFill} />
            </div>
            <div style={{ border: `1px solid ${tile.growth.startsWith('-') ? '#cc3232' : '#34cc32'}`, display: 'flex', gap: 5, alignItems: 'center', padding: 3 }}>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 500, lineHeight: '16px', color: tile.growth.startsWith('-') ? '#cc3232' : '#34cc32', fontSize: 12, whiteSpace: 'nowrap' }}>{tile.growth}</p>
              {!tile.growth.startsWith('-') && (
                <div style={{ height: 7.09, position: 'relative', width: 10.279, flexShrink: 0 }}>
                  <img loading="lazy" alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} src={imgArrow} />
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
          <img loading="lazy" alt="" style={{ width: 5, height: 10, display: 'block' }} src={imgVector10} />
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

// ─── LocateIT animated walkthrough (Local Presence at scale) ──────────────────
// 7-frame product video: AUDIT → MANAGE → STANDARDISE → OPTIMISE → PERFORM → COMPETE → CLOSE
// Anonymized per brief: client = ConvergenSEE, competitors A/B/C, fictional reviewers.
function formatIN(n) {
  const s = Math.round(n).toString()
  const lastThree = s.length > 3 ? s.slice(-3) : s
  const other = s.length > 3 ? s.slice(0, -3) : ''
  if (!other) return lastThree
  return other.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree
}
const easeOut = p => 1 - Math.pow(1 - Math.max(0, Math.min(1, p)), 2)

function LocateWorkflowContent({ controls, tileVariants, stepCount = 0 }) {
  const G = '#34cc32'
  const cardBg = 'linear-gradient(135deg, #cfe9d6, #b7dccf)'

  const [elapsed, setElapsed] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setElapsed(e => e + 60), 60)
    return () => clearInterval(id)
  }, [])

  // Frame: 0 idle 1 Create 2 Audit 3 Manage(hero) 4 Verify 5 GoLive(hero) 6 Optimise 7 Perform 8 Close
  const timeline = [0, 500, 4500, 8500, 13500, 17500, 23000, 28000, 32500, 36000]
  const totalDuration = 36000
  const looped = elapsed % totalDuration

  let frame = 0, t = 0
  for (let i = timeline.length - 1; i >= 0; i--) {
    if (looped >= timeline[i]) { frame = i; t = looped - timeline[i]; break }
  }

  const getCursorPos = () => {
    switch (frame) {
      case 1:
        if (t < 900) return [430, 120]
        if (t < 1800) return [430, 175]
        return [720, 300]
      case 2:
        if (t < 1000) return [300, 130]
        if (t < 2400) return [700, 300]
        return [980, 360]
      case 3:
        if (t < 900) return [300, 150]
        if (t < 1600) return [200, 100]
        return [520, 320]
      case 4:
        if (t < 1200) return [500, 200]
        if (t < 2600) return [820, 300]
        return [820, 380]
      case 5:
        if (t < 1400) return [300, 200]
        if (t < 2600) return [820, 260]
        return [820, 320]
      case 6:
        if (t < 1000) return [520, 150]
        if (t < 2600) return [520, 300]
        return [640, 345]
      case 7:
        if (t < 1400) return [520, 160]
        return [640, 260]
      default: return [400, 240]
    }
  }
  const [cx, cy] = getCursorPos()

  const overlays = [
    null,
    { main: 'Step 1. Create every listing.', sub: 'Details, hours, map pin — one form.' },
    { main: 'Step 2. Audit at scale.', sub: '42,318 checked. Strays caught & fixed.' },
    { main: 'Step 3. Update once. Publish everywhere.', sub: 'One upload → 312 locations.' },
    { main: 'Step 4. Verify every location.', sub: 'Submitted → Verified. Tracked live.' },
    { main: 'Step 5. Live on Google.', sub: 'Every branch — found, everywhere.' },
    { main: 'Step 6. It tells you what to fix.', sub: 'High-impact actions — ranked, then done.' },
    { main: 'Step 7. Watch it pay off.', sub: '84L+ impressions. 87% on mobile.' },
    { main: '10 stores or 10,000. One dashboard.', sub: 'Manage your Local Presence at scale.' },
  ]
  const overlay = overlays[frame]
  const progressLabels = ['CREATE', 'AUDIT', 'MANAGE', 'VERIFY', 'GO LIVE', 'OPTIMISE', 'PERFORM']
  const crumbs = [
    '', 'LocateIT ▸ Location Setup', 'LocateIT ▸ Locations Setup ▸ Stray List',
    'LocateIT ▸ Manage Locations ▸ Photos', 'InsightIT ▸ Local Reports ▸ Listing Verification',
    'LocateIT ▸ Location Setup ▸ Go Live', 'InsightIT ▸ Optima ▸ Review Feed',
    'InsightIT ▸ Local Analytics ▸ GBP', 'LocateIT',
  ]

  const th = { fontSize: 9, fontFamily: "'Archivo'", fontWeight: 700, color: '#9fa3ac', textTransform: 'uppercase', letterSpacing: 0.4, padding: '7px 12px', textAlign: 'left' }
  const td = { fontSize: 11, fontFamily: "'Archivo'", color: '#333', padding: '7px 12px' }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 1119, position: 'relative', height: '100%' }}>
      <style>{`
        @keyframes locFadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes locBlink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes locSweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(2600%); } }
        @keyframes locPop { 0% { transform: scale(0.6); opacity: 0; } 60% { transform: scale(1.12); } 100% { transform: scale(1); opacity: 1; } }
        @keyframes locStamp { 0% { transform: scale(2.2) rotate(-18deg); opacity: 0; } 55% { transform: scale(0.92) rotate(-8deg); opacity: 1; } 100% { transform: scale(1) rotate(-8deg); opacity: 1; } }
        @keyframes locBloom { from { transform: scale(0.2); opacity: 0; } to { transform: scale(1); opacity: 0.85; } }
        @keyframes locDrop { 0% { transform: translate(-50%,-140%) scale(0.5); opacity: 0; } 70% { transform: translate(-50%,-92%) scale(1.12); } 100% { transform: translate(-50%,-100%) scale(1); opacity: 1; } }
        @keyframes locRipple { 0% { transform: translate(-50%,-50%) scale(0.2); opacity: 0.55; } 100% { transform: translate(-50%,-50%) scale(1); opacity: 0; } }
        @keyframes locDraw { from { stroke-dashoffset: 600; } to { stroke-dashoffset: 0; } }
        @keyframes locBandUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Progress bar */}
      <div style={{ display: 'flex', gap: 0, padding: '14px 24px 0' }}>
        {progressLabels.map((l, i) => {
          const done = (frame - 1) > i || frame === 8
          const cur = (frame - 1) === i && frame !== 8
          return (
            <div key={l} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
              <div style={{ height: 3, width: '100%', background: (done || cur) ? G : '#dee0e7', borderRadius: 2, transition: 'background 0.6s ease', opacity: cur ? 0.5 : 1 }} />
              <span style={{ fontSize: 8, fontFamily: "'Archivo'", color: (done || cur) ? G : '#9fa3ac', fontWeight: done ? 700 : 400, transition: 'all 0.3s ease' }}>{l}</span>
            </div>
          )
        })}
      </div>

      {/* Cursor */}
      {frame > 0 && frame <= 7 && (
        <div style={{
          position: 'absolute', left: cx, top: cy, zIndex: 200,
          transition: 'left 0.9s cubic-bezier(0.25,0.1,0.25,1), top 0.9s cubic-bezier(0.25,0.1,0.25,1)',
          pointerEvents: 'none',
        }}>
          <svg width="16" height="22" viewBox="0 0 14 19" fill="none">
            <path d="M0 0V18L4.5 13.5L8 19L10 18L6.5 12.5H13L0 0Z" fill="#000" stroke="#fff" strokeWidth="1" />
          </svg>
        </div>
      )}

      {/* Content area */}
      <div style={{ flex: 1, padding: '12px 24px', overflow: 'hidden', position: 'relative' }}>

        {frame > 0 && frame < 8 && (
          <p style={{ margin: '0 0 8px', fontSize: 10, fontFamily: "'Archivo'", color: '#9fa3ac', fontWeight: 600 }}>
            {crumbs[frame].split('▸').map((c, i, a) => (
              <span key={i} style={{ color: i === a.length - 1 ? G : '#9fa3ac' }}>{c}{i < a.length - 1 ? ' ▸ ' : ''}</span>
            ))}
          </p>
        )}

        {/* FRAME 1 — CREATE: Create / Edit Listing */}
        {frame === 1 && (() => {
          const name = 'ConvergenSEE — Powai, Mumbai'.slice(0, Math.max(0, Math.floor(t / 40)))
          const hours = [['Mon', '9:00 AM – 9:00 PM'], ['Tue', '9:00 AM – 9:00 PM'], ['Wed', '9:00 AM – 9:00 PM'], ['Thu', '9:00 AM – 9:00 PM'], ['Fri', '9:00 AM – 9:00 PM'], ['Sat', '10:00 AM – 8:00 PM'], ['Sun', 'Closed']]
          return (
            <div key="l1" style={{ animation: 'locFadeUp 0.6s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h3 style={{ margin: 0, fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase' }}>Create / Edit Listing</h3>
                <div style={{ background: G, color: '#000', fontSize: 10, fontFamily: "'Saira Condensed'", fontWeight: 700, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 3, letterSpacing: 0.5 }}>Save</div>
              </div>
              <div style={{ display: 'flex', gap: 18 }}>
                {/* Left: fields */}
                <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: 11 }}>
                  <div>
                    <label style={{ fontSize: 10, color: '#9fa3ac', fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 4 }}>Business Name</label>
                    <div style={{ border: `1.5px solid ${t > 1120 ? G : '#dee0e7'}`, padding: '8px 12px', fontSize: 12, fontFamily: "'Archivo'", color: '#333', borderRadius: 2, transition: 'border-color 0.5s ease' }}>{name}{t < 1120 && <span style={{ animation: 'locBlink 0.8s infinite', color: G }}>|</span>}</div>
                  </div>
                  <div>
                    <label style={{ fontSize: 10, color: '#9fa3ac', fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 4 }}>Category</label>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {t > 1200 && <span style={{ background: '#e8fde8', border: `1px solid ${G}`, color: '#1b5e20', fontSize: 11, fontFamily: "'Archivo'", fontWeight: 700, padding: '5px 12px', borderRadius: 14, animation: 'locPop 0.5s ease' }}>Retail</span>}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <div style={{ flex: 1, opacity: t > 1500 ? 1 : 0, transition: 'opacity 0.5s ease' }}>
                      <label style={{ fontSize: 10, color: '#9fa3ac', fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 4 }}>Phone</label>
                      <div style={{ border: '1.5px solid #dee0e7', padding: '8px 12px', fontSize: 12, fontFamily: "'Archivo'", color: '#333', borderRadius: 2 }}>+91 90913 99139</div>
                    </div>
                    <div style={{ flex: 1.3, opacity: t > 1900 ? 1 : 0, transition: 'opacity 0.5s ease' }}>
                      <label style={{ fontSize: 10, color: '#9fa3ac', fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 4 }}>Website</label>
                      <div style={{ border: '1.5px solid #dee0e7', padding: '8px 12px', fontSize: 12, fontFamily: "'Archivo'", color: '#333', borderRadius: 2 }}>convergensee.ai</div>
                    </div>
                  </div>
                </div>
                {/* Right: hours block */}
                <div style={{ flex: 1, opacity: t > 800 ? 1 : 0, transform: t > 800 ? 'translateX(0)' : 'translateX(12px)', transition: 'all 0.6s ease' }}>
                  <label style={{ fontSize: 10, color: '#9fa3ac', fontFamily: "'Archivo'", fontWeight: 600, display: 'block', marginBottom: 4 }}>Operational Hours</label>
                  <div style={{ border: '1.5px solid #dee0e7', borderRadius: 4, overflow: 'hidden' }}>
                    {hours.map(([d, h], i) => (
                      <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 12px', borderBottom: i < 6 ? '1px solid #f0f0f0' : 'none', background: i % 2 ? '#fafbfc' : '#fff' }}>
                        <span style={{ fontSize: 10, fontFamily: "'Archivo'", fontWeight: 600, color: '#555' }}>{d}</span>
                        <span style={{ fontSize: 10, fontFamily: "'Archivo'", color: h === 'Closed' ? '#c62828' : '#333' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Map pane */}
              <div style={{ marginTop: 12, position: 'relative', height: 150, borderRadius: 6, overflow: 'hidden', border: '1px solid #dee0e7', background: '#eef2f5', backgroundImage: 'linear-gradient(#e2e8ec 1px, transparent 1px), linear-gradient(90deg, #e2e8ec 1px, transparent 1px)', backgroundSize: '26px 26px', opacity: t > 1400 ? 1 : 0, transform: t > 1400 ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.6s ease' }}>
                <div style={{ position: 'absolute', left: '3%', top: '46%', right: '30%', height: 6, background: '#d7dee3', borderRadius: 3, transform: 'rotate(-4deg)' }} />
                <div style={{ position: 'absolute', left: '40%', top: '10%', width: 7, bottom: '10%', background: '#d7dee3', borderRadius: 3, transform: 'rotate(6deg)' }} />
                {t > 1800 && (
                  <div style={{ position: 'absolute', left: '55%', top: '52%', animation: 'locDrop 0.6s ease forwards' }}>
                    <svg width="22" height="28" viewBox="0 0 16 20"><path d="M8 0C3.6 0 0 3.6 0 8c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z" fill="#e53935" /><circle cx="8" cy="8" r="3" fill="#fff" /></svg>
                  </div>
                )}
                <span style={{ position: 'absolute', left: 10, bottom: 8, fontSize: 9, fontFamily: "'Archivo'", color: '#9fa3ac' }}>Powai, Mumbai</span>
              </div>
            </div>
          )
        })()}

        {/* FRAME 2 — AUDIT */}
        {frame === 2 && (() => {
          const rows = [
            ['ConvergenSEE — Powai', '9, Central Ave, Powai', 'ok'],
            ['ConvergenSEE — Bandra', 'Linking Rd, Bandra West', 'ok'],
            ['ConvergenSEE — Andheri', 'Chakala, Andheri East', 'ok'],
            ['ConvergenSEE — Central Ave', 'Plot 24, Central Avenue, Powai, Mumbai', 'stray'],
            ['ConvergenSEE — Thane', 'Ghodbunder Rd, Thane', 'ok'],
            ['ConvergenSEE — Vashi', 'Sector 17, Vashi', 'ok'],
          ]
          const fixed = t > 2400
          return (
            <div key="l2" style={{ animation: 'locFadeUp 0.6s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <h3 style={{ margin: 0, fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase' }}>Locations Setup</h3>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: 0, fontSize: 22, fontFamily: "'Saira Condensed'", fontWeight: 800, color: G, lineHeight: 1 }}>{(easeOut(t / 2400) * 92.4).toFixed(1)}%</p>
                  <p style={{ margin: 0, fontSize: 8, fontFamily: "'Archivo'", color: '#9fa3ac', fontWeight: 600 }}>ACCURACY</p>
                </div>
              </div>
              {/* stepper */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                {['Active Locations', 'Run Classification', 'Stray List'].map((s, i) => {
                  const done = i < 2 || fixed
                  const active = i === 2 && !fixed
                  return (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 7, flex: i < 2 ? 1 : 'none' }}>
                      <div style={{ width: 16, height: 16, borderRadius: 8, background: done ? G : '#fff', border: `2px solid ${(done || active) ? G : '#dee0e7'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {done ? <span style={{ color: '#fff', fontSize: 8, fontWeight: 800 }}>✓</span> : <span style={{ color: active ? G : '#bbb', fontSize: 8, fontWeight: 800 }}>{i + 1}</span>}
                      </div>
                      <span style={{ fontSize: 10, fontFamily: "'Archivo'", fontWeight: 600, color: (done || active) ? '#000718' : '#9fa3ac', whiteSpace: 'nowrap' }}>{s}</span>
                      {i < 2 && <div style={{ flex: 1, height: 2, background: G }} />}
                    </div>
                  )
                })}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#f5f6f8', border: '1px solid #dee0e7', borderRadius: 4, padding: '5px 10px' }}>
                  <span style={{ fontSize: 11 }}>📄</span><span style={{ fontSize: 10, fontFamily: "'Archivo'", color: '#333' }}>locations_batch.xlsx</span>
                </div>
                <span style={{ fontSize: 10, fontFamily: "'Archivo'", color: G, fontWeight: 600 }}>All Process Completed ✓</span>
                <div style={{ background: '#e8fde8', border: `1px solid ${G}`, borderRadius: 4, padding: '4px 10px', fontSize: 10, fontFamily: "'Archivo'", fontWeight: 700, color: '#1b5e20' }}>Primary: 6</div>
                <div style={{ background: fixed ? '#e8fde8' : '#fff3e0', border: `1px solid ${fixed ? G : '#ffb74d'}`, borderRadius: 4, padding: '4px 10px', fontSize: 10, fontFamily: "'Archivo'", fontWeight: 700, color: fixed ? '#1b5e20' : '#e65100', transition: 'all 0.4s ease' }}>Stray: {fixed ? 0 : 1}</div>
              </div>
              {/* stray table */}
              <div style={{ border: '1px solid #dee0e7', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ display: 'flex', background: '#fafbfc', borderBottom: '1px solid #eee' }}>
                  <div style={{ ...th, flex: 1.2 }}>Branch</div><div style={{ ...th, flex: 1.6 }}>Excel Address</div><div style={{ ...th, flex: 1.8 }}>Google Audit Address</div><div style={{ ...th, width: 90 }}>Status</div>
                </div>
                {rows.map(([b, addr], i) => {
                  const isStray = rows[i][2] === 'stray'
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', borderBottom: i < 5 ? '1px solid #f2f2f2' : 'none', background: isStray && !fixed ? '#fdecea' : isStray && fixed ? '#e8fde8' : '#fff', transition: 'background 0.5s ease' }}>
                      <div style={{ ...td, flex: 1.2, fontWeight: 600 }}>{b}</div>
                      <div style={{ ...td, flex: 1.6 }}>{isStray ? 'Plot 24, Central Avenue, Powai, Mumbai' : addr}</div>
                      <div style={{ ...td, flex: 1.8 }}>{isStray ? '24, Central Ave, Hiranandani Gardens, Powai 400076' : addr}</div>
                      <div style={{ ...td, width: 90 }}>
                        {isStray
                          ? (fixed ? <span style={{ color: '#1b5e20', fontWeight: 800, fontSize: 10 }}>Synced ✓</span> : <span style={{ background: '#ffe0b2', color: '#e65100', fontSize: 9, fontWeight: 800, padding: '2px 7px', borderRadius: 10 }}>STRAY</span>)
                          : <span style={{ color: '#1b5e20', fontWeight: 700, fontSize: 10 }}>Matched ✓</span>}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                <div style={{ background: t > 2600 ? G : '#f0f0f0', color: t > 2600 ? '#000' : '#bbb', fontSize: 10, fontFamily: "'Saira Condensed'", fontWeight: 700, textTransform: 'uppercase', padding: '6px 18px', borderRadius: 3, letterSpacing: 0.5, transition: 'all 0.4s ease' }}>Finish</div>
              </div>
            </div>
          )
        })()}

        {/* FRAME 3 — MANAGE (hero #1): photo fan-out + bulk update */}
        {frame === 3 && (
          <div key="l3" style={{ animation: 'locFadeUp 0.6s ease' }}>
            <div style={{ display: 'flex', gap: 16, marginBottom: 8 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase' }}>Manage Locations — Photos</h3>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end' }}>
                {['GBP', 'PHOTOS', 'DETAILS'].map(tab => (
                  <span key={tab} style={{ fontSize: 10, fontFamily: "'Archivo'", fontWeight: 700, color: tab === 'PHOTOS' ? G : '#9fa3ac', borderBottom: tab === 'PHOTOS' ? `2px solid ${G}` : '2px solid transparent', paddingBottom: 3 }}>{tab}</span>
                ))}
              </div>
            </div>
            {/* Fan-out canvas */}
            <div style={{ position: 'relative', height: 128, marginBottom: 8 }}>
              <div style={{ position: 'absolute', inset: 0, border: `1.5px dashed ${t > 700 ? G : '#dee0e7'}`, borderRadius: 8, transition: 'border-color 0.5s ease' }} />
              {Array.from({ length: 12 }).map((_, i) => {
                const col = i % 4, row = Math.floor(i / 4)
                const fan = t > 1000
                const appear = t > 1000 + i * 80
                return (
                  <div key={i} style={{
                    position: 'absolute',
                    left: fan ? 60 + col * 250 : 430, top: fan ? 12 + row * 38 : 8,
                    width: 232, height: 30, borderRadius: 5, background: cardBg, boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    display: 'flex', alignItems: 'center', paddingLeft: 10,
                    opacity: fan ? (appear ? 1 : 0) : (i === 0 ? 1 : 0),
                    transition: 'all 0.7s cubic-bezier(0.25,0.1,0.25,1)', transitionDelay: fan ? `${i * 50}ms` : '0ms', zIndex: 12 - i,
                  }}>
                    <span style={{ fontSize: 8, fontFamily: "'Archivo'", color: 'rgba(0,0,0,0.3)' }}>Location {i + 1}</span>
                  </div>
                )
              })}
            </div>
            {/* 312 locations row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #dee0e7', borderRadius: 6, padding: '8px 14px', marginBottom: 8, opacity: t > 2200 ? 1 : 0, transform: t > 2200 ? 'translateY(0)' : 'translateY(8px)', transition: 'all 0.6s ease' }}>
              <span style={{ fontSize: 12, fontFamily: "'Archivo'", fontWeight: 600, color: '#333' }}>Storefront_Hero.jpg</span>
              <span style={{ fontSize: 11, fontFamily: "'Archivo'", color: '#666' }}>312 locations</span>
              <span style={{ fontSize: 10, fontFamily: "'Archivo'", fontWeight: 800, padding: '3px 10px', borderRadius: 10, background: t > 3000 ? '#e8fde8' : '#fff8e1', color: t > 3000 ? '#1b5e20' : '#f57f17', transition: 'all 0.4s ease' }}>{t > 3000 ? 'Published ✓' : 'In Queue'}</span>
            </div>
            {/* Business details bulk sweep table */}
            <div style={{ position: 'relative', border: '1px solid #dee0e7', borderRadius: 6, overflow: 'hidden' }}>
              <div style={{ display: 'flex', background: '#fafbfc', borderBottom: '1px solid #eee' }}>
                <div style={{ ...th, flex: 1.4 }}>Business Details — Bulk Update</div><div style={{ ...th, flex: 1 }}>Field</div><div style={{ ...th, width: 90 }}>Status</div>
              </div>
              {['Powai', 'Bandra', 'Andheri', 'Thane', 'Vashi', 'Kurla', 'Dadar', 'Chembur'].map((b, i) => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', borderBottom: i < 7 ? '1px solid #f2f2f2' : 'none' }}>
                  <div style={{ ...td, flex: 1.4, fontWeight: 600, padding: '5px 12px' }}>ConvergenSEE — {b}</div>
                  <div style={{ ...td, flex: 1, padding: '5px 12px' }}>Hours · Phone · URL</div>
                  <div style={{ ...td, width: 90, padding: '5px 12px' }}><span style={{ color: t > 1400 + i * 120 ? '#1b5e20' : '#9fa3ac', fontWeight: 700, fontSize: 10, transition: 'color 0.3s ease' }}>{t > 1400 + i * 120 ? 'Updated ✓' : 'Queued'}</span></div>
                </div>
              ))}
              {t > 1400 && <div style={{ position: 'absolute', top: 0, left: 0, width: 80, height: '100%', background: 'linear-gradient(90deg, transparent, rgba(52,204,50,0.28), transparent)', animation: 'locSweep 1.8s ease-in-out infinite' }} />}
            </div>
          </div>
        )}

        {/* FRAME 4 — VERIFY */}
        {frame === 4 && (() => {
          const rows = [
            ['ConvergenSEE — Powai', 'Powai, Mumbai'],
            ['ConvergenSEE — Bandra', 'Bandra West, Mumbai'],
            ['ConvergenSEE — Andheri', 'Andheri East, Mumbai'],
            ['ConvergenSEE — Thane', 'Ghodbunder, Thane'],
            ['ConvergenSEE — Vashi', 'Vashi, Navi Mumbai'],
            ['ConvergenSEE — Kurla', 'Kurla West, Mumbai'],
          ]
          return (
            <div key="l4" style={{ animation: 'locFadeUp 0.6s ease' }}>
              <h3 style={{ margin: '0 0 10px', fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase' }}>Listing Verification</h3>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                {['GOOGLE', 'INDIA', 'MAHARASHTRA', 'MUMBAI'].map((f, i) => (
                  <div key={f} style={{ flex: 1, textAlign: 'center', background: i === 0 ? '#e8fde8' : '#f5f6f8', border: `1px solid ${i === 0 ? G : '#dee0e7'}`, color: i === 0 ? '#1b5e20' : '#666', fontSize: 10, fontFamily: "'Archivo'", fontWeight: 700, padding: '7px 4px', borderRadius: 4 }}>{f}</div>
                ))}
              </div>
              <div style={{ border: '1px solid #dee0e7', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ display: 'flex', background: '#fafbfc', borderBottom: '1px solid #eee' }}>
                  <div style={{ ...th, width: 34 }}></div><div style={{ ...th, flex: 1.4 }}>Branch</div><div style={{ ...th, flex: 1.2 }}>Location</div><div style={{ ...th, width: 130 }}>Status</div>
                </div>
                {rows.map(([b, loc], i) => {
                  const stamp = 700 + i * 430
                  const state = t >= stamp ? 2 : t >= stamp - 350 ? 1 : 0
                  const label = state === 2 ? 'Verified ✓' : state === 1 ? 'In Progress' : 'Submitted'
                  const col = state === 2 ? '#1b5e20' : state === 1 ? '#e65100' : '#9fa3ac'
                  const bg = state === 2 ? '#e8fde8' : state === 1 ? '#fff3e0' : '#f5f6f8'
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', borderBottom: i < 5 ? '1px solid #f2f2f2' : 'none' }}>
                      <div style={{ width: 34, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: 15, height: 15, borderRadius: 3, border: `2px solid ${state === 2 ? G : '#ccc'}`, background: state === 2 ? G : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>{state === 2 && <span style={{ color: '#fff', fontSize: 8, fontWeight: 800 }}>✓</span>}</div>
                      </div>
                      <div style={{ ...td, flex: 1.4, fontWeight: 600 }}>{b}</div>
                      <div style={{ ...td, flex: 1.2 }}>{loc}</div>
                      <div style={{ ...td, width: 130 }}><span style={{ background: bg, color: col, fontSize: 9, fontWeight: 800, padding: '3px 9px', borderRadius: 10, animation: state === 2 ? 'locPop 0.4s ease' : 'none' }}>{label}</span></div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })()}

        {/* FRAME 5 — GO LIVE (hero #2) */}
        {frame === 5 && (() => {
          const live = t > 1800
          return (
            <div key="l5" style={{ animation: 'locFadeUp 0.6s ease', display: 'flex', gap: 18 }}>
              {/* Left: tiles + ripple map */}
              <div style={{ flex: 1.3, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', gap: 10 }}>
                  {[['Claimed', formatIN(easeOut(t / 2000) * 42318)], ['Pushed to GBP', formatIN(easeOut(t / 2200) * 42318)], ['Audited all', '92.4%']].map(([l, v]) => (
                    <div key={l} style={{ flex: 1, background: '#f5f6f8', border: '1px solid #dee0e7', borderRadius: 6, padding: '10px 12px' }}>
                      <p style={{ margin: 0, fontSize: 18, fontFamily: "'Saira Condensed'", fontWeight: 800, color: '#000718', lineHeight: 1 }}>{v}</p>
                      <p style={{ margin: '4px 0 0', fontSize: 8, fontFamily: "'Archivo'", color: '#9fa3ac', fontWeight: 600, textTransform: 'uppercase' }}>{l}</p>
                    </div>
                  ))}
                </div>
                <div style={{ position: 'relative', flex: 1, minHeight: 150, borderRadius: 6, overflow: 'hidden', border: '1px solid #dee0e7', background: '#eef2f5', backgroundImage: 'linear-gradient(#e2e8ec 1px, transparent 1px), linear-gradient(90deg, #e2e8ec 1px, transparent 1px)', backgroundSize: '26px 26px' }}>
                  {[[50, 50], [30, 34], [70, 40], [40, 68], [64, 66], [22, 56], [80, 58]].map(([x, y], i) => (
                    <div key={i} style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, animation: `locDrop 0.5s ease forwards ${300 + i * 130}ms`, opacity: 0 }}>
                      <svg width="15" height="19" viewBox="0 0 16 20"><path d="M8 0C3.6 0 0 3.6 0 8c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z" fill={G} /><circle cx="8" cy="8" r="3" fill="#fff" /></svg>
                    </div>
                  ))}
                  {live && [0, 1, 2].map(i => (
                    <div key={i} style={{ position: 'absolute', left: '50%', top: '50%', width: 160, height: 160, borderRadius: '50%', border: `2px solid ${G}`, animation: `locRipple 1.8s ease-out infinite ${i * 500}ms` }} />
                  ))}
                </div>
              </div>
              {/* Right: phone knowledge panel */}
              <div style={{ flex: 0.85, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', opacity: t > 400 ? 1 : 0, transform: t > 400 ? 'translateX(0)' : 'translateX(40px)', transition: 'all 0.7s cubic-bezier(0.25,0.1,0.25,1)' }}>
                <div style={{ width: 214, background: '#1a1a2e', borderRadius: 26, padding: 8, boxShadow: '0 10px 30px rgba(0,0,0,0.25)', position: 'relative' }}>
                  <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden' }}>
                    <div style={{ height: 74, background: cardBg }} />
                    <div style={{ padding: '10px 12px' }}>
                      <p style={{ margin: 0, fontSize: 12, fontFamily: "'Archivo'", fontWeight: 700, color: '#222' }}>ConvergenSEE — Powai, Mumbai</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, margin: '4px 0 8px' }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#222' }}>4.6</span>
                        <span style={{ color: '#f5a623', fontSize: 10 }}>★★★★<span style={{ color: '#ddd' }}>★</span></span>
                        <span style={{ fontSize: 9, color: '#666' }}>· 512 reviews</span>
                      </div>
                      <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
                        {[0, 1, 2].map(i => <div key={i} style={{ flex: 1, height: 26, borderRadius: 3, background: cardBg }} />)}
                      </div>
                      <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                        {['Directions', 'Reviews'].map(x => <div key={x} style={{ flex: 1, textAlign: 'center', border: `1px solid ${G}`, color: '#1b5e20', fontSize: 9, fontFamily: "'Archivo'", fontWeight: 700, padding: '4px 0', borderRadius: 12 }}>{x}</div>)}
                      </div>
                      <p style={{ margin: '0 0 2px', fontSize: 9, fontFamily: "'Archivo'", color: '#555' }}>Central Avenue, Powai, Mumbai 400076</p>
                      <p style={{ margin: 0, fontSize: 9, fontFamily: "'Archivo'", color: '#1b5e20', fontWeight: 700 }}>Open now · 9 AM – 9 PM</p>
                    </div>
                  </div>
                  {live && (
                    <div style={{ position: 'absolute', top: '46%', left: '50%', transform: 'translate(-50%,-50%) rotate(-8deg)', background: G, color: '#03210a', fontSize: 13, fontFamily: "'Saira Condensed'", fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5, padding: '7px 16px', borderRadius: 4, boxShadow: '0 6px 18px rgba(0,0,0,0.3)', whiteSpace: 'nowrap', animation: 'locStamp 0.6s cubic-bezier(0.25,0.1,0.25,1) forwards' }}>Live on Google ✓</div>
                  )}
                </div>
              </div>
            </div>
          )
        })()}

        {/* FRAME 6 — OPTIMISE */}
        {frame === 6 && (
          <div key="l6" style={{ animation: 'locFadeUp 0.6s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase' }}>Optima — Recommendations</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 9, fontFamily: "'Archivo'", color: '#9fa3ac', fontWeight: 600 }}>{t > 1200 ? '63%' : '60%'}</span>
                <div style={{ width: 80, height: 5, background: '#e0e0e0', borderRadius: 3, overflow: 'hidden' }}><div style={{ height: '100%', background: G, width: t > 1200 ? '63%' : '60%', transition: 'width 0.8s ease', borderRadius: 3 }} /></div>
              </div>
            </div>
            {[['HIGH', '#c62828', '#fdecea', '7 locations have no new reviews in 30 days', '48% of consumers only trust reviews from the past 2 weeks'],
              ['MED', '#e65100', '#fff3e0', '4 listings missing category tags', 'Complete categories rank 2x more often in Map Pack'],
              ['LOW', '#1b5e20', '#e8fde8', 'Add 12 more photos to Andheri branch', 'Listings with 10+ photos get 42% more direction requests']].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid #dee0e7', borderRadius: 6, padding: '9px 14px', marginBottom: 8, opacity: t > 200 + i * 250 ? 1 : 0, transform: t > 200 + i * 250 ? 'translateX(0)' : 'translateX(-14px)', transition: 'all 0.5s ease' }}>
                <span style={{ background: r[2], color: r[1], fontSize: 9, fontWeight: 800, padding: '3px 9px', borderRadius: 10, minWidth: 34, textAlign: 'center' }}>{r[0]}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 12, fontFamily: "'Archivo'", fontWeight: 600, color: '#333' }}>{r[3]}</p>
                  <p style={{ margin: '2px 0 0', fontSize: 10, fontFamily: "'Archivo'", color: '#9fa3ac' }}>{r[4]}</p>
                </div>
              </div>
            ))}
            {/* review response */}
            <div style={{ border: '1px solid #dee0e7', borderRadius: 6, padding: 11, marginTop: 2, opacity: t > 1600 ? 1 : 0.35, transition: 'opacity 0.5s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{ width: 22, height: 22, borderRadius: 11, background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 800, color: '#4453c9' }}>RS</div>
                <span style={{ fontSize: 11, fontFamily: "'Archivo'", fontWeight: 600, color: '#333' }}>Riya S.</span>
                <span style={{ color: '#f5a623', fontSize: 11 }}>★★<span style={{ color: '#ddd' }}>☆</span></span>
                <span style={{ marginLeft: 'auto', fontSize: 9, fontFamily: "'Archivo'", fontWeight: 800, padding: '2px 8px', borderRadius: 10, background: t > 2800 ? '#e8fde8' : '#f0f0f0', color: t > 2800 ? '#1b5e20' : '#9fa3ac', transition: 'all 0.4s ease' }}>{t > 2800 ? 'Positive' : 'Neutral'}</span>
              </div>
              {t > 1800 && (
                <div style={{ background: '#f5f6f8', borderRadius: 4, padding: '7px 10px', fontSize: 10, fontFamily: "'Archivo'", color: '#333', lineHeight: '15px' }}>
                  {'Thank you for the feedback, Riya! Our Powai team will make it right on your next visit.'.slice(0, Math.max(0, Math.floor((t - 1800) / 16)))}
                  {t < 3400 && <span style={{ animation: 'locBlink 0.8s infinite', color: G }}>|</span>}
                </div>
              )}
            </div>
          </div>
        )}

        {/* FRAME 7 — PERFORM */}
        {frame === 7 && (
          <div key="l7" style={{ animation: 'locFadeUp 0.6s ease' }}>
            <h3 style={{ margin: '0 0 12px', fontSize: 16, fontFamily: "'Saira Condensed'", fontWeight: 700, color: '#000718', textTransform: 'uppercase' }}>Local Analytics — Google Business Profile</h3>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flex: 1.5, border: '1px solid #dee0e7', borderRadius: 6, padding: 14 }}>
                <p style={{ margin: '0 0 8px', fontSize: 10, fontFamily: "'Archivo'", fontWeight: 700, color: '#9fa3ac', textTransform: 'uppercase' }}>Customer Actions</p>
                <svg viewBox="0 0 300 150" style={{ width: '100%', height: 168 }}>
                  {[['M0 120 C50 110 90 86 150 80 S250 46 300 28', G], ['M0 134 C60 128 100 112 160 106 S255 84 300 70', '#7bc3ff'], ['M0 142 C60 140 110 132 170 128 S260 116 300 108', '#ffb74d']].map(([d, c], i) => (
                    <path key={i} d={d} fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" style={{ strokeDasharray: 600, strokeDashoffset: 600, animation: `locDraw 1.4s ease forwards ${i * 200}ms` }} />
                  ))}
                </svg>
                <p style={{ margin: '6px 0 0', fontSize: 10, fontFamily: "'Archivo'", color: '#666' }}>Total actions: <strong style={{ color: '#333' }}>{formatIN(easeOut(t / 2400) * 1908224)}</strong></p>
              </div>
              <div style={{ flex: 1, border: '1px solid #dee0e7', borderRadius: 6, padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ margin: '0 0 4px', fontSize: 10, fontFamily: "'Archivo'", fontWeight: 700, color: '#9fa3ac', textTransform: 'uppercase' }}>Total Impressions</p>
                <p style={{ margin: '0 0 14px', fontSize: 28, fontFamily: "'Saira Condensed'", fontWeight: 800, color: '#000718', lineHeight: 1 }}>{formatIN(easeOut(t / 2200) * 8431520)}</p>
                {t > 2200 && (
                  <div style={{ animation: 'locFadeUp 0.6s ease', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 15 }}>💻</span>
                      <div style={{ flex: 1, height: 9, background: '#eef0f3', borderRadius: 4, overflow: 'hidden' }}><div style={{ width: '13%', height: '100%', background: '#7bc3ff', borderRadius: 4 }} /></div>
                      <span style={{ fontSize: 11, fontFamily: "'Archivo'", fontWeight: 700, color: '#333' }}>13%</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 15 }}>📱</span>
                      <div style={{ flex: 1, height: 9, background: '#eef0f3', borderRadius: 4, overflow: 'hidden' }}><div style={{ width: '87%', height: '100%', background: G, borderRadius: 4 }} /></div>
                      <span style={{ fontSize: 13, fontFamily: "'Archivo'", fontWeight: 800, color: G }}>87%</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* FRAME 8 — CLOSE */}
        {frame === 8 && (
          <div key="l8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', animation: 'locFadeUp 0.7s ease' }}>
            <p style={{ fontFamily: "'Saira Condensed'", fontWeight: 800, fontSize: 32, color: '#000718', textTransform: 'uppercase', margin: '0 0 6px', lineHeight: 1.05 }}>
              10 stores or <span style={{ color: G }}>10,000</span>.<br />One dashboard.
            </p>
            <p style={{ fontFamily: "'Archivo'", fontSize: 13, color: '#666', margin: '10px 0 18px' }}>Manage your Local Presence at scale.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: "'Saira Condensed'", fontWeight: 900, fontSize: 28, color: G, letterSpacing: 1 }}>LocateIT</span>
              <span style={{ width: 1, height: 22, background: '#dee0e7' }} />
              <span style={{ fontFamily: "'Archivo'", fontSize: 11, color: '#9fa3ac' }}>CHNC ▸ ConvergenSEE</span>
            </div>
          </div>
        )}

        {/* FRAME 0 — idle */}
        {frame === 0 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
            <div style={{ animation: 'locFadeUp 0.5s ease' }}>
              <p style={{ fontFamily: "'Saira Condensed'", fontWeight: 800, fontSize: 22, color: G, textTransform: 'uppercase', margin: '0 0 6px' }}>LocateIT</p>
              <p style={{ fontFamily: "'Archivo'", fontSize: 12, color: '#666', margin: 0 }}>Local Presence Management at scale</p>
            </div>
          </div>
        )}
      </div>

      {/* Lower-third overlay band — full width, sharp corners, 2px green top rule */}
      {overlay && (
        <div key={`band-${frame}`} style={{
          background: 'rgba(0,7,24,0.95)', borderTop: `2px solid ${G}`, padding: '11px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          animation: 'locBandUp 0.5s ease',
        }}>
          <p style={{ margin: 0, fontSize: 13, fontFamily: "'Archivo'", fontWeight: 700, color: '#fff' }}>{overlay.main}</p>
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
            {activeModule === 'LocateIT' && showWorkflow && <LocateWorkflowContent controls={controls} tileVariants={tileVariants} stepCount={stepCount} />}
            {activeModule === 'LocateIT' && !showWorkflow && <LocateContent controls={controls} tileVariants={tileVariants} />}
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
