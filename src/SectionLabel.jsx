const G = '#34cc32'

// The standard section label used above every heading across the site.
// `color`/`bar` exist for sections on non-dark backgrounds (e.g. the green
// testimonials band) — defaults keep every existing usage unchanged.
const SectionLabel = ({ children, color = '#fff', bar = G }) => (
  <div style={{
    display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start',
    width: 'fit-content', height: 32,
  }}>
    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color, flex: 1, display: 'flex', alignItems: 'center' }}>{children}</span>
    <div style={{ width: '100%', height: 2, background: bar }} />
  </div>
)

export default SectionLabel
