import HomePage from '@/HomePage'
import { buildMetadata } from '@/lib/seo'

export const metadata = {
  ...buildMetadata({
    title: 'ConvergenSEE — Digital Marketing Agency, Mumbai',
    description:
      'Full-funnel digital marketing for brands that dare: creative, social, performance and CHNC — our always-on brand-health platform. Mumbai-based, trusted by Mahindra, Unicorn and SBI.',
    path: '/',
  }),
  title: { absolute: 'ConvergenSEE — Digital Marketing Agency, Mumbai' },
}

export default function Page() {
  return <HomePage />
}
