import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WENet Hà Nội - Kiến tạo Nhân lực Công nghệ Cao",
  description: "Chuyên gia số về Cloud, AI & Edge. Đào tạo và cung cấp nguồn nhân lực công nghệ cao hàng đầu Việt Nam.",
  keywords: "WENet, Cloud, AI, Edge Computing, đào tạo công nghệ, nhân lực IT, Hà Nội",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
