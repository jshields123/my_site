import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '320px',
            background:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(120,130,220,0.18), transparent)',
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: '68px',
              fontWeight: 700,
              fontFamily: 'sans-serif',
              color: '#ededed',
              lineHeight: 1.1,
            }}
          >
            Jack Shields
          </div>
          <div
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '30px',
              fontFamily: 'sans-serif',
              letterSpacing: '-0.01em',
            }}
          >
            Senior Software Engineer
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '12px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '100px',
              padding: '10px 20px',
            }}
          >
            <div
              style={{
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                background: '#22c55e',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: '20px',
                fontFamily: 'sans-serif',
              }}
            >
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
