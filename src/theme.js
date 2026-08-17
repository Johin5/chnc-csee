// Shared layout tokens. The real Nav height (src/Nav.jsx): 8px padding ×2 +
// 46px button on desktop, 8 + 32 + 8 on ≤1024px. Replaces the legacy 106px
// nav allowance that was hardcoded across page roots.
export const NAV_H = { desktop: 62, small: 48 }

// De-facto spacing tokens (the dominant conventions across the site).
export const SECTION_PAD_X = 'clamp(20px, 6vw, 100px)'
export const SECTION_PAD_Y = 'clamp(56px, 8vw, 100px)'
export const SECTION_GAP = 'clamp(40px, 6vw, 80px)'
export const CONTAINER_W = 1240
export const CARD_PAD = 'clamp(20px, 4vw, 30px)'
export const PANEL_PAD = 'clamp(24px, 4vw, 50px)'
