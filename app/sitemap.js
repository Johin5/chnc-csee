import { PATH_FOR, ALL_JOBS, jobPath } from '@/lib/routes'
import { BLOG_POSTS } from '@/lib/blogPosts'
import { SITE_URL } from '@/lib/seo'

export default function sitemap() {
  const staticPaths = Object.values(PATH_FOR).filter((p) => !p.startsWith('/blogs/'))
  const jobPaths = ALL_JOBS.map(jobPath)
  const blogPaths = BLOG_POSTS.map((p) => `/blogs/${p.slug}`)

  return [...staticPaths, ...jobPaths, ...blogPaths].map((path) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.split('/').length > 2 ? 0.6 : 0.8,
  }))
}
