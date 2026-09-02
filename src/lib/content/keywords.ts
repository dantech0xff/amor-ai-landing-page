/**
 * Từ khoá mục tiêu của từng trang.
 *
 * Thẻ `<meta keywords>` không còn ảnh hưởng xếp hạng từ 2009, nhưng giữ danh
 * sách ở một chỗ giúp tiêu đề, mô tả và nội dung không trôi khỏi ý định ban đầu.
 * Tên ứng dụng của bên thứ ba chỉ xuất hiện ở trang so sánh.
 */
export const KEYWORDS = {
  homeVi: [
    'duoly',
    'app đếm ngày yêu',
    'đếm ngày yêu',
    'đếm ngày bên nhau',
    'app cho cặp đôi',
    'nhật ký cặp đôi',
    'widget đếm ngày yêu',
    'app kỷ niệm ngày yêu',
  ],
  homeEn: [
    'duoly',
    'couple app',
    'days together counter',
    'anniversary countdown app',
    'couple journal app',
    'relationship widget',
    'private couple diary',
  ],
  compare: [
    'been together',
    'been love memory',
    'been love',
    'love days',
    'app đếm ngày yêu',
    'so sánh app cặp đôi',
    'app đếm ngày yêu nào tốt',
    'duoly',
  ],
} as const;
