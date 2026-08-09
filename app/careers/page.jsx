import CareersPage from '@/CareersPage'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Careers',
  description:
    'Join ConvergenSEE: open roles across creative, content, performance, tech and strategy at a Mumbai agency where bold work is the job description.',
  path: '/careers',
})

export default function Page() {
  return <CareersPage />
}
