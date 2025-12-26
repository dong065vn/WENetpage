'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, SectionTitle, FadeInSection } from '../ui';
import { images } from '@/lib/images';

const aboutBlocks = [
  {
    id: 'vision',
    title: 'ĐỊNH VỊ CHIẾN LƯỢC VÀ TẦM NHÌN',
    subtitle: 'DẪN ĐẦU KIẾN TẠO NHÂN LỰC CÔNG NGHỆ CAO VIỆT NAM',
    content:
      'Công ty Cổ phần WENet Hà Nội được thành lập với khát vọng trở thành nhà đào tạo và nhà cung cấp nguồn nhân lực công nghệ cao dẫn đầu Việt Nam. Chúng tôi chuyên sâu trong ba trụ cột công nghệ then chốt của tương lai: Cloud Service, Trí tuệ Nhân tạo (AI), và Chuyển giao Phương pháp Đào tạo Đột phá. WENet Hà Nội không chỉ cung cấp giải pháp nhân sự; chúng tôi định hình các kiến trúc sư và kỹ sư tiên phong sẵn sàng cho kỷ nguyên số.',
    image: images.about.vision,
  },
  {
    id: 'mission',
    title: 'SỨ MỆNH',
    subtitle: 'CẦU NỐI GIỮA ĐỔI MỚI VÀ HIỆU SUẤT KINH DOANH',
    content:
      'WENet cam kết thực hiện ba sứ mệnh song hành: Đào tạo nhân lực kỹ thuật cao với kiến thức, kỹ năng và thái độ chuyên nghiệp trong lĩnh vực Edge Computing, Cloud Service, và AI. Cung cấp Nguồn Nhân lực Tinh nhuệ đáp ứng ngay lập tức nhu cầu nhân sự Onshore/Offshore Development. Tiên phong R&D trong Giáo dục với công nghệ VR, AR, XR theo triết lý Lấy người học làm trung tâm.',
    image: images.about.mission,
  },
  {
    id: 'values',
    title: 'GIÁ TRỊ CỐT LÕI',
    subtitle: 'VĂN HÓA LÀM VIỆC DỰA TRÊN KỶ LUẬT VÀ SÁNG TẠO',
    content:
      'WENet xây dựng chất lượng nhân sự và dịch vụ dựa trên bốn giá trị không thể thay đổi: Nhiệt Huyết - luôn giữ lửa đam mê, tinh thần chủ động. Nguyên Tắc & Kỷ Luật - tuân thủ quy trình kỹ thuật và đạo đức nghề nghiệp nghiêm ngặt. Sáng tạo bền vững - không ngừng đổi mới công nghệ và phương pháp. Lắng Nghe & Thấu Hiểu - cung cấp giải pháp cá nhân hóa, tối ưu nhất.',
    image: images.about.values,
  },
  {
    id: 'strength',
    title: 'THẾ MẠNH',
    subtitle: 'SỨC MẠNH TỪ HỆ SINH THÁI CHUYÊN GIA',
    content:
      'Đội ngũ Chuyên gia Toàn cầu: Giảng viên là các chuyên gia Cloud Service người Việt đang sinh sống tại Hoa Kỳ, cùng các nhà quản lý AI và nhân sự từ các tập đoàn Nhật Bản. Vị thế Học thuật: Trụ sở công ty đặt tại khuôn viên một trường đại học lớn, tạo điều kiện cho R&D liên tục. Mạng lưới Doanh nghiệp Rộng khắp: Đảm bảo cơ hội thực tập, việc làm, và chuyển giao nhân sự chất lượng cao.',
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

        {/* View More Button */}
        <FadeInSection delay={400}>
          <div className="mt-10 text-center">
            <Link
              href="/about/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066cc] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Xem chi tiết về WENet
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
