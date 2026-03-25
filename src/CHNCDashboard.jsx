import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

// ─── Figma Assets (sidebar: node 64:4011) ────────────────────────────────────
const sbEllipse206  = 'https://www.figma.com/api/mcp/asset/7721f091-60b5-45fd-a825-bff63199f83b' // meatballs dots
const sbMahindra    = 'https://www.figma.com/api/mcp/asset/cccee17e-d189-4347-8994-8297b23ba86a' // mahindra logo
const sbChevron     = 'https://www.figma.com/api/mcp/asset/8b956114-03db-4ad0-b778-97ffaf5d7b3a' // chevron arrow
const sbEllipse4    = 'https://www.figma.com/api/mcp/asset/218a5227-761d-4a01-939c-29d287556448' // pin body
const sbEllipse5    = 'https://www.figma.com/api/mcp/asset/2e2ab4b8-c9d2-4775-b26f-6214bbb048f4' // pin dot
const sbVec204      = 'https://www.figma.com/api/mcp/asset/a9ecfafc-5ef8-47db-94e3-70778ff362c0' // pen body
const sbEllipse73   = 'https://www.figma.com/api/mcp/asset/0ac6aedd-5134-496a-bd8a-8ad3464ee4e2' // pen dot
const sbVec205      = 'https://www.figma.com/api/mcp/asset/4d8ed4b2-2c67-4862-a8dd-fae7c779c4a3' // pen line
const sbEllipse65   = 'https://www.figma.com/api/mcp/asset/55a33e6e-cbff-45aa-b4b8-6f023fbeee61' // question circle
const sbEllipse93   = 'https://www.figma.com/api/mcp/asset/67e21fe5-3899-437e-a29b-eed7195e76ff' // question dot
const sbVec123      = 'https://www.figma.com/api/mcp/asset/b07b124c-adc1-4ea0-819a-314c4c161af7' // question mark
const sbVec57       = 'https://www.figma.com/api/mcp/asset/9f091ef2-0499-40f1-a8ff-6c22a246bf29' // book body
const sbVec55       = 'https://www.figma.com/api/mcp/asset/caf971e4-42cd-41fc-808c-33c2f5d33628' // book check
const sbVec10       = 'https://www.figma.com/api/mcp/asset/e632d478-c094-4297-a4df-ef18a27b2bba' // play arrow
const sbEllipse47   = 'https://www.figma.com/api/mcp/asset/6be05c37-0ba5-4e93-87d3-96a5e4bd076b' // video circle
const sbVec619      = 'https://www.figma.com/api/mcp/asset/2132cc90-5737-4ab9-b3ab-a7e8cdc7214d' // film strip
const sbRect4243    = 'https://www.figma.com/api/mcp/asset/7d9316fc-507a-4876-9e1a-3bc98728bbc3' // file rect
const sbVec3        = 'https://www.figma.com/api/mcp/asset/7e3b1801-5da3-48f7-82da-3f77d2ae90f4' // message body
const sbEllipse66   = 'https://www.figma.com/api/mcp/asset/73cb75b3-ea9c-45dd-88ef-86b035a9830b' // search circle
const sbVec109      = 'https://www.figma.com/api/mcp/asset/ef243dca-e5cb-4e62-a49c-0ca728266526' // search line
const sbVec58       = 'https://www.figma.com/api/mcp/asset/0d0b35a8-8d1f-4c1c-bfa4-5246e809ade4' // notebook spiral
const sbVec59       = 'https://www.figma.com/api/mcp/asset/78d90288-ac33-46c8-9722-103436ee75a6' // notebook lines
const sbVec60       = 'https://www.figma.com/api/mcp/asset/b4e5227c-2906-419b-9ec9-31dc4476663d' // order lines
const sbVec70       = 'https://www.figma.com/api/mcp/asset/4045319e-1b39-420f-90f1-1882125c7c84' // money lines
const sbEllipse118  = 'https://www.figma.com/api/mcp/asset/e0653ac8-bc13-4ec3-bd8f-e6ed541f4081' // money circle
const sbC2D         = 'https://www.figma.com/api/mcp/asset/f03f17bf-0318-4c0f-8215-283fd6465595' // ConvergenSEE C logo

// ─── Figma Assets (main panel: node 53:2908) ─────────────────────────────────
const imgVector          = 'https://www.figma.com/api/mcp/asset/58979493-6ce9-49b3-a5b1-d006dae927b3'
const imgCustomer11      = 'https://www.figma.com/api/mcp/asset/2b9e3296-a3ac-4da7-a264-e0b52c05ae60'
const imgAvatar06        = 'https://www.figma.com/api/mcp/asset/f907bc30-74b2-4af5-8d47-c1f5fd6d2b86'
const imgMemoji          = 'https://www.figma.com/api/mcp/asset/c7333f21-a4d0-44a4-88ee-61bdd9943faf'
const imgSubtract        = 'https://www.figma.com/api/mcp/asset/09391ed2-cf01-4612-bfd9-1b2fb70d8799'
const imgEllipse103      = 'https://www.figma.com/api/mcp/asset/39845d66-c173-4e96-8629-1e2b59ba21bb'
const imgEllipse165      = 'https://www.figma.com/api/mcp/asset/d3f4b78e-deda-4413-a361-620fed9e5546'
const imgEllipse108      = 'https://www.figma.com/api/mcp/asset/21e79ef6-6fdf-434e-bbcb-67446e91a5e4'
const imgVector907       = 'https://www.figma.com/api/mcp/asset/e1141dda-31bc-4811-83f8-6a45996e20aa'
const imgSubtract1       = 'https://www.figma.com/api/mcp/asset/e857f7a9-64f4-4479-8c1f-872c143f6d03'
const imgEllipse45       = 'https://www.figma.com/api/mcp/asset/d6dc5c00-1305-4028-834e-e77d18db0714'
const imgEllipse65       = 'https://www.figma.com/api/mcp/asset/cfaf5fbd-57b1-443a-90a5-6b6a615462a4'
const imgEllipse93       = 'https://www.figma.com/api/mcp/asset/377e6d40-1d2a-48a3-8885-7c4918c62f4b'
const imgVector123       = 'https://www.figma.com/api/mcp/asset/3b40ae80-b909-4a6c-9d77-80426545cd00'
const imgSubtract2       = 'https://www.figma.com/api/mcp/asset/32cdc0df-8345-482a-9078-8cfd3497bb3b'
const imgVector2         = 'https://www.figma.com/api/mcp/asset/e032b696-b1fb-459c-aef6-5ee54d38b0e4'
const imgGroupDuotoneFill= 'https://www.figma.com/api/mcp/asset/9c2cceba-244a-49df-b784-208322cfdbd7'
const imgArrow           = 'https://www.figma.com/api/mcp/asset/d0607f42-bfa1-4ded-a421-60f43e44071e'
const imgSubtract3       = 'https://www.figma.com/api/mcp/asset/001c425a-5ed4-4103-8efd-99e370fa4b97'
const imgVector10        = 'https://www.figma.com/api/mcp/asset/54242163-202a-4815-842d-d77acbf4a958'
const imgVector204       = 'https://www.figma.com/api/mcp/asset/98d53e27-f52a-4cae-ae5f-398c306c347c'
const imgEllipse73       = 'https://www.figma.com/api/mcp/asset/96334678-66ba-4d3f-94f8-a05f8bc5335d'
const imgVector205       = 'https://www.figma.com/api/mcp/asset/c0131599-7399-41f6-99f2-a9c3045b671e'

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
  const step = Math.min(stepCount, 9)

  // Cursor positions per step (x, y within the 1119-wide content area)
  const cursors = [
    [100, 60],    // 0 idle
    [320, 55],    // 1 Plan — clicks "New Campaign"
    [680, 55],    // 2 Gather — fills brief form
    [300, 240],   // 3 Visualise — AI preview area
    [300, 320],   // 4 Write Copy — copy editor
    [750, 240],   // 5 Create — variations grid
    [750, 370],   // 6 Match — image matcher
    [300, 500],   // 7 Bring Life — design canvas
    [750, 500],   // 8 Publish — publish button
    [540, 400],   // 9 done
  ]
  const [cx, cy] = cursors[step]

  // Which panel is active
  const panels = ['', 'plan', 'brief', 'ai', 'copy', 'variations', 'images', 'design', 'publish', '']
  const activePanel = panels[step]

  const panelStyle = (name) => ({
    background: activePanel === name ? '#fff' : '#f4f5f7',
    border: activePanel === name ? `2px solid ${G}` : '1px solid #dee0e7',
    transition: 'all 0.5s ease',
    boxShadow: activePanel === name ? `0 0 20px rgba(52,204,50,0.15)` : 'none',
  })

  // Typing animation for copy step
  const copyText = 'Experience the thrill of the open road with Mahindra Thar — Built for More.'
  const visibleChars = step >= 4 ? copyText.length : 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 1119, position: 'relative' }}>

      <style>{`
        @keyframes clickPulse { 0% { transform: scale(1); } 50% { transform: scale(0.85); } 100% { transform: scale(1); } }
        @keyframes shimmer { 0% { background-position: -200px 0; } 100% { background-position: 200px 0; } }
        @keyframes typeIn { from { width: 0; } to { width: 100%; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes barGrow { from { width: 0; } to { width: var(--bar-w); } }
      `}</style>

      {/* Black Figma cursor */}
      {step > 0 && step <= 8 && (
        <div style={{
          position: 'absolute', left: cx, top: cy, zIndex: 200,
          transition: 'left 0.7s cubic-bezier(0.4,0,0.2,1), top 0.7s cubic-bezier(0.4,0,0.2,1)',
          pointerEvents: 'none',
          animation: activePanel ? 'clickPulse 0.3s ease' : undefined,
        }}>
          <svg width="14" height="19" viewBox="0 0 14 19" fill="none">
            <path d="M0 0V18L4.5 13.5L8 19L10 18L6.5 12.5H13L0 0Z" fill="#000" stroke="#fff" strokeWidth="1"/>
          </svg>
        </div>
      )}

      {/* Row 1: Campaign header + brief panel */}
      <div style={{ display: 'flex', gap: 16 }}>
        {/* Left: Campaign planner */}
        <div style={{ flex: 1, padding: 20, ...panelStyle('plan'), display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 14, color: '#000718', textTransform: 'uppercase', margin: 0 }}>Content Calendar</p>
            <div style={{ background: step >= 1 ? G : '#dee0e7', padding: '4px 12px', transition: 'background 0.4s ease' }}>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 10, fontWeight: 600, color: step >= 1 ? '#000' : '#666', margin: 0 }}>+ New Campaign</p>
            </div>
          </div>
          {/* Mini calendar grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {['M','T','W','T','F','S','S'].map((d,i) => (
              <div key={i} style={{ textAlign: 'center', fontFamily: "'Archivo', sans-serif", fontSize: 8, color: '#9fa3ac', padding: 2 }}>{d}</div>
            ))}
            {Array.from({length: 28}, (_, i) => {
              const hasPost = [2,5,8,12,15,19,22,25].includes(i)
              const isActive = step >= 1 && hasPost
              return (
                <div key={i} style={{
                  textAlign: 'center', padding: '3px 0',
                  fontFamily: "'Archivo', sans-serif", fontSize: 8, color: '#333',
                  background: isActive ? G : 'transparent',
                  transition: 'background 0.4s ease',
                  opacity: isActive ? 1 : 0.5,
                }}>{i + 1}</div>
              )
            })}
          </div>
        </div>

        {/* Right: Brief / requirements */}
        <div style={{ flex: 1, padding: 20, ...panelStyle('brief'), display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 14, color: '#000718', textTransform: 'uppercase', margin: 0 }}>Campaign Brief</p>
          {['Brand: Mahindra & Mahindra', 'Objective: Launch Awareness', 'Platforms: Meta, Google, YouTube', 'Formats: Reel, Carousel, Static'].map((line, i) => (
            <div key={i} style={{
              display: 'flex', gap: 6, alignItems: 'center',
              opacity: step >= 2 ? 1 : 0.2,
              transition: `opacity 0.4s ease ${i * 0.1}s`,
            }}>
              <div style={{ width: 10, height: 10, border: `1px solid ${step >= 2 ? G : '#ccc'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.3s ease' }}>
                {step >= 2 && <div style={{ width: 6, height: 6, background: G }} />}
              </div>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 10, color: '#333', margin: 0 }}>{line}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: AI Preview + Copy Editor */}
      <div style={{ display: 'flex', gap: 16 }}>
        {/* AI Visualise */}
        <div style={{ flex: 1, padding: 20, ...panelStyle('ai'), display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 14, color: '#000718', textTransform: 'uppercase', margin: 0 }}>AI Content Preview</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            {['Reel', 'Carousel', 'Static'].map((fmt, i) => (
              <div key={i} style={{
                background: step >= 3 ? '#e8f5e8' : '#f0f0f0',
                height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: `background 0.4s ease ${i * 0.15}s`,
                position: 'relative', overflow: 'hidden',
              }}>
                {step >= 3 && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(90deg, transparent, rgba(52,204,50,0.1), transparent)`,
                    backgroundSize: '200px 100%',
                    animation: 'shimmer 1.5s ease infinite',
                  }} />
                )}
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 9, color: step >= 3 ? G : '#999', margin: 0, fontWeight: 600, position: 'relative' }}>{fmt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Copy Editor */}
        <div style={{ flex: 1, padding: 20, ...panelStyle('copy'), display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 14, color: '#000718', textTransform: 'uppercase', margin: 0 }}>Copy Editor</p>
            {step >= 4 && (
              <div style={{ display: 'flex', gap: 4 }}>
                {['EN', 'HI', 'MR'].map(lang => (
                  <div key={lang} style={{ padding: '2px 6px', background: lang === 'EN' ? G : '#eee', fontSize: 8, fontFamily: "'Archivo', sans-serif", fontWeight: 600, color: lang === 'EN' ? '#000' : '#666' }}>{lang}</div>
                ))}
              </div>
            )}
          </div>
          <div style={{ background: '#fafafa', border: '1px solid #eee', padding: 10, minHeight: 50 }}>
            <p style={{
              fontFamily: "'Archivo', sans-serif", fontSize: 10, color: '#333', margin: 0, lineHeight: '16px',
              overflow: 'hidden', whiteSpace: 'nowrap',
              width: step >= 4 ? '100%' : '0%',
              transition: 'width 1s ease',
            }}>
              {copyText}
            </p>
            {step >= 4 && <div style={{ width: 1, height: 14, background: '#000', display: 'inline-block', animation: 'clickPulse 0.8s ease infinite' }} />}
          </div>
        </div>
      </div>

      {/* Row 3: Variations + Image Matcher */}
      <div style={{ display: 'flex', gap: 16 }}>
        {/* Content Variations */}
        <div style={{ flex: 1, padding: 20, ...panelStyle('variations'), display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 14, color: '#000718', textTransform: 'uppercase', margin: 0 }}>Content Variations</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 6 }}>
            {['V1', 'V2', 'V3', 'V4'].map((v, i) => (
              <div key={i} style={{
                height: 50, background: step >= 5 ? '#e8f5e8' : '#f0f0f0',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4,
                opacity: step >= 5 ? 1 : 0.3,
                transition: `all 0.4s ease ${i * 0.1}s`,
                border: step >= 5 && i === 0 ? `1px solid ${G}` : '1px solid transparent',
              }}>
                <div style={{ width: 20, height: 20, background: step >= 5 ? G : '#ddd', opacity: 0.3, transition: 'background 0.3s ease' }} />
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 8, color: '#666', margin: 0 }}>{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Matcher */}
        <div style={{ flex: 1, padding: 20, ...panelStyle('images'), display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 14, color: '#000718', textTransform: 'uppercase', margin: 0 }}>Image Recognition</p>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 50, height: 50, background: '#f0f0f0', border: '1px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 8, color: '#999', margin: 0 }}>Upload</p>
            </div>
            {step >= 6 && (
              <svg width="30" height="10" viewBox="0 0 30 10"><path d="M0 5H25M25 5L20 1M25 5L20 9" stroke={G} strokeWidth="1.5" fill="none"/></svg>
            )}
            <div style={{ display: 'flex', gap: 4 }}>
              {[1,2,3].map(n => (
                <div key={n} style={{
                  width: 30, height: 30, background: step >= 6 ? '#e8f5e8' : '#f0f0f0',
                  border: step >= 6 ? `1px solid ${G}` : '1px solid #eee',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: step >= 6 ? 1 : 0.3,
                  transition: `all 0.3s ease ${n * 0.1}s`,
                }}>
                  <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 7, color: step >= 6 ? G : '#999', margin: 0 }}>{step >= 6 ? `${85 + n * 4}%` : ''}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 4: Design Canvas + Publish */}
      <div style={{ display: 'flex', gap: 16 }}>
        {/* Design */}
        <div style={{ flex: 1, padding: 20, ...panelStyle('design'), display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 14, color: '#000718', textTransform: 'uppercase', margin: 0 }}>Design Studio</p>
          <div style={{ background: '#fafafa', border: '1px solid #eee', height: 60, position: 'relative', overflow: 'hidden' }}>
            {step >= 7 && (
              <>
                <div style={{ position: 'absolute', left: 10, top: 8, width: 80, height: 44, background: '#e8f5e8', border: `1px solid ${G}`, animation: 'fadeUp 0.4s ease forwards' }} />
                <div style={{ position: 'absolute', left: 100, top: 12, animation: 'fadeUp 0.4s ease forwards 0.15s', opacity: 0 }}>
                  <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 10, fontWeight: 700, color: '#000', margin: 0 }}>BUILT FOR MORE.</p>
                  <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 7, color: '#666', margin: 0 }}>Mahindra Thar</p>
                </div>
                <div style={{ position: 'absolute', right: 10, bottom: 6, padding: '3px 8px', background: G, animation: 'fadeUp 0.3s ease forwards 0.3s', opacity: 0 }}>
                  <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 8, fontWeight: 600, color: '#000', margin: 0 }}>Export</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Publish */}
        <div style={{ flex: 1, padding: 20, ...panelStyle('publish'), display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 600, fontSize: 14, color: '#000718', textTransform: 'uppercase', margin: 0 }}>Publish & Schedule</p>
          {['Meta — Reel · Scheduled 10:00', 'Instagram — Carousel · Ready', 'Google Display — Static · Ready', 'YouTube — Video · In Review'].map((item, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '4px 0', borderBottom: '1px solid #f0f0f0',
              opacity: step >= 8 ? 1 : 0.2,
              transition: `opacity 0.3s ease ${i * 0.1}s`,
            }}>
              <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 9, color: '#333', margin: 0 }}>{item}</p>
              {step >= 8 && (
                <div style={{ width: 12, height: 12, background: G, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: `fadeUp 0.3s ease forwards ${i * 0.1}s` }}>
                  <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4L3 5.5L6.5 2" stroke="#000" strokeWidth="1" fill="none"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
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
