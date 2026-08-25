import type { Metadata } from 'next';
import { TermsPage } from './terms-page';

export const metadata: Metadata = {
  title: 'Điều khoản dịch vụ — Amor AI · Terms of Service',
  description:
    'Điều khoản dịch vụ của Amor AI — a couple app: dịch vụ, tài khoản, nội dung của bạn, Premium và thanh toán, luật áp dụng. Terms of Service in Vietnamese and English.',
};

export default function Page() {
  return <TermsPage />;
}
