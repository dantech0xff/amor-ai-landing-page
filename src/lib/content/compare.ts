/**
 * Nội dung trang so sánh app đếm ngày yêu.
 *
 * Nguyên tắc viết: chỉ khẳng định chắc chắn về Amor AI. Các app khác đổi tính
 * năng và giá liên tục, nên cột đối chiếu mô tả đặc điểm chung của nhóm app đếm
 * ngày kinh điển và ghi rõ "tuỳ app" ở chỗ không thể nói chắc. Không bịa giá,
 * không bịa điểm số, không nói xấu.
 */

/** Ba đáp án dùng trong bảng — đủ để không phải khẳng định điều không kiểm chứng được. */
export type Verdict = 'yes' | 'no' | 'varies';

export type CompareRow = {
  feature: string;
  /** Giải thích ngắn để hàng nào cũng nói được điều gì đó cụ thể. */
  note: string;
  amor: Verdict;
  classic: Verdict;
};

/** Tên nhóm app đối chiếu, dùng lại ở tiêu đề cột và trong bài. */
export const CLASSIC_APPS = ['Been Together', 'Been Love Memory', 'Love Days'];

export const COMPARE_ROWS: CompareRow[] = [
  {
    feature: 'Đếm ngày bên nhau',
    note: 'Con số trung tâm của cả nhóm app này. Amor AI cho đổi cách đọc: tổng ngày, năm–tháng–ngày, hoặc ngày bắt đầu.',
    amor: 'yes',
    classic: 'yes',
  },
  {
    feature: 'Widget màn hình chính',
    note: 'Nhìn thấy con số mà không cần mở app — lý do chính khiến người ta cài app đếm ngày.',
    amor: 'yes',
    classic: 'yes',
  },
  {
    feature: 'Nhắc cột mốc và ngày quan trọng',
    note: 'Ngày thứ 100, 1000, sinh nhật, ngày cưới. Amor AI kèm mẫu thiệp để chia sẻ khoảnh khắc.',
    amor: 'yes',
    classic: 'varies',
  },
  {
    feature: 'Nhật ký chung có ảnh',
    note: 'Viết một dòng hay cả trang, kèm ảnh, xếp thành dòng thời gian quay lại đọc được.',
    amor: 'yes',
    classic: 'varies',
  },
  {
    feature: 'Câu hỏi mỗi ngày cho hai người',
    note: 'Một câu gợi ý mỗi ngày để hai bạn cùng trả lời — thứ để nói chuyện vượt xa "hôm nay ăn gì".',
    amor: 'yes',
    classic: 'no',
  },
  {
    feature: 'Ghi tâm trạng mỗi ngày',
    note: 'Một chạm ghi lại hôm nay trong lòng bạn, không streak, không áp lực phải đều.',
    amor: 'yes',
    classic: 'varies',
  },
  {
    feature: 'AI gợi ý cách diễn đạt',
    note: 'Khi thiếu lời, AI đề xuất một cách viết. Bạn vẫn là người quyết định giữ lại gì.',
    amor: 'yes',
    classic: 'no',
  },
  {
    feature: 'Không có quảng cáo',
    note: 'Amor AI không chèn quảng cáo ở bản Free. Nhiều app đếm ngày miễn phí sống bằng quảng cáo.',
    amor: 'yes',
    classic: 'varies',
  },
  {
    feature: 'Không có bảng tin xã hội',
    note: 'Không bạn bè, không lượt thích, không so kè với cặp khác. Chỉ hai bạn.',
    amor: 'yes',
    classic: 'varies',
  },
  {
    feature: 'Khoá app bằng sinh trắc học',
    note: 'Vân tay hoặc khuôn mặt để mở. Ở Amor AI đây là quyền lợi Premium.',
    amor: 'yes',
    classic: 'varies',
  },
  {
    feature: 'Dùng được khi chỉ một người cài',
    note: 'Amor AI không giả vờ người kia đang online hay "đã đọc" khi họ chưa cài.',
    amor: 'yes',
    classic: 'yes',
  },
  {
    feature: 'Có bản iOS',
    note: 'Amor AI hiện phát hành trên Google Play, bản iOS đang được chuẩn bị.',
    amor: 'no',
    classic: 'varies',
  },
];

export type CompareFaq = { q: string; a: string };

export const COMPARE_FAQS: CompareFaq[] = [
  {
    q: 'App đếm ngày yêu nào tốt nhất?',
    a: 'Không có câu trả lời chung, vì hai nhóm người dùng muốn hai thứ khác nhau. Nếu bạn chỉ cần một con số đẹp trên màn hình chính thì bất kỳ app đếm ngày kinh điển nào cũng đủ — Been Together, Been Love Memory hay Love Days đều làm tốt việc đó và đều đã có hàng triệu lượt tải. Nếu bạn muốn con số ấy đi kèm chỗ để viết lại vì sao ngày đó đáng nhớ, thì bạn đang tìm một cuốn nhật ký chung có đếm ngày — đó là thứ Amor AI được làm ra để trở thành.',
  },
  {
    q: 'Amor AI khác Been Together ở điểm nào?',
    a: 'Been Together tập trung vào một việc và làm gọn: đếm ngày kể từ một mốc, hiện lên widget. Amor AI lấy con số đó làm cửa vào cho một cuốn sổ chung — ghi chú kèm ảnh, tâm trạng mỗi ngày, một câu hỏi gợi ý mỗi ngày, và AI đứng cạnh khi bạn bí lời. Đổi lại, Amor AI là app nặng hơn về nội dung và hiện chỉ có trên Android.',
  },
  {
    q: 'Chuyển từ Been Love Memory hay Love Days sang Amor AI có mất kỷ niệm không?',
    a: 'Các app đếm ngày không chia sẻ dữ liệu cho nhau nên không có nút nhập tự động. Nhưng thứ thật sự cần mang theo chỉ là ngày bắt đầu: nhập lại một lần, con số đếm ngày ở Amor AI sẽ khớp ngay với app cũ. Ảnh và ghi chú cũ thì thêm dần theo ngày cũng được — không cần chép lại hết trong một buổi.',
  },
  {
    q: 'Amor AI có miễn phí không?',
    a: 'Có. Bản Free giữ trọn phần cốt lõi: đếm ngày, viết ghi chú, tâm trạng mỗi ngày, widget và 3 phông chữ. Ký ức bạn tạo ra không bao giờ bị khoá sau paywall. Premium chỉ mở thêm AI vượt hạn mức, mẫu thiệp cột mốc, 5 phông chữ nữa và khoá app bằng sinh trắc học.',
  },
  {
    q: 'Có cần cả hai người cùng cài Amor AI không?',
    a: 'Không bắt buộc. App hoạt động trọn vẹn kể cả khi chỉ một người dùng, và không bao giờ giả vờ người kia đang online hay đã đọc.',
  },
  {
    q: 'Amor AI có quảng cáo không?',
    a: 'Không. Bản Free không chèn quảng cáo. Đây là điểm khác biệt đáng cân nhắc nếu bạn từng phải xem quảng cáo giữa lúc đang xem lại ảnh kỷ niệm.',
  },
];
