'use client';

import { LegalPage, LegalSeeAlso } from '@/components/legal-page';
import { privacyContent } from '@/lib/content/privacy';
import { useLang } from '@/lib/preferences';

export function PrivacyPage() {
  const { lang } = useLang();
  return (
    <LegalPage
      document={privacyContent(lang)}
      seeAlso={<LegalSeeAlso target="terms" />}
    />
  );
}
