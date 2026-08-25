'use client';

import { LegalPage, LegalSeeAlso } from '@/components/legal-page';
import { termsContent } from '@/lib/content/terms';
import { useLang } from '@/lib/preferences';

export function TermsPage() {
  const { lang } = useLang();
  return (
    <LegalPage
      document={termsContent(lang)}
      seeAlso={<LegalSeeAlso target="privacy" />}
    />
  );
}
