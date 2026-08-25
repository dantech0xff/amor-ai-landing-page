import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Lora } from 'next/font/google';
import { PreferenceSync } from '@/components/preference-sync';
import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-be-vietnam-pro',
});

const lora = Lora({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-lora',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amorai.dantech.academy'),
  title: 'Amor AI — a couple app · Giữ lại nhịp yêu thương mỗi ngày',
  description:
    'Amor AI là ứng dụng dành cho cặp đôi: đếm ngày bên nhau, viết ký ức, câu hỏi mỗi ngày và widget ấm áp — riêng tư, không quảng cáo.',
  icons: { icon: '/web_hi_res_512.png' },
};

/** Áp theme đã lưu trước khi trang vẽ, tránh nháy sáng khi đang ở Dusk. */
const THEME_BOOTSTRAP = `(function(){try{if(localStorage.getItem('amor-theme')==='dusk'){document.documentElement.dataset.theme='dusk';}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${lora.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/*
          Material Symbols không có trong danh mục next/font nên phải nạp qua link.
          display=block là chủ ý: tránh hiện tên ligature ("chevron_right") trước khi
          font tải xong. Đây là root layout nên link áp dụng cho toàn site.
        */}
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,300..600,0..1,0&display=block"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
      </head>
      <body>
        <PreferenceSync />
        {children}
      </body>
    </html>
  );
}
