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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại trang chủ
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Giới thiệu WENet Hà Nội</h1>
        </div>
      </header>

      {/* Hero Section: Video + Company Info */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Video Side */}
            <div className="relative aspect-video bg-black/20 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder for video - replace src with actual video */}
                <video
                  className="w-full h-full object-cover"
                  poster="/images/about/video-poster.jpg"
                  controls
                >
                  <source src="/videos/wenet-intro.mp4" type="video/mp4" />
                  {/* Fallback content */}
                  <div className="flex flex-col items-center justify-center h-full text-white/80">
                    <svg className="w-20 h-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <p>Video giới thiệu WENet Hà Nội</p>
                  </div>
                </video>
              </div>
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Company Info Side */}
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto md:mx-0 bg-white rounded-xl p-3 shadow-lg mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">WE</span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">WENet Hà Nội</h2>
                <p className="text-xl text-blue-200">Công ty Cổ phần WENet Hà Nội</p>
              </div>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Kiến tạo Nhân lực Công nghệ Cao - Chuyên gia số về Cloud, AI & Edge. 
                Đào tạo và cung cấp nguồn nhân lực công nghệ cao hàng đầu Việt Nam.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">☁️ Cloud Service</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">🤖 AI/ML</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">🔗 Edge Computing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: TOC + Article */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sticky TOC Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 pb-3 border-b">
                  📑 Mục lục
                </h3>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${
                        activeSection === item.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-mono text-xs mr-2">{item.number}</span>
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3 space-y-12">
              {/* Section 1.1 */}
              <section id="vision" className="bg-white rounded-xl shadow-lg p-8 scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                    🎯
                  </span>
                  <div>
                    <span className="text-sm font-mono text-blue-600">1.1</span>
                    <h2 className="text-2xl font-bold text-gray-800">ĐỊNH VỊ CHIẾN LƯỢC VÀ TẦM NHÌN</h2>
                    <p className="text-lg text-blue-600 font-medium mt-1">
                      DẪN ĐẦU KIẾN TẠO NHÂN LỰC CÔNG NGHỆ CAO VIỆT NAM
                    </p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    Công ty Cổ phần WENet Hà Nội được thành lập với khát vọng trở thành nhà đào tạo và 
                    nhà cung cấp nguồn nhân lực công nghệ cao dẫn đầu Việt Nam. Chúng tôi chuyên sâu 
                    trong ba trụ cột công nghệ then chốt của tương lai: <strong>Cloud Service</strong>, 
                    <strong> Trí tuệ Nhân tạo (AI)</strong>, và <strong>Chuyển giao Phương pháp Đào tạo Đột phá</strong>.
                  </p>
                  <p className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 italic">
                    WENet Hà Nội không chỉ cung cấp giải pháp nhân sự; chúng tôi định hình các kiến trúc sư 
                    và kỹ sư tiên phong sẵn sàng cho kỷ nguyên số.
                  </p>
                </div>
              </section>

              {/* Section 1.2 */}
              <section id="mission" className="bg-white rounded-xl shadow-lg p-8 scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl">
                    🚀
                  </span>
                  <div>
                    <span className="text-sm font-mono text-emerald-600">1.2</span>
                    <h2 className="text-2xl font-bold text-gray-800">SỨ MỆNH</h2>
                    <p className="text-lg text-emerald-600 font-medium mt-1">
                      CẦU NỐI GIỮA ĐỔI MỚI VÀ HIỆU SUẤT KINH DOANH
                    </p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">WENet cam kết thực hiện ba sứ mệnh song hành:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">1</span>
                      <div>
                        <strong className="text-gray-800">Đào tạo nhân lực kỹ thuật cao:</strong>
                        <span className="text-gray-600"> Cung cấp kiến thức, kỹ năng và thái độ chuyên nghiệp, đặc biệt trong lĩnh vực Edge Computing, Cloud Service, và AI.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">2</span>
                      <div>
                        <strong className="text-gray-800">Cung cấp Nguồn Nhân lực Tinh nhuệ:</strong>
                        <span className="text-gray-600"> Đảm bảo cung cấp nguồn nhân lực có năng lực thực chiến vượt trội, đáp ứng ngay lập tức nhu cầu nhân sự Onshore/Offshore Development của các tập đoàn lớn.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">3</span>
                      <div>
                        <strong className="text-gray-800">Tiên phong R&D trong Giáo dục:</strong>
                        <span className="text-gray-600"> Ứng dụng các công nghệ mới như VR, AR, XR để nghiên cứu, thử nghiệm và phát triển các phương pháp đào tạo mới với triết lý Lấy người học làm trung tâm, mang lại hiệu quả học tập tối ưu.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 1.3 */}
              <section id="values" className="bg-white rounded-xl shadow-lg p-8 scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                    💎
                  </span>
                  <div>
                    <span className="text-sm font-mono text-purple-600">1.3</span>
                    <h2 className="text-2xl font-bold text-gray-800">GIÁ TRỊ CỐT LÕI</h2>
                    <p className="text-lg text-purple-600 font-medium mt-1">
                      VĂN HÓA LÀM VIỆC DỰA TRÊN KỶ LUẬT VÀ SÁNG TẠO
                    </p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-6">WENet xây dựng chất lượng nhân sự và dịch vụ dựa trên bốn giá trị không thể thay đổi:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">🔥</span>
                        <h4 className="font-bold text-gray-800">Nhiệt Huyết</h4>
                      </div>
                      <p className="text-sm text-gray-600">Luôn giữ lửa đam mê, tinh thần chủ động trong mọi dự án và khóa học.</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">⚖️</span>
                        <h4 className="font-bold text-gray-800">Nguyên Tắc & Kỷ Luật</h4>
                      </div>
                      <p className="text-sm text-gray-600">Tuân thủ các quy trình kỹ thuật và đạo đức nghề nghiệp nghiêm ngặt, đảm bảo chất lượng đầu ra nhất quán.</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">💡</span>
                        <h4 className="font-bold text-gray-800">Sáng tạo bền vững</h4>
                      </div>
                      <p className="text-sm text-gray-600">Không ngừng đổi mới công nghệ và phương pháp, đặt lợi ích lâu dài lên hàng đầu.</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">👂</span>
                        <h4 className="font-bold text-gray-800">Lắng Nghe & Thấu Hiểu</h4>
                      </div>
                      <p className="text-sm text-gray-600">Lắng nghe sâu sắc nhu cầu của khách hàng (doanh nghiệp) và người học để cung cấp giải pháp cá nhân hóa, tối ưu nhất.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 1.4 */}
              <section id="strength" className="bg-white rounded-xl shadow-lg p-8 scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
                    🌟
                  </span>
                  <div>
                    <span className="text-sm font-mono text-orange-600">1.4</span>
                    <h2 className="text-2xl font-bold text-gray-800">THẾ MẠNH</h2>
                    <p className="text-lg text-orange-600 font-medium mt-1">
                      SỨC MẠNH TỪ HỆ SINH THÁI CHUYÊN GIA
                    </p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border-l-4 border-orange-500">
                      <span className="text-3xl">🌍</span>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Đội ngũ Chuyên gia Toàn cầu</h4>
                        <p className="text-gray-600">
                          Giảng viên là các chuyên gia Cloud Service người Việt đang sinh sống tại Hoa Kỳ, 
                          cùng các nhà quản lý AI và nhân sự quản lý từ các công ty hàng đầu Việt Nam (như Co.Op) 
                          và các tập đoàn Nhật Bản.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                      <span className="text-3xl">🏛️</span>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Vị thế Học thuật</h4>
                        <p className="text-gray-600">
                          Trụ sở công ty đặt tại khuôn viên một trường đại học lớn, tạo điều kiện cho 
                          Nghiên cứu & Phát triển (R&D) liên tục và kết nối mật thiết với nguồn tài năng trẻ.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border-l-4 border-emerald-500">
                      <span className="text-3xl">🤝</span>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Mạng lưới Doanh nghiệp Rộng khắp</h4>
                        <p className="text-gray-600">
                          Đảm bảo cơ hội thực tập, việc làm, và chuyển giao nhân sự chất lượng cao 
                          cho các đối tác trên toàn quốc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Sẵn sàng hợp tác cùng WENet Hà Nội?
          </h3>
          <p className="text-blue-100 mb-6">
            Liên hệ ngay để được tư vấn về giải pháp nhân sự và đào tạo công nghệ cao
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Liên hệ ngay
            </Link>
            <Link
              href="/#services"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Xem dịch vụ
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 WENet Hà Nội. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
