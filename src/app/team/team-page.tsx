'use client';

import Link from 'next/link';
import type { CSSProperties } from 'react';
import { MaterialIcon } from '@/components/material-icon';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { teamContent } from '@/lib/content/team';
import { useLang } from '@/lib/preferences';
import { SITE } from '@/lib/site';

const cardShadow =
  '0 2px 8px var(--am-shadow1), 0 10px 28px var(--am-shadow2)';

const contactCard: CSSProperties = {
  background: 'var(--am-card)',
  borderRadius: 24,
  padding: 28,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  boxShadow: cardShadow,
};

const CONTACTS = [
  {
    icon: 'mail',
    iconBg: 'var(--am-lovec)',
    iconFg: 'var(--am-love)',
    subject: 'Support',
    vi: {
      title: 'Hỗ trợ chung',
      body: 'Câu hỏi về tài khoản, dữ liệu, cách dùng — hoặc chỉ là một lời chào.',
    },
    en: {
      title: 'General support',
      body: 'Questions about your account, data, how things work — or just a hello.',
    },
  },
  {
    icon: 'credit_card',
    iconBg: 'var(--am-butter)',
    iconFg: 'var(--am-premium)',
    subject: 'Billing',
    vi: {
      title: 'Thanh toán & Premium',
      body: 'Trước khi email, thử "Khôi phục giao dịch" trong app với đúng tài khoản Google Play đã mua — thường là xong ngay.',
    },
    en: {
      title: 'Billing & Premium',
      body: 'Before emailing, try "Restore purchases" in-app with the Google Play account that bought Premium — that usually fixes it.',
    },
  },
  {
    icon: 'lightbulb',
    iconBg: 'var(--am-quietc)',
    iconFg: 'var(--am-onquietc)',
    subject: 'Idea',
    vi: {
      title: 'Góp ý tính năng',
      body: 'Amor AI lớn lên từ góp ý của các cặp đôi đang dùng nó. Kể tụi mình nghe điều bạn mong có.',
    },
    en: {
      title: 'Feature ideas',
      body: 'Amor AI grows from the couples using it. Tell us what you wish it had.',
    },
  },
] as const;

export function TeamPage() {
  const { lang } = useLang();
  const vi = lang !== 'en';
  const { story, members, values } = teamContent(lang);

  return (
    <div style={{ minHeight: '100vh' }}>
      <SiteNav />

      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 24px 0' }}>
        <div
          style={{
            maxWidth: 640,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(34px, 4.2vw, 52px)',
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textWrap: 'pretty',
            }}
          >
            {vi
              ? 'Một studio nhỏ, làm một việc thật kỹ'
              : 'A small studio doing one thing carefully'}
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: '28px',
              color: 'var(--am-ink2)',
              textWrap: 'pretty',
            }}
          >
            {vi
              ? '1010 Creative là một studio độc lập tại Việt Nam. Chúng mình tin rằng một ứng dụng cho cặp đôi phải dịu dàng như chính điều nó gìn giữ — nên mỗi màn hình, mỗi dòng chữ và mỗi quyết định về dữ liệu đều được cân nhắc chậm rãi.'
              : '1010 Creative is an independent studio in Vietnam. We believe an app for couples should be as gentle as the thing it keeps — so every screen, every sentence and every data decision is made slowly, on purpose.'}
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 24px 0' }}>
        <div
          style={{
            display: 'flex',
            gap: 36,
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              flex: '1 1 420px',
              minWidth: 280,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
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
              {story.label}
            </span>
            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(26px, 3.2vw, 38px)',
                lineHeight: 1.2,
                fontWeight: 700,
                letterSpacing: '-0.015em',
                textWrap: 'pretty',
              }}
            >
              {story.title}
            </h2>
            {story.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-lora), Georgia, serif',
                  fontSize: 16.5,
                  lineHeight: '29px',
                  color: 'var(--am-ink2)',
                  textWrap: 'pretty',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <figure
            style={{
              flex: '0 1 320px',
              minWidth: 260,
              margin: 0,
              background: 'var(--am-peachpaper)',
              borderRadius: 22,
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              transform: 'rotate(-2.2deg)',
              boxShadow: cardShadow,
            }}
          >
            <MaterialIcon
              name="format_quote"
              size={26}
              color="var(--am-labelstrong)"
            />
            <blockquote
              style={{
                margin: 0,
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 18,
                lineHeight: '30px',
                fontStyle: 'italic',
                color: 'var(--am-ink)',
                textWrap: 'pretty',
              }}
            >
              {story.quote}
            </blockquote>
            <figcaption style={{ fontSize: 12.5, color: 'var(--am-ink3)' }}>
              {story.quoteBy}
            </figcaption>
          </figure>
        </div>

        <div
          style={{
            marginTop: 36,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: 16,
          }}
        >
          {story.beats.map((beat) => (
            <div
              key={beat.title}
              style={{
                background: 'var(--am-card)',
                borderRadius: 20,
                padding: 22,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                boxShadow: cardShadow,
              }}
            >
              <MaterialIcon
                name={beat.icon}
                size={24}
                color="var(--am-labelstrong)"
              />
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>
                {beat.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: '22px',
                  color: 'var(--am-ink2)',
                }}
              >
                {beat.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 24px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 16,
          }}
        >
          {members.map((member) => (
            <div
              key={member.role}
              style={{
                background: 'var(--am-card)',
                borderRadius: 24,
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                boxShadow: cardShadow,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 999,
                  background: member.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  fontWeight: 700,
                  color: member.fg,
                }}
              >
                {member.initials}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 19,
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {member.name}
                </h3>
                <span
                  style={{
                    fontSize: 11.5,
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: 'var(--am-labelstrong)',
                  }}
                >
                  {member.role}
                </span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: '22px',
                  color: 'var(--am-ink2)',
                }}
              >
                {member.bio}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 6,
                  flexWrap: 'wrap',
                  marginTop: 'auto',
                }}
              >
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11.5,
                      fontWeight: 500,
                      color: 'var(--am-ink2)',
                      background: 'var(--am-inset)',
                      borderRadius: 999,
                      padding: '4px 10px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '80px 24px 0' }}>
        <div
          style={{
            background: 'var(--am-butter)',
            borderRadius: 28,
            padding: 'clamp(32px, 4.5vw, 52px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 28,
          }}
        >
          {values.map((value) => (
            <div
              key={value.title}
              style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
            >
              <MaterialIcon
                name={value.icon}
                size={26}
                color="var(--am-labelstrong)"
              />
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>
                {value.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: '22px',
                  color: 'var(--am-ink2)',
                }}
              >
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{ maxWidth: 1120, margin: '0 auto', padding: '96px 24px 0' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            marginBottom: 36,
            maxWidth: 560,
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
            {vi ? 'LIÊN HỆ' : 'CONTACT'}
          </span>
          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(26px, 3.2vw, 38px)',
              lineHeight: 1.2,
              fontWeight: 700,
              letterSpacing: '-0.015em',
            }}
          >
            {vi
              ? 'Hộp thư của studio luôn mở'
              : 'The studio inbox is always open'}
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: '26px',
              color: 'var(--am-ink2)',
            }}
          >
            {vi
              ? 'Tụi mình đọc từng email và phản hồi trong 2–3 ngày làm việc. Tiếng Việt hay tiếng Anh đều được.'
              : 'We read every email and reply within 2–3 working days. Vietnamese or English both work.'}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          {CONTACTS.map((contact) => {
            const copy = vi ? contact.vi : contact.en;
            return (
              <div key={contact.icon} style={contactCard}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: contact.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MaterialIcon
                    name={contact.icon}
                    size={22}
                    color={contact.iconFg}
                  />
                </div>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>
                  {copy.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: '22px',
                    color: 'var(--am-ink2)',
                  }}
                >
                  {copy.body}
                </p>
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(
                    `[Amor AI] ${contact.subject}`,
                  )}`}
                  style={{
                    marginTop: 'auto',
                    fontSize: 14,
                    fontWeight: 600,
                    wordBreak: 'break-all',
                  }}
                >
                  {SITE.email}
                </a>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 24,
            background: 'var(--am-inset)',
            borderRadius: 20,
            padding: '20px 24px',
            display: 'flex',
            gap: 14,
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <MaterialIcon name="help" size={22} color="var(--am-labelstrong)" />
          <p
            style={{
              margin: 0,
              flex: 1,
              minWidth: 240,
              fontSize: 14,
              lineHeight: '22px',
              color: 'var(--am-ink2)',
            }}
          >
            {vi ? (
              <>
                Nhiều câu trả lời đã có sẵn trong <Link href="/faq">FAQ</Link>. Về
                pháp lý, xem <Link href="/terms">Điều khoản</Link> và{' '}
                <Link href="/privacy">Quyền riêng tư</Link>.
              </>
            ) : (
              <>
                Many answers already live in the <Link href="/faq">FAQ</Link>. For
                legal matters, see the <Link href="/terms">Terms</Link> and{' '}
                <Link href="/privacy">Privacy Policy</Link>.
              </>
            )}
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
