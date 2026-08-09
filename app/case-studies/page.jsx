import CaseStudiesPage from '@/CaseStudiesPage'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Case Studies',
  description:
    'Real results for real brands: how ConvergenSEE drives engagement and growth for Mahindra, Axis Bank, SBI and more across auto, BFSI, FMCG and retail.',
  path: '/case-studies',
})

export default function Page() {
  return <CaseStudiesPage />
}
