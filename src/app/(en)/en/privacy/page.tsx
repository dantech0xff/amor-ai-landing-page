import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/pages/privacy-page';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  path: '/privacy',
  title: 'Privacy Policy — Amor AI',
  description:
    'The Amor AI privacy policy: what data is collected, how it is used, and what the app will never do with your notes.',
});

export default function Page() {
  return <PrivacyPage lang="en" />;
}
