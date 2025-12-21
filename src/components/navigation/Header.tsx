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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/98 shadow-xl shadow-blue-900/5 backdrop-blur-md'
          : 'bg-white shadow-sm'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20 py-1">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* Logo Icon - Clean without overlay text */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0066cc] to-[#00a0e9] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0066cc] to-[#0052a3] rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src={images.logo.main}
                  alt="WENet Logo"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
            </div>
            
            {/* Divider */}
            <div className="hidden sm:block w-[2px] h-10 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full" />
            
            {/* Brand Name */}
            <div className="flex flex-col -space-y-0.5">
              <span className="font-black text-xl md:text-2xl tracking-tight text-[#1a1a1a] group-hover:text-[#0066cc] transition-colors duration-300">
                WENet
              </span>
              <span className="text-sm md:text-base font-semibold text-[#00a0e9] tracking-wide">
                HÀ NỘI
              </span>
            </div>
          </a>

          {/* Desktop Menu - Enhanced */}
          <ul className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                {item.isExternal ? (
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 font-medium text-gray-600 hover:text-[#0066cc] transition-all duration-300 rounded-lg hover:bg-blue-50/50"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-[#0066cc] bg-blue-50'
                        : 'text-gray-600 hover:text-[#0066cc] hover:bg-blue-50/50'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.href.replace('#', '') && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#0066cc] to-[#00a0e9] rounded-full" />
                    )}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button (Desktop) - Enhanced with brand colors */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#0066cc] to-[#00a0e9] text-white font-semibold rounded-full hover:from-[#004d99] hover:to-[#0088cc] transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 group"
          >
            <span>Liên hệ ngay</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Mobile Menu Button - Enhanced */}
          <button
            className="lg:hidden p-2.5 rounded-xl hover:bg-blue-50 transition-all duration-300 text-gray-600 hover:text-[#0066cc]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Mobile Menu - Enhanced */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1 py-4 border-t border-blue-100">
            {menuItems.map((item, index) => (
              <li 
                key={item.href}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                className={`transform transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
              >
                {item.isExternal ? (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-xl font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0066cc] transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 text-[#0066cc] border-l-4 border-[#0066cc]'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-[#0066cc]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="px-4 pt-4">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#0066cc] to-[#00a0e9] text-white font-semibold rounded-xl hover:from-[#004d99] hover:to-[#0088cc] transition-all duration-300 shadow-lg shadow-blue-500/20"
                onClick={() => setIsOpen(false)}
              >
                <span>Liên hệ ngay</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
