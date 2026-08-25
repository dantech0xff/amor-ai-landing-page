/** Danh sách route dùng chung cho các bộ test. */
export type RouteCase = {
  path: string;
  title: string;
  heading: string;
};

export const ROUTES: RouteCase[] = [
  {
    path: '/',
    title: 'Amor AI — a couple app · Giữ lại nhịp yêu thương mỗi ngày',
    heading: 'Giữ lại nhịp yêu thương, mỗi ngày một chút.',
  },
  {
    path: '/team',
    title: 'Team — Amor AI · 1010 Creative',
    heading: 'Một studio nhỏ, làm một việc thật kỹ',
  },
  {
    path: '/blog',
    title: 'Blog — Amor AI · Chuyện yêu, viết chậm',
    heading: 'Chuyện yêu, viết chậm',
  },
  {
    path: '/blog/cau-hoi-cap-doi',
    title: '36 câu hỏi để hiểu nhau sâu hơn — và cách dùng chúng | Amor AI Blog',
    heading: '36 câu hỏi để hiểu nhau sâu hơn — và cách dùng chúng cho đúng',
  },
  {
    path: '/blog/y-tuong-ky-niem-ngay-yeu',
    title: '24 ý tưởng kỷ niệm ngày yêu nhau ấm áp, dễ làm | Amor AI Blog',
    heading: '24 ý tưởng kỷ niệm ngày yêu nhau ấm áp, dễ làm',
  },
  {
    path: '/blog/viet-nhat-ky-cap-doi',
    title: 'Cách viết nhật ký cặp đôi: bắt đầu và giữ được lâu | Amor AI Blog',
    heading: 'Cách viết nhật ký cặp đôi: bắt đầu và giữ được lâu',
  },
  {
    path: '/blog/yeu-xa',
    title: 'Yêu xa: 12 thói quen nhỏ giữ hai người ở gần | Amor AI Blog',
    heading: 'Yêu xa: 12 thói quen nhỏ giữ hai người ở gần',
  },
  {
    path: '/faq',
    title: 'FAQ — Amor AI · Câu hỏi thường gặp',
    heading: 'Câu hỏi thường gặp',
  },
  {
    path: '/privacy',
    title: 'Chính sách quyền riêng tư — Amor AI · Privacy Policy',
    heading: 'Chính sách quyền riêng tư',
  },
  {
    path: '/terms',
    title: 'Điều khoản dịch vụ — Amor AI · Terms of Service',
    heading: 'Điều khoản dịch vụ',
  },
];

/** Các bề rộng đại diện: desktop, tablet, mobile. */
export const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];
