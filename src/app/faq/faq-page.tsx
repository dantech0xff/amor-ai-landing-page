'use client';

import Link from 'next/link';
import { MaterialIcon } from '@/components/material-icon';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { faqContent } from '@/lib/content/faq';
import { useLang } from '@/lib/preferences';

export function FaqPage() {
  const { lang } = useLang();
  const vi = lang !== 'en';
  const faqs = faqContent(lang);

  return (
    <div style={{ minHeight: '100vh' }}>
      <SiteNav />

      <section style={{ maxWidth: 780, margin: '0 auto', padding: '72px 24px 0' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            marginBottom: 40,
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
            {vi ? 'HỖ TRỢ' : 'SUPPORT'}
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(32px, 4vw, 46px)',
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            {vi ? 'Câu hỏi thường gặp' : 'Frequently asked questions'}
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: '26px',
              color: 'var(--am-ink2)',
            }}
          >
            {vi ? (
              <>
                Không thấy câu trả lời bạn cần?{' '}
                <Link href="/team#contact">Nhắn cho studio</Link> — tụi mình đọc
                từng email.
              </>
            ) : (
              <>
                Can&apos;t find your answer?{' '}
                <Link href="/team#contact">Write to the studio</Link> — we read
                every email.
              </>
            )}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((item) => (
            <details
              key={item.q}
              style={{
                background: 'var(--am-card)',
                borderRadius: 20,
                boxShadow: '0 2px 8px var(--am-shadow1)',
                overflow: 'hidden',
              }}
            >
              <summary
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '20px 22px',
                  fontSize: 15.5,
                  fontWeight: 600,
                  color: 'var(--am-ink)',
                }}
              >
                <MaterialIcon
                  className="faq-chevron"
                  name="chevron_right"
                  size={20}
                  opsz={20}
                  color="var(--am-love)"
                  style={{ transition: 'transform 0.18s ease' }}
                />
                <span style={{ flex: 1 }}>{item.q}</span>
              </summary>
              <div
                style={{
                  padding: '0 22px 20px 56px',
                  fontSize: 14.5,
                  lineHeight: '23px',
                  color: 'var(--am-ink2)',
                }}
              >
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
