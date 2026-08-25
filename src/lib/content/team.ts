import type { Lang } from '../site';

export type Member = {
  initials: string;
  bg: string;
  fg: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
};

export type Value = { icon: string; title: string; body: string };

const MEMBERS_VI: Member[] = [
  {
    initials: 'T',
    bg: 'var(--am-lovec)',
    fg: 'var(--am-ink)',
    name: 'Trần Hữu Danh',
    role: 'FOUNDER & PRODUCT',
    bio: 'Đặt nền móng và giữ la bàn sản phẩm: một nơi cho hai người, không phải một công cụ theo dõi. Người nói "không" với mọi dark pattern.',
    tags: ['Định hướng', 'PDR', 'Roadmap'],
  },
  {
    initials: 'D',
    bg: '#FF9E7A',
    fg: '#4A1530',
    name: 'Danh Tran',
    role: 'HEAD OF ENGINEERING',
    bio: 'Xây ứng dụng Android bằng Kotlin và Jetpack Compose, kiến trúc đa module sạch sẽ để app nhẹ, nhanh và bền qua từng bản cập nhật.',
    tags: ['Kotlin', 'Compose', 'Architecture'],
  },
  {
    initials: 'DT',
    bg: '#FFD76A',
    fg: '#4A1530',
    name: 'Dan Tech',
    role: 'PLATFORM & RELEASE',
    bio: 'Chăm hạ tầng đồng bộ, thông báo và thanh toán; đóng gói từng bản phát hành với checklist kỹ đến từng chữ ký.',
    tags: ['Supabase', 'Firebase', 'Release'],
  },
  {
    initials: '0X',
    bg: 'var(--am-quietc)',
    fg: 'var(--am-onquietc)',
    name: '0XFF',
    role: 'DESIGN LEAD',
    bio: 'Tác giả bảng màu Peach Soda Love và ngôn ngữ thiết kế borderless: không viền kẻ, chỉ có màu, khoảng thở và bóng đổ rất nhẹ.',
    tags: ['Peach Soda Love', 'Borderless UI', 'Motion'],
  },
  {
    initials: 'DN',
    bg: 'var(--am-assist)',
    fg: 'var(--am-onassist)',
    name: 'DANH TRAN',
    role: 'QA & TRUST',
    bio: 'Kiểm thử từng luồng và canh giữ hợp đồng riêng tư: widget chỉ được hỏi một câu, ghi chú chỉ mở khi chính bạn chạm vào.',
    tags: ['Privacy', 'Accessibility', 'Testing'],
  },
];

const MEMBERS_EN: Member[] = [
  {
    initials: 'T',
    bg: 'var(--am-lovec)',
    fg: 'var(--am-ink)',
    name: 'Trần Hữu Danh',
    role: 'FOUNDER & PRODUCT',
    bio: 'Laid the foundation and keeps the product compass: a place for two, never a surveillance tool. The one who says "no" to every dark pattern.',
    tags: ['Vision', 'PDR', 'Roadmap'],
  },
  {
    initials: 'D',
    bg: '#FF9E7A',
    fg: '#4A1530',
    name: 'Danh Tran',
    role: 'HEAD OF ENGINEERING',
    bio: 'Builds the Android app with Kotlin and Jetpack Compose — a clean multi-module architecture that keeps the app light, fast and steady.',
    tags: ['Kotlin', 'Compose', 'Architecture'],
  },
  {
    initials: 'DT',
    bg: '#FFD76A',
    fg: '#4A1530',
    name: 'Dan Tech',
    role: 'PLATFORM & RELEASE',
    bio: 'Tends sync, notifications and billing infrastructure; packages every release with a checklist down to the signature.',
    tags: ['Supabase', 'Firebase', 'Release'],
  },
  {
    initials: '0X',
    bg: 'var(--am-quietc)',
    fg: 'var(--am-onquietc)',
    name: '0XFF',
    role: 'DESIGN LEAD',
    bio: 'Author of the Peach Soda Love palette and the borderless design language: no strokes, just color, breathing room and the softest shadows.',
    tags: ['Peach Soda Love', 'Borderless UI', 'Motion'],
  },
  {
    initials: 'DN',
    bg: 'var(--am-assist)',
    fg: 'var(--am-onassist)',
    name: 'DANH TRAN',
    role: 'QA & TRUST',
    bio: 'Tests every flow and guards the privacy contract: a widget may ask exactly one question, and notes open only when you tap them.',
    tags: ['Privacy', 'Accessibility', 'Testing'],
  },
];

const VALUES_VI: Value[] = [
  {
    icon: 'volunteer_activism',
    title: 'Nâng niu là mặc định',
    body: 'Người dùng đến đây với thứ quý giá nhất của họ. Mọi tính năng phải xứng đáng với sự tin tưởng đó.',
  },
  {
    icon: 'verified',
    title: 'Trung thực tuyệt đối',
    body: 'Không mô phỏng, không phóng đại, không hứa điều chưa làm được — trong app lẫn trên trang này.',
  },
  {
    icon: 'straighten',
    title: 'Tỉ mỉ từng dp',
    body: 'Từ độ nghiêng −2.2° của tờ giấy nhớ đến từng mức tương phản chữ — chi tiết nhỏ là cách nói lời yêu của studio.',
  },
];

const VALUES_EN: Value[] = [
  {
    icon: 'volunteer_activism',
    title: 'Care by default',
    body: 'People bring their most precious thing here. Every feature must deserve that trust.',
  },
  {
    icon: 'verified',
    title: 'Radically honest',
    body: 'No simulations, no exaggerations, no promises we have not shipped — in the app and on this page.',
  },
  {
    icon: 'straighten',
    title: 'Precise to the dp',
    body: "From the sticky note's −2.2° tilt to every text contrast ratio — small details are how this studio says love.",
  },
];

export function teamContent(lang: Lang) {
  const vi = lang !== 'en';
  return {
    members: vi ? MEMBERS_VI : MEMBERS_EN,
    values: vi ? VALUES_VI : VALUES_EN,
  };
}
