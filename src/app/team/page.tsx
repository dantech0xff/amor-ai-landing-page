import type { Metadata } from 'next';
import { TeamPage } from './team-page';

export const metadata: Metadata = {
  title: 'Team — Amor AI · 1010 Creative',
  description:
    'Gặp đội ngũ 1010 Creative đứng sau Amor AI — a couple app: sản phẩm, kỹ thuật, thiết kế và niềm tin rằng sự riêng tư của cặp đôi đáng được nâng niu.',
};

export default function Page() {
  return <TeamPage />;
}
