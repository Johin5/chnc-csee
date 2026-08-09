import MahindraPage from '@/MahindraPage'
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Mahindra Case Study',
  description:
    'How ConvergenSEE powers Mahindra’s social presence — always-on creative, launch campaigns and community engagement across Thar, Scorpio-N and XUV.',
  path: '/case-studies/mahindra',
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          ['Home', '/'],
          ['Case Studies', '/case-studies'],
          ['Mahindra', '/case-studies/mahindra'],
        ])}
      />
      <MahindraPage />
    </>
  )
}
