'use client';

import { useState } from 'react';
import { Container, SectionTitle, Button, FadeInSection } from '../ui';

const audienceOptions = [
  'Doanh nghiệp / Đối tác',
  'Người lao động / Chuyên gia',
  'Sinh viên',
  'Khác',
];

const needOptions = [
  'Tư vấn Dịch vụ Nhân sự',
  'Đăng ký Khóa học / Chứng chỉ',
  'Hợp tác R&D',
  'Yêu cầu Báo giá',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    audience: '',
    need: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', audience: '', need: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Container>
        <FadeInSection>
          <SectionTitle
            title="Liên hệ với WENet Hà Nội"
            subtitle="BẮT ĐẦU CHUYẾN HÀNH TRÌNH CÔNG NGHỆ CÙNG CHÚNG TÔI"
          />
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <FadeInSection delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Form Liên hệ Nhanh</h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Cảm ơn bạn!</h4>
                  <p className="text-gray-600">Chúng tôi sẽ liên hệ lại sớm nhất.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Họ và Tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition"
                      placeholder="Nhập họ và tên"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition"
                        placeholder="0xxx xxx xxx"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bạn thuộc đối tượng nào?
                      </label>
                      <select
                        name="audience"
                        value={formData.audience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="">Chọn một...</option>
                        {audienceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nhu cầu chính của bạn?
                      </label>
                      <select
                        name="need"
                        value={formData.need}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="">Chọn một...</option>
                        {needOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bạn muốn WENet hỗ trợ điều gì?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition resize-none"
                      placeholder="Mô tả chi tiết nhu cầu của bạn..."
                    />
                  </div>

                  <Button variant="primary" className="w-full">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Đang gửi...
                      </span>
                    ) : (
                      'Gửi yêu cầu'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeInSection>

          {/* Contact Info */}
          <div className="space-y-8">
            <FadeInSection delay={200}>
              <div className="bg-gradient-to-br from-[#0066cc] to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Thông tin Liên hệ Chính thức</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <h4 className="font-semibold">Địa chỉ Trụ sở</h4>
                      <p className="text-white/80">54 P.Triều Khúc, Phường Thanh Liệt, Hà Nội</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📞</span>
                    <div>
                      <h4 className="font-semibold">Điện thoại</h4>
                      <p className="text-white/80">+84 xxx xxx xxx</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-white/80">contact@wenet.vn</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phòng ban Chuyên trách</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Phòng Kinh doanh</span>
                    <a href="mailto:sales@wenet.vn" className="font-medium text-[#0066cc] hover:underline">
                      sales@wenet.vn
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Phòng Đào tạo</span>
                    <a href="mailto:training@wenet.vn" className="font-medium text-[#0066cc] hover:underline">
                      training@wenet.vn
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
