'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AppStoreBadge, GooglePlayBadge } from './store-badges';
import { SITE, localePath, type Lang } from '@/lib/site';

const columnLabel = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.14em',
  color: 'var(--du-ink3)',
} as const;

const columnLink = {
  fontSize: 14,
  color: 'var(--du-ink2)',
  textDecoration: 'none',
} as const;

const divider = { height: 1, background: 'var(--du-divider)' } as const;

const column = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
} as const;

export function SiteFooter({ lang }: { lang: Lang }) {
  const vi = lang !== 'en';
  const home = localePath('/', lang);
  const at = (path: string) => localePath(path, lang);

  return (
    <footer style={{ marginTop: 96 }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div style={divider} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: 36,
            padding: '48px 0 36px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Image
                src={SITE.icon}
                alt="Duoly"
                width={30}
                height={30}
                style={{ borderRadius: 9, display: 'block' }}
              />
              <span
                style={{ fontSize: 16, fontWeight: 700, color: 'var(--du-ink)' }}
              >
                Duoly — a couple app
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 13.5,
                lineHeight: '21px',
                color: 'var(--du-ink2)',
                maxWidth: 280,
              }}
            >
              {vi
                ? 'Một nơi nhỏ, ấm và riêng tư để hai người giữ lại nhịp yêu thương mỗi ngày.'
                : 'A small, warm, private place for two people to keep their daily rhythm of love.'}
            </p>
          </div>

          <div style={column}>
            <span style={columnLabel}>{vi ? 'KHÁM PHÁ' : 'EXPLORE'}</span>
            <Link href={home} style={columnLink}>
              {vi ? 'Trang chủ' : 'Home'}
            </Link>
            <Link href={`${home}#features`} style={columnLink}>
              {vi ? 'Tính năng' : 'Features'}
            </Link>
            <Link href={`${home}#premium`} style={columnLink}>
              Premium
            </Link>
            <Link href="/blog" style={columnLink}>
              Blog
            </Link>
            {/* Trang so sánh chỉ có bản tiếng Việt. */}
            {vi && (
              <Link href="/so-sanh" style={columnLink}>
                So sánh app cặp đôi
              </Link>
            )}
            <Link href={at('/team')} style={columnLink}>
              Team
            </Link>
          </div>

          <div style={column}>
            <span style={columnLabel}>{vi ? 'HỖ TRỢ' : 'SUPPORT'}</span>
            <Link href={at('/faq')} style={columnLink}>
              FAQ
            </Link>
            <Link href={`${at('/team')}#contact`} style={columnLink}>
              {vi ? 'Liên hệ' : 'Contact'}
            </Link>
            <Link href={at('/terms')} style={columnLink}>
              {vi ? 'Điều khoản' : 'Terms of Service'}
            </Link>
            <Link href={at('/privacy')} style={columnLink}>
              {vi ? 'Quyền riêng tư' : 'Privacy Policy'}
            </Link>
            <a href={`mailto:${SITE.email}`} style={columnLink}>
              {SITE.email}
            </a>
          </div>

          <div style={column}>
            <span style={columnLabel}>
              {vi ? 'TẢI ỨNG DỤNG' : 'GET THE APP'}
            </span>
            <GooglePlayBadge size="sm" />
            <AppStoreBadge
              size="sm"
              caption={vi ? 'SẮP CÓ TRÊN' : 'COMING SOON ON'}
            />
          </div>
        </div>

        <div style={divider} />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
            padding: '20px 0 28px',
          }}
        >
          <span style={{ fontSize: 12.5, color: 'var(--du-ink3)' }}>
            © 2026 TRAN HUU DANH. All rights reserved.
          </span>
          <span style={{ fontSize: 12.5, color: 'var(--du-ink3)' }}>
            {vi
              ? 'Làm bằng sự nâng niu, tại Việt Nam.'
              : 'Made with care, in Vietnam.'}
          </span>
        </div>
      </div>
    </footer>
  );
}
