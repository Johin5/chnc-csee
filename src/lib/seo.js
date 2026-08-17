// ─── SEO constants and builders ───────────────────────────────────────────────
// Single source of truth for the canonical origin. www resolves via a
// host-level 301 to this apex domain — configure at the host, not here.
export const SITE_URL = 'https://convergensee.ai'

export const SITE_NAME = 'ConvergenSEE'

export const DEFAULT_DESCRIPTION =
  'ConvergenSEE is a Mumbai-based digital marketing agency pairing creative storytelling with CHNC, its always-on brand-health platform, for brands like Mahindra, Unicorn and SBI.'

// Every page builds its metadata through this so canonical/OG/Twitter stay in
// lockstep and only genuinely per-page fields are declared at the call site.
export function buildMetadata({ title, description, path, image, type = 'website' }) {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      // No `images` default: app/opengraph-image.jpg covers every route via the
      // file convention; a page passes `image` only to override it.
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  }
}

export function orgJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/figma/home/logo-c.svg`,
    email: 'letsconnect@convergensee.ai',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressCountry: 'IN',
    },
  }
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  }
}

export function jobPostingJsonLd(job, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: [
      ...(job.responsibilities || []),
      ...(job.requirements || []),
    ].join(' '),
    hiringOrganization: {
      '@type': 'Organization',
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    employmentType: 'FULL_TIME',
    // TODO: real posting dates once openings carry them in careersTeams.js
    datePosted: '2026-01-01',
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressCountry: 'IN',
      },
    },
    url: `${SITE_URL}${path}`,
  }
}

export function articleJsonLd(post, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/figma/home/logo-c.svg` },
    },
    datePublished: post.date,
    mainEntityOfPage: `${SITE_URL}${path}`,
  }
}

export function breadcrumbJsonLd(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  }
}

// Renders inside a <script type="application/ld+json"> — see JsonLd component.
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
