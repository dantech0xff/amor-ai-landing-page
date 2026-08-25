'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MaterialIcon } from './material-icon';
import { useLang, useTheme } from '@/lib/preferences';
import { SITE, type Lang } from '@/lib/site';

type SiteNavProps = {
  /** Ép ngôn ngữ cho các trang chỉ có một thứ tiếng (blog). */
  lang?: Lang;
  showLang?: boolean;
};

const linkStyle = {
  fontSize: 14,
  fontWeight: 500,
  color: 'var(--am-ink2)',
  textDecoration: 'none',
} as const;

function langPillStyle(active: boolean) {
  return {
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 12,
    fontWeight: active ? 700 : 600,
    color: active ? 'var(--am-ink)' : 'var(--am-ink3)',
    background: active ? 'var(--am-card)' : 'transparent',
    borderRadius: 999,
    padding: '5px 11px',
    boxShadow: active ? '0 1px 4px var(--am-shadow1)' : undefined,
  } as const;
}

export function SiteNav({ lang: forcedLang, showLang = true }: SiteNavProps) {
  const { lang: contextLang, setLang } = useLang();
  const lang = forcedLang ?? contextLang;
  const vi = lang !== 'en';

  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'dusk' ? 'paper' : 'dusk');

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'var(--am-navglass)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          flexWrap: 'wrap',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
          }}
        >
          <Image
            src={SITE.icon}
            alt="Amor AI"
            width={34}
            height={34}
            style={{ borderRadius: 10, display: 'block' }}
            priority
          />
          <span
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: 'var(--am-ink)',
              letterSpacing: '-0.01em',
            }}
          >
            Amor AI
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'var(--am-ink3)',
              textTransform: 'uppercase',
              background: 'var(--am-inset)',
              borderRadius: 999,
              padding: '4px 9px',
            }}
          >
            a couple app
          </span>
        </Link>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <Link href="/#features" style={linkStyle}>
            {vi ? 'Tính năng' : 'Features'}
          </Link>
          <Link href="/team" style={linkStyle}>
            Team
          </Link>
          <Link href="/blog" style={linkStyle}>
            Blog
          </Link>
        </nav>

        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          {showLang && (
            <div
              style={{
                display: 'flex',
                background: 'var(--am-inset)',
                borderRadius: 999,
                padding: 3,
              }}
            >
              <button
                type="button"
                onClick={() => setLang('vi')}
                style={langPillStyle(vi)}
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                style={langPillStyle(!vi)}
              >
                EN
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Theme"
            style={{
              border: 'none',
              cursor: 'pointer',
              width: 38,
              height: 38,
              borderRadius: 999,
              background: 'var(--am-inset)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MaterialIcon
              name={theme === 'dusk' ? 'light_mode' : 'dark_mode'}
              size={19}
              opsz={20}
              fill={theme === 'dusk' ? 1 : 0}
              color="var(--am-ink2)"
            />
          </button>

          <Link
            href="/#download"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--am-onlove)',
              background: 'var(--am-love)',
              borderRadius: 999,
              padding: '10px 18px',
              textDecoration: 'none',
            }}
          >
            {vi ? 'Tải app' : 'Get the app'}
          </Link>
        </div>
      </div>
    </div>
  );
}
