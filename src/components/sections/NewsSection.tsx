'use client';

import { Container, SectionTitle, Button, FadeInSection } from '../ui';

const newsItems = [
  {
    id: 1,
    title: 'WENet Hà Nội ký kết hợp tác với các trường Đại học hàng đầu',
    excerpt: 'Mở rộng hệ sinh thái đào tạo nhân lực công nghệ cao với các đối tác chiến lược.',
    date: '15/12/2024',
    category: 'Hợp tác',
    image: '/images/news/news1.jpg',
  },
  {
    id: 2,
    title: 'Cơ hội thị trường Cloud & AI tại Việt Nam 2025',
    excerpt: 'Phân tích xu hướng và nhu cầu nhân lực công nghệ trong năm tới.',
    date: '10/12/2024',
    category: 'Thị trường',
    image: '/images/news/news2.jpg',
  },
  {
    id: 3,
    title: 'Ra mắt chương trình đào tạo VR/AR cho doanh nghiệp',
    excerpt: 'Ứng dụng công nghệ thực tế ảo trong đào tạo nhân sự kỹ thuật cao.',
    date: '05/12/2024',
    category: 'Đào tạo',
    image: '/images/news/news3.jpg',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <Container>
        <FadeInSection>
          <SectionTitle
            title="Tin tức & Cơ hội thị trường"
            subtitle="Cập nhật xu hướng công nghệ và cơ hội nghề nghiệp"
          />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {newsItems.map((item, idx) => (
            <FadeInSection key={item.id} delay={idx * 100}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-30">📰</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-[#0066cc] text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <time className="text-sm text-gray-500 mb-2">{item.date}</time>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0066cc] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">{item.excerpt}</p>
                  <a
                    href="#"
                    className="text-[#0066cc] font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Đọc thêm
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={300}>
          <div className="text-center">
            <Button href="#" variant="outline">
              Xem tất cả tin tức
            </Button>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
