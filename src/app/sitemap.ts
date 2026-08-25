import type { MetadataRoute } from 'next';
import { BLOG_POSTS, postPath } from '@/lib/content/blog';
import { absoluteUrl } from '@/lib/seo';
import { localePath } from '@/lib/site';

/** Ngày cập nhật của các trang tĩnh — sửa tay khi nội dung thay đổi đáng kể. */
const STATIC_UPDATED = new Date('2026-08-26');

/** Route có cả hai ngôn ngữ; `priority` phản ánh thứ tự ưu tiên thu thập. */
const BILINGUAL: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/team', priority: 0.5 },
  { path: '/faq', priority: 0.7 },
  { path: '/privacy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
];

/** Route chỉ có tiếng Việt. */
const VI_ONLY: { path: string; priority: number }[] = [
  { path: '/blog', priority: 0.7 },
  { path: '/so-sanh', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const bilingual = BILINGUAL.flatMap(({ path, priority }) => {
    // Hai bản ngôn ngữ khai báo chéo nhau để Google ghép đúng cặp trang.
    const languages = {
      vi: absoluteUrl(path),
      en: absoluteUrl(localePath(path, 'en')),
      'x-default': absoluteUrl(path),
    };
    return [
      {
        url: absoluteUrl(path),
        lastModified: STATIC_UPDATED,
        changeFrequency: 'monthly' as const,
        priority,
        alternates: { languages },
      },
      {
        url: absoluteUrl(localePath(path, 'en')),
        lastModified: STATIC_UPDATED,
        changeFrequency: 'monthly' as const,
        priority: priority * 0.9,
        alternates: { languages },
      },
    ];
  });

  const viOnly = VI_ONLY.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified: STATIC_UPDATED,
    changeFrequency: 'monthly' as const,
    priority,
  }));

  const posts = BLOG_POSTS.map((post) => ({
    url: absoluteUrl(postPath(post)),
    lastModified: new Date(post.isoDate),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...bilingual, ...viOnly, ...posts];
}
