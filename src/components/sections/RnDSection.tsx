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
    description: 'Nghiên cứu các thuật toán nén mô hình học sâu (Model Compression), lượng tử hóa (Quantization) và tối ưu hóa chip để triển khai AI hiệu quả trên các thiết bị tài nguyên thấp (Edge Devices).',
    impact: 'Giảm độ trễ, tăng cường bảo mật và tiết kiệm băng thông, là chìa khóa cho các giải pháp IoT và Smart City.',
    color: 'blue',
    image: images.rnd.edgeAi,
  },
  {
    id: 'cloud',
    title: 'Kiến trúc Cloud lai & phân tán',
    subtitle: 'Hybrid & Distributed Cloud Architectures',
    description: 'Phát triển các mô hình quản lý, điều phối (Orchestration) và bảo mật dữ liệu trên các môi trường Cloud Lai (Hybrid) và Đa Cloud (Multi-Cloud).',
    impact: 'Giúp doanh nghiệp đạt được khả năng mở rộng (Scalability) và linh hoạt tối đa, đặc biệt quan trọng trong các ngành tài chính và bán lẻ.',
    color: 'emerald',
    image: images.rnd.cloud,
  },
  {
    id: 'xr',
    title: 'Phương pháp học tập tương tác thực tại',
    subtitle: 'Cross-Reality Learning Methods',
    description: 'Sử dụng VR, AR, XR không chỉ để mô phỏng mà để tạo ra các "Twin Kỹ thuật số" (Digital Twins) của môi trường làm việc phức tạp (ví dụ: trung tâm dữ liệu, dây chuyền sản xuất), cho phép thực hành xử lý sự cố trong môi trường không rủi ro.',
    impact: 'Đây là cốt lõi của "Chuyển giao Phương pháp Đào tạo Mới", đảm bảo người học và nhân sự có kinh nghiệm đạt được kỹ năng thực hành sâu nhất.',
    color: 'purple',
    image: images.rnd.xr,
  },
];

const environment = [
  { id: 'lab', title: 'Phòng Thí nghiệm XR Lab', desc: 'Nơi thử nghiệm và phát triển các ứng dụng VR/AR/XR. Môi trường này là tài sản độc quyền, trực tiếp phục vụ cho việc đào tạo và giải quyết các bài toán của đối tác.', image: images.rnd.lab },
  { id: 'academic', title: 'Hợp tác học thuật', desc: 'Vị trí tại trường Đại học lớn cho phép WENet Hà Nội tham gia vào các công bố nghiên cứu khoa học, giúp công ty luôn cập nhật các mô hình và giả thuyết mới nhất.', image: images.rnd.main },
  { id: 'standard', title: 'Sản phẩm Đạt tiêu chuẩn', desc: 'Mọi kết quả nghiên cứu ứng dụng đều được kiểm chứng về mặt kỹ thuật bởi đội ngũ chuyên gia, đảm bảo chất lượng đầu ra đạt chuẩn quốc tế.', image: images.rnd.main },
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
            <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">
              Hoạt động Nghiên cứu và Phát triển tại WENet Hà Nội không chỉ nhằm mục đích thương mại mà còn hướng tới &quot;Sáng tạo Bền Vững&quot;. Chúng tôi tập trung vào việc tạo ra các mô hình và phương pháp có khả năng ứng dụng lâu dài, giải quyết các thách thức kỹ thuật phức tạp trong thế giới thực.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Nền tảng R&D của chúng tôi được xây dựng trên sự hợp tác chặt chẽ giữa <strong className="text-white">Đội ngũ học thuật</strong> (từ các Đại học) và <strong className="text-white">Chuyên gia thực chiến</strong> (từ các Tập đoàn), đảm bảo tính hàn lâm và tính khả thi thương mại cho mọi nghiên cứu.
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
