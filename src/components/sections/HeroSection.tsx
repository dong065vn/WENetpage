'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button, Container } from '../ui';
import { images } from '@/lib/images';

const slides = [
  {
    id: 1,
    headline: 'KIẾN TẠO TƯƠNG LAI CÔNG NGHỆ CAO',
    subheadline: 'CHUYÊN GIA SỐ VỀ CLOUD, AI & EDGE',
    description:
      'Nâng cao hiệu suất kinh doanh bằng nguồn nhân lực tinh nhuệ được đào tạo theo triết lý LẤY NGƯỜI HỌC LÀM TRUNG TÂM.',
    cta1: { label: 'TÌM HIỂU GIẢI PHÁP NHÂN SỰ', href: '#services' },
    cta2: { label: 'KHÁM PHÁ CHƯƠNG TRÌNH ĐÀO TẠO', href: '#training' },
    bg: 'from-blue-900 to-blue-700',
    image: images.hero.slide1,
  },
  {
    id: 2,
    headline: 'HỆ SINH THÁI KẾT NỐI VÀNG',
    subheadline: 'TỪ TRI THỨC HỌC THUẬT ĐẾN THỰC CHIẾN CÔNG NGHỆ TOÀN CẦU',
    description:
      'WENet là cầu nối độc đáo giữa Nhà trường – Doanh nghiệp – Chuyên gia Toàn cầu. Đảm bảo đầu ra nhân lực Nhiệt huyết & Kỷ luật.',
    cta1: { label: 'KẾT NỐI HỆ SINH THÁI ĐỐI TÁC', href: '#about' },
    cta2: { label: 'GẶP GỠ ĐỘI NGŨ CHUYÊN GIA', href: '#about' },
    bg: 'from-emerald-900 to-emerald-700',
    image: images.hero.slide2,
  },
  {
    id: 3,
    headline: 'TALENT GATEWAY',
    subheadline: 'LỐI ĐI TẮT ĐẾN SỰ NGHIỆP CÔNG NGHỆ CAO',
    description:
      'Biến tiềm năng thành Năng lực làm việc ngay từ ghế nhà trường. Cam kết đầu ra Chất lượng - Kỷ luật - Thấu hiểu.',
    cta1: { label: 'XEM CHƯƠNG TRÌNH ĐÀO TẠO', href: '#training' },
    cta2: { label: 'CƠ HỘI THỰC TẬP & VIỆC LÀM', href: '#contact' },
    bg: 'from-purple-900 to-purple-700',
    image: images.hero.slide3,
  },
  {
    id: 4,
    headline: 'TĂNG TỐC SỰ NGHIỆP CÔNG NGHỆ',
    subheadline: 'MASTERING CLOUD, AI & EDGE TRONG KỶ NGUYÊN ĐỔI MỚI',
    description:
      'Nâng cấp chuyên môn lên tầm cao mới. Khai thác kinh nghiệm thực chiến từ các chuyên gia hàng đầu đang làm việc tại Mỹ và Nhật Bản.',
    cta1: { label: 'TÌM HIỂU CÁC KHÓA HỌC', href: '#training' },
    cta2: { label: 'TƯ VẤN LỘ TRÌNH SỰ NGHIỆP', href: '#contact' },
    bg: 'from-orange-900 to-orange-700',
    image: images.hero.slide4,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`} />
          
          {/* Image Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <Container className="relative z-20 py-32">
        <div className="max-w-4xl">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight transition-all duration-500 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {slides[current].headline}
          </h1>
          <h2
            className={`text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-6 transition-all duration-500 delay-100 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {slides[current].subheadline}
          </h2>
          <p
            className={`text-lg md:text-xl text-white/80 mb-8 max-w-2xl transition-all duration-500 delay-200 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {slides[current].description}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 delay-300 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <Button href={slides[current].cta1.href} variant="secondary" size="lg">
              {slides[current].cta1.label}
            </Button>
            <Button
              href={slides[current].cta2.href}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              {slides[current].cta2.label}
            </Button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              disabled={isTransitioning}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === current
                  ? 'bg-white w-10'
                  : 'bg-white/50 hover:bg-white/70 w-3'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide((current - 1 + slides.length) % slides.length)}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-20"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((current + 1) % slides.length)}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
