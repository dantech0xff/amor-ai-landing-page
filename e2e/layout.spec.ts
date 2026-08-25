import { expect, test } from '@playwright/test';
import { ROUTES, VIEWPORTS } from './routes';

/**
 * Đo bằng cách thử cuộn ngang rồi đọc lại scrollX. Không dùng scrollWidth vì
 * `html { overflow-x: clip }` vẫn báo bề rộng của phần tử trang trí tràn khung,
 * trong khi người dùng thực tế không cuộn ngang được.
 *
 * behavior: 'instant' là bắt buộc — `html` đặt `scroll-behavior: smooth`, nếu để
 * mặc định thì lệnh cuộn chạy animation và scrollX đọc ngay sau đó luôn bằng 0,
 * khiến phép đo luôn đúng một cách vô nghĩa.
 */
async function canScrollHorizontally(page: import('@playwright/test').Page) {
  return page.evaluate(() => {
    window.scrollTo({ left: 500, top: 0, behavior: 'instant' });
    const scrolled = window.scrollX;
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
    return scrolled > 0;
  });
}

for (const viewport of VIEWPORTS) {
  test.describe(`${viewport.name} (${viewport.width}px)`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const route of ROUTES) {
      test(`${route.path} không cuộn ngang được`, async ({ page }) => {
        await page.goto(route.path);
        await page.waitForLoadState('networkidle');

        expect(await canScrollHorizontally(page)).toBe(false);
      });
    }
  });
}

test.describe('mobile 390px', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('khung điện thoại ở hero co lại vừa màn hình', async ({ page }) => {
    await page.goto('/');

    const frame = page.locator('[style*="min(392px"]').first();
    const box = await frame.boundingBox();

    expect(box).not.toBeNull();
    expect(box!.width).toBeLessThanOrEqual(390);
  });
});

test('thanh điều hướng dính khi cuộn', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, 2000));

  const nav = page.getByRole('link', { name: 'Tải app' });
  const box = await nav.boundingBox();

  expect(box).not.toBeNull();
  expect(box!.y).toBeLessThan(100);
});
