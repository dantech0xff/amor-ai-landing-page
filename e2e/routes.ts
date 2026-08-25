/** Danh sách route dùng chung cho các bộ test. */
export type RouteCase = {
  path: string;
  title: string;
  heading: string;
  /** Đường dẫn bản ngôn ngữ kia, để trống nếu trang chỉ có tiếng Việt. */
  altPath?: string;
};

export const ROUTES: RouteCase[] = [
  {
    path: '/',
    title: 'Amor AI — App đếm ngày yêu & nhật ký cặp đôi',
    heading: 'Giữ lại nhịp yêu thương, mỗi ngày một chút.',
    altPath: '/en',
  },
  {
    path: '/team',
    title: 'Team — 1010 Creative, studio đứng sau Amor AI',
    heading: 'Một studio nhỏ, làm một việc thật kỹ',
    altPath: '/en/team',
  },
  {
    path: '/faq',
    title: 'Câu hỏi thường gặp về Amor AI — FAQ',
    heading: 'Câu hỏi thường gặp',
    altPath: '/en/faq',
  },
  {
    path: '/privacy',
    title: 'Chính sách quyền riêng tư — Amor AI',
    heading: 'Chính sách quyền riêng tư',
    altPath: '/en/privacy',
  },
  {
    path: '/terms',
    title: 'Điều khoản dịch vụ — Amor AI',
    heading: 'Điều khoản dịch vụ',
    altPath: '/en/terms',
  },
  {
    path: '/en',
    title: 'Amor AI — Couple App for Days Together & Shared Journal',
    heading: 'Keep your rhythm of love, a little every day.',
    altPath: '/',
  },
  {
    path: '/en/team',
    title: 'Team — 1010 Creative, the studio behind Amor AI',
    heading: 'A small studio doing one thing carefully',
    altPath: '/team',
  },
  {
    path: '/en/faq',
    title: 'Frequently Asked Questions — Amor AI',
    heading: 'Frequently asked questions',
    altPath: '/faq',
  },
  {
    path: '/en/privacy',
    title: 'Privacy Policy — Amor AI',
    heading: 'Privacy Policy',
    altPath: '/privacy',
  },
  {
    path: '/en/terms',
    title: 'Terms of Service — Amor AI',
    heading: 'Terms of Service',
    altPath: '/terms',
  },
  {
    path: '/so-sanh',
    title: 'So sánh app đếm ngày yêu: Amor AI, Been Together, Love Days',
    heading:
      'So sánh app đếm ngày yêu: Amor AI và những cái tên quen thuộc',
  },
  {
    path: '/blog',
    title: 'Blog Amor AI — chuyện yêu, viết chậm',
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
];

/** Các bề rộng đại diện: desktop, tablet, mobile. */
export const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];
