'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container, SectionTitle, Button, FadeInSection } from '../ui';
import { images } from '@/lib/images';

const features = [
  { title: 'VR/AR/3D Simulations', desc: 'Mô phỏng môi trường làm việc thực tế' },
  { title: 'AI Learning Paths', desc: 'Lộ trình học tập cá nhân hóa bằng AI' },
  { title: 'TrainerEdge™ Platform', desc: 'Nền tảng đào tạo cloud-edge tiên tiến' },
  { title: 'English & Japanese', desc: 'Đào tạo song ngữ Anh - Nhật' },
  { title: 'Job Matching', desc: 'Kết nối việc làm với đối tác' },
  { title: 'Visa Support', desc: 'Hỗ trợ visa làm việc nước ngoài' },
];

const audiences = [
  {
    id: 'student',
    title: 'Dành cho Sinh viên',
    subtitle: 'TALENT GATEWAY: LỐI ĐI TẮT ĐẾN SỰ NGHIỆP CÔNG NGHỆ CAO - CHUYỂN GIAO KỸ NĂNG THỰC CHIẾN CLOUD, AI & EDGE',
    description: 'Biến tiềm năng thành Năng lực làm việc ngay từ ghế nhà trường. Áp dụng triết lý học tập lấy người học làm trung tâm qua công nghệ VR/AR tiên tiến. Cam kết đầu ra Chất lượng - Kỷ luật - Thấu hiểu.',
    benefits: [
      'Được tiếp cận mô hình AI/Cloud/Edge trong môi trường thực chiến',
      'Tối ưu hóa thời gian học với công nghệ VR/AR/XR',
      'Nghiên cứu & phát triển (R&D) ngay tại khuôn viên đại học',
      'Có cơ hội thực tập & việc làm ưu tiên tại mạng lưới đối tác',
      'Tạo được lợi thế cạnh tranh nhờ kỷ luật và nguyên tắc làm việc',
    ],
    color: 'purple',
    image: images.training.student,
    cta1: { label: 'XEM CHƯƠNG TRÌNH ĐÀO TẠO ĐỘT PHÁ', href: '#contact' },
    cta2: { label: 'CƠ HỘI THỰC TẬP & VIỆC LÀM', href: '#contact' },
  },
  {
    id: 'professional',
    title: 'Dành cho Người lao động công nghệ',
    subtitle: 'TĂNG TỐC SỰ NGHIỆP CÔNG NGHỆ: MASTERING CLOUD, AI & EDGE TRONG KỶ NGUYÊN ĐỔI MỚI',
    description: 'Nâng cấp chuyên môn lên tầm cao mới. Khai thác kinh nghiệm thực chiến từ các chuyên gia hàng đầu đang làm việc tại Mỹ và cho các doanh nghiệp Nhật Bản. Đào tạo chuyên sâu theo mô hình Sáng tạo bền vững.',
    benefits: [
      'Nâng cấp Kỹ năng lên kiến trúc sư (Architect Level): Thiết kế hệ thống Cloud quy mô lớn, triển khai mô hình AI trong Production',
      'Làm chủ công nghệ VR/AR/XR cho môi trường công việc',
      'Sử dụng các phòng lab ảo để thực hành xử lý sự cố phức tạp (Troubleshooting)',
      'Tối ưu hóa hệ thống với kinh nghiệm từ chuyên gia quốc tế',
    ],
    color: 'orange',
    image: images.training.professional,
    cta1: { label: 'TÌM HIỂU CÁC KHÓA HỌC', href: '#contact' },
    cta2: { label: 'TƯ VẤN LỘ TRÌNH SỰ NGHIỆP', href: '#contact' },
  },
];

export default function TrainingSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="training" className="py-12 md:py-20 bg-gray-50">
      <Container>
        <FadeInSection>
          <SectionTitle
            title="Đào tạo Nhân lực Công nghệ"
            subtitle="Chương trình đào tạo thực tế, cá nhân hóa bằng AI và triển khai qua nền tảng cloud-edge"
          />
        </FadeInSection>

        {/* Features Grid */}
        <FadeInSection delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8 md:mb-16">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-3 md:p-4 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <h4 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">{feature.title}</h4>
                <p className="text-gray-500 text-[10px] md:text-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {audiences.map((audience, idx) => (
            <FadeInSection key={audience.id} delay={200 + idx * 100}>
              <div
                className={`rounded-2xl overflow-hidden shadow-xl h-full ${
                  audience.color === 'purple'
                    ? 'bg-gradient-to-br from-purple-600 to-purple-800'
                    : 'bg-gradient-to-br from-orange-500 to-orange-700'
                } text-white`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {!imageErrors[audience.id] && (
                    <Image
                      src={audience.image}
                      alt={audience.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(audience.id)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-sm font-medium opacity-90">{audience.title}</span>
                  </div>
                </div>

                <div className="p-4 md:p-6 lg:p-8">
                  <h4 className="text-base md:text-xl font-bold mb-2 md:mb-3">{audience.subtitle}</h4>
                  
                  {audience.description && (
                    <p className="text-white/80 text-sm mb-4">{audience.description}</p>
                  )}

                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {audience.benefits.map((benefit, benefitIdx) => (
                      <li key={benefitIdx} className="flex items-start gap-2 md:gap-3">
                        <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] md:text-xs flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="opacity-90 text-sm md:text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      href={audience.cta1?.href || '#contact'}
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-gray-900 text-sm"
                    >
                      {audience.cta1?.label || 'Tìm hiểu thêm'}
                    </Button>
                    {audience.cta2 && (
                      <Button
                        href={audience.cta2.href}
                        variant="outline"
                        className="border-white/50 text-white hover:bg-white/10 text-sm"
                      >
                        {audience.cta2.label}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
