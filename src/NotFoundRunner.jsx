'use client'

import { useEffect, useRef } from 'react'

// Chrome-dino-style runner for the 404 page. The green C-mark tile sprints
// past AD-block walls and algorithm-update spikes; score counts impressions.
// Space / ArrowUp / tap to jump. High score persists in localStorage.

const GREEN = '#34cc32'
const NAVY = '#000718'
const H = 200

export default function NotFoundRunner() {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let W = 720
    let raf = 0
    let last = 0

    const GROUND = H - 32
    const PX = 46
    const BODY = 28
    const LEGS = 8
    const PH = BODY + LEGS

    const s = {
      mode: 'idle', // idle | run | dead
      dist: 0,
      score: 0,
      hi: 0,
      speed: 6,
      py: 0, // feet height above ground
      vy: 0,
      legT: 0,
      obstacles: [],
      dots: [],
      dashes: [],
      flash: 0,
      diedAt: 0,
    }
    try { s.hi = Math.max(0, parseInt(localStorage.getItem('csee-404-hi'), 10) || 0) } catch {}

    function seedScenery() {
      s.dots = Array.from({ length: 9 }, () => ({
        x: Math.random() * W,
        y: 12 + Math.random() * (GROUND - 70),
      }))
      s.dashes = []
      for (let x = 0; x < W + 40; x += 18 + Math.random() * 14) {
        s.dashes.push({ x, y: GROUND + 10 + Math.random() * 12 })
      }
    }

    function resize() {
      W = wrap.clientWidth
      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seedScenery()
    }

    function reset() {
      s.mode = 'run'
      s.dist = 0
      s.score = 0
      s.speed = 6
      s.py = 0
      s.vy = 0
      s.obstacles = []
      s.flash = 0
    }

    function jump() {
      if (s.mode === 'idle') { reset(); return }
      if (s.mode === 'dead') {
        if (performance.now() - s.diedAt > 350) reset()
        return
      }
      if (s.py === 0) s.vy = -11.6
    }

    function spawn() {
      const roll = Math.random()
      if (s.score > 350 && roll < 0.2) {
        s.obstacles.push({ type: 'bot', x: W + 20, w: 32, h: 22, bob: Math.random() * Math.PI * 2 })
      } else if (roll < 0.55) {
        const units = 1 + Math.floor(Math.random() * Math.min(3, 1 + s.score / 200))
        const h = 38 + Math.floor(Math.random() * 15)
        s.obstacles.push({ type: 'ad', x: W + 20, w: units * 26 + (units - 1) * 4, h, units })
      } else {
        const n = 3 + Math.floor(Math.random() * 3)
        s.obstacles.push({ type: 'spikes', x: W + 20, w: n * 13, h: 24 + Math.random() * 6, n })
      }
    }

    function hit(a, b) {
      return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
    }

    function update(dt) {
      const k = Math.min(dt / 16.667, 3)
      if (s.mode !== 'run') return

      s.speed = Math.min(13, 6 + s.score / 150)
      s.dist += s.speed * k
      const prev = s.score
      s.score = Math.floor(s.dist / 8)
      if (Math.floor(s.score / 100) > Math.floor(prev / 100)) s.flash = 24
      if (s.flash > 0) s.flash -= k
      s.legT += k * (s.speed / 6)

      // physics
      if (s.py > 0 || s.vy < 0) {
        s.vy += 0.62 * k
        s.py = Math.max(0, s.py - s.vy * k)
        if (s.py === 0) s.vy = 0
      }

      // world scroll
      for (const o of s.obstacles) o.x -= s.speed * k * (o.type === 'bot' ? 1.15 : 1)
      s.obstacles = s.obstacles.filter((o) => o.x + o.w > -30)
      for (const d of s.dashes) {
        d.x -= s.speed * k
        if (d.x < -10) d.x += W + 40
      }
      for (const d of s.dots) {
        d.x -= s.speed * 0.25 * k
        if (d.x < -10) { d.x = W + 10; d.y = 12 + Math.random() * (GROUND - 70) }
      }

      const lastOb = s.obstacles[s.obstacles.length - 1]
      const gap = (240 + Math.random() * 200) * Math.pow(s.speed / 6, 0.8)
      if (!lastOb || lastOb.x < W - gap) spawn()

      // collisions
      const pBox = { x: PX + 5, y: GROUND - s.py - PH + 4, w: BODY - 10, h: PH - 6 }
      for (const o of s.obstacles) {
        let oBox
        if (o.type === 'bot') {
          const oy = GROUND - 30 - o.h + Math.sin(o.bob + s.dist / 40) * 3
          oBox = { x: o.x + 4, y: oy + 4, w: o.w - 8, h: o.h - 8 }
        } else {
          oBox = { x: o.x + 3, y: GROUND - o.h + 3, w: o.w - 6, h: o.h - 3 }
        }
        if (hit(pBox, oBox)) {
          s.mode = 'dead'
          s.diedAt = performance.now()
          if (s.score > s.hi) {
            s.hi = s.score
            try { localStorage.setItem('csee-404-hi', String(s.hi)) } catch {}
          }
          break
        }
      }
    }

    function pad(n) { return String(n).padStart(5, '0') }

    function drawPlayer() {
      const feetY = GROUND - s.py
      ctx.save()
      if (s.mode === 'dead') {
        ctx.translate(PX + BODY / 2, feetY - BODY / 2)
        ctx.rotate(-Math.PI / 2)
        ctx.translate(-(PX + BODY / 2), -(feetY - BODY / 2))
      }
      // legs
      ctx.fillStyle = GREEN
      if (s.py === 0 && s.mode === 'run') {
        const step = Math.floor(s.legT / 4) % 2
        ctx.fillRect(PX + 4 + (step ? 0 : 2), feetY - LEGS, 6, LEGS)
        ctx.fillRect(PX + BODY - 10 + (step ? 2 : 0), feetY - LEGS, 6, LEGS)
      } else {
        ctx.fillRect(PX + 5, feetY - LEGS, 6, LEGS)
        ctx.fillRect(PX + BODY - 11, feetY - LEGS, 6, LEGS)
      }
      // body tile with the C mark
      const by = feetY - LEGS - BODY
      ctx.beginPath()
      ctx.roundRect(PX, by, BODY, BODY, 6)
      ctx.fill()
      ctx.fillStyle = NAVY
      ctx.font = "800 20px 'Saira Condensed', sans-serif"
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('C', PX + BODY / 2, by + BODY / 2 + 2)
      ctx.restore()
    }

    function drawObstacle(o) {
      if (o.type === 'ad') {
        for (let i = 0; i < o.units; i++) {
          const x = o.x + i * 30
          const uh = o.h - (i % 2) * 6
          ctx.strokeStyle = GREEN
          ctx.lineWidth = 2
          ctx.strokeRect(x + 1, GROUND - uh + 1, 24, uh - 1)
          ctx.fillStyle = 'rgba(255,255,255,0.85)'
          ctx.font = "700 11px 'Archivo', sans-serif"
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText('AD', x + 13, GROUND - uh / 2 + 1)
        }
      } else if (o.type === 'spikes') {
        ctx.fillStyle = GREEN
        ctx.beginPath()
        for (let i = 0; i < o.n; i++) {
          const x = o.x + i * 13
          ctx.moveTo(x, GROUND)
          ctx.lineTo(x + 6.5, GROUND - o.h + (i % 2) * 5)
          ctx.lineTo(x + 13, GROUND)
        }
        ctx.fill()
      } else {
        const oy = GROUND - 30 - o.h + Math.sin(o.bob + s.dist / 40) * 3
        ctx.fillStyle = 'rgba(255,255,255,0.9)'
        ctx.beginPath()
        ctx.roundRect(o.x, oy, o.w, o.h, 6)
        ctx.fill()
        ctx.strokeStyle = 'rgba(255,255,255,0.9)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(o.x + o.w / 2, oy)
        ctx.lineTo(o.x + o.w / 2, oy - 6)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(o.x + o.w / 2, oy - 8, 2.5, 0, Math.PI * 2)
        ctx.stroke()
        ctx.fillStyle = NAVY
        ctx.fillRect(o.x + 7, oy + 8, 5, 5)
        ctx.fillRect(o.x + o.w - 12, oy + 8, 5, 5)
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // drifting background data points
      ctx.strokeStyle = 'rgba(255,255,255,0.14)'
      ctx.lineWidth = 1
      for (const d of s.dots) {
        ctx.beginPath()
        ctx.moveTo(d.x - 3, d.y)
        ctx.lineTo(d.x + 3, d.y)
        ctx.moveTo(d.x, d.y - 3)
        ctx.lineTo(d.x, d.y + 3)
        ctx.stroke()
      }

      // ground
      ctx.strokeStyle = 'rgba(255,255,255,0.4)'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(0, GROUND + 0.5)
      ctx.lineTo(W, GROUND + 0.5)
      ctx.stroke()
      ctx.strokeStyle = 'rgba(255,255,255,0.15)'
      ctx.lineWidth = 1
      for (const d of s.dashes) {
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x + 6, d.y)
        ctx.stroke()
      }

      for (const o of s.obstacles) drawObstacle(o)
      drawPlayer()

      // score
      ctx.textAlign = 'right'
      ctx.textBaseline = 'top'
      ctx.font = "600 15px 'Saira Condensed', sans-serif"
      ctx.fillStyle = 'rgba(255,255,255,0.45)'
      if (s.hi > 0) ctx.fillText(`HI ${pad(s.hi)}`, W - 78, 10)
      const blink = s.flash > 0 && Math.floor(s.flash / 4) % 2 === 0
      ctx.fillStyle = blink ? GREEN : 'rgba(255,255,255,0.85)'
      ctx.fillText(pad(s.score), W - 10, 10)
      ctx.textAlign = 'left'
      ctx.font = "600 11px 'Archivo', sans-serif"
      ctx.fillStyle = 'rgba(255,255,255,0.35)'
      ctx.fillText('IMPRESSIONS', 10, 12)

      if (s.mode === 'idle') {
        ctx.textAlign = 'center'
        ctx.fillStyle = '#fff'
        ctx.font = "700 22px 'Saira Condensed', sans-serif"
        ctx.fillText('PRESS SPACE OR TAP TO RUN', W / 2, 66)
      } else if (s.mode === 'dead') {
        ctx.textAlign = 'center'
        ctx.fillStyle = '#fff'
        ctx.font = "800 30px 'Saira Condensed', sans-serif"
        ctx.fillText('GAME OVER', W / 2, 52)
        ctx.font = "600 12px 'Archivo', sans-serif"
        ctx.fillStyle = 'rgba(255,255,255,0.6)'
        ctx.fillText('THE ALGORITHM GOT YOU — SPACE / TAP TO RERUN', W / 2, 92)
      }
    }

    function frame(now) {
      const dt = last ? now - last : 16.7
      last = now
      update(dt)
      draw()
      raf = requestAnimationFrame(frame)
    }

    function onKey(e) {
      if (e.code !== 'Space' && e.code !== 'ArrowUp') return
      if (e.target && e.target.closest && e.target.closest('a, button, input, textarea, select')) return
      e.preventDefault()
      if (!e.repeat) jump()
    }
    function onPointer(e) {
      e.preventDefault()
      jump()
    }

    const ro = new ResizeObserver(resize)
    ro.observe(wrap)
    resize()
    window.addEventListener('keydown', onKey)
    canvas.addEventListener('pointerdown', onPointer)
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('keydown', onKey)
      canvas.removeEventListener('pointerdown', onPointer)
    }
  }, [])

  return (
    <div ref={wrapRef} style={{ width: 'min(720px, 92vw)' }}>
      <canvas
        ref={canvasRef}
        aria-label="ConvergenSEE runner mini-game. Press space or tap to jump over the obstacles."
        style={{ width: '100%', height: H, display: 'block', touchAction: 'manipulation', cursor: 'pointer' }}
      />
    </div>
  )
}
