import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { TeamPage } from '@/components/pages/team-page';
import { breadcrumbLd, graph, organizationLd, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'vi',
  path: '/team',
  title: 'Team — 1010 Creative, studio đứng sau Amor AI',
  description:
    'Gặp đội ngũ 1010 Creative đứng sau Amor AI — a couple app: sản phẩm, kỹ thuật, thiết kế và niềm tin rằng sự riêng tư của cặp đôi đáng được nâng niu.',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          breadcrumbLd([
            { name: 'Trang chủ', path: '/' },
            { name: 'Team', path: '/team' },
          ]),
        )}
      />
      <TeamPage lang="vi" />
    </>
  );
}
