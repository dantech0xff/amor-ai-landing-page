import type { Metadata } from 'next';
import { AppCta } from '@/components/app-cta';
import { BlogArticle } from '@/components/blog-article';
import { postBySlug } from '@/lib/content/blog';

export const metadata: Metadata = {
  title: 'Cách viết nhật ký cặp đôi: bắt đầu và giữ được lâu | Amor AI Blog',
  description:
    'Hướng dẫn viết nhật ký cặp đôi: vì sao mỗi ngày một dòng thắng mỗi tuần một trang, 3 bước bắt đầu, 20 gợi ý mở đầu và cách duy trì thói quen không áp lực.',
};

const STEPS = [
  {
    lead: 'Chọn một chỗ cố định.',
    body: 'Sổ giấy để đầu giường, hay một app trong điện thoại — quan trọng là',
    emphasis: 'một',
    tail: ' chỗ, không rải rác.',
  },
  {
    lead: 'Gắn vào một thói quen có sẵn.',
    body: 'Sau khi đánh răng tối, trước khi đặt báo thức — mượn đà của thói quen cũ thay vì xây thói quen mới từ số không.',
  },
  {
    lead: 'Hạ chuẩn xuống thấp nhất.',
    body: 'Quy tắc duy nhất: một dòng là đạt. Viết dài hơn là phần thưởng, không phải nghĩa vụ.',
  },
];

const PROMPTS = [
  'Hôm nay điều nhỏ nào mình muốn giữ lại lâu hơn?',
  'Khoảnh khắc nào trong ngày mình thấy nhẹ người?',
  'Người ấy hôm nay có làm gì khiến mình mỉm cười không?',
  'Món ngon nhất mình ăn hôm nay là gì, với ai?',
  'Hôm nay mình biết ơn điều gì nhất?',
  'Có mùi, bài hát hay góc phố nào hôm nay làm mình nhớ một kỷ niệm?',
  'Điều gì hôm nay khó hơn mình tưởng?',
  'Nếu chụp đúng một tấm ảnh hôm nay, mình chụp gì?',
  'Câu nói nào hôm nay mình muốn ghi lại nguyên văn?',
  'Hôm nay mình đã chăm sóc bản thân bằng cách nào?',
  'Điều gì hôm nay mình làm tốt hơn hôm qua?',
  'Có ai đó hôm nay tử tế với mình một cách bất ngờ?',
  'Mình đang mong chờ điều gì trong tuần tới?',
  'Hôm nay có điều gì mình muốn kể ngay cho người ấy?',
  'Ba từ mô tả hôm nay của mình?',
  'Điều gì hôm nay khiến mình thấy mình đang ở đúng chỗ?',
  'Nếu hôm nay là một màu, đó là màu gì? Vì sao?',
  'Mình đã học được gì — dù bé xíu — trong hôm nay?',
  'Có khoảnh khắc nào hôm nay mình muốn tua lại?',
  'Một dòng nhắn cho chính mình của ngày mai?',
];

export default function Page() {
  const post = postBySlug('viet-nhat-ky-cap-doi');

  return (
    <BlogArticle
      post={post}
      title="Cách viết nhật ký cặp đôi: bắt đầu và giữ được lâu"
      lead="Trí nhớ là một người kể chuyện tệ: nó giữ những ngày lớn và làm rơi những ngày thường — trong khi tình yêu được xây gần như hoàn toàn bằng ngày thường. Nhật ký cặp đôi là cách nhặt lại chúng. Bài này nói về cách bắt đầu sao cho không gượng, và giữ được sau tuần thứ hai — chỗ mà hầu hết mọi cuốn sổ dừng lại."
      nextReads={[
        {
          slug: 'cau-hoi-cap-doi',
          label: '36 câu hỏi để hiểu nhau sâu hơn',
        },
        {
          slug: 'y-tuong-ky-niem-ngay-yeu',
          label: '24 ý tưởng kỷ niệm ngày yêu nhau',
        },
      ]}
    >
      <h2>Vì sao &quot;mỗi ngày một dòng&quot; thắng &quot;mỗi tuần một trang&quot;</h2>
      <p>
        Một trang mỗi tuần nghe hợp lý — cho đến tối Chủ nhật, khi bạn ngồi trước
        trang giấy trắng và không nhớ nổi thứ Ba có gì. Rào cản không phải thiếu
        chuyện để viết, mà là <em>kích thước của lời hứa</em>: một trang là một
        bài văn, một dòng chỉ là một hơi thở.
      </p>
      <p>
        Một dòng mỗi ngày có ba lợi thế: nó đủ nhỏ để làm cả khi mệt; nó bắt được
        chi tiết tươi — &quot;em cười lúc quán mất điện&quot; chứ không phải
        &quot;tuần này vui&quot;; và 365 dòng sau một năm là một cuốn phim tua
        chậm mà không bài văn nào thay được.
      </p>

      <h2>Bắt đầu trong 3 bước</h2>
      <ol className="list-roomy">
        {STEPS.map((step) => (
          <li key={step.lead}>
            <strong>{step.lead}</strong> {step.body}
            {step.emphasis && (
              <>
                {' '}
                <em>{step.emphasis}</em>
                {step.tail}
              </>
            )}
          </li>
        ))}
      </ol>

      <h2>20 gợi ý mở đầu khi bí</h2>
      <p>
        Chép lại 20 câu này vào trang đầu cuốn sổ — hoặc để app gợi ý mỗi ngày
        một câu:
      </p>
      <ul className="list-tight">
        {PROMPTS.map((prompt) => (
          <li key={prompt}>{prompt}</li>
        ))}
      </ul>

      <h2>Giữ được lâu: hai quy tắc</h2>
      <p>
        <strong>Tha thứ cho ngày bỏ lỡ.</strong> Thói quen chết vì cảm giác tội
        lỗi nhiều hơn vì lười: bỏ một ngày rồi thấy &quot;hỏng rồi&quot;, thế là
        bỏ luôn tuần. Ngày bỏ lỡ không phải khoản nợ — không cần &quot;viết
        bù&quot;, chỉ cần viết tiếp.
      </p>
      <p>
        <strong>Thỉnh thoảng đọc lại cùng nhau.</strong> Mỗi tháng một lần, mở
        lại những dòng cũ. Đây là phần thưởng thật của cả thói quen — và là lý do
        các dòng tiếp theo được viết.
      </p>

      <div style={{ margin: '36px 0' }}>
        <AppCta
          title="Một cuốn sổ được thiết kế đúng như bài này"
          body="Câu hỏi mỗi ngày, một dòng là đạt, không streak áp lực — Amor AI là chỗ cố định cho thói quen của hai bạn."
          action="Tải miễn phí"
        />
      </div>
    </BlogArticle>
  );
}
