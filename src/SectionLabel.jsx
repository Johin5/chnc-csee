const G = '#34cc32'

// The standard section label used above every heading across the site.
const SectionLabel = ({ children }) => (
  <div style={{
    display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start',
    width: 'fit-content', height: 32,
  }}>
    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 16, color: '#fff', flex: 1, display: 'flex', alignItems: 'center' }}>{children}</span>
    <div style={{ width: '100%', height: 2, background: G }} />
  </div>
)

export default SectionLabel
