import AboutPage from '@/AboutPage'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'About Us',
  description:
    'The story behind ConvergenSEE: a Mumbai digital marketing agency built on bold creative, sharp strategy and a team that treats every brand like its own.',
  path: '/about',
})

export default function Page() {
  return <AboutPage />
}
