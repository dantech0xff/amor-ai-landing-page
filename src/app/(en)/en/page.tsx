import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { HomePage } from '@/components/pages/home-page';
import { KEYWORDS } from '@/lib/content/keywords';
import {
  graph,
  mobileApplicationLd,
  organizationLd,
  pageMetadata,
  websiteLd,
} from '@/lib/seo';

const DESCRIPTION =
  'Amor AI is a couple app for counting your days together and keeping a shared journal: memories with photos, one gentle question a day, and a warm home-screen widget. Private, ad-free, free to start.';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  path: '/',
  title: 'Amor AI — Couple App for Days Together & Shared Journal',
  description: DESCRIPTION,
  keywords: KEYWORDS.homeEn,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd('en'),
          mobileApplicationLd('en', DESCRIPTION),
        )}
      />
      <HomePage lang="en" />
    </>
  );
}
