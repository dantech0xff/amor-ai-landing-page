import type { Metadata } from 'next';
import { FaqPage } from './faq-page';

export const metadata: Metadata = {
  title: 'FAQ — Amor AI · Câu hỏi thường gặp',
  description:
    'Câu hỏi thường gặp về Amor AI — a couple app: miễn phí và Premium, quyền riêng tư, widget, khôi phục giao dịch, xóa dữ liệu và hơn thế nữa.',
};

export default function Page() {
  return <FaqPage />;
}
