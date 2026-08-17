'use client'

import { useActionState } from 'react'
import useResponsive from './useResponsive'
import { submitContact } from './lib/actions'

const G = '#34cc32'

// ─── Contact form — single source of truth ────────────────────────────────────
// The same five-field form used to be copy-pasted into seven files; every page
// renders <ContactForm /> now. Markup matches the original pixel for pixel.
export default function ContactForm() {
  const { isMobile } = useResponsive()
  const [state, formAction, pending] = useActionState(submitContact, null)

  const FIELDS = [
    [['Your name', 'name'], ['Contact number', 'phone']],
    [['Company name', 'company'], ['Designation', 'designation']],
    [['Your email', 'email'], null],
  ]

  return (
    <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 1240, alignItems: 'center' }}>
      {FIELDS.map((row, ri) => (
        <div key={ri} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20, width: '100%' }}>
          {row.map((field, fi) => field ? (
            <div key={fi} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <label htmlFor={`contact-${field[1]}`} style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>{field[0]}</label>
              <input
                id={`contact-${field[1]}`}
                name={field[1]}
                type={field[1] === 'email' ? 'email' : 'text'}
                className="input-glow"
                placeholder="Enter here"
                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', outline: 'none', height: 46, padding: '0 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', width: '100%', boxSizing: 'border-box' }}
              />
            </div>
          ) : (isMobile ? null : <div key={fi} style={{ flex: 1 }} />))}
        </div>
      ))}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <label htmlFor="contact-requirements" style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff' }}>Requirements</label>
        <textarea
          id="contact-requirements"
          name="requirements"
          className="input-glow"
          rows={6}
          placeholder="Enter here"
          style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', outline: 'none', padding: '13px 15px', fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#fff', resize: 'vertical', width: '100%', boxSizing: 'border-box' }}
        />
      </div>

      {state?.ok ? (
        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: G, margin: 0 }}>
          Thank you — we got your message and will get back to you soon.
        </p>
      ) : (
        <>
          {state?.error && (
            <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 14, color: '#ee2226', margin: 0 }}>{state.error}</p>
          )}
          <button
            className="btn-outline"
            type="submit"
            disabled={pending}
            style={{ background: 'transparent', color: '#fff', border: '1px solid #fff', height: 46, padding: '0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em', cursor: 'pointer', width: isMobile ? '100%' : 'auto', opacity: pending ? 0.6 : 1 }}
          >
            {pending ? 'Sending…' : 'Send Message'}
          </button>
        </>
      )}
    </form>
  )
}
