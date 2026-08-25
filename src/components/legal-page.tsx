'use client';

import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import { SiteFooter } from './site-footer';
import { SiteNav } from './site-nav';
import { useLang } from '@/lib/preferences';

export type LegalSection = { heading: string; paragraphs: ReactNode[] };

export type LegalDocument = {
  eyebrow: string;
  title: string;
  meta: string;
  /** Hộp tóm tắt bằng lời thường (chỉ trang quyền riêng tư có). */
  summary?: ReactNode;
  sections: LegalSection[];
};

const headingStyle = {
  margin: '20px 0 0',
  fontSize: 19,
  fontWeight: 700,
  color: 'var(--am-ink)',
} as const;

const paragraphStyle = { margin: 0 } as const;

/** Khung chung cho trang Điều khoản và Quyền riêng tư. */
export function LegalPage({
  document: doc,
  seeAlso,
}: {
  document: LegalDocument;
  seeAlso: ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh' }}>
      <SiteNav />

      <section style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 0' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            marginBottom: doc.summary ? 28 : 32,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              color: 'var(--am-labelstrong)',
            }}
          >
            {doc.eyebrow}
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(30px, 4vw, 42px)',
              lineHeight: 1.2,
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            {doc.title}
          </h1>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--am-ink3)' }}>
            {doc.meta}
          </p>
        </div>

        {doc.summary && (
          <div
            style={{
              background: 'var(--am-quietc)',
              borderRadius: 20,
              padding: '22px 26px',
              marginBottom: 28,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 14.5,
                lineHeight: '24px',
                color: 'var(--am-onquietc)',
              }}
            >
              {doc.summary}
            </p>
          </div>
        )}

        <div
          style={{
            fontSize: 15,
            lineHeight: '26px',
            color: 'var(--am-ink2)',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {doc.sections.map((section) => (
            <Fragment key={section.heading}>
              <h2 style={headingStyle}>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} style={paragraphStyle}>
                  {paragraph}
                </p>
              ))}
            </Fragment>
          ))}
        </div>

        <div
          style={{
            marginTop: 36,
            background: 'var(--am-inset)',
            borderRadius: 16,
            padding: '18px 22px',
            fontSize: 13.5,
            lineHeight: '21px',
            color: 'var(--am-ink2)',
          }}
        >
          {seeAlso}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/** Liên kết "Xem thêm" ở cuối hai trang pháp lý. */
export function LegalSeeAlso({
  target,
}: {
  target: 'privacy' | 'terms';
}) {
  const { lang } = useLang();
  const vi = lang !== 'en';

  if (target === 'privacy') {
    return vi ? (
      <>
        Xem thêm: <Link href="/privacy">Chính sách quyền riêng tư</Link> ·{' '}
        <Link href="/faq">FAQ</Link>
      </>
    ) : (
      <>
        See also: <Link href="/privacy">Privacy Policy</Link> ·{' '}
        <Link href="/faq">FAQ</Link>
      </>
    );
  }

  return vi ? (
    <>
      Xem thêm: <Link href="/terms">Điều khoản dịch vụ</Link> ·{' '}
      <Link href="/faq">FAQ</Link>
    </>
  ) : (
    <>
      See also: <Link href="/terms">Terms of Service</Link> ·{' '}
      <Link href="/faq">FAQ</Link>
    </>
  );
}
