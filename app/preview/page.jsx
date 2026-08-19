import DevicePreview from '@/DevicePreview'

export const metadata = {
  title: 'Device Preview',
  robots: { index: false, follow: false },
}

// Internal tool: try any page at real device viewport sizes (iPhone, iPad,
// MacBook, desktop presets + custom). Unlisted and noindexed, but reachable
// in production so the team can check the hosted site too.
export default function Page() {
  return <DevicePreview />
}
