import type { LegalDocument } from '@/components/legal-page';
import { SITE, type Lang } from '../site';

const MAILTO = `mailto:${SITE.email}`;

const VI: LegalDocument = {
  eyebrow: 'PHÁP LÝ',
  title: 'Chính sách quyền riêng tư',
  meta: 'Hiệu lực từ: 25/08/2026 · Bên kiểm soát dữ liệu: TRAN HUU DANH (nhà phát triển cá nhân), 1010 Creative',
  summary: (
    <>
      <strong>Tóm tắt bằng lời thường:</strong> ghi chú của hai bạn là của hai
      bạn. Chúng tôi không bán dữ liệu, không chạy quảng cáo, không đọc ghi chú
      để làm bất cứ điều gì ngoài việc hiển thị nó lại cho bạn. Widget và thông
      báo chỉ dùng nội dung chung chung. Bạn có thể xóa mọi thứ ngay trong app.
    </>
  ),
  sections: [
    {
      heading: '1. Dữ liệu chúng tôi xử lý',
      paragraphs: [
        <>
          <strong>Nội dung bạn tạo:</strong> ghi chú, ảnh, ngày bắt đầu, ngày
          quan trọng, tâm trạng, lời tự nhắn, tên và ảnh đại diện hai bạn. Phần
          lớn được lưu ngay trên thiết bị; một phần được đồng bộ lên máy chủ khi
          bạn đăng nhập để sao lưu và khôi phục.
        </>,
        <>
          <strong>Thông tin tài khoản:</strong> email hoặc thông tin đăng nhập
          bạn dùng để tạo tài khoản đồng bộ.
        </>,
        <>
          <strong>Dữ liệu mua hàng:</strong> trạng thái quyền lợi Premium (qua
          Google Play và RevenueCat) — chúng tôi không nhận số thẻ hay thông tin
          thanh toán của bạn.
        </>,
        <>
          <strong>Dữ liệu kỹ thuật:</strong> báo lỗi và số liệu vận hành ẩn danh
          (qua Firebase) để sửa lỗi và giữ app ổn định.
        </>,
      ],
    },
    {
      heading: '2. Chúng tôi dùng dữ liệu để làm gì',
      paragraphs: [
        'Chỉ để: vận hành các tính năng bạn dùng, đồng bộ và khôi phục dữ liệu giữa các thiết bị của bạn, xác nhận quyền lợi Premium, gửi thông báo bạn đã bật, và sửa lỗi. Hết.',
      ],
    },
    {
      heading: '3. Những điều chúng tôi không làm',
      paragraphs: [
        'Không bán dữ liệu của bạn. Không chạy quảng cáo và không dùng nội dung riêng tư cho quảng cáo. Không đưa nội dung ghi chú đầy đủ lên widget, thông báo hay bất kỳ bề mặt công khai nào — các bề mặt này chỉ dùng nội dung chung chung hoặc metadata giới hạn (widget chỉ biết hôm nay đã viết hay chưa; dòng duy nhất nó in nguyên văn là lời tự nhắn bạn chủ động để lại). Không suy diễn hay mô phỏng hành động của người yêu bạn.',
      ],
    },
    {
      heading: '4. Tính năng AI viết cùng',
      paragraphs: [
        'Khi bạn chủ động bấm dùng gợi ý AI, đoạn nội dung liên quan được gửi đến dịch vụ AI (Firebase AI Logic của Google) để tạo gợi ý, theo điều khoản dịch vụ của Google. Chúng tôi không dùng nội dung này cho quảng cáo. Không bấm — không gì được gửi đi.',
      ],
    },
    {
      heading: '5. Lưu trữ và bảo mật',
      paragraphs: [
        'Dữ liệu được lưu trên thiết bị của bạn và, khi bạn đăng nhập, trên hạ tầng đám mây (Supabase). Dữ liệu được mã hóa khi truyền. Tính năng khóa ứng dụng là một lớp chặn mở app trên thiết bị — chúng tôi không gọi nó là mã hóa, vì nó không phải.',
      ],
    },
    {
      heading: '6. Dịch vụ bên thứ ba',
      paragraphs: [
        'Ứng dụng dùng: Supabase (đồng bộ, tài khoản), Google Firebase (báo lỗi, thông báo, AI), RevenueCat và Google Play (thanh toán, quyền lợi). Mỗi dịch vụ xử lý dữ liệu theo chính sách riêng của họ; chúng tôi chỉ chia sẻ phần tối thiểu để tính năng hoạt động.',
      ],
    },
    {
      heading: '7. Lưu giữ và xóa',
      paragraphs: [
        'Dữ liệu được giữ chừng nào bạn còn dùng dịch vụ. Bạn có thể xóa ghi chú, ảnh hoặc toàn bộ tài khoản ngay trong app (tab Chúng mình); dữ liệu đồng bộ sẽ được xóa khỏi máy chủ trong thời gian hợp lý. Cần hỗ trợ, email chúng tôi.',
      ],
    },
    {
      heading: '8. Trẻ em',
      paragraphs: [
        'Ứng dụng dành cho người từ 13 tuổi trở lên và không cố ý thu thập dữ liệu của trẻ dưới 13 tuổi.',
      ],
    },
    {
      heading: '9. Quyền của bạn',
      paragraphs: [
        <>
          Bạn có quyền truy cập, sửa, xuất và xóa dữ liệu của mình. Phần lớn
          thực hiện được ngay trong app; phần còn lại, email{' '}
          <a href={MAILTO}>{SITE.email}</a> — phản hồi trong 2–3 ngày làm việc.
        </>,
      ],
    },
    {
      heading: '10. Thay đổi chính sách',
      paragraphs: [
        'Thay đổi đáng kể sẽ được thông báo trong app hoặc trên trang này trước khi có hiệu lực, kèm ngày hiệu lực mới ở đầu trang.',
      ],
    },
  ],
};

const EN: LegalDocument = {
  eyebrow: 'LEGAL',
  title: 'Privacy Policy',
  meta: 'Effective: 25 Aug 2026 · Data controller: TRAN HUU DANH (individual developer), 1010 Creative',
  summary: (
    <>
      <strong>Plain-language summary:</strong> your notes are yours. We do not
      sell data, do not run ads, and do not read your notes for any purpose other
      than showing them back to you. Widgets and notifications use generic
      content only. You can delete everything right in the app.
    </>
  ),
  sections: [
    {
      heading: '1. Data we process',
      paragraphs: [
        <>
          <strong>Content you create:</strong> notes, photos, your start date,
          important dates, moods, self-notes, your names and avatars. Most of it
          lives on your device; some syncs to servers when you sign in, for
          backup and restore.
        </>,
        <>
          <strong>Account information:</strong> the email or sign-in you use for
          the sync account.
        </>,
        <>
          <strong>Purchase data:</strong> Premium entitlement status (via Google
          Play and RevenueCat) — we never receive your card or payment details.
        </>,
        <>
          <strong>Technical data:</strong> crash reports and anonymous
          operational metrics (via Firebase) to fix bugs and keep the app stable.
        </>,
      ],
    },
    {
      heading: '2. What we use it for',
      paragraphs: [
        "Only to: run the features you use, sync and restore your data across your devices, verify Premium entitlement, deliver notifications you turned on, and fix bugs. That's all.",
      ],
    },
    {
      heading: '3. What we never do',
      paragraphs: [
        'We never sell your data. We run no ads and never use private content for advertising. Full note content never appears on widgets, notifications or any public-adjacent surface — these use generic content or limited metadata only (a widget knows just whether something was written today; the only line it prints verbatim is the self-note you deliberately leave). We never infer or simulate your partner’s actions.',
      ],
    },
    {
      heading: '4. The AI writing assistant',
      paragraphs: [
        "When you actively tap an AI suggestion, the relevant text is sent to an AI service (Google's Firebase AI Logic) to generate it, under Google's terms. We do not use this content for advertising. If you never tap, nothing is sent.",
      ],
    },
    {
      heading: '5. Storage and security',
      paragraphs: [
        'Data is stored on your device and, when signed in, on cloud infrastructure (Supabase). Data is encrypted in transit. The app-lock feature is a device-level gate on opening the app — we do not call it encryption, because it is not.',
      ],
    },
    {
      heading: '6. Third-party services',
      paragraphs: [
        'The App uses: Supabase (sync, accounts), Google Firebase (crash reporting, notifications, AI), RevenueCat and Google Play (billing, entitlements). Each processes data under its own policy; we share only the minimum needed for the feature to work.',
      ],
    },
    {
      heading: '7. Retention and deletion',
      paragraphs: [
        'Data is kept for as long as you use the service. You can delete notes, photos or your whole account right in the app (the Us tab); synced data is removed from servers within a reasonable time. For help, email us.',
      ],
    },
    {
      heading: '8. Children',
      paragraphs: [
        'The App is intended for users aged 13 and over and does not knowingly collect data from children under 13.',
      ],
    },
    {
      heading: '9. Your rights',
      paragraphs: [
        <>
          You can access, correct, export and delete your data. Most of it works
          right in the app; for the rest, email{' '}
          <a href={MAILTO}>{SITE.email}</a> — we reply within 2–3 working days.
        </>,
      ],
    },
    {
      heading: '10. Changes',
      paragraphs: [
        'Material changes will be announced in the app or on this page before they take effect, with a new effective date at the top.',
      ],
    },
  ],
};

export function privacyContent(lang: Lang): LegalDocument {
  return lang !== 'en' ? VI : EN;
}
