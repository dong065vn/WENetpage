'use client';

import Image from 'next/image';
import { Container, FadeInSection } from '../ui';
import { images } from '@/lib/images';

const footerLinks = {
  company: [
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Đội ngũ', href: '#about' },
    { label: 'Tin tức', href: '#news' },
  ],
  services: [
    { label: 'Cung ứng nhân sự', href: '#services' },
    { label: 'Đào tạo', href: '#training' },
    { label: 'R&D', href: '#rnd' },
  ],
  contact: [
    { label: 'Liên hệ', href: '#contact' },
    { label: 'Hỗ trợ', href: '#contact' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: '📘', href: '#' },
  { name: 'LinkedIn', icon: '💼', href: '#' },
  { name: 'YouTube', icon: '📺', href: '#' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12">
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative w-10 h-10 bg-[#0066cc] rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={images.logo.white}
                      alt="WENet Logo"
                      fill
                      className="object-contain p-1"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="text-white font-bold text-xl absolute">W</span>
                  </div>
                  <span className="font-bold text-xl">WENet Hà Nội</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Kiến tạo tương lai công nghệ cao - Chuyên gia số về Cloud, AI & Edge
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 hover:bg-[#0066cc] rounded-lg flex items-center justify-center transition-colors"
                      aria-label={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold mb-4">Công ty</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold mb-4">Dịch vụ</h4>
                <ul className="space-y-2">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Liên hệ</h4>
                <ul className="space-y-2">
                  {footerLinks.contact.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-gray-400 text-sm space-y-1">
                  <p className="whitespace-nowrap">📍 54 P.Triều Khúc, Thanh Liệt, Hà Nội</p>
                  <p className="whitespace-nowrap">📞 +84 xxx xxx xxx</p>
                  <p className="whitespace-nowrap">✉️ contact@wenet.vn</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 WENet Hà Nội. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gray-800 hover:bg-[#0066cc] rounded-full flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </Container>
    </footer>
  );
}
