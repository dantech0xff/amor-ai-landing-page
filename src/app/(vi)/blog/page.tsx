import type { Metadata } from 'next';
import Link from 'next/link';
import { AppCta } from '@/components/app-cta';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { JsonLd } from '@/components/json-ld';
import {
  BLOG_POSTS,
  displayDate,
  postBySlug,
  postHeadline,
  postPath,
} from '@/lib/content/blog';
import { absoluteUrl, breadcrumbLd, graph, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'vi',
  path: '/blog',
  title: 'Blog Amor AI — chuyện yêu, viết chậm',
  description:
    'Blog của Amor AI: câu hỏi cho cặp đôi, ý tưởng kỷ niệm ngày yêu, cách viết nhật ký cặp đôi, bí quyết yêu xa — những bài viết chậm rãi và thực tế.',
  bilingual: false,
});

/** Danh sách bài viết để Google hiểu đây là trang chỉ mục, không phải bài lẻ. */
const blogLd = {
  '@type': 'Blog',
  '@id': absoluteUrl('/blog'),
  name: 'Blog Amor AI',
  inLanguage: 'vi',
  blogPost: BLOG_POSTS.map((post) => ({
    '@type': 'BlogPosting',
    headline: postHeadline(post),
    description: post.metaDescription,
    datePublished: post.isoDate,
    url: absoluteUrl(postPath(post)),
  })),
};

const cardShadow =
  '0 2px 8px var(--am-shadow1), 0 10px 28px var(--am-shadow2)';

export default function Page() {
  const featured = postBySlug('cau-hoi-cap-doi');
  const posts = BLOG_POSTS.filter((post) => post.slug !== featured.slug);

  return (
    <div style={{ minHeight: '100vh' }}>
      <JsonLd
        data={graph(
          blogLd,
          breadcrumbLd([
            { name: 'Trang chủ', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
        )}
      />
      <SiteNav lang="vi" showLang={false} />

      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 24px 0' }}>
        <div
          style={{
            maxWidth: 620,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            marginBottom: 44,
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
            BLOG
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(34px, 4.2vw, 52px)',
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Chuyện yêu, viết chậm
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 16.5,
              lineHeight: '27px',
              color: 'var(--am-ink2)',
            }}
          >
            Những bài viết thực tế về việc yêu nhau mỗi ngày: câu hỏi để hiểu
            nhau, ý tưởng kỷ niệm, thói quen nhỏ — không lý thuyết suông, không
            lời khuyên sáo rỗng.
          </p>
        </div>

        <Link
          href={postPath(featured)}
          style={{
            display: 'block',
            background: 'var(--am-card)',
            borderRadius: 28,
            padding: 'clamp(28px, 4vw, 44px)',
            textDecoration: 'none',
            boxShadow:
              '0 2px 10px var(--am-shadow1), 0 12px 32px var(--am-shadow2)',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              maxWidth: 720,
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: featured.chipFg,
                  background: featured.chipBg,
                  borderRadius: 999,
                  padding: '5px 11px',
                }}
              >
                {featured.category}
              </span>
              <span style={{ fontSize: 12, color: 'var(--am-ink3)' }}>
                Nổi bật · {featured.readTime}
              </span>
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(24px, 3vw, 34px)',
                lineHeight: 1.25,
                fontWeight: 700,
                letterSpacing: '-0.015em',
                color: 'var(--am-ink)',
                textWrap: 'pretty',
              }}
            >
              {postHeadline(featured)}
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: '25px',
                color: 'var(--am-ink2)',
              }}
            >
              {featured.excerpt}
            </p>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--am-link)',
              }}
            >
              Đọc bài viết →
            </span>
          </div>
        </Link>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 16,
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={postPath(post)}
              style={{
                background: 'var(--am-card)',
                borderRadius: 24,
                padding: 28,
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
                  fontSize: 18.5,
                  lineHeight: '27px',
                  fontWeight: 600,
                  color: 'var(--am-ink)',
                  textWrap: 'pretty',
                }}
              >
                {post.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: '22px',
                  color: 'var(--am-ink2)',
                }}
              >
                {post.excerpt}
              </p>
              <span
                style={{
                  marginTop: 'auto',
                  fontSize: 12,
                  color: 'var(--am-ink3)',
                }}
              >
                {displayDate(post.isoDate)} · {post.readTime}
              </span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <AppCta
            title="Mỗi ngày một câu hỏi, ngay trong app"
            body="Amor AI gợi một câu mỗi ngày để hai bạn viết lại — miễn phí bắt đầu."
            action="Tải Amor AI"
            iconSize={52}
            padding="clamp(26px, 3.5vw, 40px)"
            radius={24}
          />
        </div>
      </section>

      <SiteFooter lang="vi" />
    </div>
  );
}
