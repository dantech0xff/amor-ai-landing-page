/**
 * Dựng public/og-image.png (1200×630) — ảnh xem trước khi chia sẻ link.
 *
 * Chạy tay khi đổi thương hiệu hoặc câu tagline:
 *   node scripts/build-og-image.mjs
 *
 * Dùng Playwright (đã có sẵn cho E2E) thay vì next/og: ảnh là tài sản tĩnh,
 * dựng một lần rồi commit thì không phải tải font tiếng Việt lúc build.
 */
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const iconDataUri = `data:image/png;base64,${readFileSync(
  resolve(root, 'public/web_hi_res_512.png'),
).toString('base64')}`;

const html = `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&display=block"
      rel="stylesheet"
    />
    <style>
      * { margin: 0; box-sizing: border-box; }
      body {
        width: 1200px;
        height: 630px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 26px;
        padding: 0 88px;
        font-family: 'Be Vietnam Pro', system-ui, sans-serif;
        color: #4A1530;
        background: #FFF8F3;
        position: relative;
        overflow: hidden;
      }
      .glow {
        position: absolute;
        border-radius: 999px;
        filter: blur(90px);
      }
      .glow-love {
        width: 460px; height: 460px;
        background: #FFB5C6; opacity: 0.55;
        top: -130px; right: -90px;
      }
      .glow-butter {
        width: 380px; height: 380px;
        background: #FFD76A; opacity: 0.35;
        bottom: -150px; right: 190px;
      }
      .brand { display: flex; align-items: center; gap: 16px; z-index: 1; }
      .brand img { width: 76px; height: 76px; border-radius: 22px; }
      .brand-name { font-size: 38px; font-weight: 700; letter-spacing: -0.01em; }
      .badge {
        font-size: 15px; font-weight: 600; letter-spacing: 0.14em;
        text-transform: uppercase; color: #A26E80;
        background: #FFF0F3; border-radius: 999px; padding: 8px 16px;
      }
      h1 {
        z-index: 1;
        max-width: 830px;
        font-size: 66px; font-weight: 700;
        line-height: 1.1; letter-spacing: -0.025em;
      }
      p {
        z-index: 1;
        max-width: 790px;
        font-size: 26px; line-height: 1.45; color: #6B4050;
      }
      .rule { z-index: 1; width: 96px; height: 6px; border-radius: 999px; background: #FF4D79; }
    </style>
  </head>
  <body>
    <div class="glow glow-love"></div>
    <div class="glow glow-butter"></div>
    <div class="brand">
      <img src="${iconDataUri}" alt="" />
      <span class="brand-name">Duoly</span>
      <span class="badge">a couple app</span>
    </div>
    <div class="rule"></div>
    <h1>Giữ lại nhịp yêu thương, mỗi ngày một chút.</h1>
    <p>Đếm ngày bên nhau, nhật ký chung có ảnh, một câu hỏi mỗi ngày — riêng tư, không quảng cáo.</p>
  </body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: resolve(root, 'public/og-image.png') });
await browser.close();

console.log('Đã dựng public/og-image.png');
