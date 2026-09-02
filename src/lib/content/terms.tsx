import type { LegalDocument } from '@/components/legal-page';
import { SITE, type Lang } from '../site';

const MAILTO = `mailto:${SITE.email}`;

const VI: LegalDocument = {
  eyebrow: 'PHÁP LÝ',
  title: 'Điều khoản dịch vụ',
  meta: 'Hiệu lực từ: 25/08/2026 · Nhà phát triển: TRAN HUU DANH (nhà phát triển cá nhân), vận hành dưới tên studio 1010 Creative',
  sections: [
    {
      heading: '1. Chấp nhận điều khoản',
      paragraphs: [
        'Bằng việc tải, cài đặt hoặc sử dụng ứng dụng "Duoly - a couple app" ("Ứng dụng"), bạn đồng ý với các điều khoản này. Nếu không đồng ý, vui lòng không sử dụng Ứng dụng.',
      ],
    },
    {
      heading: '2. Dịch vụ',
      paragraphs: [
        'Ứng dụng là một không gian riêng tư cho cặp đôi: đếm ngày bên nhau, ghi chú và ảnh, cột mốc, tâm trạng hằng ngày, widget và tính năng gợi ý viết bằng AI. Ứng dụng không phải mạng xã hội, không phải công cụ theo dõi người khác, và không phải dịch vụ tư vấn tâm lý hay y tế.',
      ],
    },
    {
      heading: '3. Tài khoản',
      paragraphs: [
        'Một số tính năng (như đồng bộ) cần tài khoản. Bạn chịu trách nhiệm giữ an toàn thông tin đăng nhập trên thiết bị của mình và cung cấp thông tin chính xác khi đăng ký.',
      ],
    },
    {
      heading: '4. Nội dung của bạn',
      paragraphs: [
        'Ghi chú, ảnh, ngày tháng và mọi nội dung bạn tạo thuộc về bạn. Bạn cấp cho chúng tôi quyền xử lý kỹ thuật (lưu trữ, đồng bộ, sao lưu) đủ để vận hành các tính năng bạn dùng — không hơn. Chúng tôi không dùng nội dung riêng tư của bạn cho quảng cáo và không bán nó cho bất kỳ ai.',
      ],
    },
    {
      heading: '5. Premium và thanh toán',
      paragraphs: [
        'Duoly Premium gồm gói Hàng tháng, Hàng năm (đăng ký tự gia hạn) và Trọn đời (mua một lần). Giá hiển thị trong Ứng dụng và được thanh toán qua Google Play. Gói đăng ký tự gia hạn cho đến khi bạn hủy trong phần quản lý đăng ký của Google Play; hủy có hiệu lực vào cuối chu kỳ đã thanh toán. Bạn có thể khôi phục giao dịch bằng chức năng "Khôi phục giao dịch" trong Ứng dụng.',
        <>
          Lưu ý về Trọn đời: mua Trọn đời trong khi một gói đăng ký đang chạy sẽ
          thay thế quyền lợi của gói đó, nhưng gói đăng ký cũ{' '}
          <strong>không tự hủy</strong> — bạn cần tự hủy trong Google Play. Ứng
          dụng hiển thị nhắc nhở này trước và sau khi mua.
        </>,
        'Bản Free luôn cho phép truy cập dữ liệu và ký ức do bạn tạo ra; Premium chỉ mở rộng các tính năng bổ sung.',
      ],
    },
    {
      heading: '6. Sử dụng hợp lệ',
      paragraphs: [
        'Bạn đồng ý không: dùng Ứng dụng vào mục đích trái pháp luật; can thiệp, dịch ngược hoặc phá hoại dịch vụ; dùng Ứng dụng để xâm phạm quyền riêng tư của người khác, kể cả của người yêu bạn.',
      ],
    },
    {
      heading: '7. Sở hữu trí tuệ',
      paragraphs: [
        'Ứng dụng, thương hiệu "Duoly - a couple app", giao diện và tài sản thiết kế thuộc về nhà phát triển. Điều này không ảnh hưởng đến quyền sở hữu nội dung của bạn nêu tại mục 4.',
      ],
    },
    {
      heading: '8. Tuyên bố miễn trừ',
      paragraphs: [
        'Ứng dụng được cung cấp "nguyên trạng". Chúng tôi nỗ lực để dịch vụ ổn định nhưng không cam kết Ứng dụng không bao giờ gián đoạn hoặc không có lỗi. Nội dung gợi ý (câu hỏi hằng ngày, gợi ý AI) chỉ mang tính tham khảo, không phải lời khuyên chuyên môn.',
      ],
    },
    {
      heading: '9. Giới hạn trách nhiệm',
      paragraphs: [
        'Trong phạm vi pháp luật cho phép, trách nhiệm của nhà phát triển đối với mọi khiếu nại liên quan đến Ứng dụng không vượt quá số tiền bạn đã trả cho Ứng dụng trong 12 tháng gần nhất.',
      ],
    },
    {
      heading: '10. Chấm dứt',
      paragraphs: [
        'Bạn có thể ngừng dùng và xóa tài khoản bất cứ lúc nào ngay trong Ứng dụng. Chúng tôi có thể tạm ngừng hoặc chấm dứt quyền truy cập nếu bạn vi phạm nghiêm trọng các điều khoản này.',
      ],
    },
    {
      heading: '11. Thay đổi điều khoản',
      paragraphs: [
        'Khi điều khoản thay đổi đáng kể, chúng tôi sẽ thông báo trong Ứng dụng hoặc trên trang này trước khi có hiệu lực. Tiếp tục sử dụng sau thời điểm đó nghĩa là bạn chấp nhận bản mới.',
      ],
    },
    {
      heading: '12. Luật áp dụng và liên hệ',
      paragraphs: [
        <>
          Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi câu hỏi xin
          gửi về <a href={MAILTO}>{SITE.email}</a>.
        </>,
      ],
    },
  ],
};

const EN: LegalDocument = {
  eyebrow: 'LEGAL',
  title: 'Terms of Service',
  meta: 'Effective: 25 Aug 2026 · Developer: TRAN HUU DANH (individual developer), operating as 1010 Creative',
  sections: [
    {
      heading: '1. Acceptance',
      paragraphs: [
        'By downloading, installing or using "Duoly - a couple app" (the "App"), you agree to these terms. If you do not agree, please do not use the App.',
      ],
    },
    {
      heading: '2. The service',
      paragraphs: [
        'The App is a private space for couples: counting days together, notes and photos, milestones, daily moods, widgets and an AI writing assistant. It is not a social network, not a tool for monitoring another person, and not a counselling or medical service.',
      ],
    },
    {
      heading: '3. Accounts',
      paragraphs: [
        'Some features (such as sync) require an account. You are responsible for keeping your sign-in credentials safe on your device and for providing accurate information.',
      ],
    },
    {
      heading: '4. Your content',
      paragraphs: [
        'Notes, photos, dates and everything you create belong to you. You grant us only the technical rights (storage, sync, backup) needed to operate the features you use — nothing more. We never use your private content for advertising and never sell it.',
      ],
    },
    {
      heading: '5. Premium and billing',
      paragraphs: [
        'Duoly Premium offers Monthly and Yearly auto-renewing subscriptions and a one-time Lifetime purchase. Prices are shown in-app and billed through Google Play. Subscriptions renew until cancelled in Google Play’s subscription settings; cancellation takes effect at the end of the paid period. Purchases can be restored with "Restore purchases" in the App.',
        <>
          Lifetime note: buying Lifetime while a subscription is running
          supersedes its benefits, but the old subscription{' '}
          <strong>does not cancel itself</strong> — you must cancel it in Google
          Play. The App shows this reminder before and after purchase.
        </>,
        'The Free tier always keeps access to the data and memories you created; Premium only extends additional features.',
      ],
    },
    {
      heading: '6. Acceptable use',
      paragraphs: [
        "You agree not to: use the App for unlawful purposes; interfere with, reverse-engineer or disrupt the service; or use the App to violate anyone's privacy — including your partner's.",
      ],
    },
    {
      heading: '7. Intellectual property',
      paragraphs: [
        'The App, the "Duoly - a couple app" brand, its interface and design assets belong to the developer. This does not affect your ownership of your content under section 4.',
      ],
    },
    {
      heading: '8. Disclaimer',
      paragraphs: [
        'The App is provided "as is". We work hard to keep the service stable but do not promise it will be uninterrupted or error-free. Suggested content (daily questions, AI suggestions) is for inspiration only and is not professional advice.',
      ],
    },
    {
      heading: '9. Limitation of liability',
      paragraphs: [
        "To the extent permitted by law, the developer's total liability for any claim related to the App will not exceed the amount you paid for the App in the preceding 12 months.",
      ],
    },
    {
      heading: '10. Termination',
      paragraphs: [
        'You may stop using the App and delete your account at any time, right in the App. We may suspend or terminate access for serious violations of these terms.',
      ],
    },
    {
      heading: '11. Changes',
      paragraphs: [
        'When these terms change materially, we will announce it in the App or on this page before it takes effect. Continued use after that date means you accept the new version.',
      ],
    },
    {
      heading: '12. Governing law and contact',
      paragraphs: [
        <>
          These terms are governed by the laws of Vietnam. Questions:{' '}
          <a href={MAILTO}>{SITE.email}</a>.
        </>,
      ],
    },
  ],
};

export function termsContent(lang: Lang): LegalDocument {
  return lang !== 'en' ? VI : EN;
}
