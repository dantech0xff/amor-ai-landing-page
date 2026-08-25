import type { Metadata } from 'next';
import { TermsPage } from '@/components/pages/terms-page';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'vi',
  path: '/terms',
  title: 'Điều khoản dịch vụ — Amor AI',
  description:
    'Điều khoản dịch vụ của Amor AI — a couple app: dịch vụ, tài khoản, nội dung của bạn, Premium và thanh toán, luật áp dụng.',
});

export default function Page() {
  return <TermsPage lang="vi" />;
}
