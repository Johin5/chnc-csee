import { notFound } from 'next/navigation'
import DevicePreview from '@/DevicePreview'

export const metadata = {
  title: 'Device Preview',
  robots: { index: false, follow: false },
}

// Dev-only tool: try any page at real device viewport sizes (iPhone, iPad,
// MacBook, desktop presets + custom). 404s in production builds.
export default function Page() {
  if (process.env.NODE_ENV === 'production') notFound()
  return <DevicePreview />
}
