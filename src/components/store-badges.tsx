import type { CSSProperties } from 'react';
import { SITE } from '@/lib/site';

type BadgeSize = 'lg' | 'sm';

const METRICS = {
  lg: {
    radius: 16,
    padding: '9px 18px 9px 10px',
    gap: 11,
    glyph: 34,
    glyphRadius: 10,
    caption: 9,
    label: 17,
  },
  sm: {
    radius: 14,
    padding: '7px 15px 7px 8px',
    gap: 9,
    glyph: 28,
    glyphRadius: 8,
    caption: 8.5,
    label: 14.5,
  },
} as const;

function shell(size: BadgeSize, extra: CSSProperties): CSSProperties {
  const m = METRICS[size];
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: m.gap,
    borderRadius: m.radius,
    padding: m.padding,
    textDecoration: 'none',
    ...extra,
  };
}

function glyphBox(size: BadgeSize, background: string, color?: string): CSSProperties {
  const m = METRICS[size];
  return {
    width: m.glyph,
    height: m.glyph,
    borderRadius: m.glyphRadius,
    background,
    color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };
}

function Caption({
  size,
  caption,
  label,
}: {
  size: BadgeSize;
  caption: string;
  label: string;
}) {
  const m = METRICS[size];
  return (
    <span
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        textAlign: 'left',
      }}
    >
      <span
        style={{ fontSize: m.caption, fontWeight: 600, letterSpacing: '0.14em' }}
      >
        {caption}
      </span>
      <span style={{ fontSize: m.label, fontWeight: 600, lineHeight: 1.15 }}>
        {label}
      </span>
    </span>
  );
}

export function GooglePlayBadge({
  size = 'lg',
  background = 'var(--am-love)',
  color = 'var(--am-onlove)',
  boxShadow,
}: {
  size?: BadgeSize;
  background?: string;
  color?: string;
  boxShadow?: string;
}) {
  const svg = size === 'lg' ? 17 : 14;
  return (
    <a
      href={SITE.playUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={shell(size, { background, color, boxShadow })}
    >
      <span style={glyphBox(size, '#FFFFFF')}>
        <svg width={svg} height={svg} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3.6 2.4 L13.6 12 L3.6 21.6 C3.2 21.3 3 20.8 3 20.2 V3.8 C3 3.2 3.2 2.7 3.6 2.4 Z"
            fill="#00C3FF"
          />
          <path
            d="M4.4 1.9 L16.8 9 L13.6 12 L3.6 2.4 C3.8 2.1 4.1 2 4.4 1.9 Z"
            fill="#00E676"
          />
          <path
            d="M4.4 22.1 L13.6 12 L16.8 15 C12.7 17.4 8.5 19.8 4.4 22.1 Z"
            fill="#FF3A44"
          />
          <path
            d="M16.8 9 L20.7 11.2 C21.6 11.7 21.6 12.3 20.7 12.8 L16.8 15 L13.6 12 Z"
            fill="#FFC900"
          />
        </svg>
      </span>
      <Caption size={size} caption="GET IT ON" label="Google Play" />
    </a>
  );
}

/** App Store chưa phát hành — hiển thị dạng tĩnh, không phải liên kết. */
export function AppStoreBadge({
  size = 'lg',
  caption,
  background = 'var(--am-inset)',
  color = 'var(--am-ink2)',
  glyphBackground = 'var(--am-card)',
  glyphColor = 'var(--am-ink2)',
}: {
  size?: BadgeSize;
  caption: string;
  background?: string;
  color?: string;
  glyphBackground?: string;
  glyphColor?: string;
}) {
  const svg = size === 'lg' ? 18 : 15;
  return (
    <div style={shell(size, { background, color })}>
      <span style={glyphBox(size, glyphBackground, glyphColor)}>
        <svg width={svg} height={svg} viewBox="0 0 24 24" aria-hidden="true">
          <ellipse cx="12" cy="14.2" rx="6.8" ry="6.4" fill="currentColor" />
          <circle cx="19.8" cy="11.5" r="3.4" fill={glyphBackground} />
          <ellipse
            cx="13.6"
            cy="5.4"
            rx="2.7"
            ry="1.4"
            transform="rotate(-38 13.6 5.4)"
            fill="currentColor"
          />
        </svg>
      </span>
      <Caption size={size} caption={caption} label="App Store" />
    </div>
  );
}
