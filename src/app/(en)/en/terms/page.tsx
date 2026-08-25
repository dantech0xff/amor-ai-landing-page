import type { Metadata } from 'next';
import { TermsPage } from '@/components/pages/terms-page';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  path: '/terms',
  title: 'Terms of Service — Amor AI',
  description:
    'The Amor AI terms of service — a couple app: the service, your account, your content, Premium and payments, and governing law.',
});

export default function Page() {
  return <TermsPage lang="en" />;
}
