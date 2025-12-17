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
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#0066cc] via-blue-400 to-[#0066cc]" />

      <Container>
        <div className="py-10 md:py-14">
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 bg-gradient-to-br from-[#0066cc] to-blue-700 rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-blue-500/20">
                    <Image
                      src={images.logo.white}
                      alt="WENet Logo"
                      fill
                      className="object-contain p-1.5"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="text-white font-bold text-2xl absolute">W</span>
                  </div>
                  <div>
                    <span className="font-bold text-xl block">WENet Hà Nội</span>
                    <span className="text-xs text-blue-400">Technology Partner</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  Kiến tạo tương lai công nghệ cao - Chuyên gia số về Cloud, AI & Edge
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800/50 hover:bg-[#0066cc] border border-gray-700 hover:border-[#0066cc] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Company Section */}
              <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                    🏢
                  </span>
                  <h4 className="font-semibold text-white">Công ty</h4>
                </div>
                <ul className="space-y-2.5">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-[#0066cc] rounded-full transition-colors" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Section */}
              <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">
                    ⚡
                  </span>
                  <h4 className="font-semibold text-white">Dịch vụ</h4>
                </div>
                <ul className="space-y-2.5">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-emerald-500 rounded-full transition-colors" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-br from-[#0066cc]/20 to-blue-900/20 rounded-xl p-5 border border-[#0066cc]/30">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-[#0066cc]/30 rounded-lg flex items-center justify-center text-blue-300">
                    📞
                  </span>
                  <h4 className="font-semibold text-white">Liên hệ</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 text-gray-300">
                    <span className="text-base mt-0.5">📍</span>
                    <span>54 P.Triều Khúc, Thanh Liệt, Hà Nội</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-base">📞</span>
                    <span>+84 xxx xxx xxx</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-base">✉️</span>
                    <span>contact@wenet.vn</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-[#0066cc] hover:text-blue-400 font-medium transition-colors"
                >
                  Gửi yêu cầu →
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 WENet Hà Nội. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gray-800 hover:bg-[#0066cc] border border-gray-700 hover:border-[#0066cc] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
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
