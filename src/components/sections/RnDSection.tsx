'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container, SectionTitle, FadeInSection } from '../ui';
import { images } from '@/lib/images';

const researchAreas = [
  {
    id: 'edge-ai',
    title: 'AI được tối ưu hóa trên Edge',
    subtitle: 'Optimized Edge AI',
    description: 'Nghiên cứu các thuật toán nén mô hình học sâu, lượng tử hóa và tối ưu hóa chip để triển khai AI hiệu quả trên các thiết bị tài nguyên thấp.',
    impact: 'Giảm độ trễ, tăng cường bảo mật và tiết kiệm băng thông - chìa khóa cho IoT và Smart City.',
    color: 'blue',
    image: images.rnd.edgeAi,
  },
  {
    id: 'cloud',
    title: 'Kiến trúc Cloud lai & phân tán',
    subtitle: 'Hybrid & Distributed Cloud',
    description: 'Phát triển các mô hình quản lý, điều phối và bảo mật dữ liệu trên các môi trường Cloud Lai và Đa Cloud.',
    impact: 'Giúp doanh nghiệp đạt được khả năng mở rộng và linh hoạt tối đa.',
    color: 'emerald',
    image: images.rnd.cloud,
  },
  {
    id: 'xr',
    title: 'Phương pháp học tập XR',
    subtitle: 'Cross-Reality Learning',
    description: 'Sử dụng VR, AR, XR để tạo ra các Digital Twins của môi trường làm việc phức tạp.',
    impact: 'Cốt lõi của Chuyển giao Phương pháp Đào tạo Mới - đảm bảo kỹ năng thực hành sâu nhất.',
    color: 'purple',
    image: images.rnd.xr,
  },
];

const environment = [
  { id: 'lab', title: 'XR Lab', desc: 'Phòng thí nghiệm VR/AR/XR tiên tiến', image: images.rnd.lab },
  { id: 'academic', title: 'Hợp tác học thuật', desc: 'Vị trí tại trường Đại học lớn', image: images.rnd.main },
  { id: 'standard', title: 'Tiêu chuẩn quốc tế', desc: 'Kết quả được kiểm chứng bởi chuyên gia', image: images.rnd.main },
];

export default function RnDSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const handleImageError = (id: string) => setImageErrors((prev) => ({ ...prev, [id]: true }));

  return (
    <section id="rnd" className="py-12 md:py-20 bg-white">
      <Container>
        <FadeInSection>
          <SectionTitle title="Công nghệ - Nghiên cứu và Phát triển" subtitle="ĐỊNH HÌNH TƯƠNG LAI CÔNG NGHỆ BẰNG GIẢI PHÁP ĐỘT PHÁ" />
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl md:rounded-2xl p-4 md:p-8 mb-8 md:mb-12 text-white">
            <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4">TRIẾT LÝ R&D CỐT LÕI: SÁNG TẠO BỀN VỮNG</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Hoạt động R&D tại WENet Hà Nội hướng tới Sáng tạo Bền Vững. Nền tảng R&D được xây dựng trên sự hợp tác chặt chẽ giữa Đội ngũ học thuật và Chuyên gia thực chiến.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-8 text-center">Phạm vi Nghiên cứu Chuyên sâu</h3>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {researchAreas.map((area, idx) => (
            <FadeInSection key={area.id} delay={250 + idx * 100}>
              <div className={`rounded-2xl overflow-hidden border-2 h-full transition-all duration-300 hover:shadow-lg ${
                area.color === 'blue' ? 'border-blue-200 hover:border-blue-400' : area.color === 'emerald' ? 'border-emerald-200 hover:border-emerald-400' : 'border-purple-200 hover:border-purple-400'
              }`}>
                <div className={`relative h-40 ${area.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-700' : area.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500 to-emerald-700' : 'bg-gradient-to-br from-purple-500 to-purple-700'}`}>
                  {!imageErrors[area.id] && <Image src={area.image} alt={area.title} fill className="object-cover" onError={() => handleImageError(area.id)} />}

                </div>
                <div className="p-4 md:p-6">
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">{area.title}</h4>
                  <p className={`text-xs md:text-sm mb-2 md:mb-3 ${area.color === 'blue' ? 'text-blue-600' : area.color === 'emerald' ? 'text-emerald-600' : 'text-purple-600'}`}>{area.subtitle}</p>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">{area.description}</p>
                  <div className={`text-xs md:text-sm p-2 md:p-3 rounded-lg ${area.color === 'blue' ? 'bg-blue-50 text-blue-700' : area.color === 'emerald' ? 'bg-emerald-50 text-emerald-700' : 'bg-purple-50 text-purple-700'}`}>
                    <strong>Tác động:</strong> {area.impact}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={400}>
          <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-8 text-center">Môi trường Lab và Học thuật Tiên tiến</h3>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {environment.map((item, idx) => (
            <FadeInSection key={item.id} delay={450 + idx * 100}>
              <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-28 md:h-32 bg-gradient-to-br from-gray-400 to-gray-600">
                  {!imageErrors[item.id] && <Image src={item.image} alt={item.title} fill className="object-cover" onError={() => handleImageError(item.id)} />}
                </div>
                <div className="p-4 md:p-6 text-center">
                  <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{item.title}</h4>
                  <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
