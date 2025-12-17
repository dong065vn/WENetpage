import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard - WENet Hà Nội',
  description: 'Quản lý nội dung Landing Page WENet Hà Nội',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
