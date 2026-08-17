import Link from 'next/link'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', background: '#000718', color: '#fff',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 24, padding: '62px 20px clamp(56px, 8vw, 100px)', textAlign: 'center',
    }}>
      <h1 style={{
        fontFamily: "'Saira Condensed', sans-serif", fontSize: 'clamp(56px, 14vw, 150px)',
        fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-3px', lineHeight: 1, margin: 0,
      }}>
        <span style={{ color: '#fff' }}>4</span>
        <span style={{ color: '#34cc32' }}>0</span>
        <span style={{ color: '#fff' }}>4</span>
      </h1>
      <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.5, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
        This page doesn't exist — but the work does.
      </p>
      <Link href="/" className="btn-outline" style={{
        background: 'transparent', color: '#fff', border: '1px solid #fff',
        height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '0.02em',
      }}>
        Back to home
      </Link>
    </div>
  )
}
