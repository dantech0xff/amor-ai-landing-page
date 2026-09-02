import type { Metadata } from 'next';
import { AppCta } from '@/components/app-cta';
import { BlogArticle } from '@/components/blog-article';
import { postBySlug } from '@/lib/content/blog';
import { blogPostMetadata } from '@/lib/seo';

const post = postBySlug('yeu-xa');

export const metadata: Metadata = blogPostMetadata(post);

type Habit = { lead: string; body: string };

const DAILY: Habit[] = [
  {
    lead: 'Giờ chào cố định.',
    body: 'Một tin "chào buổi sáng" và một tin trước khi ngủ, đúng khung giờ — hai cái neo mà ngày nào cũng có thể bám vào, kể cả ngày bận nhất.',
  },
  {
    lead: 'Cùng trả lời một câu hỏi mỗi ngày.',
    body: 'Cùng một câu, hai câu trả lời — thứ để nói chuyện vượt xa "hôm nay ăn gì". Duoly gợi sẵn một câu mỗi ngày cho việc này.',
  },
  {
    lead: 'Kể "3 điều hôm nay".',
    body: 'Ba gạch đầu dòng trước khi ngủ: một điều vui, một điều khó, một điều nhớ đến người kia.',
  },
  {
    lead: 'Gửi ảnh bầu trời.',
    body: 'Cùng một bầu trời, hai góc nhìn — lời "em nhớ anh" không cần chữ.',
  },
  {
    lead: 'Ghi tâm trạng, không chỉ hoạt động.',
    body: '"Hôm nay hơi chông chênh" mở cửa cho một cuộc gọi; "hôm nay họp 3 cuộc" thì không.',
  },
  {
    lead: 'Một khoảng im lặng chung.',
    body: 'Gọi video và... mỗi người làm việc của mình. Sự hiện diện không cần liên tục có chuyện để nói.',
  },
];

const WEEKLY: Habit[] = [
  {
    lead: 'Tối hẹn hò trực tuyến cố định.',
    body: 'Cùng nấu một món qua video, cùng chơi một game, cùng xem một bộ phim bấm play cùng giây.',
  },
  {
    lead: 'Viết thư giấy mỗi tháng.',
    body: 'Thứ duy nhất người kia cầm được trên tay. Chậm — và vì thế mà quý.',
  },
  {
    lead: 'Đếm ngày gặp lại, để ở nơi nhìn thấy.',
    body: 'Một con số đếm ngược trên màn hình chính đổi cảm giác "xa vô tận" thành "còn 47 ngày".',
  },
  {
    lead: 'Lên kế hoạch lần gặp tiếp theo trước khi tạm biệt.',
    body: 'Chia tay ở sân bay dễ thở hơn rất nhiều khi vé lần sau đã nằm trong máy.',
  },
  {
    lead: 'Giữ một dự án chung.',
    body: 'Cuốn nhật ký hai người cùng viết, danh sách phim đã xem, quỹ tiết kiệm cho chuyến đi chung — thứ gì đó lớn lên theo thời gian xa nhau.',
  },
  {
    lead: 'Chăm chính mình.',
    body: 'Nghe ngược đời — nhưng một người đang sống tốt là món quà lớn nhất cho người ở xa. Nỗi nhớ khỏe mạnh khác nỗi nhớ kiệt sức.',
  },
];

const FAQS = [
  {
    q: 'Nên gọi video mỗi ngày không?',
    a: 'Không bắt buộc. Chất lượng thắng số lượng: một cuộc gọi 20 phút thật sự có mặt tốt hơn hai giờ gọi cho có trong lúc mỗi người lướt điện thoại của mình. Các "nhịp nhỏ" (tin nhắn neo, câu hỏi chung) lấp khoảng trống giữa các cuộc gọi tốt hơn việc kéo dài chúng.',
  },
  {
    q: 'Lệch múi giờ nhiều thì làm sao giữ "giờ chào cố định"?',
    a: 'Đổi từ "cùng giờ" sang "cùng vị trí trong ngày của mỗi người": tin đầu tiên sau khi thức dậy và tin cuối trước khi ngủ — của ai theo giờ người nấy. Người này thức dậy với lời chúc ngủ ngon của người kia: lệch giờ trở thành một điều dễ thương thay vì một trở ngại.',
  },
];

function HabitList({ habits, start }: { habits: Habit[]; start?: number }) {
  return (
    <ol className="list-roomy" start={start}>
      {habits.map((habit) => (
        <li key={habit.lead}>
          <strong>{habit.lead}</strong> {habit.body}
        </li>
      ))}
    </ol>
  );
}

export default function Page() {
  return (
    <BlogArticle
      post={post}
      lead={
        <>
          Yêu xa không thua vì khoảng cách — nó thua vì <em>mất nhịp</em>: hai
          cuộc sống dần chạy theo hai lịch riêng, đến lúc gọi nhau chỉ còn
          &quot;hôm nay bình thường&quot;. Những cặp đi đường dài đều có chung
          một bí mật: các thói quen nhỏ, lặp lại, hai người cùng giữ. Đây là 12
          thói quen như thế.
        </>
      }
      nextReads={[
        {
          slug: 'y-tuong-ky-niem-ngay-yeu',
          label: '24 ý tưởng kỷ niệm ngày yêu nhau (có mục cho yêu xa)',
        },
        {
          slug: 'viet-nhat-ky-cap-doi',
          label: 'Cách viết nhật ký cặp đôi',
        },
      ]}
    >
      <h2>Nhịp mỗi ngày (1–6)</h2>
      <HabitList habits={DAILY} />

      <h2>Nhịp mỗi tuần &amp; xa hơn (7–12)</h2>
      <HabitList habits={WEEKLY} start={7} />

      <div className="callout">
        <strong>Đừng ôm cả 12.</strong> Chọn 2–3 thói quen vừa sức và giữ đều
        trong một tháng. Đều đặn nhỏ thắng hoành tráng thất thường.
      </div>

      <div style={{ margin: '36px 0' }}>
        <AppCta
          title="Một nhịp chung cho hai múi giờ"
          body="Câu hỏi mỗi ngày, đếm ngày bên nhau và widget nhắc dịu dàng — Duoly sinh ra cho những cặp đôi giữ nhịp từ xa."
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
