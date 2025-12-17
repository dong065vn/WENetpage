'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container, SectionTitle, Button, FadeInSection } from '../ui';
import { images } from '@/lib/images';

const services = [
  {
    id: 'hr',
    title: 'DỊCH VỤ CUNG ỨNG VÀ PHÁT TRIỂN NHÂN LỰC CÔNG NGHỆ CAO',
    subtitle: 'GIẢI PHÁP NHÂN SỰ CÔNG NGHỆ CAO CHO DOANH NGHIỆP',
    description:
      'Chúng tôi chuyên cung cấp nguồn nhân lực tinh nhuệ, được đào tạo theo tiêu chuẩn thực chiến nghiêm ngặt, đảm bảo năng lực Kỷ luật, Nguyên tắc và chuyên môn sâu về công nghệ thế hệ mới.',
    features: [
      {
        name: 'Cloud Service',
        desc: 'Kỹ sư Cloud Architect/DevOps chuyên sâu về AWS, Azure, Google Cloud',
      },
      { name: 'AI/ML', desc: 'Data Scientist, ML Engineer, Computer Vision, NLP' },
      {
        name: 'Edge Computing & IoT',
        desc: 'Kỹ sư lập trình thiết bị Edge, tích hợp dữ liệu và bảo mật hệ thống phân tán',
      },
    ],
    models: ['Offshore Development Center (ODC)', 'Onshore/Staff Augmentation'],
    icon: '👥',
    color: 'blue',
    image: images.services.hr,
  },
  {
    id: 'tech',
    title: 'DỊCH VỤ CÔNG NGHỆ & ĐỔI MỚI',
    subtitle: 'NGHIÊN CỨU ỨNG DỤNG VÀ CHUYỂN GIAO PHƯƠNG PHÁP ĐÀO TẠO ĐỘT PHÁ',
    description:
      'Đây là sự thể hiện trực tiếp sứ mệnh R&D của WENet, biến các kết quả nghiên cứu thành giải pháp kinh doanh cho các tổ chức.',
    features: [
      {
        name: 'Chuyển giao công nghệ đào tạo',
        desc: 'Triết lý Lấy người học làm trung tâm với VR, AR, XR',
      },
      {
        name: 'Tư vấn & R&D ứng dụng',
        desc: 'Chiến lược tích hợp AI từ PoC đến Production, chuyển đổi Cloud/Edge Computing',
      },
      {
        name: 'Proof of Concept',
        desc: 'Dự án nghiên cứu PoC với công nghệ đột phá tại Phòng Lab của WENet',
      },
    ],
    models: ['Training Methodology Transfer', 'Consulting & Applied R&D'],
    icon: '⚡',
    color: 'emerald',
    image: images.services.tech,
  },
];

export default function ServicesSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <FadeInSection>
          <SectionTitle
            title="Dịch vụ của WENet Hà Nội"
            subtitle="Giải pháp toàn diện cho doanh nghiệp và tổ chức"
          />
        </FadeInSection>

        <div className="space-y-16">
          {services.map((service, idx) => (
            <FadeInSection key={service.id} delay={idx * 150}>
              <div
                className={`flex flex-col ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3
                    className={`text-sm font-bold tracking-wide mb-2 ${
                      service.color === 'blue' ? 'text-[#0066cc]' : 'text-emerald-600'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.subtitle}</h4>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature.name} className="flex items-start gap-3">
                        <span
                          className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            service.color === 'blue' ? 'bg-[#0066cc]' : 'bg-emerald-500'
                          }`}
                        />
                        <div>
                          <span className="font-semibold text-gray-900">{feature.name}: </span>
                          <span className="text-gray-600">{feature.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.models.map((model) => (
                      <span
                        key={model}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                          service.color === 'blue'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        {model}
                      </span>
                    ))}
                  </div>

                  <Button
                    href="#contact"
                    variant={service.color === 'blue' ? 'primary' : 'secondary'}
                  >
                    Tìm hiểu thêm
                  </Button>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                  <div
                    className={`aspect-video rounded-2xl overflow-hidden relative shadow-xl ${
                      service.color === 'blue'
                        ? 'bg-gradient-to-br from-blue-500 to-blue-700'
                        : 'bg-gradient-to-br from-emerald-500 to-emerald-700'
                    }`}
                  >
                    {!imageErrors[service.id] && (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError(service.id)}
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl opacity-20">{service.icon}</span>
                    </div>
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
