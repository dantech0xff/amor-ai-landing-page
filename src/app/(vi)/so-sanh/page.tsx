import type { Metadata } from 'next';
import Link from 'next/link';
import { AppCta } from '@/components/app-cta';
import { JsonLd } from '@/components/json-ld';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import {
  CLASSIC_APPS,
  COMPARE_FAQS,
  COMPARE_ROWS,
  type Verdict,
} from '@/lib/content/compare';
import { KEYWORDS } from '@/lib/content/keywords';
import {
  breadcrumbLd,
  faqPageLd,
  graph,
  organizationLd,
  pageMetadata,
} from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'vi',
  path: '/so-sanh',
  title: 'So sánh app đếm ngày yêu: Amor AI, Been Together, Love Days',
  description:
    'So sánh Amor AI với các app đếm ngày yêu quen thuộc như Been Together, Been Love Memory và Love Days: đếm ngày, widget, nhật ký chung, quảng cáo và quyền riêng tư — chọn đúng app cho hai bạn.',
  keywords: KEYWORDS.compare,
  bilingual: false,
});

const VERDICT_LABEL: Record<Verdict, string> = {
  yes: 'Có',
  no: 'Chưa có',
  varies: 'Tuỳ app',
};

const VERDICT_STYLE: Record<Verdict, { bg: string; fg: string }> = {
  yes: { bg: 'var(--am-lovec)', fg: 'var(--am-ink)' },
  no: { bg: 'var(--am-inset)', fg: 'var(--am-ink3)' },
  varies: { bg: 'var(--am-quietc)', fg: 'var(--am-onquietc)' },
};

function VerdictChip({ verdict }: { verdict: Verdict }) {
  const tone = VERDICT_STYLE[verdict];
  return (
    <span
      style={{
        display: 'inline-block',
        whiteSpace: 'nowrap',
        fontSize: 12,
        fontWeight: 600,
        borderRadius: 999,
        padding: '4px 10px',
        background: tone.bg,
        color: tone.fg,
      }}
    >
      {VERDICT_LABEL[verdict]}
    </span>
  );
}

const cellStyle = {
  padding: '14px 12px',
  borderBottom: '1px solid var(--am-divider)',
  verticalAlign: 'top',
} as const;

const headCellStyle = {
  padding: '12px',
  textAlign: 'left',
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.08em',
  color: 'var(--am-ink3)',
  borderBottom: '1px solid var(--am-divider)',
  whiteSpace: 'nowrap',
} as const;

export default function Page() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <JsonLd
        data={graph(
          organizationLd(),
          faqPageLd(COMPARE_FAQS),
          breadcrumbLd([
            { name: 'Trang chủ', path: '/' },
            { name: 'So sánh app đếm ngày yêu', path: '/so-sanh' },
          ]),
        )}
      />
      <SiteNav lang="vi" showLang={false} />

      <article style={{ maxWidth: 860, margin: '0 auto', padding: '64px 24px 0' }}>
        <header
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            marginBottom: 36,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              color: 'var(--am-labelstrong)',
            }}
          >
            SO SÁNH
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(30px, 4vw, 46px)',
              lineHeight: 1.16,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textWrap: 'pretty',
            }}
          >
            So sánh app đếm ngày yêu: Amor AI và những cái tên quen thuộc
          </h1>
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: 18,
              lineHeight: '30px',
              color: 'var(--am-ink2)',
            }}
          >
            Nếu bạn đang tìm {CLASSIC_APPS.join(', ')} hay một app đếm ngày yêu
            nào đó, trang này giúp bạn thấy rõ mình thật sự cần gì. Chúng tôi chỉ
            khẳng định chắc chắn về Amor AI; với các app khác, những gì thay đổi
            theo từng bản cập nhật đều được ghi là “tuỳ app” thay vì đoán bừa.
          </p>
        </header>

        <div className="article-body">
          <h2>Hai kiểu app, hai mục đích khác nhau</h2>
          <p>
            Nhóm app đếm ngày kinh điển làm một việc và làm gọn: bạn nhập ngày bắt
            đầu, app hiện con số, widget đưa con số ấy ra màn hình chính. Nhẹ, dễ
            hiểu, cài xong là xong.
          </p>
          <p>
            Amor AI đứng ở chỗ khác. Con số đếm ngày vẫn là thứ bạn mở app để
            nhìn, nhưng nó là cửa vào một cuốn sổ chung: ghi chú kèm ảnh, tâm
            trạng mỗi ngày, một câu hỏi gợi ý mỗi ngày để hai bạn cùng trả lời.
            Nặng hơn về nội dung, và vì thế chỉ đáng cài nếu bạn thật sự muốn
            viết gì đó.
          </p>

          <h2>Bảng đối chiếu</h2>
        </div>

        <div style={{ overflowX: 'auto', margin: '4px 0 8px' }}>
          <table
            style={{
              width: '100%',
              minWidth: 620,
              borderCollapse: 'collapse',
              fontSize: 14.5,
            }}
          >
            <thead>
              <tr>
                <th style={headCellStyle}>TÍNH NĂNG</th>
                <th style={headCellStyle}>AMOR AI</th>
                <th style={headCellStyle}>APP ĐẾM NGÀY KINH ĐIỂN</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.feature}>
                  <td style={cellStyle}>
                    <strong
                      style={{ fontWeight: 600, color: 'var(--am-ink)' }}
                    >
                      {row.feature}
                    </strong>
                    <span
                      style={{
                        display: 'block',
                        marginTop: 4,
                        fontSize: 13,
                        lineHeight: '20px',
                        color: 'var(--am-ink2)',
                      }}
                    >
                      {row.note}
                    </span>
                  </td>
                  <td style={cellStyle}>
                    <VerdictChip verdict={row.amor} />
                  </td>
                  <td style={cellStyle}>
                    <VerdictChip verdict={row.classic} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="article-body">
          <p style={{ fontSize: 13.5, color: 'var(--am-ink3)' }}>
            Cột bên phải nói về nhóm app đếm ngày nói chung ({CLASSIC_APPS.join(', ')}
            …). Mỗi app một khác và tính năng đổi theo bản cập nhật, nên hãy xem
            trang cửa hàng của từng app trước khi quyết định.
          </p>

          <h2>Nên chọn cái nào?</h2>
          <ul className="list-roomy">
            <li>
              <strong>Chọn app đếm ngày kinh điển</strong> nếu bạn chỉ cần con số
              và widget, muốn app thật nhẹ, hoặc đang dùng iPhone — Amor AI hiện
              mới có trên Google Play.
            </li>
            <li>
              <strong>Chọn Amor AI</strong> nếu bạn muốn con số ấy đi kèm chỗ để
              viết lại vì sao ngày đó đáng nhớ, không muốn thấy quảng cáo giữa lúc
              xem lại ảnh cũ, và thích một app không có bảng tin để so kè với cặp
              khác.
            </li>
          </ul>

          <div className="callout">
            <strong>Không phải chọn một lần cho xong.</strong> Ngày bắt đầu là dữ
            liệu duy nhất bạn cần mang theo. Cài Amor AI, nhập lại đúng ngày đó,
            con số sẽ khớp ngay với app cũ — dùng song song vài tuần rồi hẵng
            quyết.
          </div>

          <div style={{ margin: '36px 0' }}>
            <AppCta
              title="Đếm ngày bên nhau, và giữ lại lý do"
              body="Amor AI miễn phí để bắt đầu: đếm ngày, nhật ký chung có ảnh, câu hỏi mỗi ngày và widget ấm áp — không quảng cáo."
              action="Tải Amor AI"
            />
          </div>

          <h2>Câu hỏi thường gặp</h2>
          {COMPARE_FAQS.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}

          <h2>Đọc tiếp</h2>
          <ul className="list-tight">
            <li>
              <Link href="/blog/y-tuong-ky-niem-ngay-yeu">
                24 ý tưởng kỷ niệm ngày yêu nhau ấm áp, dễ làm
              </Link>
            </li>
            <li>
              <Link href="/blog/viet-nhat-ky-cap-doi">
                Cách viết nhật ký cặp đôi: bắt đầu và giữ được lâu
              </Link>
            </li>
            <li>
              <Link href="/faq">Câu hỏi thường gặp về Amor AI</Link>
            </li>
          </ul>
        </div>
      </article>

      <SiteFooter lang="vi" />
    </div>
  );
}
