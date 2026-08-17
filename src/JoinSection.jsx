'use client'

// ─── Application form ────────────────────────────────────────────────────────
// Shared by the careers page ("Join the chaos!") and every job page ("Future
// opportunities start here") — same fields, same upload, different framing.
import { useState } from 'react'
import useResponsive from './useResponsive'
import { BtnGreen, BtnOutline, InputField, G, DARK, MUTED, DIM, BORDER } from './careersAtoms'

export default function JoinSection({ heading, sub, position, headingSize }) {
  const { isMobile } = useResponsive()
  const [fileName] = useState('my-cv.pdf')
  const [progress] = useState(72)

  return (
    <section id="join-the-chaos" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: 'clamp(56px, 8vw, 100px) clamp(20px, 6vw, 100px)',
    }}>
      <h2 style={{
        fontFamily: "'Saira Condensed', sans-serif", fontSize: headingSize || 'clamp(40px, 8vw, 80px)', fontWeight: 800,
        textTransform: 'uppercase', lineHeight: 1, margin: 0, textAlign: 'center',
      }}>
        {heading || (<>
          <span style={{ color: '#fff' }}>JOIN THE </span>
          <span style={{ color: G }}>Chaos!</span>
        </>)}
      </h2>
      {sub && (
        <p style={{
          fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', color: '#fff',
          lineHeight: '24px', margin: '30px 0 0', textAlign: 'center',
        }}>{sub}</p>
      )}

      {/* Form fields */}
      <div style={{ maxWidth: 1240, width: '100%', marginTop: 'clamp(40px, 6vw, 60px)' }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20, marginBottom: 20 }}>
          <InputField label="Your name" />
          <InputField label="Contact number" />
        </div>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20 }}>
          <InputField label="Your email" />
          <InputField label="Position" defaultValue={position} />
        </div>
      </div>

      {/* File upload area */}
      <div style={{
        width: '100%', maxWidth: 882, border: `1px dashed ${BORDER}`,
        padding: 'clamp(20px, 4vw, 30px)', marginTop: 40, boxSizing: 'border-box',
      }}>
        <p style={{
          fontFamily: "'Saira Condensed', sans-serif", fontSize: 24, fontWeight: 700,
          color: '#fff', textTransform: 'uppercase', margin: 0,
        }}>UPLOAD FILES</p>
        <p style={{
          fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED,
          margin: '8px 0 0',
        }}>Select and upload the files of your choice</p>

        {/* Drop zone */}
        <div style={{
          border: `2px dashed ${BORDER}`, padding: '40px 20px',
          textAlign: 'center', marginTop: 20,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        }}>
          {/* Upload icon */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 28V12m0 0l-6 6m6-6l6 6" stroke={DIM} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 28v2a4 4 0 004 4h16a4 4 0 004-4v-2" stroke={DIM} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 14, color: MUTED, margin: 0,
          }}>
            Drag and drop image or{' '}
            <span style={{ color: G, cursor: 'pointer', textDecoration: 'underline' }}>Browse</span>
          </p>
          <p style={{
            fontFamily: "'Archivo', sans-serif", fontSize: 12, color: DIM, margin: 0,
          }}>Max file size: 25MB &middot; PDF, DOC, DOCX</p>
        </div>

        {/* Browse button */}
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
          <BtnOutline>BROWSE</BtnOutline>
        </div>

        {/* Uploaded file item */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          marginTop: 24, padding: '14px 16px',
          background: DARK, border: `1px solid ${BORDER}`,
        }}>
          {/* File icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke={DIM} strokeWidth="1.5" fill="none"/>
            <path d="M14 2v6h6" stroke={DIM} strokeWidth="1.5" fill="none"/>
          </svg>
          <div style={{ flex: 1 }}>
            <p style={{
              fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff',
              margin: 0,
            }}>{fileName}</p>
            {/* Progress bar */}
            <div style={{
              width: '100%', height: 4, background: 'rgba(255,255,255,0.1)',
              borderRadius: 2, marginTop: 6,
            }}>
              <div style={{
                width: `${progress}%`, height: '100%', background: G,
                borderRadius: 2, transition: 'width 0.3s ease',
              }} />
            </div>
          </div>
          {/* Trash icon */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ cursor: 'pointer', flexShrink: 0 }}>
            <path d="M3 5h14M8 5V3h4v2m-7 0v10a2 2 0 002 2h6a2 2 0 002-2V5" stroke={DIM} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Send message */}
      <div style={{ marginTop: 40, width: isMobile ? '100%' : 'auto', maxWidth: 882 }}>
        <BtnGreen style={{ height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontSize: 16, width: isMobile ? '100%' : 'auto' }}>SEND MESSAGE</BtnGreen>
      </div>
    </section>
  )
}
