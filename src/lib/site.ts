/** Hằng số dùng chung cho toàn site. */
export const SITE = {
  name: 'Amor AI — a couple app',
  /** Nguồn duy nhất cho địa chỉ production: metadata và test E2E đều dùng. */
  url: 'https://amorai.dantech.academy',
  playUrl: 'https://play.google.com/store/apps/details?id=com.creative.lovedays',
  appStoreUrl: '/#download',
  email: '1010creative.games@gmail.com',
  icon: '/web_hi_res_512.png',
} as const;

export type Lang = 'vi' | 'en';
