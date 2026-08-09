// ─── URL map ──────────────────────────────────────────────────────────────────
// Pages navigate by key — onNavigate('about'), onNavigate('case-studies') — and
// only this file knows what URL a key lives at. Change a path here and every
// nav link, footer link and in-page CTA follows.

import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { TEAM_GROUPS } from './careersTeams'

// The blog is still a single placeholder article; when real posts land, this
// becomes a slug per post and /blogs/:slug looks the post up the way jobs do.
export const BLOG_SLUG = 'a-relentless-pursuit-of-perfection-in-product-design'

export const PATH_FOR = {
  home: '/',
  about: '/about',
  solutions: '/solutions',
  'case-studies': '/case-studies',
  mahindra: '/case-studies/mahindra',
  team: '/team',
  blog: '/blogs',
  'blog-read': `/blogs/${BLOG_SLUG}`,
  careers: '/careers',
  work: '/work',
  socials: '/socials',
}

export const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export const jobPath = (job) => `/careers/${slugify(job.title)}`

// Roles are defined per team in careersTeams.js; flatten them once so a URL
// slug can be resolved back to the role a visitor asked for.
const ALL_JOBS = TEAM_GROUPS.flatMap(g => g.openings.map(o => ({ ...o, team: g.name })))

export const findJobBySlug = (slug) =>
  ALL_JOBS.find(j => slugify(j.title) === slug)

// Which nav item to highlight for the URL we're on. Keyed by the first path
// segment, so a detail page keeps its section lit — /case-studies/mahindra
// stays on Case Studies, /careers/copywriter stays on Career.
const SECTION_FOR = {
  '': 'home',
  about: 'about',
  solutions: 'solutions',
  'case-studies': 'case-studies',
  team: 'team',
  blogs: 'blog',
  careers: 'careers',
  work: 'work',
  socials: 'socials',
}

export function keyForPath(pathname) {
  return SECTION_FOR[pathname.split('/')[1] || ''] || 'home'
}

// Drop-in replacement for the old setPage — pages keep passing page keys.
export function useNavigateTo() {
  const navigate = useNavigate()
  return useCallback((key) => navigate(PATH_FOR[key] || key), [navigate])
}
