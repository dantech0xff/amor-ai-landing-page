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
    'Mình là lập trình viên. Cả ngày mình viết những dòng lệnh rất rõ ràng: cái gì chạy, cái gì hỏng, cái gì cần sửa. Rồi tối đến, mình mở khung chat với người yêu và ngồi im — không biết nên bắt đầu bằng chữ gì.',
    'Tụi mình yêu xa. Không có bữa tối chung, không có đường về chung, chỉ có một màn hình sáng lên vào cuối ngày. Khi khoảng cách là thứ duy nhất đều đặn, thì mấy dòng tin nhắn thành ra là gần như tất cả những gì mình có để giữ nhau.',
    'Mình luôn muốn viết cho cô ấy điều gì đó thật ngọt ngào — không phải câu "ngủ ngon" lặp lại đến ngày thứ ba trăm, mà một câu khiến cô ấy mỉm cười trước khi tắt đèn. Có hôm mình gõ rồi xoá bốn năm lần. Không phải vì thương ít, mà vì thương thì nhiều mà chữ thì hết.',
    'Nên mình làm cái mà một lập trình viên biết làm: viết một ứng dụng. Đầu tiên chỉ là con số đếm ngày bên nhau đặt ngay màn hình chính, để ngày nào cũng có cớ nhắn một câu. Rồi thêm chỗ ghi lại những mẩu chuyện nhỏ, để sau này còn có cái mà đọc lại. Rồi thêm AI đứng cạnh gợi ý một cách nói khi mình bí chữ — nó không viết thay mình, nó chỉ đẩy mình qua khoảng lặng đầu tiên.',
    'Amor AI ra đời như vậy. Người dùng đầu tiên là chính mình, và bản kiểm thử đầu tiên là một tin nhắn gửi lúc mười một giờ đêm cho người ở cách vài trăm cây số. Giờ nó ở đây cho những cặp đôi khác — nhất là những cặp đang đếm ngược tới ngày được gặp nhau.',
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
    'I am a developer. All day I write lines that are perfectly clear: what runs, what breaks, what needs fixing. Then evening comes, I open the chat with my girlfriend — and I sit there, not knowing which word to start with.',
    'We were long distance. No shared dinners, no shared way home, just a screen lighting up at the end of the day. When the distance is the only constant, a few lines of text become almost everything you have to hold on to each other with.',
    'I always wanted to write her something sweet — not the same "good night" for the three hundredth time, but one line that would make her smile before she turned off the lamp. Some nights I typed and deleted it four or five times. Not because I loved her less, but because the love was plenty and the words had run out.',
    'So I did what a developer knows how to do: I built an app. First it was only the number of days together, sitting on the home screen, so there was a reason to send something every day. Then a place to keep the small stories, so there would be something to read back later. Then an AI standing beside me, offering a way to say it when I got stuck — it does not write for me, it just carries me past the first silence.',
    'That is how Amor AI was born. Its first user was me, and its first test was a message sent at eleven at night to someone a few hundred kilometres away. Now it is here for other couples — especially the ones counting down to the day they finally meet.',
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
