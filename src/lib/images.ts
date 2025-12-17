/**
 * IMAGE CONFIGURATION
 * ===================
 * Thay đổi đường dẫn ảnh tại đây để cập nhật toàn bộ website
 * 
 * Cách sử dụng:
 * 1. Đặt ảnh vào folder: public/images/
 * 2. Cập nhật đường dẫn bên dưới
 * 
 * Ví dụ: ảnh đặt tại public/images/hero/slide1.jpg
 *        → đường dẫn: '/images/hero/slide1.jpg'
 */

export const images = {
  // ============ LOGO ============
  logo: {
    main: '/images/logo/wenet-logo.png',
    white: '/images/logo/wenet-logo-white.png',
    favicon: '/images/logo/favicon.ico',
  },

  // ============ HERO SECTION (4 slides) ============
  hero: {
    slide1: '/images/hero/slide1.jpg',  // Cloud, AI & Edge
    slide2: '/images/hero/slide2.jpg',  // Hệ sinh thái kết nối
    slide3: '/images/hero/slide3.jpg',  // Talent Gateway - Sinh viên
    slide4: '/images/hero/slide4.jpg',  // Tăng tốc sự nghiệp - Professionals
  },

  // ============ ABOUT SECTION ============
  about: {
    vision: '/images/about/vision.jpg',
    mission: '/images/about/mission.jpg',
    values: '/images/about/values.jpg',
    strength: '/images/about/strength.jpg',
    video: '/images/about/intro-video.mp4',  // Video giới thiệu (optional)
    videoThumbnail: '/images/about/video-thumbnail.jpg',
  },

  // ============ SERVICES SECTION ============
  services: {
    hr: '/images/services/hr-service.jpg',           // Dịch vụ nhân sự
    tech: '/images/services/tech-service.jpg',       // Dịch vụ công nghệ
    cloud: '/images/services/cloud.jpg',
    ai: '/images/services/ai.jpg',
    edge: '/images/services/edge.jpg',
  },

  // ============ TRAINING SECTION ============
  training: {
    main: '/images/training/training-main.jpg',
    vr: '/images/training/vr-training.jpg',
    student: '/images/training/student.jpg',
    professional: '/images/training/professional.jpg',
  },

  // ============ R&D SECTION ============
  rnd: {
    main: '/images/rnd/rnd-main.jpg',
    edgeAi: '/images/rnd/edge-ai.jpg',
    cloud: '/images/rnd/cloud-architecture.jpg',
    xr: '/images/rnd/xr-learning.jpg',
    lab: '/images/rnd/xr-lab.jpg',
  },

  // ============ CONTACT SECTION ============
  contact: {
    office: '/images/contact/office.jpg',
    map: '/images/contact/map.jpg',
  },

  // ============ TEAM / PARTNERS (optional) ============
  team: {
    member1: '/images/team/member1.jpg',
    member2: '/images/team/member2.jpg',
    member3: '/images/team/member3.jpg',
  },

  partners: {
    partner1: '/images/partners/partner1.png',
    partner2: '/images/partners/partner2.png',
    partner3: '/images/partners/partner3.png',
  },

  // ============ BACKGROUNDS ============
  backgrounds: {
    pattern: '/images/bg/pattern.svg',
    gradient: '/images/bg/gradient.jpg',
  },
};

// Type cho autocomplete
export type ImageKeys = typeof images;
