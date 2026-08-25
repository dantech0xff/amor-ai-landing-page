import type { Metadata } from 'next';
import { PrivacyPage } from './privacy-page';

export const metadata: Metadata = {
  title: 'Chính sách quyền riêng tư — Amor AI · Privacy Policy',
  description:
    'Chính sách quyền riêng tư của Amor AI: dữ liệu thu thập, cách sử dụng, những điều app không bao giờ làm với ghi chú của bạn. Privacy Policy in Vietnamese and English.',
};

export default function Page() {
  return <PrivacyPage />;
}
