/** Hằng số dùng chung cho toàn site. */
export const SITE = {
  name: 'Duoly in Love — Relationship App',
  /** Tên ngắn dùng trong structured data và OpenGraph. */
  shortName: 'Duoly',
  publisher: '1010 Creative',
  /** Nguồn duy nhất cho địa chỉ production: metadata và test E2E đều dùng. */
  url: 'https://duoly.dantech.academy',
  playUrl: 'https://play.google.com/store/apps/details?id=com.creative.lovedays',
  appStoreUrl: '/#download',
  email: '1010creative.games@gmail.com',
  icon: '/web_hi_res_512.png',
  /** Ảnh 1200×630 cho OpenGraph/Twitter, dựng bằng scripts/build-og-image.mjs. */
  ogImage: '/og-image.png',
} as const;

export type Lang = 'vi' | 'en';

export const LANGS: readonly Lang[] = ['vi', 'en'];

/**
 * Ngôn ngữ nằm trong URL: tiếng Việt ở gốc, tiếng Anh dưới tiền tố `/en`.
 * Tiếng Việt không có tiền tố vì `/` là trang đã được index và là thị trường chính.
 */
export function localePath(path: string, lang: Lang): string {
  if (lang !== 'en') return path;
  if (path === '/') return '/en';
  return `/en${path}`;
}

/** Bỏ tiền tố `/en` để lấy lại đường dẫn gốc tiếng Việt. */
export function basePath(pathname: string): string {
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3);
  return pathname;
}
