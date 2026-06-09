import { useRef, useEffect, useState } from 'react'
import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

const items = [
  'InsightIT', 'LocateIT', 'CreateIT', 'AmplifyIT', 'SocialiseIT',
  'InfluenceIT', 'ScriptIT', 'AigenIT', 'SearchIT', 'InvoiceIT',
  'AdaptIT', 'EngageIT',
]

function formatLabel(label) {
  const withoutIT = label.replace(/IT$/, '')
  return withoutIT.charAt(0).toUpperCase() + withoutIT.slice(1).toLowerCase() + 'IT'
}

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

function DockItem({ label, mouseX, isActive, onSelect }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  // Mouse proximity → scale up width
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })
  const widthSync = useTransform(distance, [-160, 0, 160], [76, 96, 76])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 160, damping: 14 })

  const heightSync = useTransform(distance, [-160, 0, 160], [36, 44, 36])
  const height = useSpring(heightSync, { mass: 0.1, stiffness: 160, damping: 14 })

  return (
    <motion.button
      ref={ref}
      variants={itemVariants}
      onClick={() => onSelect(label)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width,
        height,
        padding: 0,
        background: isActive ? 'rgba(52,204,50,0.15)' : hovered ? 'rgba(52,204,50,0.1)' : 'rgba(255,255,255,0.03)',
        border: isActive ? '1px solid rgba(52,204,50,0.8)' : hovered ? '1px solid rgba(52,204,50,0.5)' : '1px solid rgba(255,255,255,0.07)',
        borderRadius: 0,
        cursor: 'pointer',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxShadow: isActive ? '0 0 20px rgba(52,204,50,0.3)' : hovered ? '0 0 16px rgba(52,204,50,0.2)' : 'none',
        transition: 'background 0.2s ease, border 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <span style={{
        fontFamily: 'Saira Condensed, sans-serif',
        fontWeight: isActive ? 600 : 400,
        fontSize: 13,
        letterSpacing: 0.5,
        color: isActive || hovered ? '#34cc32' : 'rgba(255,255,255,0.75)',
        transition: 'color 0.2s ease',
        userSelect: 'none',
      }}>
        {formatLabel(label)}
      </span>
    </motion.button>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

export default function CHNCDock({ triggerOpacity, activeModule, onSelect }) {
  const controls = useAnimation()
  const [triggered, setTriggered] = useState(false)
  const mouseX = useMotionValue(Infinity)

  useEffect(() => {
    if (!triggerOpacity) return
    const unsub = triggerOpacity.on('change', (v) => {
      if (v > 0.3 && !triggered) {
        setTriggered(true)
        controls.start('visible')
      } else if (v < 0.05 && triggered) {
        setTriggered(false)
        controls.start('hidden')
      }
    })
    return unsub
  }, [triggerOpacity, triggered, controls])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ position: 'relative' }}>

        {/* Pulse glow on appear */}
        {triggered && <>
          <motion.div
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut', repeat: 2, repeatDelay: 0.6 }}
            style={{ position: 'absolute', inset: -1, pointerEvents: 'none', border: '1px solid rgba(52,204,50,0.6)', zIndex: 0 }}
          />
          <motion.div
            initial={{ opacity: 0.3, scale: 1 }}
            animate={{ opacity: 0, scale: 1.14 }}
            transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut', repeat: 2, repeatDelay: 0.6 }}
            style={{ position: 'absolute', inset: -1, pointerEvents: 'none', border: '1px solid rgba(52,204,50,0.3)', zIndex: 0 }}
          />
        </>}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          style={{
            position: 'relative', zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            background: 'rgba(10,16,28,0.85)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '6px 10px',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          {items.map((label) => (
            <DockItem key={label} label={label} mouseX={mouseX} isActive={activeModule === label} onSelect={onSelect} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
