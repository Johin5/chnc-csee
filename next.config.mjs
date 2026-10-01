/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimized images (/_next/image) cache for a day, matching the /public
    // header below — repeat visits are instant, and a replaced image
    // self-corrects everywhere within a day.
    minimumCacheTTL: 86400,
  },
  async headers() {
    return [
      {
        // Self-hosted fonts never change in place (a new cut gets a new
        // filename), so cache them for a year. Short caching here meant the
        // fallback-font flash came back after a day away.
        source: '/fonts/(.*)\\.woff2',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Static assets served from /public. Vercel's default is max-age=0,
        // which forces a revalidation round-trip per image on every repeat
        // visit — this caches them for a day, then serves the cached copy
        // instantly while refreshing in the background.
        source: '/(.*)\\.(webp|png|jpg|jpeg|gif|svg|ico|mp4|webm)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=31536000' },
        ],
      },
    ]
  },
}

export default nextConfig
