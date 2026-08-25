import type { Page } from '@playwright/test';

/**
 * Chờ font tải xong trước khi đo bố cục.
 *
 * Không dùng `waitForLoadState('networkidle')`: điều kiện "500ms không có request nào"
 * rất dễ trượt khi test chạy song song vào một site ở xa, và chính nó đã làm ba test
 * đo tràn ngang hỏng ngẫu nhiên. `document.fonts.ready` là thứ phép đo thực sự cần —
 * cỡ chữ quyết định chỗ xuống dòng, tức quyết định bề rộng — và nó tất định.
 */
export async function waitForFonts(page: Page) {
  await page.evaluate(() => document.fonts.ready.then(() => undefined));
}
