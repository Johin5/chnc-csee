// ─── Blog posts ───────────────────────────────────────────────────────────────
// One entry per post, the way careersTeams.js does jobs: BlogPage lists this
// array, /blogs/[slug] resolves against it, sitemap.js enumerates it. Add a
// post here and its page, listing card and sitemap entry all follow.
//
// NOTE: still placeholder copy from the Figma build — replace before launch.

export const BLOG_POSTS = [
  {
    slug: 'a-relentless-pursuit-of-perfection-in-product-design',
    title: 'A relentless pursuit of perfection in product design',
    description:
      'Discover the power of our secure and rewarding copy. Explore our range of copy and take control of your copy today.',
    tags: ['Technology', 'Auto'],
    author: 'Becky Conner',
    role: 'Content lead',
    avatar: '/figma/blog-read/img-placeholders.png',
    date: '2025-12-11',
    dateLabel: 'Posted 11/12/2025',
    image: '/figma/blog/img-mahindra2.jpg',
    heroImage: '/figma/blog-read/img-rectangle-42042.jpg',
  },
]

export const findPostBySlug = (slug) => BLOG_POSTS.find((p) => p.slug === slug)
