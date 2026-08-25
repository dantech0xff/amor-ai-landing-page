import { defineConfig, devices } from '@playwright/test';
import { SITE } from './src/lib/site';

/** Cổng cố định cho dự án này để không sinh tiến trình thừa trên cổng ngẫu nhiên. */
export const PORT = 3210;

/**
 * Mặc định test chạy trên bản production dựng tại máy. Đặt `E2E_BASE_URL` để trỏ vào
 * một site đã deploy: `production` là địa chỉ chính thức, hoặc điền thẳng một URL
 * (ví dụ bản preview của Vercel). Khi trỏ ra ngoài thì không dựng server cục bộ nữa.
 */
const target = process.env.E2E_BASE_URL?.trim();
const remoteUrl = target === 'production' ? SITE.url : target || null;

export const BASE_URL = remoteUrl ?? `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  // Trên CI kèm báo cáo HTML để tải về xem khi test hỏng.
  reporter: process.env.CI
    ? [['github'], ['html', { open: 'never' }]]
    : [['list']],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: remoteUrl
    ? undefined
    : {
        command: `npm run build && npm run start -- --port ${PORT}`,
        url: BASE_URL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
});
