import type { Lang } from '../site';

export type FaqItem = { q: string; a: string };

const FAQ_VI: FaqItem[] = [
  {
    q: 'Amor AI có miễn phí không?',
    a: 'Có. Bản Free luôn giữ trọn giá trị cốt lõi: đếm ngày, viết ghi chú, tâm trạng mỗi ngày, widget và 3 phông chữ. Ký ức bạn tạo ra không bao giờ bị khóa sau paywall.',
  },
  {
    q: 'Premium gồm những gì?',
    a: 'Bốn quyền lợi: AI viết cùng vượt hạn mức, bộ mẫu thiệp cột mốc premium kèm chia sẻ không watermark, 5 phông chữ premium (tổng 8), và khóa ứng dụng bằng sinh trắc học. Giá của gói Hàng tháng, Hàng năm và Trọn đời hiển thị ngay trong app.',
  },
  {
    q: 'Hai đứa có cần cùng cài app không?',
    a: 'Không bắt buộc. Amor AI hoạt động trọn vẹn kể cả khi chỉ một người dùng — và app không bao giờ giả vờ người kia đang online hay "đã đọc".',
  },
  {
    q: 'Ghi chú của tụi mình có riêng tư không?',
    a: 'Ghi chú là nội dung riêng tư: nội dung đầy đủ chỉ mở khi chính bạn chạm vào. Widget, thông báo và các bề mặt công khai chỉ dùng nội dung chung chung hoặc metadata đã giới hạn. Chi tiết trong Chính sách quyền riêng tư.',
  },
  {
    q: 'Widget biết gì về ghi chú của mình?',
    a: 'Widget chỉ hỏi đúng một câu: "hôm nay đã viết hay chưa" — và nhận về có hoặc không. Dòng chữ duy nhất widget in nguyên văn là lời tự nhắn bạn chủ động để lại cho chính mình.',
  },
  {
    q: 'Gói đăng ký gia hạn và hủy thế nào?',
    a: 'Gói Hàng tháng và Hàng năm tự gia hạn qua Google Play cho đến khi bạn hủy trong phần quản lý đăng ký của Play. Hủy xong bạn vẫn dùng Premium đến hết chu kỳ đã trả.',
  },
  {
    q: 'Mua Trọn đời khi đang có gói đăng ký thì sao?',
    a: 'Trọn đời có hiệu lực ngay và thay thế quyền lợi của gói đang chạy — nhưng gói đăng ký cũ không tự hủy được. App sẽ nhắc bạn trước và sau khi mua để bạn tự hủy gói cũ trong Google Play.',
  },
  {
    q: 'Đổi máy thì khôi phục Premium thế nào?',
    a: 'Dùng "Khôi phục giao dịch" trong app với đúng tài khoản Google Play đã mua. Quyền lợi Premium gắn với tài khoản Play trên máy bạn.',
  },
  {
    q: 'App có bản iOS chưa?',
    a: 'Amor AI đang phát hành trên Google Play. Phiên bản iOS đang được chuẩn bị — nút App Store trên trang chủ sẽ hoạt động ngay khi bản iOS lên kệ.',
  },
  {
    q: 'Làm sao xóa dữ liệu hoặc tài khoản?',
    a: 'Bạn có thể xóa ghi chú, ảnh và tài khoản ngay trong app (tab Chúng mình). Cần hỗ trợ thêm, email 1010creative.games@gmail.com — tụi mình phản hồi trong 2–3 ngày làm việc.',
  },
  {
    q: 'App có chế độ tối không?',
    a: 'Có. Hai giao diện: Paper (giấy kem hồng) và Dusk (than chì ấm) — đúng như hai chế độ bạn có thể thử ngay trên website này bằng nút mặt trăng ở thanh điều hướng.',
  },
];

const FAQ_EN: FaqItem[] = [
  {
    q: 'Is Amor AI free?',
    a: 'Yes. Free always keeps the core: day counting, notes, daily moods, widgets and 3 fonts. Memories you create are never locked behind a paywall.',
  },
  {
    q: 'What does Premium include?',
    a: 'Four benefits: a higher AI writing quota, premium milestone card templates with watermark-free sharing, 5 premium fonts (8 total), and biometric app lock. Prices for Monthly, Yearly and Lifetime are shown in-app.',
  },
  {
    q: 'Do both of us need the app?',
    a: 'No. Amor AI works fully even when only one of you uses it — and the app never pretends your partner is online or has "seen" anything.',
  },
  {
    q: 'Are our notes private?',
    a: 'Notes are private content: the full text opens only when you tap it yourself. Widgets, notifications and other public-adjacent surfaces use generic content or limited metadata only. Details are in the Privacy Policy.',
  },
  {
    q: 'What does the widget know about my notes?',
    a: 'The widget asks exactly one question: "has something been written today" — and receives yes or no. The only line it prints verbatim is the self-note you deliberately leave for yourself.',
  },
  {
    q: 'How do subscriptions renew and cancel?',
    a: "Monthly and Yearly renew automatically through Google Play until you cancel in Play's subscription settings. After cancelling you keep Premium until the end of the paid period.",
  },
  {
    q: 'What if I buy Lifetime while subscribed?',
    a: "Lifetime takes effect immediately and supersedes the running subscription's benefits — but the old subscription cannot cancel itself. The app reminds you before and after purchase to cancel it in Google Play.",
  },
  {
    q: 'How do I restore Premium on a new phone?',
    a: 'Use "Restore purchases" in the app with the same Google Play account that bought it. Premium is tied to the Play account on your device.',
  },
  {
    q: 'Is there an iOS version?',
    a: 'Amor AI is live on Google Play. The iOS version is in the works — the App Store button on the home page will light up the moment it ships.',
  },
  {
    q: 'How do I delete my data or account?',
    a: 'You can delete notes, photos and your account right in the app (the Us tab). For anything else, email 1010creative.games@gmail.com — we reply within 2–3 working days.',
  },
  {
    q: 'Is there a dark mode?',
    a: 'Yes. Two looks: Paper (creamy pink) and Dusk (warm graphite) — the same two modes you can try on this website with the moon button in the nav.',
  },
];

export function faqContent(lang: Lang): FaqItem[] {
  return lang !== 'en' ? FAQ_VI : FAQ_EN;
}
