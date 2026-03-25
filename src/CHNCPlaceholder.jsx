// Lightweight static placeholder for CHNC Dashboard — shown while the real component lazy-loads
const G = '#34cc32'

export default function CHNCPlaceholder() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#f9f9fd', borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        {/* Sidebar skeleton */}
        <div style={{ width: '17.8%', background: '#0a1628', display: 'flex', flexDirection: 'column', padding: '0', flexShrink: 0 }}>
          {/* Logo */}
          <div style={{ padding: '20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
              <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 32, color: G, lineHeight: 1 }}>CHNC</div>
              <div style={{ fontFamily: "'Archivo', sans-serif", fontSize: 4, color: '#666a74', letterSpacing: 1.5, textTransform: 'uppercase' }}>The Opportunity Creators</div>
            </div>
          </div>
          {/* Menu items skeleton */}
          <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ height: 8, background: 'rgba(255,255,255,0.03)', borderRadius: 2, marginTop: 40 }} />
            <div style={{ height: 28, background: G, borderRadius: 0, padding: '6px 12px', marginTop: 4 }}>
              <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 10, fontWeight: 600, color: '#000718' }}>InsightIT</div>
            </div>
            {['LocateIT', 'CreateIT', 'AmplifyIT', 'SocialiseIT', 'InfluenceIT', 'ScriptIT', 'AigenIT', 'SearchIT', 'InvoiceIT'].map(name => (
              <div key={name} style={{ height: 28, padding: '6px 12px', display: 'flex', alignItems: 'center' }}>
                <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 10, fontWeight: 500, color: '#666a74' }}>{name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content skeleton */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Top bar */}
          <div style={{ height: '7.5%', borderBottom: '1px solid #dee0e7', display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between' }}>
            <div style={{ width: 16, height: 16, background: '#dee0e7', borderRadius: 2 }} />
            <div style={{ width: 140, height: 24, background: '#f0f1f3', borderRadius: 4 }} />
            <div style={{ display: 'flex', gap: 12 }}>
              {[1,2,3,4].map(i => <div key={i} style={{ width: 14, height: 14, background: '#dee0e7', borderRadius: '50%' }} />)}
            </div>
          </div>

          {/* Content area */}
          <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Title row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ width: 40, height: 8, background: '#dee0e7', borderRadius: 2, marginBottom: 6 }} />
                <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 16, fontWeight: 600, color: '#000718' }}>InsightIT</div>
              </div>
              <div style={{ background: G, padding: '6px 12px' }}>
                <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 10, fontWeight: 600, color: '#000718' }}>Configure</div>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 16, borderBottom: '1px solid #dee0e7', paddingBottom: 8 }}>
              <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 10, fontWeight: 600, color: '#000718', borderBottom: '2px solid #000718', paddingBottom: 6 }}>Overview</div>
              <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 10, fontWeight: 500, color: '#999' }}>Analytics</div>
              <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 10, fontWeight: 500, color: '#999' }}>Reports</div>
            </div>

            {/* Stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                { label: 'Google Reviews', val: '45', growth: '+21.01%' },
                { label: 'Avg Rating', val: '4.7', growth: '+5.3%' },
                { label: 'Responded', val: '38', growth: '+31.2%' },
                { label: 'Sentiment Score', val: '87%', growth: '+4.1%' },
              ].map((s, i) => (
                <div key={i} style={{ border: `1px solid ${G}`, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 9, fontWeight: 600, color: '#000718', textTransform: 'uppercase' }}>{s.label}</div>
                    <div style={{ width: 16, height: 16, background: G, borderRadius: '50%' }} />
                  </div>
                  <div style={{ fontFamily: "'Archivo', sans-serif", fontSize: 22, fontWeight: 700, color: '#000718' }}>{s.val}</div>
                  <div style={{ background: '#e8f5e8', padding: '2px 6px', alignSelf: 'flex-start' }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: 8, color: G, fontWeight: 600 }}>{s.growth}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA + Cards row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, flex: 1 }}>
              <div style={{ background: G, padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 14, fontWeight: 600, color: '#000718', textTransform: 'uppercase', lineHeight: 1.2 }}>Let's create campaign for your amazing brand!</div>
                  <div style={{ fontFamily: "'Archivo', sans-serif", fontSize: 8, color: 'rgba(0,7,24,0.6)', marginTop: 6 }}>Track reviews, sentiment & ratings across all locations.</div>
                </div>
                <div style={{ background: '#000718', padding: '4px 10px', alignSelf: 'flex-start', marginTop: 10 }}>
                  <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 9, fontWeight: 600, color: '#fff', textTransform: 'uppercase' }}>Go for it</div>
                </div>
              </div>
              {[1, 2].map(n => (
                <div key={n} style={{ border: '1px solid #dee0e7', padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ width: 24, height: 24, background: '#f0f1f3', borderRadius: '50%', margin: '0 auto' }} />
                  <div style={{ width: '70%', height: 8, background: '#f0f1f3', borderRadius: 2, margin: '0 auto' }} />
                  <div style={{ width: '50%', height: 6, background: '#f0f1f3', borderRadius: 2, margin: '0 auto' }} />
                  <div style={{ border: '1px solid #dee0e7', padding: '4px 10px', alignSelf: 'center', marginTop: 'auto' }}>
                    <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: 8, fontWeight: 600, color: '#000718', textTransform: 'uppercase' }}>See Details</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
