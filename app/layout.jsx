import '@/globals.css'
import Nav from '@/Nav'
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
        <JsonLd data={orgJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <Nav />
        {children}
      </body>
    </html>
  )
}
