import { expect, test } from '@playwright/test';
import { ROUTES } from './routes';

test.describe('Mọi route đều phục vụ được', () => {
  for (const route of ROUTES) {
    test(`${route.path} trả 200 với đúng tiêu đề`, async ({ page }) => {
      const response = await page.goto(route.path);

      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(route.title);
      await expect(page.locator('h1')).toHaveText(route.heading);
    });
  }
});

test('icon app được phục vụ dưới dạng PNG', async ({ request }) => {
  const response = await request.get('/web_hi_res_512.png');

  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('image/png');
});

test('điều hướng nội bộ hoạt động từ trang chủ tới bài blog', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Xem tất cả bài viết →' }).click();

  await expect(page).toHaveURL('/blog');

  await page
    .getByRole('link', {
      name: '36 câu hỏi để hiểu nhau sâu hơn — và cách dùng chúng cho đúng',
    })
    .click();

  await expect(page).toHaveURL('/blog/cau-hoi-cap-doi');
});

test('không có lỗi JavaScript khi tải trang chủ', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));

  await page.goto('/');
  await page.waitForLoadState('networkidle');

  expect(errors).toEqual([]);
});
