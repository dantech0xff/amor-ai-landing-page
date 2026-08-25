# Amor AI Landing Page — Codebase Summary

Website giới thiệu ứng dụng **Amor AI — a couple app**, port từ project Claude Design
`2accb440-b7c5-4c98-9a25-17d57ba17cf3` sang Next.js.

## Tech stack

| Thành phần | Lựa chọn |
| --- | --- |
| Framework | Next.js 16.3.2 (App Router, Turbopack) |
| UI | React 19.2, TypeScript strict |
| Style | CSS custom properties + inline style (giữ nguyên cách viết của bản thiết kế) |
| Font | `next/font/google`: Be Vietnam Pro, Lora. Material Symbols Rounded nạp qua `<link>` |
| Render | Toàn bộ 11 route đều prerender tĩnh |

## Lệnh

```bash
npm run dev     # dev server
npm run build   # đóng gói production (kèm typecheck)
npm start       # chạy bản đã đóng gói
npm run lint    # eslint
npm test        # Playwright E2E (tự đóng gói + chạy server ở cổng 3210)
npm run test:ui # Playwright ở chế độ UI
```

## Cấu trúc

```
src/
├── app/
│   ├── layout.tsx          # font, bootstrap theme chống nháy, <PreferenceSync/>
│   ├── globals.css         # design token Paper/Dusk + style thân bài blog
│   ├── page.tsx            # metadata → home-page.tsx
│   ├── home-page.tsx       # trang chủ (client, theo ngôn ngữ)
│   ├── team|faq|privacy|terms/   # mỗi trang: page.tsx (metadata) + *-page.tsx (client)
│   └── blog/               # blog/page.tsx + 4 bài (server component, chỉ tiếng Việt)
├── components/             # site-nav, site-footer, store-badges, android-device,
│                           # today-mockup, blog-article, legal-page, app-cta, material-icon
└── lib/
    ├── site.ts             # hằng số (playUrl, email, icon)
    ├── preferences.ts      # useLang / useTheme qua useSyncExternalStore
    ├── persisted-store.ts  # store localStorage nhỏ, an toàn với SSR
    └── content/            # dữ liệu nội dung VI/EN tách khỏi phần trình bày

e2e/                        # Playwright: routes, layout, preferences
playwright.config.ts        # cổng cố định 3210, chạy trên bản production
```

## Design token

`globals.css` khai báo bảng màu **Peach Soda Love**:

- `:root` — theme **Paper** (mặc định).
- `:root[data-theme='dusk']` — theme **Dusk**.

Component dùng `var(--am-*)`, không hardcode màu, trừ hai chỗ cố ý giữ nguyên như
bản thiết kế: khối Premium (`#FFEDF1`…) và màn hình điện thoại trong hero
(luôn hiển thị theme Paper vì đó là ảnh chụp giao diện app).

## Ngôn ngữ và theme

- Lưu trong `localStorage`: `amor-lang` (`vi` | `en`), `amor-theme` (`paper` | `dusk`).
- Đọc bằng `useSyncExternalStore` → server luôn render mặc định (`vi`/`paper`), không lệch hydrate.
- Script inline trong `<head>` gắn `data-theme="dusk"` trước khi vẽ để không nháy sáng.
- Trang blog chỉ có tiếng Việt: truyền `lang="vi" showLang={false}` cho `SiteNav`.

## Bản đồ route

| Route | Nguồn thiết kế |
| --- | --- |
| `/` | `index.dc.html` |
| `/team` | `team.dc.html` |
| `/blog` | `blog.dc.html` |
| `/blog/cau-hoi-cap-doi` | `blog-cau-hoi-cap-doi.dc.html` |
| `/blog/y-tuong-ky-niem-ngay-yeu` | `blog-y-tuong-ky-niem-ngay-yeu.dc.html` |
| `/blog/viet-nhat-ky-cap-doi` | `blog-viet-nhat-ky-cap-doi.dc.html` |
| `/blog/yeu-xa` | `blog-yeu-xa.dc.html` |
| `/faq` | `faq.dc.html` |
| `/privacy` | `privacy.dc.html` |
| `/terms` | `terms.dc.html` |

## Kiểm thử

Playwright E2E, chạy trên bản production (`npm test` tự đóng gói rồi khởi động server
ở cổng cố định 3210). 53 test / 3 file:

| File | Bao phủ |
| --- | --- |
| `e2e/routes.spec.ts` | 10 route trả 200 + đúng `<title>`/`<h1>`, icon PNG, điều hướng nội bộ, không có lỗi JS |
| `e2e/layout.spec.ts` | Không cuộn ngang ở 1440/768/390 cho cả 10 route, khung điện thoại co vừa mobile, nav dính khi cuộn |
| `e2e/preferences.spec.ts` | Toggle VI/EN (đổi + lưu + giữ khi chuyển trang), toggle Paper/Dusk (đổi + lưu + không nháy sáng), blog ẩn nút ngôn ngữ, accordion FAQ |

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
