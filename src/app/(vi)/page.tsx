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
  'Duoly là app đếm ngày yêu và nhật ký cho cặp đôi: đếm ngày bên nhau, viết lại ký ức, một câu hỏi mỗi ngày và widget ấm áp ngay trên màn hình chính. Riêng tư, không quảng cáo, miễn phí để bắt đầu.';

export const metadata: Metadata = pageMetadata({
  lang: 'vi',
  path: '/',
  title: 'Duoly — App đếm ngày yêu & nhật ký cặp đôi',
  description: DESCRIPTION,
  keywords: KEYWORDS.homeVi,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd('vi'),
          mobileApplicationLd('vi', DESCRIPTION),
        )}
      />
      <HomePage lang="vi" />
    </>
  );
}
