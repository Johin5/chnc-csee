import MahindraPage from '@/MahindraPage'
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "India's Largest Auto Brand Case Study",
  description:
    "How ConvergenSEE helped India's largest auto brand win locally — hyperlocal, dealer-specific advertising across 585+ locations with 3,000+ creatives a month.",
  path: '/case-studies/mahindra',
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          ['Home', '/'],
          ['Case Studies', '/case-studies'],
          ["India's Largest Auto Brand", '/case-studies/mahindra'],
        ])}
      />
      <MahindraPage />
    </>
  )
}
