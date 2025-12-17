'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui';
import { images } from '@/lib/images';

const menuItems = [
  { label: 'Trang chủ', href: '#home', isExternal: false },
  { label: 'Giới thiệu', href: '#about', isExternal: false },
  { label: 'Dịch vụ', href: '#services', isExternal: false },
  { label: 'Đào tạo', href: '#training', isExternal: false },
  { label: 'Công nghệ R&D', href: '#rnd', isExternal: false },
  { label: 'Tin tức', href: '#news', isExternal: false },
  { label: 'Liên hệ', href: '#contact', isExternal: false },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = menuItems.map((item) => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 bg-[#0066cc] rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src={images.logo.main}
                alt="WENet Logo"
                fill
                className="object-contain p-1"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-white font-bold text-xl absolute">W</span>
            </div>
            <span className="font-bold text-xl text-gray-900 group-hover:text-[#0066cc] transition-colors">
              WENet Việt Nam
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                {item.isExternal ? (
                  <Link
                    href={item.href}
                    className="relative py-2 font-medium text-gray-700 hover:text-[#0066cc] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`relative py-2 font-medium transition-colors ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-[#0066cc]'
                        : 'text-gray-700 hover:text-[#0066cc]'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.href.replace('#', '') && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066cc] rounded-full" />
                    )}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button (Desktop) */}
          <a
            href="#contact"
            className="hidden lg:inline-flex px-5 py-2.5 bg-[#0066cc] text-white font-semibold rounded-full hover:bg-[#004d99] transition-colors"
          >
            Liên hệ ngay
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-2 py-4 border-t">
            {menuItems.map((item) => (
              <li key={item.href}>
                {item.isExternal ? (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0066cc] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-blue-50 text-[#0066cc]'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#0066cc]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="px-4 pt-2">
              <a
                href="#contact"
                className="block w-full text-center px-5 py-2.5 bg-[#0066cc] text-white font-semibold rounded-full hover:bg-[#004d99] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Liên hệ ngay
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
