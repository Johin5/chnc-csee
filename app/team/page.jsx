import TeamPage from '@/TeamPage'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Our Team',
  description:
    'Meet the 40+ strategists, designers, writers and analysts behind ConvergenSEE — the people who make brands impossible to ignore.',
  path: '/team',
})

export default function Page() {
  return <TeamPage />
}
