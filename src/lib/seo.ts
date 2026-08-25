import type { Metadata } from 'next';
import { postPath, type BlogPost } from './content/blog';
import { SITE, localePath, type Lang } from './site';

/** URL tuyệt đối từ một đường dẫn nội bộ — structured data bắt buộc dùng dạng này. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).toString();
}

const OG_LOCALE: Record<Lang, string> = { vi: 'vi_VN', en: 'en_US' };

type PageMetaInput = {
  lang: Lang;
  /** Đường dẫn gốc (bản tiếng Việt), ví dụ `/team`. Tiền tố `/en` tự thêm. */
  path: string;
  title: string;
  description: string;
  keywords?: readonly string[];
  /**
   * Trang có cả hai ngôn ngữ thì khai báo hreflang; blog và trang so sánh chỉ
   * có tiếng Việt nên bỏ qua để không trỏ hreflang tới URL không tồn tại.
   */
  bilingual?: boolean;
  type?: 'website' | 'article';
  /** Ngày đăng dạng ISO, chỉ dùng cho bài viết. */
  publishedTime?: string;
};

/**
 * Metadata đầy đủ cho một route: canonical, hreflang, OpenGraph và Twitter card.
 *
 * Mọi trang đều phải tự gọi hàm này. Next không gộp `alternates` theo chiều sâu,
 * nên một trang quên khai báo sẽ thừa hưởng canonical của layout và tự trỏ sai
 * về trang chủ.
 */
export function pageMetadata({
  lang,
  path,
  title,
  description,
  keywords,
  bilingual = true,
  type = 'website',
  publishedTime,
}: PageMetaInput): Metadata {
  const canonical = localePath(path, lang);

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: {
      canonical,
      languages: bilingual
        ? {
            vi: path,
            en: localePath(path, 'en'),
            // Tiếng Việt là bản mặc định cho mọi vùng chưa khớp hreflang nào.
            'x-default': path,
          }
        : undefined,
    },
    openGraph: {
      type,
      url: absoluteUrl(canonical),
      siteName: SITE.name,
      title,
      description,
      locale: OG_LOCALE[lang],
      alternateLocale: bilingual
        ? [OG_LOCALE[lang === 'vi' ? 'en' : 'vi']]
        : undefined,
      publishedTime,
      images: [
        {
          url: SITE.ogImage,
          width: 1200,
          height: 630,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SITE.ogImage],
    },
  };
}

/** Metadata của một bài blog, lấy thẳng từ chỉ mục để tiêu đề không trôi. */
export function blogPostMetadata(post: BlogPost): Metadata {
  return pageMetadata({
    lang: 'vi',
    path: postPath(post),
    title: post.metaTitle,
    description: post.metaDescription,
    bilingual: false,
    type: 'article',
    publishedTime: post.isoDate,
  });
}

/** Metadata dùng chung cho cả site, đặt ở root layout của từng ngôn ngữ. */
export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE.url),
    applicationName: SITE.shortName,
    authors: [{ name: SITE.publisher, url: SITE.url }],
    creator: SITE.publisher,
    publisher: SITE.publisher,
    // Tiêu đề dự phòng khi một route quên khai báo tiêu đề riêng.
    title: SITE.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    // Icon tab lấy từ src/app/icon.png theo quy ước file của App Router.
  };
}

/* ------------------------------------------------------------------ */
/* Structured data (JSON-LD)                                           */
/* ------------------------------------------------------------------ */

/** Kiểu lỏng vừa đủ cho một node JSON-LD; schema.org quá rộng để gõ chặt. */
export type JsonLdNode = Record<string, unknown>;

const ORGANIZATION_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function organizationLd(): JsonLdNode {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE.publisher,
    url: SITE.url,
    email: SITE.email,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(SITE.icon),
      width: 512,
      height: 512,
    },
    sameAs: [SITE.playUrl],
  };
}

export function websiteLd(lang: Lang): JsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: lang,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/**
 * Ứng dụng di động. Không khai báo `aggregateRating`: số sao phải lấy từ đánh
 * giá thật, bịa ra là vi phạm chính sách rich result của Google.
 */
export function mobileApplicationLd(lang: Lang, description: string): JsonLdNode {
  return {
    '@type': 'MobileApplication',
    '@id': `${SITE.url}/#app`,
    name: SITE.name,
    alternateName: SITE.shortName,
    description,
    url: absoluteUrl(localePath('/', lang)),
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Android',
    installUrl: SITE.playUrl,
    downloadUrl: SITE.playUrl,
    screenshot: absoluteUrl(SITE.ogImage),
    inLanguage: ['vi', 'en'],
    publisher: { '@id': ORGANIZATION_ID },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'VND',
      availability: 'https://schema.org/InStock',
    },
  };
}

export function faqPageLd(items: readonly { q: string; a: string }[]): JsonLdNode {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function blogPostingLd(post: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
}): JsonLdNode {
  return {
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(post.path) },
    headline: post.headline,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    inLanguage: 'vi',
    image: absoluteUrl(SITE.ogImage),
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function breadcrumbLd(
  trail: readonly { name: string; path: string }[],
): JsonLdNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** Gói nhiều node vào một khối `@graph` duy nhất cho mỗi trang. */
export function graph(...nodes: JsonLdNode[]): JsonLdNode {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
