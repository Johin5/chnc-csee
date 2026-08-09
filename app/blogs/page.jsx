import BlogPage from '@/BlogPage'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Blog',
  description:
    'Ideas, insights and behind-the-scenes thinking from the ConvergenSEE team on marketing, design, technology and brand building.',
  path: '/blogs',
})

export default function Page() {
  return <BlogPage />
}
