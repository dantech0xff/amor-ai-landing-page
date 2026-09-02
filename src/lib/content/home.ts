import type { Lang } from '../site';

export type Feature = {
  icon: string;
  bg: string;
  fg: string;
  title: string;
  body: string;
};

export type Promise_ = { icon: string; title: string; body: string };
export type Perk = { icon: string; title: string; body: string };

const FEATURES_VI: Feature[] = [
  {
    icon: 'favorite',
    bg: 'var(--du-lovec)',
    fg: 'var(--du-love)',
    title: 'Đếm ngày bên nhau',
    body: 'Con số hai bạn mở app để nhìn — đọc theo tổng ngày, năm–tháng–ngày, hoặc ngày bắt đầu. Chạm để đổi kiểu đọc.',
  },
  {
    icon: 'auto_stories',
    bg: 'var(--du-peachpaper)',
    fg: 'var(--du-labelstrong)',
    title: 'Câu chuyện & ghi chú',
    body: 'Viết một dòng hay cả một trang, kèm ảnh. Ký ức xếp thành một bức tường ấm áp để thỉnh thoảng quay lại.',
  },
  {
    icon: 'celebration',
    bg: 'var(--du-butter)',
    fg: 'var(--du-premium)',
    title: 'Cột mốc & ngày quan trọng',
    body: 'Ngày thứ 100, 1000, sinh nhật, ngày cưới… được nhắc dịu dàng, kèm mẫu thiệp để chia sẻ khoảnh khắc.',
  },
  {
    icon: 'add_reaction',
    bg: 'var(--du-inset)',
    fg: 'var(--du-love)',
    title: 'Tâm trạng mỗi ngày',
    body: 'Một chạm ghi lại hôm nay trong lòng bạn. Nhịp 7 ngày chỉ là một câu kể — không streak, không áp lực.',
  },
  {
    icon: 'widgets',
    bg: 'var(--du-quietc)',
    fg: 'var(--du-onquietc)',
    title: 'Widget màn hình chính',
    body: 'Ngày bên nhau và dòng tự nhắn của bạn ngay trên màn hình chính. Widget không đọc được ghi chú của hai bạn.',
  },
  {
    icon: 'auto_awesome',
    bg: 'var(--du-assist)',
    fg: 'var(--du-onassist)',
    title: 'AI viết cùng',
    body: 'Khi thiếu lời, AI gợi ý một cách diễn đạt. Bạn luôn là người quyết định giữ lại gì — AI chỉ đứng cạnh.',
  },
];

const FEATURES_EN: Feature[] = [
  {
    icon: 'favorite',
    bg: 'var(--du-lovec)',
    fg: 'var(--du-love)',
    title: 'Count your days together',
    body: 'The number you open the app to see — as total days, years–months–days, or your start date. Tap to switch.',
  },
  {
    icon: 'auto_stories',
    bg: 'var(--du-peachpaper)',
    fg: 'var(--du-labelstrong)',
    title: 'Story & notes',
    body: 'Write a line or a whole page, with photos. Memories settle into a warm wall you can wander back through.',
  },
  {
    icon: 'celebration',
    bg: 'var(--du-butter)',
    fg: 'var(--du-premium)',
    title: 'Milestones & big days',
    body: 'Day 100, day 1000, birthdays, anniversaries — gently surfaced, with share-ready keepsake cards.',
  },
  {
    icon: 'add_reaction',
    bg: 'var(--du-inset)',
    fg: 'var(--du-love)',
    title: 'A mood a day',
    body: 'One tap records how today feels. The 7-day rhythm is a sentence, not a score — no streaks, no pressure.',
  },
  {
    icon: 'widgets',
    bg: 'var(--du-quietc)',
    fg: 'var(--du-onquietc)',
    title: 'Home screen widget',
    body: 'Your day count and your self-note, right on the home screen. Widgets can never read your private notes.',
  },
  {
    icon: 'auto_awesome',
    bg: 'var(--du-assist)',
    fg: 'var(--du-onassist)',
    title: 'AI writes alongside',
    body: 'When words run out, AI suggests a way to say it. You always decide what stays — AI just stands nearby.',
  },
];

const PROMISES_VI: Promise_[] = [
  {
    icon: 'visibility_off',
    title: 'Không giả vờ',
    body: 'Không mô phỏng tin nhắn, trạng thái online hay "đã đọc" của người kia. Mọi thứ bạn thấy đều là thật.',
  },
  {
    icon: 'notifications_off',
    title: 'Không nhòm ngó',
    body: 'App không thu thập và sử dụng thông tin cá nhân của bạn. Ghi chú đầy đủ chỉ mở khi chính bạn chạm vào.',
  },
  {
    icon: 'spa',
    title: 'Không áp lực',
    body: 'Hôm nào bận, cứ nghỉ một nhịp. Ngày mai mở app, mọi thứ vẫn dịu dàng chờ bạn — vì yêu thương chưa bao giờ là một chuỗi thành tích.',
  },
];

const PROMISES_EN: Promise_[] = [
  {
    icon: 'visibility_off',
    title: 'No pretending',
    body: 'No simulated messages, online status or read receipts. Everything you see is real.',
  },
  {
    icon: 'notifications_off',
    title: 'No peeking',
    body: 'The app does not collect or use your personal information. Full notes open only when you tap them yourself.',
  },
  {
    icon: 'spa',
    title: 'No pressure',
    body: 'Busy today? Just rest. Tomorrow the app is still here, as gentle as ever — because love was never a streak to keep.',
  },
];

const PERKS_VI: Perk[] = [
  {
    icon: 'auto_awesome',
    title: 'AI vượt hạn mức',
    body: 'Viết cùng AI nhiều hơn mỗi ngày.',
  },
  {
    icon: 'imagesmode',
    title: 'Mẫu cột mốc premium',
    body: 'Thiệp kỷ niệm đẹp hơn, chia sẻ không watermark.',
  },
  {
    icon: 'text_fields',
    title: '8 phông chữ',
    body: '3 miễn phí, 5 premium — chữ đã chọn không bao giờ bị thu hồi.',
  },
  {
    icon: 'lock',
    title: 'Khóa ứng dụng',
    body: 'Thêm một lớp riêng tư bằng sinh trắc học.',
  },
  {
    icon: 'more_horiz',
    title: 'Và còn nữa…',
    body: 'Nhiều tính năng mới đang trên đường đến trong các bản cập nhật tương lai.',
  },
];

const PERKS_EN: Perk[] = [
  {
    icon: 'auto_awesome',
    title: 'Higher AI quota',
    body: 'Write with AI more each day.',
  },
  {
    icon: 'imagesmode',
    title: 'Premium keepsakes',
    body: 'Richer milestone cards, watermark-free sharing.',
  },
  {
    icon: 'text_fields',
    title: '8 fonts',
    body: '3 free, 5 premium — a chosen font is never taken back.',
  },
  {
    icon: 'lock',
    title: 'App lock',
    body: 'One more layer of privacy with biometrics.',
  },
  {
    icon: 'more_horiz',
    title: 'And more…',
    body: 'New features keep arriving in future updates.',
  },
];

export function homeContent(lang: Lang) {
  const vi = lang !== 'en';
  return {
    features: vi ? FEATURES_VI : FEATURES_EN,
    promises: vi ? PROMISES_VI : PROMISES_EN,
    perks: vi ? PERKS_VI : PERKS_EN,
  };
}
