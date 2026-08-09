'use server'

// Contact-form server action. Validation happens here so it also covers
// clients with JS disabled.
// TODO: wire real delivery (email / CRM / sheet) — submissions currently only
// reach the server log.
export async function submitContact(prevState, formData) {
  const data = {
    name: (formData.get('name') || '').toString().trim(),
    phone: (formData.get('phone') || '').toString().trim(),
    company: (formData.get('company') || '').toString().trim(),
    designation: (formData.get('designation') || '').toString().trim(),
    email: (formData.get('email') || '').toString().trim(),
    requirements: (formData.get('requirements') || '').toString().trim(),
  }

  if (!data.name || !data.email) {
    return { ok: false, error: 'Please fill in at least your name and email.' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, error: 'That email address doesn’t look right.' }
  }

  console.log('[contact] submission:', JSON.stringify(data))
  return { ok: true }
}
