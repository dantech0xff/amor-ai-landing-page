import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { FaqPage } from '@/components/pages/faq-page';
import { faqContent } from '@/lib/content/faq';
import { breadcrumbLd, faqPageLd, graph, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'vi',
  path: '/faq',
  title: 'Câu hỏi thường gặp về Duoly — FAQ',
  description:
    'Câu hỏi thường gặp về Duoly — a couple app: miễn phí và Premium, quyền riêng tư, widget, khôi phục giao dịch, xóa dữ liệu và hơn thế nữa.',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          faqPageLd(faqContent('vi')),
          breadcrumbLd([
            { name: 'Trang chủ', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
        )}
      />
      <FaqPage lang="vi" />
    </>
  );
}
