/** Chỉ mục bài viết dùng chung cho trang chủ và trang blog (nội dung tiếng Việt). */
export type BlogPost = {
  slug: string;
  category: string;
  chipBg: string;
  chipFg: string;
  title: string;
  /** Tóm tắt trên trang blog. */
  excerpt: string;
  /** Tóm tắt ngắn hơn dùng ở trang chủ. */
  homeExcerpt: string;
  date: string;
  readTime: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cau-hoi-cap-doi',
    category: 'HIỂU NHAU HƠN',
    chipBg: 'var(--am-warmc)',
    chipFg: 'var(--am-onwarmc)',
    title: '36 câu hỏi để hiểu nhau sâu hơn — và cách dùng chúng',
    excerpt:
      'Bộ câu hỏi kinh điển từ nghiên cứu tâm lý học năm 1997, chia làm ba phần tăng dần độ sâu — kèm cách biến nó thành nghi thức tối thứ Sáu của hai bạn thay vì một buổi "phỏng vấn" gượng gạo.',
    homeExcerpt:
      'Bộ câu hỏi kinh điển của tâm lý học, chia theo mức độ, kèm cách biến nó thành nghi thức tối thứ Sáu.',
    date: '25.08.2026',
    readTime: '8 phút đọc',
  },
  {
    slug: 'y-tuong-ky-niem-ngay-yeu',
    category: 'KỶ NIỆM',
    chipBg: 'var(--am-lovec)',
    chipFg: 'var(--am-ink)',
    title: '24 ý tưởng kỷ niệm ngày yêu nhau ấm áp, dễ làm',
    excerpt:
      'Từ 0đ đến "chịu chi", ở nhà hay yêu xa — chọn một ý tưởng cho ngày thứ 100, 365 hay 1000 của hai bạn.',
    homeExcerpt:
      'Từ 0đ đến "chịu chi", ở nhà hay yêu xa — chọn một ý tưởng cho ngày thứ 100, 365 hay 1000 của hai bạn.',
    date: '25.08.2026',
    readTime: '7 phút đọc',
  },
  {
    slug: 'viet-nhat-ky-cap-doi',
    category: 'THÓI QUEN',
    chipBg: 'var(--am-quietc)',
    chipFg: 'var(--am-onquietc)',
    title: 'Cách viết nhật ký cặp đôi: bắt đầu và giữ được lâu',
    excerpt:
      'Vì sao "mỗi ngày một dòng" thắng "mỗi tuần một trang", và 20 gợi ý mở đầu để không bao giờ bí.',
    homeExcerpt:
      'Vì sao "mỗi ngày một dòng" thắng "mỗi tuần một trang", và 20 gợi ý để không bao giờ bí.',
    date: '25.08.2026',
    readTime: '6 phút đọc',
  },
  {
    slug: 'yeu-xa',
    category: 'YÊU XA',
    chipBg: 'var(--am-assist)',
    chipFg: 'var(--am-onassist)',
    title: 'Yêu xa: 12 thói quen nhỏ giữ hai người ở gần',
    excerpt:
      'Khoảng cách không đo bằng km mà bằng nhịp — 12 thói quen giữ nhịp chung khi hai múi giờ không trùng nhau.',
    homeExcerpt:
      'Khoảng cách không đo bằng km mà bằng nhịp — 12 thói quen giữ nhịp chung khi hai múi giờ không trùng nhau.',
    date: '25.08.2026',
    readTime: '7 phút đọc',
  },
];

export function postBySlug(slug: string): BlogPost {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) throw new Error(`Không tìm thấy bài viết: ${slug}`);
  return post;
}
