'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Table of Contents data
const tocItems = [
  { id: 'vision', number: '1.1', title: 'ĐỊNH VỊ CHIẾN LƯỢC VÀ TẦM NHÌN' },
  { id: 'mission', number: '1.2', title: 'SỨ MỆNH' },
  { id: 'values', number: '1.3', title: 'GIÁ TRỊ CỐT LÕI' },
  { id: 'strength', number: '1.4', title: 'THẾ MẠNH' },
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('vision');

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-800">Giới thiệu về WENet</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            Quay lại trang chủ →
          </Link>
        </div>
      </header>

      {/* Hero: Company Name + Video */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Company Name - Left */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">WENet Việt Nam</h2>
              <p className="text-gray-600">Công ty Cổ phần WENet Việt Nam</p>
              <p className="text-gray-500 mt-2">Kiến tạo Nhân lực Công nghệ Cao</p>
            </div>
            {/* Video - Right */}
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <video className="w-full h-full object-cover" controls poster="/images/about/video-poster.jpg">
                <source src="/videos/wenet-intro.mp4" type="video/mp4" />
                <div className="w-full h-full flex items-center justify-center text-white">
                  Video giới thiệu WENet
                </div>
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Main: TOC + Content */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
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
                      className={`w-full text-left px-2 py-1.5 rounded text-sm ${
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

            {/* Content Box */}
            <article className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow p-6 lg:p-8">

                {/* 1.1 */}
                <section id="vision" className="mb-8 pb-8 border-b scroll-mt-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">1.1. ĐỊNH VỊ CHIẾN LƯỢC VÀ TẦM NHÌN</h2>
                  <p className="text-blue-600 font-medium mb-4">Tiêu đề: DẪN ĐẦU KIẾN TẠO NHÂN LỰC CÔNG NGHỆ CAO VIỆT NAM</p>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <p>
                      Nội dung: Công ty Cổ phần WENet Hà Nội được thành lập với khát vọng trở thành nhà đào tạo và 
                      nhà cung cấp nguồn nhân lực công nghệ cao dẫn đầu Việt Nam. Chúng tôi chuyên sâu trong ba trụ cột 
                      công nghệ then chốt của tương lai: Cloud Service, Trí tuệ Nhân tạo (AI), và Chuyển giao Phương pháp 
                      Đào tạo Đột phá.
                    </p>
                    <p>
                      WENet Hà Nội không chỉ cung cấp giải pháp nhân sự; chúng tôi định hình các kiến trúc sư và kỹ sư 
                      tiên phong sẵn sàng cho kỷ nguyên số.
                    </p>
                  </div>
                </section>

                {/* 1.2 */}
                <section id="mission" className="mb-8 pb-8 border-b scroll-mt-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">1.2. SỨ MỆNH</h2>
                  <p className="text-blue-600 font-medium mb-4">Tiêu đề: CẦU NỐI GIỮA ĐỔI MỚI VÀ HIỆU SUẤT KINH DOANH</p>
                  <div className="text-gray-700 leading-relaxed">
                    <p className="mb-3">Nội dung: WENet cam kết thực hiện ba sứ mệnh song hành:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Đào tạo nhân lực kỹ thuật cao:</strong> Cung cấp kiến thức, kỹ năng và thái độ chuyên nghiệp, 
                        đặc biệt trong lĩnh vực Edge Computing, Cloud Service, và AI.
                      </li>
                      <li>
                        <strong>Cung cấp Nguồn Nhân lực Tinh nhuệ:</strong> Đảm bảo cung cấp nguồn nhân lực có năng lực 
                        thực chiến vượt trội, đáp ứng ngay lập tức nhu cầu nhân sự Onshore/Offshore Development của các tập đoàn lớn.
                      </li>
                      <li>
                        <strong>Tiên phong R&D trong Giáo dục:</strong> Ứng dụng các công nghệ mới như VR, AR, XR để nghiên cứu, 
                        thử nghiệm và phát triển các phương pháp đào tạo mới với triết lý Lấy người học làm trung tâm, 
                        mang lại hiệu quả học tập tối ưu.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 1.3 */}
                <section id="values" className="mb-8 pb-8 border-b scroll-mt-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">1.3. GIÁ TRỊ CỐT LÕI</h2>
                  <p className="text-blue-600 font-medium mb-4">Tiêu đề: VĂN HÓA LÀM VIỆC DỰA TRÊN KỶ LUẬT VÀ SÁNG TẠO</p>
                  <div className="text-gray-700 leading-relaxed">
                    <p className="mb-3">Nội dung: WENet xây dựng chất lượng nhân sự và dịch vụ dựa trên bốn giá trị không thể thay đổi:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Nhiệt Huyết:</strong> Luôn giữ lửa đam mê, tinh thần chủ động trong mọi dự án và khóa học.
                      </li>
                      <li>
                        <strong>Nguyên Tắc & Kỷ Luật:</strong> Tuân thủ các quy trình kỹ thuật và đạo đức nghề nghiệp nghiêm ngặt, 
                        đảm bảo chất lượng đầu ra nhất quán.
                      </li>
                      <li>
                        <strong>Sáng tạo bền vững:</strong> Không ngừng đổi mới công nghệ và phương pháp, đặt lợi ích lâu dài lên hàng đầu.
                      </li>
                      <li>
                        <strong>Lắng Nghe & Thấu Hiểu:</strong> Lắng nghe sâu sắc nhu cầu của khách hàng (doanh nghiệp) và người học 
                        để cung cấp giải pháp cá nhân hóa, tối ưu nhất.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 1.4 */}
                <section id="strength" className="scroll-mt-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">1.4. THẾ MẠNH</h2>
                  <p className="text-blue-600 font-medium mb-4">Tiêu đề: SỨC MẠNH TỪ HỆ SINH THÁI CHUYÊN GIA</p>
                  <div className="text-gray-700 leading-relaxed">
                    <p className="mb-3">Nội dung:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Đội ngũ Chuyên gia Toàn cầu:</strong> Giảng viên là các chuyên gia Cloud Service người Việt 
                        đang sinh sống tại Hoa Kỳ, cùng các nhà quản lý AI và nhân sự quản lý từ các công ty hàng đầu Việt Nam 
                        (như Co.Op) và các tập đoàn Nhật Bản.
                      </li>
                      <li>
                        <strong>Vị thế Học thuật:</strong> Trụ sở công ty đặt tại khuôn viên một trường đại học lớn, 
                        tạo điều kiện cho Nghiên cứu & Phát triển (R&D) liên tục và kết nối mật thiết với nguồn tài năng trẻ.
                      </li>
                      <li>
                        <strong>Mạng lưới Doanh nghiệp Rộng khắp:</strong> Đảm bảo cơ hội thực tập, việc làm, và chuyển giao 
                        nhân sự chất lượng cao cho các đối tác trên toàn quốc.
                      </li>
                    </ul>
                  </div>
                </section>

              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 WENet Hà Nội. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
