import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { AppCta } from '@/components/app-cta';
import { BlogArticle } from '@/components/blog-article';
import { postBySlug } from '@/lib/content/blog';

export const metadata: Metadata = {
  title: '24 ý tưởng kỷ niệm ngày yêu nhau ấm áp, dễ làm | Amor AI Blog',
  description:
    '24 ý tưởng kỷ niệm ngày yêu nhau: tại nhà, ra ngoài, 0 đồng và cho cặp đôi yêu xa. Gợi ý cho mốc 100 ngày, 1 năm, 1000 ngày — thực tế và dễ làm theo.',
};

type Idea = { lead: string; body: ReactNode };

const AT_HOME: Idea[] = [
  {
    lead: 'Nấu lại "bữa đầu tiên".',
    body: 'Món hai bạn ăn trong buổi hẹn đầu — nấu vụng cũng được, vụng là một phần của chuyện kể.',
  },
  {
    lead: 'Đêm chiếu phim tự chọn lộ trình.',
    body: 'Ba bộ phim: một của em, một của anh, một cả hai chưa xem. Bốc thăm.',
  },
  {
    lead: 'Đọc lại tin nhắn năm đầu tiên.',
    body: 'Kéo lên đoạn chat cũ nhất còn giữ được và đọc to cho nhau nghe.',
  },
  {
    lead: 'Viết thư cho hai đứa của năm sau.',
    body: 'Mỗi người một lá, dán kín, hẹn mở đúng ngày này năm tới.',
  },
  {
    lead: 'Làm album 12 tấm.',
    body: 'Mỗi tháng một ảnh — in ra, viết một dòng sau lưng mỗi tấm.',
  },
  {
    lead: 'Picnic trong phòng khách.',
    body: 'Trải khăn, tắt đèn lớn, đồ ăn tay cầm. Ngoài trời mưa càng tốt.',
  },
  {
    lead: 'Chơi "36 câu hỏi".',
    body: (
      <>
        Nếu chưa từng — <Link href="/blog/cau-hoi-cap-doi">bài này</Link> có bản
        Việt hóa đầy đủ.
      </>
    ),
  },
  {
    lead: 'Học một thứ mới cùng nhau trong 2 giờ.',
    body: 'Gấp origami, một điệu nhảy, một bài đàn — dở đều nhau là vui nhất.',
  },
];

const OUTSIDE: Idea[] = [
  {
    lead: 'Quay lại nơi đầu tiên.',
    body: 'Quán cà phê, cổng trường, sân ga — nơi mọi thứ bắt đầu. Gọi đúng món cũ nếu còn.',
  },
  {
    lead: 'Đi một chuyến xe buýt/tàu không đích đến.',
    body: 'Xuống ở trạm nào tên nghe hay nhất.',
  },
  {
    lead: 'Săn bình minh.',
    body: 'Dậy lúc 4 giờ, mua đồ ăn sáng, tìm chỗ cao nhất gần nhà.',
  },
  {
    lead: 'Chụp một bộ ảnh "thường ngày".',
    body: 'Không studio — chỉ hai đứa, một chiếc điện thoại và khu phố quen.',
  },
  {
    lead: 'Hẹn hò như người lạ.',
    body: 'Đến quán bằng hai đường khác nhau, giả vờ mới gặp lần đầu. Ngượng — và đáng.',
  },
  {
    lead: 'Một đêm ở nơi cách nhà 30 km.',
    body: 'Không cần resort; một homestay nhỏ đủ làm mọi thứ mới lại.',
  },
];

const FREE: Idea[] = [
  {
    lead: 'Danh sách "100 điều nhỏ anh/em thích ở em/anh".',
    body: 'Viết tay, chia nhau mỗi người 50.',
  },
  {
    lead: 'Đổi vai một buổi tối.',
    body: 'Ai hay nấu thì được phục vụ; ai hay chọn phim thì nhường quyền.',
  },
  {
    lead: 'Đi bộ tuyến đường ngày xưa.',
    body: 'Con đường từng đưa nhau về — đi lại thật chậm.',
  },
  {
    lead: 'Kể lại "phiên bản của em".',
    body: 'Mỗi người kể lại chuyện hai đứa quen nhau theo trí nhớ của mình. Hai bản sẽ khác nhau — chỗ khác nhau chính là chỗ hay.',
  },
  {
    lead: 'Hộp thời gian.',
    body: 'Vé xem phim cũ, mẩu giấy nhắn, ảnh in — cho vào hộp, hẹn 5 năm sau mở.',
  },
];

const LONG_DISTANCE: Idea[] = [
  {
    lead: 'Ăn tối "cùng bàn" qua video.',
    body: 'Cùng món, cùng giờ, máy dựng ngang tầm mắt như ngồi đối diện.',
  },
  {
    lead: 'Gửi một gói "mùi của mình".',
    body: 'Chiếc áo, gói cà phê, lọ tinh dầu — mùi đi xa hơn ảnh.',
  },
  {
    lead: 'Xem cùng một bộ phim, bấm play cùng giây.',
    body: 'Nhắn bình luận như đang ngồi cạnh.',
  },
  {
    lead: 'Viết thư giấy.',
    body: 'Chậm một tuần mới tới — và đó chính là món quà.',
  },
  {
    lead: 'Đếm ngược ngày gặp lại.',
    body: 'Đặt con số ấy ở nơi cả hai nhìn thấy mỗi ngày.',
  },
];

function IdeaList({ ideas, start }: { ideas: Idea[]; start?: number }) {
  return (
    <ol className="list-roomy" start={start}>
      {ideas.map((idea) => (
        <li key={idea.lead}>
          <strong>{idea.lead}</strong> {idea.body}
        </li>
      ))}
    </ol>
  );
}

export default function Page() {
  const post = postBySlug('y-tuong-ky-niem-ngay-yeu');

  return (
    <BlogArticle
      post={post}
      title="24 ý tưởng kỷ niệm ngày yêu nhau ấm áp, dễ làm"
      lead={
        <>
          Kỷ niệm không cần hoành tráng — nó cần <em>đúng người</em>. Một buổi
          tối được chuẩn bị bằng sự để ý sẽ thắng mọi món quà đắt tiền mua vội.
          Dưới đây là 24 ý tưởng chia theo hoàn cảnh, để ngày thứ 100, ngày tròn
          năm hay ngày thứ 1000 của hai bạn có một hình dáng riêng.
        </>
      }
      nextReads={[
        {
          slug: 'yeu-xa',
          label: 'Yêu xa: 12 thói quen nhỏ giữ hai người ở gần',
        },
        {
          slug: 'cau-hoi-cap-doi',
          label: '36 câu hỏi để hiểu nhau sâu hơn',
        },
      ]}
    >
      <h2>Tại nhà (1–8)</h2>
      <IdeaList ideas={AT_HOME} />

      <h2>Ra ngoài (9–14)</h2>
      <IdeaList ideas={OUTSIDE} start={9} />

      <h2>0 đồng (15–19)</h2>
      <IdeaList ideas={FREE} start={15} />

      <h2>Yêu xa (20–24)</h2>
      <IdeaList ideas={LONG_DISTANCE} start={20} />

      <div className="callout">
        <strong>Chọn mốc nào?</strong> 100 ngày hợp những ý nhẹ (1, 3, 15); tròn
        năm xứng một kế hoạch lớn hơn (14, 12); ngày thứ 1000 là dịp của những
        thứ để dành được lâu (4, 5, 19).
      </div>

      <div style={{ margin: '36px 0' }}>
        <AppCta
          title="Đừng để lỡ ngày thứ 1000"
          body="Amor AI đếm ngày bên nhau và nhắc dịu dàng trước mỗi cột mốc — kèm mẫu thiệp để chia sẻ."
          action="Tải miễn phí"
        />
      </div>
    </BlogArticle>
  );
}
