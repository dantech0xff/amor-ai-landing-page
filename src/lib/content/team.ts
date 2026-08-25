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

export type StoryBeat = { icon: string; title: string; body: string };

export type Story = {
  label: string;
  title: string;
  paragraphs: string[];
  quote: string;
  quoteBy: string;
  beats: StoryBeat[];
};

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

const STORY_VI: Story = {
  label: 'VÌ SAO CÓ AMOR AI',
  title: 'Ứng dụng này bắt đầu từ một khoảng cách',
  paragraphs: [
    'Mình là lập trình viên, và tụi mình yêu xa. Cả ngày mình viết code rất rõ ràng; tối đến mở khung chat với người yêu thì ngồi im, không biết nên bắt đầu bằng chữ gì.',
    'Mình luôn muốn viết cho cô ấy điều gì đó ngọt ngào hơn câu "ngủ ngon" lặp lại đến ngày thứ ba trăm. Có hôm gõ rồi xoá bốn năm lần — không phải vì thương ít, mà vì thương thì nhiều mà chữ thì hết.',
    'Nên mình làm cái mà một lập trình viên biết làm: viết một ứng dụng. Đếm ngày bên nhau để hôm nào cũng có cớ nhắn một câu, chỗ giữ lại những mẩu chuyện nhỏ, và một AI đứng cạnh gợi ý khi bí chữ — nó không viết thay, chỉ đẩy mình qua khoảng lặng đầu tiên. Người dùng đầu tiên của Amor AI là chính mình.',
  ],
  quote:
    'Một ngày mình viết được cả nghìn dòng code, mà có hôm không viết nổi một dòng để nói rằng mình nhớ em.',
  quoteBy: 'Danh — người viết dòng code đầu tiên của Amor AI',
  beats: [
    {
      icon: 'code',
      title: 'Một lập trình viên',
      body: 'Quen nói chuyện với máy hơn là tìm chữ cho người mình thương.',
    },
    {
      icon: 'flight_takeoff',
      title: 'Một chuyện yêu xa',
      body: 'Hai thành phố, một màn hình sáng lên mỗi tối, và rất nhiều lần gõ rồi xoá.',
    },
    {
      icon: 'favorite',
      title: 'Một app cho hai người',
      body: 'Để ngày nào cũng có cớ, và có chỗ, để nói một câu thương.',
    },
  ],
};

const STORY_EN: Story = {
  label: 'WHY AMOR AI EXISTS',
  title: 'This app started with a distance',
  paragraphs: [
    'I am a developer, and we were long distance. All day I write lines that are perfectly clear; then evening comes, I open the chat with my girlfriend and just sit there, not knowing which word to start with.',
    'I always wanted to write her something sweeter than the same "good night" for the three hundredth time. Some nights I typed and deleted it four or five times — not because I loved her less, but because the love was plenty and the words had run out.',
    'So I did what a developer knows how to do: I built an app. A day count so there is always a reason to send something, a place to keep the small stories, and an AI beside me offering a way to say it when I get stuck — it does not write for me, it just carries me past the first silence. Amor AI\'s first user was me.',
  ],
  quote:
    'I can write a thousand lines of code in a day, and still some nights I cannot write one line to say I miss you.',
  quoteBy: 'Danh — who wrote the first line of Amor AI',
  beats: [
    {
      icon: 'code',
      title: 'One developer',
      body: 'More fluent with machines than with words for the person he loves.',
    },
    {
      icon: 'flight_takeoff',
      title: 'One long-distance love',
      body: 'Two cities, one screen each night, and a lot of typing and deleting.',
    },
    {
      icon: 'favorite',
      title: 'One app for two people',
      body: 'So there is always a reason, and a place, to say something warm.',
    },
  ],
};

export function teamContent(lang: Lang) {
  const vi = lang !== 'en';
  return {
    story: vi ? STORY_VI : STORY_EN,
    members: vi ? MEMBERS_VI : MEMBERS_EN,
    values: vi ? VALUES_VI : VALUES_EN,
  };
}
