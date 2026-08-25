import { expect, test } from '@playwright/test';

// Ngôn ngữ nằm trong URL, không còn trong localStorage: nút VI/EN là liên kết
// tới chính trang đang xem ở ngôn ngữ kia.
test.describe('Chuyển ngôn ngữ', () => {
  test('bấm EN ở trang chủ thì sang /en và nội dung đổi theo', async ({
    page,
  }) => {
    await page.goto('/');

    await expect(page.locator('h1')).toHaveText(
      'Giữ lại nhịp yêu thương, mỗi ngày một chút.',
    );
    await expect(page.locator('html')).toHaveAttribute('lang', 'vi');

    await page.getByRole('link', { name: 'EN', exact: true }).click();

    await expect(page).toHaveURL('/en');
    await expect(page.locator('h1')).toHaveText(
      'Keep your rhythm of love, a little every day.',
    );
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('nút đổi ngôn ngữ giữ nguyên trang đang xem', async ({ page }) => {
    await page.goto('/faq');

    await page.getByRole('link', { name: 'EN', exact: true }).click();

    await expect(page).toHaveURL('/en/faq');
    await expect(page.locator('h1')).toHaveText('Frequently asked questions');
    await expect(page.locator('summary').first()).toContainText(
      'Is Amor AI free?',
    );
  });

  test('quay lại VI thì về đúng URL tiếng Việt', async ({ page }) => {
    await page.goto('/en/team');
    await expect(page.locator('h1')).toHaveText(
      'A small studio doing one thing carefully',
    );

    await page.getByRole('link', { name: 'VI', exact: true }).click();

    await expect(page).toHaveURL('/team');
    await expect(page.locator('h1')).toHaveText(
      'Một studio nhỏ, làm một việc thật kỹ',
    );
  });

  test('trang blog chỉ có tiếng Việt nên không hiện nút đổi ngôn ngữ', async ({
    page,
  }) => {
    await page.goto('/blog/yeu-xa');

    await expect(
      page.getByRole('link', { name: 'EN', exact: true }),
    ).toHaveCount(0);
    await expect(
      page.getByRole('link', { name: 'VI', exact: true }),
    ).toHaveCount(0);
  });
});

test.describe('Chuyển theme', () => {
  test('Paper là mặc định, đổi sang Dusk thì nền tối lại', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('html')).not.toHaveAttribute('data-theme', 'dusk');

    await page.getByRole('button', { name: 'Theme' }).click();

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dusk');
    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      'rgb(15, 13, 14)',
    );
  });

  test('Dusk được giữ khi sang trang khác và không nháy sáng', async ({
    page,
  }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Theme' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dusk');

    await page.goto('/privacy');

    // Script trong <head> phải gắn data-theme trước khi trang vẽ lần đầu.
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dusk');
  });

  test('đổi ngược về Paper thì thuộc tính data-theme bị gỡ', async ({
    page,
  }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Theme' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dusk');

    await page.getByRole('button', { name: 'Theme' }).click();

    await expect(page.locator('html')).not.toHaveAttribute('data-theme', 'dusk');
    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      'rgb(255, 248, 243)',
    );
  });
});

test('FAQ mở ra khi bấm vào câu hỏi', async ({ page }) => {
  await page.goto('/faq');

  const firstItem = page.locator('details').first();
  await expect(firstItem).not.toHaveAttribute('open', '');

  await firstItem.locator('summary').click();

  await expect(firstItem).toHaveAttribute('open', '');
  await expect(firstItem).toContainText('Bản Free luôn giữ trọn giá trị cốt lõi');
});
