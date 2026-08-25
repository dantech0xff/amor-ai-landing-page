import type { JsonLdNode } from '@/lib/seo';

/**
 * Chèn một khối structured data. Dùng `dangerouslySetInnerHTML` vì React sẽ
 * escape dấu ngoặc kép trong nội dung script và làm JSON hỏng.
 * `<` được thay bằng `<` để chuỗi không thể đóng sớm thẻ script.
 */
export function JsonLd({ data }: { data: JsonLdNode }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
