import SolutionsPage from '@/SolutionsPage'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Solutions',
  description:
    'From social and creative production to performance marketing and CHNC, our enterprise marketing platform — see how ConvergenSEE turns attention into measurable growth.',
  path: '/solutions',
})

export default function Page() {
  return <SolutionsPage />
}
