'use client';

import { LegalPage, LegalSeeAlso } from '@/components/legal-page';
import { termsContent } from '@/lib/content/terms';
import type { Lang } from '@/lib/site';

export function TermsPage({ lang }: { lang: Lang }) {
  return (
    <LegalPage
      lang={lang}
      document={termsContent(lang)}
      seeAlso={<LegalSeeAlso target="privacy" lang={lang} />}
    />
  );
}
