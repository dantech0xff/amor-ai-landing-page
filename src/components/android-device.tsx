import type { ReactNode } from 'react';

const SURFACE = '#FFF8F3';
const ON_SURFACE = '#4A1530';
const FRAME_BORDER = 'rgba(116,119,117,0.5)';

function AndroidStatusBar() {
  return (
    <div
      style={{
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        position: 'relative',
        fontFamily: 'Roboto, system-ui, sans-serif',
        flexShrink: 0,
      }}
    >
      <div style={{ width: 128, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span
          style={{
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: 0.25,
            lineHeight: '20px',
            color: ON_SURFACE,
          }}
        >
          9:30
        </span>
      </div>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 8,
          transform: 'translateX(-50%)',
          width: 24,
          height: 24,
          borderRadius: 100,
          background: '#2e2e2e',
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', paddingRight: 2 }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            style={{ marginRight: -2 }}
            aria-hidden="true"
          >
            <path
              d="M8 13.3L.67 5.97a10.37 10.37 0 0114.66 0L8 13.3z"
              fill={ON_SURFACE}
            />
          </svg>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            style={{ marginRight: -2 }}
            aria-hidden="true"
          >
            <path d="M14.67 14.67V1.33L1.33 14.67h13.34z" fill={ON_SURFACE} />
          </svg>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <rect x="3.75" y="2" width="8.5" height="13" rx="1.5" fill={ON_SURFACE} />
          <rect x="5.5" y="0.9" width="5" height="2" rx="0.5" fill={ON_SURFACE} />
        </svg>
      </div>
    </div>
  );
}

function AndroidNavBar() {
  return (
    <div
      style={{
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 108,
          height: 4,
          borderRadius: 2,
          background: ON_SURFACE,
          opacity: 0.4,
        }}
      />
    </div>
  );
}

/**
 * Khung thiết bị Android (Material 3) — status bar, vùng nội dung và thanh
 * điều hướng cử chỉ. Chiều rộng co lại theo màn hình hẹp để trang không tràn ngang.
 */
export function AndroidDevice({
  children,
  width = 412,
  height = 892,
}: {
  children: ReactNode;
  width?: number;
  height?: number;
}) {
  return (
    <div
      style={{
        width: `min(${width}px, 100%)`,
        height,
        borderRadius: 18,
        overflow: 'hidden',
        background: SURFACE,
        border: `8px solid ${FRAME_BORDER}`,
        boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      <AndroidStatusBar />
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
      <AndroidNavBar />
    </div>
  );
}
