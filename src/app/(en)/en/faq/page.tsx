import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { FaqPage } from '@/components/pages/faq-page';
import { faqContent } from '@/lib/content/faq';
import { breadcrumbLd, faqPageLd, graph, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  path: '/faq',
  title: 'Frequently Asked Questions — Duoly',
  description:
    'Frequently asked questions about Duoly — a couple app: free and Premium, privacy, the widget, restoring purchases, deleting your data and more.',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          faqPageLd(faqContent('en')),
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'FAQ', path: '/en/faq' },
          ]),
        )}
      />
      <FaqPage lang="en" />
    </>
  );
}
