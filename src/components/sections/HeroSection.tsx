'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button, Container } from '../ui';
import { heroSlides } from '@/lib/content';

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
    goToSlide((current + 1) % heroSlides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`} />
          
          {/* Image Background with Ken Burns effect */}
          {slide.image && (
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out ${
                idx === current ? 'scale-105' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          )}
          
          {/* Enhanced Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
      ))}

      {/* Content - Full width centered layout */}
      <Container className="relative z-20 h-full flex flex-col justify-center pt-20">
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight transition-all duration-700 ${
              isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
            }`}
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            <span className="text-white">{heroSlides[current].headline}</span>
          </h1>

          {/* Subheadline */}
          <h2
            className={`text-sm md:text-base lg:text-lg xl:text-xl font-medium uppercase tracking-[0.12em] mb-4 md:mb-6 transition-all duration-700 delay-100 ${
              isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
            }`}
            style={{
              color: 'rgba(255,255,255,0.9)',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)',
            }}
          >
            {heroSlides[current].subheadline}
          </h2>

          {/* Description */}
          <p
            className={`text-sm md:text-base lg:text-lg text-white/85 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
            }`}
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            {heroSlides[current].description}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 justify-center mb-10 md:mb-12 transition-all duration-700 delay-300 ${
              isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
            }`}
          >
            <Button 
              href={heroSlides[current].cta1.href} 
              variant="secondary" 
              size="lg"
              className="min-w-[200px] shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 text-base"
            >
              {heroSlides[current].cta1.label}
            </Button>
            <Button
              href={heroSlides[current].cta2.href}
              variant="outline"
              size="lg"
              className="min-w-[200px] border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm hover:scale-105 transition-all duration-300 text-base"
            >
              {heroSlides[current].cta2.label}
            </Button>
          </div>

          {/* Stats Row */}
          <div
            className={`flex justify-center gap-12 md:gap-16 lg:gap-20 transition-all duration-700 delay-400 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" style={{ textShadow: '0 0 15px rgba(251,146,60,0.5)' }}>10+</div>
              <div className="text-xs md:text-sm text-white/70 mt-1">Năm kinh nghiệm</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" style={{ textShadow: '0 0 15px rgba(251,146,60,0.5)' }}>500+</div>
              <div className="text-xs md:text-sm text-white/70 mt-1">Dự án hoàn thành</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" style={{ textShadow: '0 0 15px rgba(251,146,60,0.5)' }}>50+</div>
              <div className="text-xs md:text-sm text-white/70 mt-1">Đối tác tin cậy</div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              disabled={isTransitioning}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? 'bg-white w-10'
                  : 'bg-white/40 hover:bg-white/60 w-5'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide((current - 1 + heroSlides.length) % heroSlides.length)}
          disabled={isTransitioning}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 flex items-center justify-center text-white transition-all duration-300 z-20"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((current + 1) % heroSlides.length)}
          disabled={isTransitioning}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 flex items-center justify-center text-white transition-all duration-300 z-20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </Container>
    </section>
  );
}
