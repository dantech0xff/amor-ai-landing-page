import { expect, test } from '@playwright/test';
import { ROUTES } from './routes';

const SITE_URL = 'https://amorai.dantech.academy';

/** URL tuyệt đối tương ứng một đường dẫn, khớp cách Next dựng canonical. */
const absolute = (path: string) =>
  path === '/' ? SITE_URL : `${SITE_URL}${path}`;

test.describe('Metadata của mọi route', () => {
  for (const route of ROUTES) {
    test(`${route.path} có canonical, mô tả và thẻ chia sẻ`, async ({
      page,
    }) => {
      await page.goto(route.path);

      // Canonical phải trỏ về chính nó, không trỏ nhầm về trang chủ do
      // thừa hưởng metadata của layout.
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        absolute(route.path),
      );

      const description = page.locator('meta[name="description"]');
      await expect(description).toHaveCount(1);
      const text = (await description.getAttribute('content')) ?? '';
      expect(text.length).toBeGreaterThan(80);
      expect(text.length).toBeLessThanOrEqual(200);

      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
        'content',
        route.title,
      );
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
        'content',
        absolute(route.path),
      );
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        'content',
        `${SITE_URL}/og-image.png`,
      );
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
        'content',
        'summary_large_image',
      );
    });
  }
});

test.describe('hreflang', () => {
  for (const route of ROUTES.filter((r) => r.altPath)) {
    test(`${route.path} khai báo đủ cặp vi/en/x-default`, async ({ page }) => {
      await page.goto(route.path);

      const viPath = route.path.startsWith('/en') ? route.altPath! : route.path;
      const enPath = route.path.startsWith('/en') ? route.path : route.altPath!;

      for (const [lang, path] of [
        ['vi', viPath],
        ['en', enPath],
        ['x-default', viPath],
      ] as const) {
        await expect(
          page.locator(`link[rel="alternate"][hreflang="${lang}"]`),
        ).toHaveAttribute('href', absolute(path));
      }
    });
  }

  for (const route of ROUTES.filter((r) => !r.altPath)) {
    test(`${route.path} chỉ có tiếng Việt nên không khai hreflang`, async ({
      page,
    }) => {
      await page.goto(route.path);

      await expect(page.locator('link[rel="alternate"]')).toHaveCount(0);
    });
  }
});

test('ảnh og-image được phục vụ dưới dạng PNG', async ({ request }) => {
  const response = await request.get('/og-image.png');

  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('image/png');
});

test('robots.txt cho phép thu thập và trỏ tới sitemap', async ({ request }) => {
  const response = await request.get('/robots.txt');

  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain('Allow: /');
  expect(body).not.toContain('Disallow: /\n');
  expect(body).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
});

test('sitemap.xml liệt kê đủ mọi route công khai', async ({ request }) => {
  const response = await request.get('/sitemap.xml');

  expect(response.status()).toBe(200);
  const body = await response.text();

  for (const route of ROUTES) {
    // Next thêm dấu gạch chéo cuối cho trang gốc.
    const loc = route.path === '/' ? `${SITE_URL}/` : absolute(route.path);
    expect(body, `thiếu ${route.path} trong sitemap`).toContain(
      `<loc>${loc}</loc>`,
    );
  }
});

test.describe('Structured data', () => {
  /** Đọc mọi khối JSON-LD của trang và trả về danh sách @type có trong đó. */
  async function jsonLdTypes(page: import('@playwright/test').Page) {
    const blocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents();

    return blocks.flatMap((raw) => {
      const parsed = JSON.parse(raw) as { '@graph': { '@type': string }[] };
      return parsed['@graph'].map((node) => node['@type']);
    });
  }

  test('trang chủ khai báo ứng dụng, tổ chức và website', async ({ page }) => {
    await page.goto('/');

    expect(await jsonLdTypes(page)).toEqual(
      expect.arrayContaining(['Organization', 'WebSite', 'MobileApplication']),
    );
  });

  test('FAQ khai báo FAQPage với đủ câu hỏi hiển thị', async ({ page }) => {
    await page.goto('/faq');

    const raw = await page
      .locator('script[type="application/ld+json"]')
      .first()
      .textContent();
    const graph = (JSON.parse(raw!) as { '@graph': Record<string, unknown>[] })[
      '@graph'
    ];
    const faq = graph.find((node) => node['@type'] === 'FAQPage') as {
      mainEntity: unknown[];
    };

    expect(faq.mainEntity.length).toBe(
      await page.locator('details').count(),
    );
  });

  test('bài blog khai báo BlogPosting và đường dẫn điều hướng', async ({
    page,
  }) => {
    await page.goto('/blog/yeu-xa');

    expect(await jsonLdTypes(page)).toEqual(
      expect.arrayContaining(['BlogPosting', 'BreadcrumbList']),
    );
  });

  test('trang so sánh khai báo FAQPage', async ({ page }) => {
    await page.goto('/so-sanh');

    expect(await jsonLdTypes(page)).toEqual(
      expect.arrayContaining(['FAQPage', 'BreadcrumbList']),
    );
  });
});
