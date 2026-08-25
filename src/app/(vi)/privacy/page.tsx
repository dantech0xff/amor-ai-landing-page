import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/pages/privacy-page';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'vi',
  path: '/privacy',
  title: 'Chính sách quyền riêng tư — Amor AI',
  description:
    'Chính sách quyền riêng tư của Amor AI: dữ liệu thu thập, cách sử dụng, và những điều app không bao giờ làm với ghi chú của bạn.',
});

export default function Page() {
  return <PrivacyPage lang="vi" />;
}
