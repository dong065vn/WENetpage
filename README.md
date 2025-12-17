# WENet Hà Nội - Landing Page

Website giới thiệu công ty WENet Hà Nội - Kiến tạo Nhân lực Công nghệ Cao.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## 📁 Cấu trúc Project

```
src/
├── app/
│   ├── page.tsx          # Landing page chính
│   ├── admin/            # Dashboard quản lý
│   └── globals.css
├── components/
│   ├── ui/               # Base components (Button, Container, etc.)
│   ├── navigation/       # Header, Footer
│   └── sections/         # Các section của landing page
└── lib/
    ├── content.ts        # Nội dung website (centralized)
    └── images.ts         # Cấu hình đường dẫn ảnh
```

## 🏃 Chạy Development

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem website.

## 📊 Admin Dashboard

Truy cập [http://localhost:3000/admin](http://localhost:3000/admin) để quản lý nội dung.

## 🖼️ Thêm ảnh

Đặt ảnh vào `public/images/` theo cấu trúc trong `public/images/README.md`.

## 📦 Build Production

```bash
npm run build
npm start
```

## 📝 License

© 2024 WENet Hà Nội
