import type { Metadata } from 'next';
import { AppCta } from '@/components/app-cta';
import { BlogArticle } from '@/components/blog-article';
import { postBySlug } from '@/lib/content/blog';
import { blogPostMetadata } from '@/lib/seo';

const post = postBySlug('cau-hoi-cap-doi');

export const metadata: Metadata = blogPostMetadata(post);

const RULES = [
  'Dành 45–90 phút không bị cắt ngang. Điện thoại úp xuống, thông báo tắt.',
  'Thay phiên nhau: mỗi câu cả hai cùng trả lời, người hỏi trả lời sau.',
  'Đi đúng thứ tự — độ sâu được thiết kế tăng dần, nhảy cóc dễ làm cả hai khựng lại.',
  'Được phép bỏ qua. Một câu "để lần sau nhé" tốt hơn một câu trả lời gượng.',
];

const PART_I = [
  'Nếu được mời ăn tối với bất kỳ ai trên đời, em/anh sẽ chọn ai?',
  'Em có muốn nổi tiếng không? Nổi tiếng theo kiểu nào?',
  'Trước khi gọi điện cho ai đó, em có bao giờ tập trước điều mình định nói? Vì sao?',
  'Một ngày "hoàn hảo" với em trông như thế nào?',
  'Lần cuối em hát một mình là khi nào? Còn hát cho người khác nghe?',
  'Nếu sống đến 90 tuổi và được giữ trí óc hoặc cơ thể của tuổi 30 trong 60 năm cuối, em chọn giữ cái nào?',
  'Em có linh cảm thầm kín nào về cách mình sẽ rời khỏi thế giới này không?',
  'Kể ba điều mà em nghĩ hai đứa mình giống nhau.',
  'Điều gì trong đời khiến em thấy biết ơn nhất?',
  'Nếu được thay đổi một điều trong cách mình được nuôi dạy, em sẽ đổi điều gì?',
  'Trong bốn phút, kể cho anh/em nghe câu chuyện cuộc đời em — chi tiết hết mức có thể.',
  'Nếu sáng mai thức dậy có được một khả năng hoặc phẩm chất mới, em muốn đó là gì?',
];

const PART_II = [
  'Nếu một quả cầu pha lê nói được sự thật về em, về đời em, về tương lai — em muốn hỏi điều gì?',
  'Có điều gì em mơ ước làm từ lâu chưa? Vì sao vẫn chưa làm?',
  'Thành tựu lớn nhất trong đời em tính đến giờ là gì?',
  'Điều gì em trân trọng nhất ở một tình bạn?',
  'Ký ức quý giá nhất của em là gì?',
  'Còn ký ức đau nhất?',
  'Nếu biết rằng một năm nữa mình sẽ đột ngột ra đi, em có thay đổi cách đang sống không? Vì sao?',
  'Tình bạn có ý nghĩa gì với em?',
  'Tình yêu và sự âu yếm đóng vai trò gì trong cuộc sống của em?',
  'Thay phiên nhau, mỗi người kể một điều mình thấy là điểm tốt của người kia — năm lượt mỗi người.',
  'Gia đình em gần gũi và ấm áp đến mức nào? Em có thấy tuổi thơ mình hạnh phúc hơn phần lớn người khác?',
  'Em cảm thấy thế nào về mối quan hệ của em với mẹ?',
];

const PART_III = [
  'Mỗi người nói ba câu bắt đầu bằng "Chúng mình…" — ví dụ: "Chúng mình đang ngồi trong căn phòng này và đều thấy…".',
  'Hoàn thành câu: "Ước gì mình có một người để cùng chia sẻ…".',
  'Nếu muốn trở thành bạn thân của người đối diện, hãy nói điều quan trọng nhất mà người ấy cần biết.',
  'Nói với người kia điều em thích ở họ — thật lòng, kể cả những điều em thường ngại nói.',
  'Kể cho nhau một khoảnh khắc xấu hổ trong đời mình.',
  'Lần cuối em khóc trước mặt người khác là khi nào? Còn khóc một mình?',
  'Nói với người kia một điều em đã quý ở họ ngay từ đầu.',
  'Có điều gì nghiêm túc đến mức không nên đem ra đùa không? Đó là gì?',
  'Nếu tối nay ra đi mà không kịp nói với ai điều gì, em sẽ tiếc nhất vì chưa nói điều gì — với ai? Vì sao vẫn chưa nói?',
  'Nhà em cháy, người thân và thú cưng đã an toàn, em kịp quay vào cứu đúng một món đồ. Em cứu gì? Vì sao?',
  'Trong những người thân của em, sự ra đi của ai sẽ khiến em chông chênh nhất? Vì sao?',
  'Chia sẻ một vấn đề cá nhân và hỏi người kia sẽ xử lý thế nào nếu là mình. Sau đó, hỏi họ thấy em đang cảm thấy gì về vấn đề đó.',
];

const FAQS = [
  {
    q: 'Yêu nhau lâu rồi thì 36 câu này còn tác dụng không?',
    a: 'Còn — theo một cách khác. Với người lạ, bộ câu hỏi tạo sự gần gũi; với người quen, nó phá vỡ ảo tưởng "mình biết hết rồi". Câu trả lời của một người ở năm thứ nhất và năm thứ năm thường khác nhau nhiều hơn ta tưởng.',
  },
  {
    q: 'Có bắt buộc làm đúng thứ tự không?',
    a: 'Nên. Ba phần được thiết kế như ba bậc thang — bắt đầu từ phần III giống như nhảy xuống nước lạnh: được, nhưng dễ khiến một trong hai người co lại.',
  },
  {
    q: 'Nên ghi lại câu trả lời không?',
    a: 'Rất nên — vài dòng thôi. Đọc lại câu trả lời của chính mình sau một năm là một trong những món quà lạ lùng nhất mà hai bạn có thể tự tặng nhau.',
  },
];

export default function Page() {
  return (
    <BlogArticle
      post={post}
      lead="Năm 1997, nhà tâm lý học Arthur Aron và cộng sự công bố một thí nghiệm nổi tiếng: hai người lạ lần lượt trả lời 36 câu hỏi được sắp xếp tăng dần độ sâu, và cảm giác gần gũi giữa họ tăng lên rõ rệt chỉ sau 45 phút. Với những cặp đã yêu nhau lâu, bộ câu hỏi này còn làm một việc khác: mở lại những cánh cửa mà ta tưởng mình đã biết hết phía sau."
      nextReads={[
        {
          slug: 'viet-nhat-ky-cap-doi',
          label: 'Cách viết nhật ký cặp đôi: bắt đầu và giữ được lâu',
        },
        {
          slug: 'y-tuong-ky-niem-ngay-yeu',
          label: '24 ý tưởng kỷ niệm ngày yêu nhau ấm áp, dễ làm',
        },
      ]}
    >
      <h2>Cách dùng cho đúng</h2>
      <p>
        Bộ câu hỏi không phải bài kiểm tra, càng không phải trò chơi nhanh. Vài
        nguyên tắc nhỏ:
      </p>
      <ul>
        {RULES.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
      <div className="callout">
        <strong>Mẹo nhỏ:</strong> đừng làm hết 36 câu trong một tối. Ba câu mỗi
        tối thứ Sáu = 12 tuần trò chuyện — một nghi thức, không phải một buổi
        phỏng vấn.
      </div>

      <h2>Phần I — Làm quen lại (câu 1–12)</h2>
      <p>
        Phần mở đầu nhẹ như một buổi hẹn đầu tiên — kể cả khi hai bạn đã bên nhau
        nghìn ngày. Bản dưới đây được Việt hóa thoáng để đọc lên nghe tự nhiên:
      </p>
      <ol>
        {PART_I.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <h2>Phần II — Chạm vào điều quan trọng (câu 13–24)</h2>
      <ol start={13}>
        {PART_II.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <h2>Phần III — Đi sâu nhất (câu 25–36)</h2>
      <ol start={25}>
        {PART_III.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <div style={{ margin: '36px 0' }}>
        <AppCta
          title="Không cần nhớ 36 câu"
          body="Amor AI gợi một câu hỏi mỗi ngày để hai bạn viết lại câu trả lời — thành một cuốn sổ chung."
          action="Tải miễn phí"
        />
      </div>

      <h2>Câu hỏi thường gặp</h2>
      {FAQS.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </BlogArticle>
  );
}
