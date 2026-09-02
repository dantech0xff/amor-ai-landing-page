/** Chỉ mục bài viết dùng chung cho trang chủ và trang blog (nội dung tiếng Việt). */
export type BlogPost = {
  slug: string;
  category: string;
  chipBg: string;
  chipFg: string;
  /** Tiêu đề trên thẻ ở danh sách bài viết. */
  title: string;
  /** Tiêu đề đầy đủ trong bài (h1) khi khác tiêu đề thẻ. */
  headline?: string;
  /** Tiêu đề thẻ <title>. */
  metaTitle: string;
  /** Nội dung thẻ <meta name="description">. */
  metaDescription: string;
  /** Tóm tắt trên trang blog. */
  excerpt: string;
  /** Tóm tắt ngắn hơn dùng ở trang chủ. */
  homeExcerpt: string;
  /** Ngày đăng dạng ISO — sitemap và structured data đều cần dạng này. */
  isoDate: string;
  readTime: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cau-hoi-cap-doi',
    category: 'HIỂU NHAU HƠN',
    chipBg: 'var(--du-warmc)',
    chipFg: 'var(--du-onwarmc)',
    title: '36 câu hỏi để hiểu nhau sâu hơn — và cách dùng chúng',
    headline: '36 câu hỏi để hiểu nhau sâu hơn — và cách dùng chúng cho đúng',
    metaTitle:
      '36 câu hỏi để hiểu nhau sâu hơn — và cách dùng chúng | Duoly Blog',
    metaDescription:
      'Trọn bộ 36 câu hỏi cho cặp đôi từ nghiên cứu của Arthur Aron, chia ba mức độ tăng dần — kèm cách biến chúng thành nghi thức tối thứ Sáu thay vì một buổi phỏng vấn gượng gạo.',
    excerpt:
      'Bộ câu hỏi kinh điển từ nghiên cứu tâm lý học năm 1997, chia làm ba phần tăng dần độ sâu — kèm cách biến nó thành nghi thức tối thứ Sáu của hai bạn thay vì một buổi "phỏng vấn" gượng gạo.',
    homeExcerpt:
      'Bộ câu hỏi kinh điển của tâm lý học, chia theo mức độ, kèm cách biến nó thành nghi thức tối thứ Sáu.',
    isoDate: '2026-08-25',
    readTime: '8 phút đọc',
  },
  {
    slug: 'y-tuong-ky-niem-ngay-yeu',
    category: 'KỶ NIỆM',
    chipBg: 'var(--du-lovec)',
    chipFg: 'var(--du-ink)',
    title: '24 ý tưởng kỷ niệm ngày yêu nhau ấm áp, dễ làm',
    metaTitle: '24 ý tưởng kỷ niệm ngày yêu nhau ấm áp, dễ làm | Duoly Blog',
    metaDescription:
      '24 ý tưởng kỷ niệm ngày yêu nhau từ 0đ đến "chịu chi", ở nhà hay yêu xa — chọn một cách ăn mừng cho ngày thứ 100, 365 hay 1000 của hai bạn.',
    excerpt:
      'Từ 0đ đến "chịu chi", ở nhà hay yêu xa — chọn một ý tưởng cho ngày thứ 100, 365 hay 1000 của hai bạn.',
    homeExcerpt:
      'Từ 0đ đến "chịu chi", ở nhà hay yêu xa — chọn một ý tưởng cho ngày thứ 100, 365 hay 1000 của hai bạn.',
    isoDate: '2026-08-25',
    readTime: '7 phút đọc',
  },
  {
    slug: 'viet-nhat-ky-cap-doi',
    category: 'THÓI QUEN',
    chipBg: 'var(--du-quietc)',
    chipFg: 'var(--du-onquietc)',
    title: 'Cách viết nhật ký cặp đôi: bắt đầu và giữ được lâu',
    metaTitle:
      'Cách viết nhật ký cặp đôi: bắt đầu và giữ được lâu | Duoly Blog',
    metaDescription:
      'Cách viết nhật ký cặp đôi mà không bỏ dở: vì sao "mỗi ngày một dòng" thắng "mỗi tuần một trang", 20 gợi ý mở đầu, và cách chọn sổ giấy hay app.',
    excerpt:
      'Vì sao "mỗi ngày một dòng" thắng "mỗi tuần một trang", và 20 gợi ý mở đầu để không bao giờ bí.',
    homeExcerpt:
      'Vì sao "mỗi ngày một dòng" thắng "mỗi tuần một trang", và 20 gợi ý để không bao giờ bí.',
    isoDate: '2026-08-25',
    readTime: '6 phút đọc',
  },
  {
    slug: 'yeu-xa',
    category: 'YÊU XA',
    chipBg: 'var(--du-assist)',
    chipFg: 'var(--du-onassist)',
    title: 'Yêu xa: 12 thói quen nhỏ giữ hai người ở gần',
    metaTitle: 'Yêu xa: 12 thói quen nhỏ giữ hai người ở gần | Duoly Blog',
    metaDescription:
      '12 thói quen nhỏ cho cặp đôi yêu xa: giờ chào cố định, câu hỏi mỗi ngày, xem phim cùng lúc, đếm ngày gặp lại — giữ nhịp chung khi hai múi giờ không trùng nhau.',
    excerpt:
      'Khoảng cách không đo bằng km mà bằng nhịp — 12 thói quen giữ nhịp chung khi hai múi giờ không trùng nhau.',
    homeExcerpt:
      'Khoảng cách không đo bằng km mà bằng nhịp — 12 thói quen giữ nhịp chung khi hai múi giờ không trùng nhau.',
    isoDate: '2026-08-25',
    readTime: '7 phút đọc',
  },
];

export function postBySlug(slug: string): BlogPost {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) throw new Error(`Không tìm thấy bài viết: ${slug}`);
  return post;
}

/** Đường dẫn của một bài viết. */
export const postPath = (post: BlogPost) => `/blog/${post.slug}`;

/** Tiêu đề hiển thị trong bài — mặc định trùng tiêu đề thẻ ở danh sách. */
export const postHeadline = (post: BlogPost) => post.headline ?? post.title;

/** `2026-08-25` → `25.08.2026`, dạng ngày dùng trên giao diện. */
export function displayDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-');
  return `${day}.${month}.${year}`;
}
