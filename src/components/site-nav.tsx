'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MaterialIcon } from './material-icon';
import { useTheme } from '@/lib/preferences';
import { SITE, basePath, localePath, type Lang } from '@/lib/site';

type SiteNavProps = {
  /** Ngôn ngữ của route đang mở. */
  lang: Lang;
  /** Trang chỉ có một thứ tiếng (blog, so sánh) ẩn nút đổi ngôn ngữ. */
  showLang?: boolean;
};

const linkStyle = {
  fontSize: 14,
  fontWeight: 500,
  color: 'var(--du-ink2)',
  textDecoration: 'none',
} as const;

const ctaStyle = {
  fontSize: 14,
  fontWeight: 600,
  color: 'var(--du-onlove)',
  background: 'var(--du-love)',
  borderRadius: 999,
  padding: '10px 18px',
  textDecoration: 'none',
} as const;

const roundButtonStyle = {
  border: 'none',
  cursor: 'pointer',
  borderRadius: 999,
  background: 'var(--du-inset)',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
} as const;

function langPillStyle(active: boolean) {
  return {
    display: 'block',
    fontFamily: 'inherit',
    fontSize: 12,
    fontWeight: active ? 700 : 600,
    color: active ? 'var(--du-ink)' : 'var(--du-ink3)',
    background: active ? 'var(--du-card)' : 'transparent',
    borderRadius: 999,
    boxShadow: active ? '0 1px 4px var(--du-shadow1)' : undefined,
    textDecoration: 'none',
  } as const;
}

export function SiteNav({ lang, showLang = true }: SiteNavProps) {
  const vi = lang !== 'en';

  // Ngôn ngữ nằm trong URL nên nút VI/EN là liên kết tới chính trang đang xem
  // ở ngôn ngữ kia — Google mới thấy được hai bản là hai trang riêng.
  const pathname = usePathname();
  const viHref = basePath(pathname);
  const enHref = localePath(viHref, 'en');
  const home = localePath('/', lang);

  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'dusk' ? 'paper' : 'dusk');

  // Dưới 720px các liên kết và nút tải app chuyển vào panel thu gọn.
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = (
    <>
      <Link href={`${home}#features`} style={linkStyle} onClick={closeMenu}>
        {vi ? 'Tính năng' : 'Features'}
      </Link>
      <Link
        href={localePath('/team', lang)}
        style={linkStyle}
        onClick={closeMenu}
      >
        Team
      </Link>
      <Link href="/blog" style={linkStyle} onClick={closeMenu}>
        Blog
      </Link>
    </>
  );

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'var(--du-navglass)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div
        className="site-nav__bar"
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Link
          href={home}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            minWidth: 0,
          }}
        >
          <Image
            src={SITE.icon}
            alt="Duoly"
            width={34}
            height={34}
            style={{ borderRadius: 10, display: 'block' }}
            priority
          />
          <span
            className="site-nav__wordmark"
            style={{
              fontWeight: 700,
              color: 'var(--du-ink)',
              letterSpacing: '-0.01em',
            }}
          >
            Duoly
          </span>
          <span
            className="site-nav__badge"
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'var(--du-ink3)',
              textTransform: 'uppercase',
              background: 'var(--du-inset)',
              borderRadius: 999,
              padding: '4px 9px',
              whiteSpace: 'nowrap',
            }}
          >
            a couple app
          </span>
        </Link>

        <nav
          className="site-nav__links"
          style={{ alignItems: 'center', gap: 20, flexWrap: 'wrap' }}
        >
          {navLinks}
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
                background: 'var(--du-inset)',
                borderRadius: 999,
                padding: 3,
              }}
            >
              <Link
                href={viHref}
                hrefLang="vi"
                aria-current={vi ? 'true' : undefined}
                className="site-nav__lang-pill"
                style={langPillStyle(vi)}
              >
                VI
              </Link>
              <Link
                href={enHref}
                hrefLang="en"
                aria-current={vi ? undefined : 'true'}
                className="site-nav__lang-pill"
                style={langPillStyle(!vi)}
              >
                EN
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Theme"
            className="site-nav__round-button"
            style={{ ...roundButtonStyle, display: 'flex' }}
          >
            <MaterialIcon
              name={theme === 'dusk' ? 'light_mode' : 'dark_mode'}
              size={19}
              opsz={20}
              fill={theme === 'dusk' ? 1 : 0}
              color="var(--du-ink2)"
            />
          </button>

          <Link
            href={`${home}#download`}
            className="site-nav__cta"
            style={ctaStyle}
          >
            {vi ? 'Tải app' : 'Get the app'}
          </Link>

          <button
            type="button"
            className="site-nav__menu-toggle site-nav__round-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={vi ? 'Menu' : 'Menu'}
            aria-expanded={menuOpen}
            aria-controls="site-nav-panel"
            style={roundButtonStyle}
          >
            <MaterialIcon
              name={menuOpen ? 'close' : 'menu'}
              size={20}
              opsz={20}
              color="var(--du-ink2)"
            />
          </button>
        </div>

        {menuOpen && (
          <nav
            id="site-nav-panel"
            className="site-nav__panel"
            style={{
              width: '100%',
              flexDirection: 'column',
              gap: 2,
              paddingBottom: 6,
            }}
          >
            {navLinks}
            <Link
              href={`${home}#download`}
              onClick={closeMenu}
              style={{ ...ctaStyle, textAlign: 'center', marginTop: 8 }}
            >
              {vi ? 'Tải app' : 'Get the app'}
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}
