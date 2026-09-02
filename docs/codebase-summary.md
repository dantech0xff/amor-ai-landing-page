# Duoly Landing Page — Codebase Summary

Website giới thiệu ứng dụng **Duoly in Love — Relationship App**, port từ project Claude Design
`2accb440-b7c5-4c98-9a25-17d57ba17cf3` sang Next.js.

## Tech stack

| Thành phần | Lựa chọn |
| --- | --- |
| Framework | Next.js 16.3.2 (App Router, Turbopack) |
| UI | React 19.2, TypeScript strict |
| Style | CSS custom properties + inline style (giữ nguyên cách viết của bản thiết kế) |
| Font | `next/font/google`: Be Vietnam Pro, Lora. Material Symbols Rounded nạp qua `<link>` |
| Render | Toàn bộ 20 route đều prerender tĩnh |

## Lệnh

```bash
npm run dev     # dev server
npm run build   # đóng gói production (kèm typecheck)
npm start       # chạy bản đã đóng gói
npm run lint    # eslint
npm test        # Playwright E2E (tự đóng gói + chạy server ở cổng 3210)
npm run test:ui # Playwright ở chế độ UI
npm run test:prod  # E2E trỏ vào site production đã deploy
```

Trỏ E2E vào một địa chỉ bất kỳ bằng `E2E_BASE_URL`:

```bash
E2E_BASE_URL=production npx playwright test          # dùng SITE.url
E2E_BASE_URL=https://<preview>.vercel.app npx playwright test
```

Khi biến này có giá trị, config bỏ qua bước dựng server cục bộ.

## Cấu trúc

```
src/
├── app/
│   ├── root-shell.tsx      # khung <html>/<head>/<body> dùng chung cho hai root layout
│   ├── globals.css         # design token Paper/Dusk + style thân bài blog
│   ├── icon.png            # icon tab (quy ước file App Router, 128×128)
│   ├── sitemap.ts          # /sitemap.xml, sinh từ danh sách route + chỉ mục blog
│   ├── robots.ts           # /robots.txt
│   ├── (vi)/               # root layout <html lang="vi">
│   │   ├── page.tsx        #   /
│   │   ├── team|faq|privacy|terms/page.tsx
│   │   ├── so-sanh/page.tsx    # landing page so sánh app đếm ngày yêu
│   │   └── blog/           #   blog/page.tsx + 4 bài (chỉ tiếng Việt)
│   └── (en)/               # root layout <html lang="en">
│       └── en/{page,team,faq,privacy,terms}
├── components/
│   ├── pages/              # view client dùng chung cho cả hai ngôn ngữ
│   │                       # (home, team, faq, privacy, terms)
│   ├── json-ld.tsx         # chèn một khối structured data
│   └── ...                 # site-nav, site-footer, store-badges, android-device,
│                           # today-mockup, blog-article, legal-page, app-cta, material-icon
└── lib/
    ├── site.ts             # hằng số + localePath()/basePath() cho tiền tố /en
    ├── seo.ts              # pageMetadata(), rootMetadata(), các builder JSON-LD
    ├── preferences.ts      # useTheme qua useSyncExternalStore
    ├── persisted-store.ts  # store localStorage nhỏ, an toàn với SSR
    └── content/            # dữ liệu nội dung VI/EN tách khỏi phần trình bày
                            # (home, faq, blog, team, privacy, terms, compare, keywords)

e2e/                        # Playwright: routes, layout, preferences, seo
scripts/build-og-image.mjs  # dựng ảnh OpenGraph 1200×630 bằng Playwright
playwright.config.ts        # cổng cố định 3210, chạy trên bản production
```

## Design token

`globals.css` khai báo bảng màu **Peach Soda Love**:

- `:root` — theme **Paper** (mặc định).
- `:root[data-theme='dusk']` — theme **Dusk**.

Component dùng `var(--du-*)`, không hardcode màu, trừ hai chỗ cố ý giữ nguyên như
bản thiết kế: khối Premium (`#FFEDF1`…) và màn hình điện thoại trong hero
(luôn hiển thị theme Paper vì đó là ảnh chụp giao diện app).

## Ngôn ngữ và theme

**Ngôn ngữ nằm trong URL**, không nằm trong `localStorage`. Tiếng Việt ở gốc (`/faq`),
tiếng Anh dưới tiền tố `/en` (`/en/faq`) — hai bản là hai trang riêng để Google index
được cả hai. `localePath()` và `basePath()` trong `site.ts` là chỗ duy nhất biết quy
tắc tiền tố này.

- Mỗi ngôn ngữ có một root layout riêng trong route group `(vi)` / `(en)`. Đây là cách
  duy nhất trong App Router để `<html lang>` được render sẵn ở server thay vì sửa bằng
  JavaScript sau khi trang đã tải. Đổi VI↔EN sẽ tải lại trang — chấp nhận được vì đây
  là thao tác hiếm.
- Nút VI/EN trong `SiteNav` là `<Link>` trỏ tới chính trang đang xem ở ngôn ngữ kia,
  suy ra từ `usePathname()`.
- Trang blog và `/so-sanh` chỉ có tiếng Việt: truyền `lang="vi" showLang={false}` cho
  `SiteNav` và đặt `bilingual: false` trong `pageMetadata` để không khai hreflang trỏ
  tới URL không tồn tại.
- Theme vẫn lưu trong `localStorage` (`duoly-theme`: `paper` | `dusk`), đọc bằng
  `useSyncExternalStore` → server luôn render mặc định, không lệch hydrate. Script
  inline trong `<head>` gắn `data-theme="dusk"` trước khi vẽ để không nháy sáng.

## Bản đồ route

| Route | Ngôn ngữ | Nguồn thiết kế |
| --- | --- | --- |
| `/` · `/en` | VI · EN | `index.dc.html` |
| `/team` · `/en/team` | VI · EN | `team.dc.html` |
| `/faq` · `/en/faq` | VI · EN | `faq.dc.html` |
| `/privacy` · `/en/privacy` | VI · EN | `privacy.dc.html` |
| `/terms` · `/en/terms` | VI · EN | `terms.dc.html` |
| `/so-sanh` | VI | mới, không có trong bản thiết kế |
| `/blog` | VI | `blog.dc.html` |
| `/blog/cau-hoi-cap-doi` | VI | `blog-cau-hoi-cap-doi.dc.html` |
| `/blog/y-tuong-ky-niem-ngay-yeu` | VI | `blog-y-tuong-ky-niem-ngay-yeu.dc.html` |
| `/blog/viet-nhat-ky-cap-doi` | VI | `blog-viet-nhat-ky-cap-doi.dc.html` |
| `/blog/yeu-xa` | VI | `blog-yeu-xa.dc.html` |

## SEO

`src/lib/seo.ts` là nguồn duy nhất cho metadata và structured data.

- **`pageMetadata()`** dựng canonical, hreflang (`vi`/`en`/`x-default`), OpenGraph và
  Twitter card cho một route. **Mọi trang đều phải tự gọi hàm này**: Next không gộp
  `alternates` theo chiều sâu, nên một trang quên khai báo sẽ thừa hưởng canonical của
  layout và tự trỏ sai về trang chủ. `e2e/seo.spec.ts` kiểm tra điều này cho từng route.
- **`rootMetadata()`** giữ phần dùng chung ở root layout: `metadataBase`, tác giả, nhà
  xuất bản, chỉ thị `robots`. Không đặt canonical ở đây.
- **JSON-LD** gom vào một khối `@graph` cho mỗi trang qua `<JsonLd/>`:
  `MobileApplication` + `Organization` + `WebSite` ở trang chủ, `FAQPage` ở `/faq` và
  `/so-sanh`, `BlogPosting` + `BreadcrumbList` ở mỗi bài viết (`BlogArticle` tự chèn),
  `Blog` ở trang chỉ mục. Không khai `aggregateRating` vì chưa có nguồn đánh giá thật —
  bịa số sao vi phạm chính sách rich result của Google.
- **`sitemap.ts`** sinh `/sitemap.xml` từ danh sách route song ngữ, route VI-only và chỉ
  mục blog; các cặp song ngữ khai `xhtml:link` chéo nhau. **`robots.ts`** cho phép thu
  thập toàn site và trỏ tới sitemap.
- **Ảnh chia sẻ** `public/og-image.png` (1200×630) dựng bằng
  `node scripts/build-og-image.mjs` rồi commit — dùng Playwright thay vì `next/og` để
  không phải tải font tiếng Việt lúc build.
- **Ngày tháng blog** lưu dạng ISO trong `content/blog.ts` (`isoDate`) vì sitemap và
  structured data đều cần dạng đó; `displayDate()` đổi sang `25.08.2026` để hiển thị.
- **Từ khoá mục tiêu** liệt kê trong `content/keywords.ts`. Tên ứng dụng của bên thứ ba
  chỉ xuất hiện ở `/so-sanh`, không nhồi vào tiêu đề hay mô tả trang chủ.

## Kiểm thử

Playwright E2E, chạy trên bản production (`npm test` tự đóng gói rồi khởi động server
ở cổng cố định 3210). 124 test / 4 file:

| File | Bao phủ |
| --- | --- |
| `e2e/routes.spec.ts` | 16 route trả 200 + đúng `<title>`/`<h1>`, icon tab, icon PNG, điều hướng nội bộ, không có lỗi JS |
| `e2e/layout.spec.ts` | Không cuộn ngang ở 1440/768/390 cho cả 16 route, khung điện thoại co vừa mobile, nav dính khi cuộn, thanh điều hướng thu gọn ở 720/390/320 |
| `e2e/preferences.spec.ts` | Nút VI/EN điều hướng đúng URL và giữ nguyên trang đang xem, toggle Paper/Dusk (đổi + lưu + không nháy sáng), blog ẩn nút ngôn ngữ, accordion FAQ |
| `e2e/seo.spec.ts` | Canonical/mô tả/OG/Twitter cho từng route, cặp hreflang, `robots.txt`, `sitemap.xml` đủ route, ảnh OG, các khối JSON-LD |

CI: `.github/workflows/ci.yml` chạy lint → typecheck → E2E trên mỗi push vào `main` và
mỗi pull request. Chạy tay qua `workflow_dispatch` với input `base_url` (`production`
hoặc một URL) để test thẳng site đã deploy. Test hỏng thì báo cáo HTML được lưu làm
artifact 7 ngày. Lưu ý Vercel không chạy test khi deploy — CI là chỗ duy nhất chặn.

Không dùng `waitForLoadState('networkidle')`: khi test chạy song song vào site ở xa,
điều kiện "500ms không request nào" trượt liên tục và đã làm ba test đo tràn ngang hỏng
ngẫu nhiên. Thay bằng `waitForFonts()` (`document.fonts.ready`) — đúng thứ phép đo cần
và tất định.

Lưu ý về phép đo cuộn ngang trong `layout.spec.ts`: phải dùng
`window.scrollTo({ behavior: 'instant' })`. Vì `html` đặt `scroll-behavior: smooth`,
nếu để mặc định thì lệnh cuộn chạy animation và `scrollX` đọc ngay sau đó luôn bằng 0
— test sẽ luôn pass một cách vô nghĩa. Cũng không dùng `scrollWidth` vì `overflow: clip`
vẫn báo bề rộng phần tử bị cắt.

## Khác biệt có chủ đích so với bản thiết kế

1. **Khung điện thoại** (`android-frame.jsx`): chỉ port phần bản thiết kế dùng —
   device frame, status bar, gesture nav. Bỏ `AndroidAppBar`, `AndroidListItem`,
   `AndroidKeyboard` vì hero không dùng.
2. **Co giãn khung điện thoại**: `width: min(392px, 100%)` thay cho 392px cố định,
   để trang không tràn ngang trên màn hình hẹp.
3. **`overflowX: 'clip'` trên section hero**: hai vệt sáng trang trí cố tình tràn khỏi
   cột chứa khung điện thoại, gây cuộn ngang ở 768px và 390px. Clip đặt ở đúng section
   chứa chúng — không đặt trên `html` vì Chrome không propagate `clip` từ root lên
   viewport nên không chặn được cuộn.
4. **Font weight 300 italic** cho tờ giấy nhớ: bản thiết kế khai báo `font-weight: 300`
   nhưng chỉ nạp 400–700; ở đây nạp thêm 300 để hiển thị đúng ý đồ.
5. **`support.js`** (runtime `x-dc`, `sc-if`, `sc-for`, `dc-import`, `DCLogic`) không
   được port — React thay thế trực tiếp các primitive này.
6. **Thanh điều hướng thu gọn dưới 720px**: bản thiết kế để `flex-wrap` tự xuống hàng,
   trên điện thoại thành 3 hàng cao 150px và dính ở đầu màn hình. Nay dưới 720px các
   liên kết và nút tải app gom vào panel mở bằng nút menu, thanh còn một hàng ~60px.
   Dưới 560px ẩn nhãn "a couple app"; dưới 400px thu lề và kích thước nút. Các giá trị
   cần media query ghi đè (lề, cỡ chữ logo, nút tròn, viên VI/EN) đặt trong
   `globals.css` thay vì inline style, vì inline luôn thắng media query.
