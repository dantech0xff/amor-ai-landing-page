import Link from 'next/link';
import type { ReactNode } from 'react';
import { JsonLd } from './json-ld';
import { SiteFooter } from './site-footer';
import { SiteNav } from './site-nav';
import {
  displayDate,
  postHeadline,
  postPath,
  type BlogPost,
} from '@/lib/content/blog';
import {
  blogPostingLd,
  breadcrumbLd,
  graph,
  organizationLd,
} from '@/lib/seo';

export type NextRead = { slug: string; label: string };

/** Khung chung cho một bài viết blog (chỉ có bản tiếng Việt). */
export function BlogArticle({
  post,
  lead,
  children,
  nextReads,
}: {
  post: BlogPost;
  lead: ReactNode;
  children: ReactNode;
  nextReads: NextRead[];
}) {
  const headline = postHeadline(post);

  return (
    <div style={{ minHeight: '100vh' }}>
      <JsonLd
        data={graph(
          organizationLd(),
          blogPostingLd({
            path: postPath(post),
            headline,
            description: post.metaDescription,
            datePublished: post.isoDate,
          }),
          breadcrumbLd([
            { name: 'Trang chủ', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: headline, path: postPath(post) },
          ]),
        )}
      />
      <SiteNav lang="vi" showLang={false} />

      <article
        style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 0' }}
      >
        <header
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            marginBottom: 36,
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
                color: post.chipFg,
                background: post.chipBg,
                borderRadius: 999,
                padding: '5px 11px',
              }}
            >
              {post.category}
            </span>
            <span style={{ fontSize: 12.5, color: 'var(--du-ink3)' }}>
              Duoly Studio · {displayDate(post.isoDate)} · {post.readTime}
            </span>
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(30px, 4vw, 44px)',
              lineHeight: 1.2,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textWrap: 'pretty',
            }}
          >
            {headline}
          </h1>
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: 18,
              lineHeight: '30px',
              color: 'var(--du-ink2)',
            }}
          >
            {lead}
          </p>
        </header>

        <div className="article-body">{children}</div>

        <div
          style={{
            marginTop: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: 'var(--du-ink3)',
            }}
          >
            ĐỌC TIẾP
          </span>
          {nextReads.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              style={{ fontSize: 15, fontWeight: 600 }}
            >
              {item.label} →
            </Link>
          ))}
        </div>
      </article>

      <SiteFooter lang="vi" />
    </div>
  );
}
