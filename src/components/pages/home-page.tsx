'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { AndroidDevice } from '@/components/android-device';
import { MaterialIcon } from '@/components/material-icon';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { AppStoreBadge, GooglePlayBadge } from '@/components/store-badges';
import { TodayMockup } from '@/components/today-mockup';
import { BLOG_POSTS } from '@/lib/content/blog';
import { homeContent } from '@/lib/content/home';
import { SITE, type Lang } from '@/lib/site';

const section: CSSProperties = {
  maxWidth: 1120,
  margin: '0 auto',
  padding: '96px 24px 0',
};

const eyebrow: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.16em',
  color: 'var(--du-labelstrong)',
};

const cardShadow =
  '0 2px 8px var(--du-shadow1), 0 10px 28px var(--du-shadow2)';

const autoGrid = (min: number, gap = 16): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
  gap,
});

/** Ba thẻ giá trị ngay dưới hero — nội dung ngắn nên viết thẳng theo ngôn ngữ. */
const HIGHLIGHTS = [
  {
    icon: 'wb_twilight',
    bg: 'var(--du-butter)',
    fg: 'var(--du-labelstrong)',
    vi: {
      title: 'Nghi thức hôm nay',
      body: 'Một câu hỏi, một dòng viết. Một phút mỗi ngày.',
    },
    en: {
      title: "Today's ritual",
      body: 'One question, one line. A minute a day.',
    },
  },
  {
    icon: 'auto_stories',
    bg: 'var(--du-peachpaper)',
    fg: 'var(--du-labelstrong)',
    vi: {
      title: 'Ký ức có chủ đích',
      body: 'Ghi chú, ảnh, cột mốc — xếp gọn theo thời gian, mở ra khi bạn muốn.',
    },
    en: {
      title: 'Memories on purpose',
      body: 'Notes, photos, milestones — kept in order, opened when you want.',
    },
  },
  {
    icon: 'shield_moon',
    bg: 'var(--du-quietc)',
    fg: 'var(--du-onquietc)',
    ink: 'var(--du-onquietc)',
    vi: {
      title: 'Riêng tư được tôn trọng',
      body: 'Dữ liệu của hai bạn ở yên chỗ của nó. Không theo dõi, không chia sẻ.',
    },
    en: {
      title: 'Privacy, respected',
      body: 'Your data stays where it belongs. No tracking, no sharing.',
    },
  },
] as const;

const PLANS = [
  {
    background: '#FFF9FA',
    labelColor: '#8C5468',
    vi: { label: 'HÀNG THÁNG', body: 'Linh hoạt, hủy bất cứ lúc nào.' },
    en: { label: 'MONTHLY', body: 'Flexible, cancel anytime.' },
  },
  {
    background: '#FFC4D1',
    labelColor: '#7A3450',
    badge: { vi: 'PHỔ BIẾN', en: 'POPULAR' },
    vi: { label: 'HÀNG NĂM', body: 'Tiết kiệm nhất cho một năm đầy kỷ niệm.' },
    en: { label: 'YEARLY', body: 'Best value for a year of memories.' },
  },
  {
    background: '#FFF9FA',
    labelColor: '#8A5A00',
    vi: { label: 'TRỌN ĐỜI', body: 'Mua một lần, giữ mãi mãi.' },
    en: { label: 'LIFETIME', body: 'Pay once, keep forever.' },
  },
] as const;

export function HomePage({ lang }: { lang: Lang }) {
  const vi = lang !== 'en';
  const { features, promises, perks } = homeContent(lang);
  const homePosts = BLOG_POSTS.slice(0, 3);

  return (
    <div style={{ minHeight: '100vh' }}>
      <SiteNav lang={lang} />

      {/* Hero */}
      <section
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '56px 24px 8px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: 56,
          alignItems: 'center',
          // Hai vệt sáng trang trí cố tình tràn khỏi cột chứa khung điện thoại.
          // clip (không phải hidden) chặn phần tràn mà không tạo scroll container.
          overflowX: 'clip',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 22,
            maxWidth: 560,
            minWidth: 0,
          }}
        >
          <span style={eyebrow}>
            {vi ? 'ỨNG DỤNG DÀNH CHO HAI NGƯỜI' : 'AN APP FOR THE TWO OF YOU'}
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(38px, 4.6vw, 58px)',
              lineHeight: 1.12,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textWrap: 'pretty',
            }}
          >
            {vi
              ? 'Giữ lại nhịp yêu thương, mỗi ngày một chút.'
              : 'Keep your rhythm of love, a little every day.'}
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: '28px',
              color: 'var(--du-ink2)',
              textWrap: 'pretty',
            }}
          >
            {vi
              ? 'Duoly là một cuốn sổ chung nhỏ và ấm: đếm ngày bên nhau, giữ lại những điều nhỏ đáng nhớ, và một câu hỏi mỗi ngày để hai bạn kết nối lại. Không mạng xã hội, không phô bày — chỉ có hai bạn.'
              : 'Duoly is a small, warm shared journal: count your days together, keep the little things worth remembering, and reconnect with one gentle question a day. No social feed, no showing off — just the two of you.'}
          </p>
          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <GooglePlayBadge boxShadow="0 6px 18px rgba(255,77,121,0.30)" />
            <AppStoreBadge caption={vi ? 'SẮP CÓ TRÊN' : 'COMING SOON ON'} />
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            padding: '24px 0',
            minWidth: 0,
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: 340,
              height: 340,
              borderRadius: 999,
              background: 'var(--du-lovec)',
              opacity: 0.4,
              filter: 'blur(70px)',
              top: '6%',
              left: '8%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 260,
              height: 260,
              borderRadius: 999,
              background: 'var(--du-warmc)',
              opacity: 0.3,
              filter: 'blur(70px)',
              bottom: '4%',
              right: '6%',
            }}
          />
          <div
            style={{
              position: 'relative',
              width: '100%',
              minWidth: 0,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <AndroidDevice width={392} height={830}>
              <TodayMockup />
            </AndroidDevice>
          </div>
        </div>
      </section>

      {/* Ba giá trị */}
      <section style={{ ...section, paddingTop: 72 }}>
        <div style={autoGrid(280)}>
          {HIGHLIGHTS.map((item) => {
            const copy = vi ? item.vi : item.en;
            const ink = 'ink' in item ? item.ink : undefined;
            return (
              <div
                key={item.icon}
                style={{
                  background: item.bg,
                  borderRadius: 24,
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <MaterialIcon name={item.icon} size={26} color={item.fg} />
                <h3
                  style={{
                    margin: 0,
                    fontSize: 19,
                    fontWeight: 600,
                    color: ink,
                  }}
                >
                  {copy.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14.5,
                    lineHeight: '23px',
                    color: ink ?? 'var(--du-ink2)',
                  }}
                >
                  {copy.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tính năng */}
      <section id="features" style={section}>
        <div
          style={{
            maxWidth: 620,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            marginBottom: 40,
          }}
        >
          <span style={eyebrow}>{vi ? 'TÍNH NĂNG' : 'FEATURES'}</span>
          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              lineHeight: 1.2,
              fontWeight: 700,
              letterSpacing: '-0.015em',
            }}
          >
            {vi
              ? 'Nhỏ thôi, nhưng là của hai bạn'
              : 'Small things, but truly yours'}
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: '26px',
              color: 'var(--du-ink2)',
            }}
          >
            {vi
              ? 'Mọi thứ trong Duoly đều xoay quanh những gì hai bạn thật sự tạo ra — không thông báo ồn ào, không con số ép buộc.'
              : 'Everything in Duoly revolves around what the two of you actually create — no noisy notifications, no guilt-tripping numbers.'}
          </p>
        </div>
        <div style={autoGrid(300)}>
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                background: 'var(--du-card)',
                borderRadius: 24,
                padding: 26,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                boxShadow: cardShadow,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: feature.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MaterialIcon name={feature.icon} size={23} color={feature.fg} />
              </div>
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>
                {feature.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: '22px',
                  color: 'var(--du-ink2)',
                }}
              >
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lời hứa */}
      <section style={section}>
        <div
          style={{
            background: 'var(--du-soft)',
            borderRadius: 28,
            padding: 'clamp(32px, 5vw, 56px)',
            color: 'var(--du-ink)',
          }}
        >
          <div
            style={{
              maxWidth: 560,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              marginBottom: 36,
            }}
          >
            <span style={eyebrow}>
              {vi ? 'LỜI HỨA CỦA DUOLY' : 'THE DUOLY PROMISE'}
            </span>
            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(26px, 3.2vw, 36px)',
                lineHeight: 1.25,
                fontWeight: 700,
                letterSpacing: '-0.015em',
              }}
            >
              {vi
                ? 'Những điều app này không làm'
                : 'Things this app will not do'}
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 15.5,
                lineHeight: '25px',
                color: 'var(--du-ink2)',
              }}
            >
              {vi
                ? 'Sự lãng mạn phải đến từ ký ức và hành động thật của hai bạn — không phải từ những chiêu giữ chân của một ứng dụng.'
                : "Romance must come from your real memories and real actions — not from an app's retention tricks."}
            </p>
          </div>
          <div style={autoGrid(240, 24)}>
            {promises.map((promise) => (
              <div
                key={promise.title}
                style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
              >
                <MaterialIcon
                  name={promise.icon}
                  size={24}
                  color="var(--du-love)"
                />
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>
                  {promise.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13.5,
                    lineHeight: '21px',
                    color: 'var(--du-ink2)',
                  }}
                >
                  {promise.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium */}
      <section id="premium" style={section}>
        <div
          style={{
            maxWidth: 620,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            marginBottom: 36,
          }}
        >
          <span style={eyebrow}>DUOLY PREMIUM</span>
          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              lineHeight: 1.2,
              fontWeight: 700,
              letterSpacing: '-0.015em',
            }}
          >
            {vi
              ? 'Mở rộng những khoảnh khắc đáng giá'
              : 'More room for the moments that matter'}
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: '26px',
              color: 'var(--du-ink2)',
            }}
          >
            {vi
              ? 'Bản Free luôn giữ trọn giá trị cốt lõi — ký ức của bạn không bao giờ bị khóa. Premium thêm chiều sâu khi hai bạn muốn nhiều hơn.'
              : 'Free always keeps the core — your memories are never held hostage. Premium adds depth when you want more.'}
          </p>
        </div>
        <div
          style={{
            background: '#FFEDF1',
            borderRadius: 28,
            padding: 'clamp(28px, 4vw, 44px)',
            boxShadow:
              '0 2px 10px var(--du-shadow1), 0 12px 32px var(--du-shadow2)',
          }}
        >
          <div style={{ ...autoGrid(250, 20), marginBottom: 32 }}>
            {perks.map((perk) => (
              <div
                key={perk.title}
                style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}
              >
                <MaterialIcon name={perk.icon} size={22} color="#ED2E67" />
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                >
                  <span
                    style={{ fontSize: 15, fontWeight: 600, color: '#4A1530' }}
                  >
                    {perk.title}
                  </span>
                  <span
                    style={{ fontSize: 13, lineHeight: '20px', color: '#8C5468' }}
                  >
                    {perk.body}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div style={autoGrid(220, 14)}>
            {PLANS.map((plan) => {
              const copy = vi ? plan.vi : plan.en;
              return (
                <div
                  key={copy.label}
                  style={{
                    background: plan.background,
                    borderRadius: 20,
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    position: 'relative',
                  }}
                >
                  {'badge' in plan && plan.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        background: '#FFF9FA',
                        color: '#B9536F',
                        borderRadius: 999,
                        padding: '4px 10px',
                        transform: 'rotate(2deg)',
                      }}
                    >
                      {vi ? plan.badge.vi : plan.badge.en}
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: plan.labelColor,
                    }}
                  >
                    {copy.label}
                  </span>
                  <span
                    style={{ fontSize: 14, lineHeight: '21px', color: '#4A1530' }}
                  >
                    {copy.body}
                  </span>
                </div>
              );
            })}
          </div>
          <p
            style={{
              margin: '24px 0 0',
              fontSize: 12.5,
              lineHeight: '19px',
              color: '#B98B9B',
            }}
          >
            {vi
              ? 'Giá và gói hiển thị trong ứng dụng, thanh toán qua Google Play. Gói đăng ký tự gia hạn, hủy bất cứ lúc nào; có khôi phục giao dịch.'
              : 'Prices and plans are shown in-app; billed through Google Play. Subscriptions auto-renew, cancel anytime; purchases can be restored.'}
          </p>
        </div>
      </section>

      {/* Blog */}
      <section style={section}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 20,
            flexWrap: 'wrap',
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              maxWidth: 560,
            }}
          >
            <span style={eyebrow}>BLOG</span>
            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(28px, 3.4vw, 40px)',
                lineHeight: 1.2,
                fontWeight: 700,
                letterSpacing: '-0.015em',
              }}
            >
              {vi ? 'Chuyện yêu, viết chậm' : 'Slow notes on love'}
            </h2>
          </div>
          <Link
            href="/blog"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--du-link)',
              textDecoration: 'none',
            }}
          >
            {vi ? 'Xem tất cả bài viết →' : 'All posts →'}
          </Link>
        </div>
        <div style={autoGrid(280)}>
          {homePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                background: 'var(--du-card)',
                borderRadius: 24,
                padding: 26,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                textDecoration: 'none',
                boxShadow: cardShadow,
              }}
            >
              <span
                style={{
                  width: 'fit-content',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: post.chipFg,
                  background: post.chipBg,
                  borderRadius: 999,
                  padding: '5px 11px',
                }}
              >
                {post.category}
              </span>
              <h3
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: '26px',
                  fontWeight: 600,
                  color: 'var(--du-ink)',
                }}
              >
                {post.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 13.5,
                  lineHeight: '21px',
                  color: 'var(--du-ink2)',
                }}
              >
                {post.homeExcerpt}
              </p>
              <span
                style={{
                  marginTop: 'auto',
                  fontSize: 12,
                  color: 'var(--du-ink3)',
                }}
              >
                {post.readTime}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Tải app */}
      <section id="download" style={section}>
        <div
          style={{
            background: 'var(--du-lovec)',
            borderRadius: 28,
            padding: 'clamp(36px, 5vw, 64px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 18,
            textAlign: 'center',
          }}
        >
          <Image
            src={SITE.icon}
            alt="Duoly icon"
            width={64}
            height={64}
            style={{
              borderRadius: 18,
              boxShadow: '0 8px 24px rgba(74,21,48,0.25)',
            }}
          />
          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(26px, 3.4vw, 38px)',
              lineHeight: 1.2,
              fontWeight: 700,
              letterSpacing: '-0.015em',
              color: 'var(--du-onlovec)',
            }}
          >
            {vi ? 'Bắt đầu cuốn sổ của hai bạn' : 'Start your shared book'}
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: '26px',
              color: 'var(--du-onlovec)',
              opacity: 0.85,
              maxWidth: 480,
            }}
          >
            {vi
              ? 'Miễn phí để bắt đầu. Hôm nay có thể là ngày đầu tiên được đếm.'
              : 'Free to start. Today could be day one of the count.'}
          </p>
          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <GooglePlayBadge
              background="#4A1530"
              color="#FFF8F3"
              boxShadow="0 6px 18px rgba(74,21,48,0.28)"
            />
            <AppStoreBadge
              caption={vi ? 'SẮP CÓ TRÊN' : 'COMING SOON ON'}
              background="rgba(255,255,255,0.6)"
              color="#4A1530"
              glyphBackground="#FFFFFF"
              glyphColor="#6B4050"
            />
          </div>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
