'use client';

import { LegalPage, LegalSeeAlso } from '@/components/legal-page';
import { privacyContent } from '@/lib/content/privacy';
import type { Lang } from '@/lib/site';

export function PrivacyPage({ lang }: { lang: Lang }) {
  return (
    <LegalPage
      lang={lang}
      document={privacyContent(lang)}
      seeAlso={<LegalSeeAlso target="terms" lang={lang} />}
    />
  );
}
