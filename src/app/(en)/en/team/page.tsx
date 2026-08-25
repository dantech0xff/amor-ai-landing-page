import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { TeamPage } from '@/components/pages/team-page';
import { breadcrumbLd, graph, organizationLd, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  path: '/team',
  title: 'Team — 1010 Creative, the studio behind Amor AI',
  description:
    'Meet the 1010 Creative team behind Amor AI — a couple app: product, engineering, design, and the belief that a couple’s privacy deserves care.',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Team', path: '/en/team' },
          ]),
        )}
      />
      <TeamPage lang="en" />
    </>
  );
}
