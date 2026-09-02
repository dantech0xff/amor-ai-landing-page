import { Be_Vietnam_Pro, Lora } from 'next/font/google';
import type { ReactNode } from 'react';
import { PreferenceSync } from '@/components/preference-sync';
import type { Lang } from '@/lib/site';
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

/** Áp theme đã lưu trước khi trang vẽ, tránh nháy sáng khi đang ở Dusk. */
const THEME_BOOTSTRAP = `(function(){try{if(localStorage.getItem('duoly-theme')==='dusk'){document.documentElement.dataset.theme='dusk';}}catch(e){}})();`;

/**
 * Khung <html> dùng chung cho hai root layout.
 * Mỗi ngôn ngữ có một root layout riêng vì App Router chỉ cho phép đặt thuộc
 * tính `lang` của <html> ở tầng layout gốc — nhờ vậy `lang` được render sẵn ở
 * server thay vì phải sửa bằng JavaScript sau khi trang đã tải.
 */
export function RootShell({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return (
    <html lang={lang} className={`${beVietnamPro.variable} ${lora.variable}`}>
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
