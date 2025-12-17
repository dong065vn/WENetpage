'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const tocItems = [
  { id: 'hr-service', number: '2.1', title: 'Dịch vụ Cung ứng và Phát triển Nhân lực Công nghệ cao' },
  { id: 'tech-service', number: '2.2', title: 'Dịch vụ Công nghệ & Đổi mới' },
];

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState('hr-service');

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 150;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(tocItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-800">Dịch Vụ WENet</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Trang chủ
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-6">
            
            {/* TOC Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 bg-white rounded-lg shadow p-4">
                <h3 className="font-bold text-gray-800 mb-3 pb-2 border-b">Mục lục</h3>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-2 py-1.5 rounded text-sm transition-all duration-300 ease-in-out ${
                        activeSection === item.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {item.number}. {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article */}
            <article className="lg:col-span-3 bg-white rounded-lg shadow p-6 md:p-10 prose prose-gray max-w-none">
              
              {/* Intro */}
              <div className="not-prose mb-10 pb-10 border-b bg-gradient-to-r from-blue-50 to-white -mx-6 -mt-6 md:-mx-10 md:-mt-10 px-6 md:px-10 pt-6 md:pt-10 rounded-t-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Dịch Vụ Của WENet Hà Nội
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  WENet cung cấp <strong className="text-blue-600">giải pháp toàn diện</strong> về nhân sự công nghệ cao 
                  và dịch vụ đổi mới sáng tạo, giúp doanh nghiệp tăng tốc chuyển đổi số và nâng cao năng lực cạnh tranh.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
                    Cloud & DevOps
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
                    AI/ML
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
                    Edge & IoT
                  </span>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-medium">
                    VR/AR/XR Training
                  </span>
                </div>
              </div>

              <section id="hr-service" className="scroll-mt-24 mb-10 pb-10 border-b">
                <h2>2.1. DỊCH VỤ CUNG ỨNG VÀ PHÁT TRIỂN NHÂN LỰC CÔNG NGHỆ CAO</h2>
                
                <p><strong>Tiêu đề: GIẢI PHÁP NHÂN SỰ CÔNG NGHỆ CAO CHO DOANH NGHIỆP</strong></p>
                
                <p>
                  Chúng tôi chuyên cung cấp nguồn nhân lực tinh nhuệ, được đào tạo theo tiêu chuẩn thực chiến 
                  nghiêm ngặt, đảm bảo năng lực Kỷ luật, Nguyên tắc và chuyên môn sâu về công nghệ thế hệ mới.
                </p>

                <p><strong>Chuyên môn cốt lõi:</strong></p>
                <ul>
                  <li><strong>Cloud Service:</strong> Kỹ sư Cloud Architect/DevOps chuyên sâu về AWS, Azure, Google Cloud.</li>
                  <li><strong>Trí tuệ Nhân tạo (AI/ML):</strong> Data Scientist, ML Engineer, chuyên về tối ưu mô hình, Computer Vision, và NLP.</li>
                  <li><strong>Edge Computing & IoT:</strong> Kỹ sư lập trình thiết bị Edge, tích hợp dữ liệu và bảo mật hệ thống phân tán.</li>
                </ul>

                <p><strong>Mô hình Dịch vụ:</strong></p>
                <ul>
                  <li><strong>Offshore Development Center (ODC):</strong> Xây dựng nhóm phát triển độc lập, quản lý bởi WENet, làm việc từ xa theo yêu cầu của đối tác (phù hợp với các công ty Nhật Bản/Mỹ cần đội ngũ chuyên môn cao và ổn định).</li>
                  <li><strong>Onshore/Staff Augmentation:</strong> Cung cấp kỹ sư làm việc trực tiếp tại văn phòng khách hàng để hỗ trợ các dự án cụ thể.</li>
                </ul>
              </section>

              <section id="tech-service" className="scroll-mt-24">
                <h2>2.2. DỊCH VỤ CÔNG NGHỆ & ĐỔI MỚI</h2>
                
                <p><strong>Tiêu đề: NGHIÊN CỨU ỨNG DỤNG VÀ CHUYỂN GIAO PHƯƠNG PHÁP ĐÀO TẠO ĐỘT PHÁ</strong></p>
                
                <p>
                  Đây là sự thể hiện trực tiếp sứ mệnh R&D của WENet, biến các kết quả nghiên cứu 
                  thành giải pháp kinh doanh cho các tổ chức.
                </p>

                <h3>A. Chuyển giao công nghệ đào tạo (Training Methodology Transfer)</h3>
                <p>
                  <strong>Mô tả:</strong> Chuyển giao triết lý và công cụ đào tạo Lấy người học làm trung tâm 
                  (Learner-Centric) cho các tổ chức, doanh nghiệp, hoặc trường đại học.
                </p>
                <p>
                  <strong>Công cụ:</strong> Triển khai các giải pháp đào tạo sử dụng VR, AR, XR để mô phỏng 
                  môi trường làm việc phức tạp (như xử lý sự cố Cloud/Server, dây chuyền sản xuất), 
                  giúp người học tiếp thu kiến thức một cách trực quan và hiệu quả.
                </p>

                <h3>B. Tư vấn & nghiên cứu ứng dụng (Consulting & Applied R&D)</h3>
                <p>
                  <strong>Mục tiêu:</strong> Hỗ trợ doanh nghiệp khám phá tiềm năng của các công nghệ mới 
                  trong môi trường kinh doanh của họ.
                </p>
                <p><strong>Nội dung:</strong></p>
                <ul>
                  <li>Tư vấn chiến lược tích hợp AI (từ Proof of Concept đến triển khai Production).</li>
                  <li>Tư vấn giải pháp chuyển đổi hạ tầng sang Cloud/Edge Computing an toàn và tối ưu chi phí.</li>
                  <li>Thực hiện các dự án nghiên cứu Proof of Concept (PoC) với các công nghệ đột phá tại Phòng Lab của WENet (trụ sở Đại học).</li>
                </ul>
              </section>

            </article>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>© 2024 WENet Hà Nội. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
