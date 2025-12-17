'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container, SectionTitle, FadeInSection } from '../ui';
import { images } from '@/lib/images';

const aboutBlocks = [
  {
    id: 'vision',
    title: 'ĐỊNH VỊ CHIẾN LƯỢC VÀ TẦM NHÌN',
    subtitle: 'DẪN ĐẦU KIẾN TẠO NHÂN LỰC CÔNG NGHỆ CAO VIỆT NAM',
    content:
      'Công ty Cổ phần WENet Hà Nội được thành lập với khát vọng trở thành nhà đào tạo và nhà cung cấp nguồn nhân lực công nghệ cao dẫn đầu Việt Nam. Chuyên sâu trong ba trụ cột công nghệ then chốt: Cloud Service, Trí tuệ Nhân tạo (AI), và Chuyển giao Phương pháp Đào tạo Đột phá.',
    icon: '🎯',
    image: images.about.vision,
  },
  {
    id: 'mission',
    title: 'SỨ MỆNH',
    subtitle: 'CẦU NỐI GIỮA ĐỔI MỚI VÀ HIỆU SUẤT KINH DOANH',
    content:
      'WENet cam kết thực hiện ba sứ mệnh song hành: Đào tạo nhân lực kỹ thuật cao, Cung cấp Nguồn Nhân lực Tinh nhuệ, và Tiên phong R&D trong Giáo dục với công nghệ VR, AR, XR.',
    icon: '🚀',
    image: images.about.mission,
  },
  {
    id: 'values',
    title: 'GIÁ TRỊ CỐT LÕI',
    subtitle: 'VĂN HÓA LÀM VIỆC DỰA TRÊN KỶ LUẬT VÀ SÁNG TẠO',
    content:
      'Nhiệt Huyết - Nguyên Tắc & Kỷ Luật - Sáng tạo bền vững - Lắng Nghe & Thấu Hiểu. Bốn giá trị không thể thay đổi xây dựng chất lượng nhân sự và dịch vụ.',
    icon: '💎',
    image: images.about.values,
  },
  {
    id: 'strength',
    title: 'THẾ MẠNH',
    subtitle: 'SỨC MẠNH TỪ HỆ SINH THÁI CHUYÊN GIA',
    content:
      'Đội ngũ Chuyên gia Toàn cầu từ Hoa Kỳ và Nhật Bản. Trụ sở tại khuôn viên đại học lớn, kết nối mật thiết với nguồn tài năng trẻ và mạng lưới doanh nghiệp rộng khắp.',
    icon: '🌟',
    image: images.about.strength,
  },
];

export default function AboutSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <FadeInSection>
          <SectionTitle
            title="Về WENet Hà Nội"
            subtitle="Kiến tạo nhân lực công nghệ cao cho tương lai"
          />
        </FadeInSection>

        {/* Video Section */}
        <FadeInSection delay={100}>
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-blue-700">
              {!imageErrors['video'] && (
                <Image
                  src={images.about.videoThumbnail}
                  alt="WENet Hà Nội Introduction"
                  fill
                  className="object-cover"
                  onError={() => handleImageError('video')}
                />
              )}
              <div className="absolute inset-0 bg-black/30" />
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play video"
              >
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-[#0066cc] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </FadeInSection>

        {/* Video Modal */}
        {isVideoPlaying && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close video"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="w-full h-full flex items-center justify-center text-white">
                <p>Video sẽ được thêm sau</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutBlocks.map((block, idx) => (
            <FadeInSection key={block.id} delay={idx * 100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                  {!imageErrors[block.id] && (
                    <Image
                      src={block.image}
                      alt={block.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(block.id)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-5xl drop-shadow-lg">{block.icon}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-sm font-bold text-[#0066cc] mb-2 tracking-wide">
                    {block.title}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{block.subtitle}</h4>
                  <p className="text-gray-600 leading-relaxed">{block.content}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
