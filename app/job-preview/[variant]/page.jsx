// TEMPORARY design-preview route — not linked, not for production. Delete
// after a variant is chosen.
import { notFound } from 'next/navigation'
import VariantA from '@/jobVariants/VariantA'
import VariantB from '@/jobVariants/VariantB'
import VariantC from '@/jobVariants/VariantC'
import { findJobBySlug } from '@/lib/routes'

export const metadata = { robots: { index: false, follow: false } }

const VARIANTS = { a: VariantA, b: VariantB, c: VariantC }

export default async function Page({ params }) {
  const { variant } = await params
  const Cmp = VARIANTS[variant]
  const job = findJobBySlug('motion-graphics-designer')
  if (!Cmp || !job) notFound()
  return <Cmp job={job} />
}
