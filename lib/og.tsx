import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };

type Variant = 'hub' | 'engineer' | 'security';

// Preview card for link shares; each track gets its own so a pasted link looks purpose-built.
export function ogImage(variant: Variant) {
  const light = { bg: '#eceae4', ink: '#121212', accent: '#2f43f5' };
  const dark = { bg: '#0b0b0c', ink: '#f1efe9', accent: '#ff4536' };
  const panel = (c: typeof light, word: string, role: string, flex: number) => (
    <div style={{ flex, background: c.bg, color: c.ink, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 56 }}>
      <div style={{ fontSize: 22, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.7 }}>{role}</div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: flex > 1 ? 120 : 72, fontWeight: 800, lineHeight: 0.9, letterSpacing: -4 }}>
        <span>I <span style={{ color: c.accent }}>{word}</span></span>
        <span>the web</span>
      </div>
      <div style={{ fontSize: 26 }}>Jack Shields · jackshields.pro</div>
    </div>
  );
  const flexes = ({ hub: [1, 1], engineer: [2.2, 0.8], security: [0.8, 2.2] } as const)[variant];
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        {panel(light, 'build', 'Software Engineer', flexes[0])}
        {panel(dark, 'break', 'Penetration Tester', flexes[1])}
      </div>
    ),
    OG_SIZE,
  );
}
