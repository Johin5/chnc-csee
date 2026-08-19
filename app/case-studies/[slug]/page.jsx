import { notFound } from 'next/navigation'
import CaseStudyDetailPage from '@/CaseStudyDetailPage'
import { CASE_STUDIES, findCaseStudyBySlug } from '@/lib/caseStudies'
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo'

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const study = findCaseStudyBySlug(slug)
  if (!study) return {}
  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}`,
  })
}

export default async function Page({ params }) {
  const { slug } = await params
  const study = findCaseStudyBySlug(slug)
  if (!study) notFound()
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          ['Home', '/'],
          ['Case Studies', '/case-studies'],
          [study.name, `/case-studies/${study.slug}`],
        ])}
      />
      <CaseStudyDetailPage study={study} />
    </>
  )
}
