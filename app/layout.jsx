import '@/globals.css'
import Nav from '@/Nav'
import ScrollRestorer from '@/ScrollRestorer'
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, orgJsonLd, webSiteJsonLd, JsonLd } from '@/lib/seo'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ConvergenSEE — Digital Marketing Agency, Mumbai',
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {/* React 19 hoists these into <head>: fetch the above-the-fold fonts
            (hero headline, buttons, body copy) before the CSS discovers them,
            so first paint uses the brand fonts instead of a fallback flash. */}
        <link rel="preload" as="font" type="font/woff2" href="/fonts/saira-condensed-latin-800.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="/fonts/saira-condensed-latin-700.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="/fonts/archivo-latin-var.woff2" crossOrigin="anonymous" />
        <JsonLd data={orgJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <ScrollRestorer />
        <Nav />
        {children}
      </body>
    </html>
  )
}
