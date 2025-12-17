'use client';

import Link from 'next/link';
import { Container, SectionTitle, FadeInSection } from '../ui';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <Container>
        <FadeInSection>
          <SectionTitle
            title="Dịch vụ của WENet Hà Nội"
            subtitle="Giải pháp toàn diện cho doanh nghiệp và tổ chức"
          />
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            {/* Service 1: HR */}
            <div className="mb-10 pb-10 border-b border-gray-200">
              <p className="text-sm font-bold text-[#0066cc] tracking-wide mb-1">
                DỊCH VỤ CUNG ỨNG VÀ PHÁT TRIỂN NHÂN LỰC CÔNG NGHỆ CAO
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                GIẢI PHÁP NHÂN SỰ CÔNG NGHỆ CAO CHO DOANH NGHIỆP
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Chúng tôi chuyên cung cấp nguồn nhân lực tinh nhuệ, được đào tạo theo tiêu chuẩn thực chiến 
                nghiêm ngặt, đảm bảo năng lực Kỷ luật, Nguyên tắc và chuyên môn sâu về công nghệ thế hệ mới.
              </p>

              {/* Chuyên môn cốt lõi */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Chuyên môn cốt lõi:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066cc] mt-1">•</span>
                    <span><strong>Cloud Service:</strong> Kỹ sư Cloud Architect/DevOps chuyên sâu về AWS, Azure, Google Cloud.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066cc] mt-1">•</span>
                    <span><strong>Trí tuệ Nhân tạo (AI/ML):</strong> Data Scientist, ML Engineer, chuyên về tối ưu mô hình, Computer Vision, và NLP.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066cc] mt-1">•</span>
                    <span><strong>Edge Computing & IoT:</strong> Kỹ sư lập trình thiết bị Edge, tích hợp dữ liệu và bảo mật hệ thống phân tán.</span>
                  </li>
                </ul>
              </div>

              {/* Mô hình dịch vụ */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Mô hình Dịch vụ:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066cc] mt-1">•</span>
                    <span><strong>Offshore Development Center (ODC):</strong> Xây dựng nhóm phát triển độc lập, quản lý bởi WENet, làm việc từ xa theo yêu cầu của đối tác.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066cc] mt-1">•</span>
                    <span><strong>Onshore/Staff Augmentation:</strong> Cung cấp kỹ sư làm việc trực tiếp tại văn phòng khách hàng để hỗ trợ các dự án cụ thể.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2: Tech & Innovation */}
            <div>
              <p className="text-sm font-bold text-emerald-600 tracking-wide mb-1">
                DỊCH VỤ CÔNG NGHỆ & ĐỔI MỚI
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                NGHIÊN CỨU ỨNG DỤNG VÀ CHUYỂN GIAO PHƯƠNG PHÁP ĐÀO TẠO ĐỘT PHÁ
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Đây là sự thể hiện trực tiếp sứ mệnh R&D của WENet, biến các kết quả nghiên cứu 
                thành giải pháp kinh doanh cho các tổ chức.
              </p>

              {/* A. Chuyển giao công nghệ đào tạo */}
              <div className="mb-6 bg-gray-50 rounded-xl p-5">
                <h4 className="font-semibold text-gray-900 mb-2">A. Chuyển giao công nghệ đào tạo (Training Methodology Transfer)</h4>
                <p className="text-gray-600 mb-2">
                  <strong>Mô tả:</strong> Chuyển giao triết lý và công cụ đào tạo Lấy người học làm trung tâm (Learner-Centric) cho các tổ chức, doanh nghiệp, hoặc trường đại học.
                </p>
                <p className="text-gray-600">
                  <strong>Công cụ:</strong> Triển khai các giải pháp đào tạo sử dụng VR, AR, XR để mô phỏng môi trường làm việc phức tạp, giúp người học tiếp thu kiến thức một cách trực quan và hiệu quả.
                </p>
              </div>

              {/* B. Tư vấn & nghiên cứu ứng dụng */}
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="font-semibold text-gray-900 mb-2">B. Tư vấn & nghiên cứu ứng dụng (Consulting & Applied R&D)</h4>
                <p className="text-gray-600 mb-3">
                  <strong>Mục tiêu:</strong> Hỗ trợ doanh nghiệp khám phá tiềm năng của các công nghệ mới trong môi trường kinh doanh của họ.
                </p>
                <p className="text-gray-600 mb-2"><strong>Nội dung:</strong></p>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Tư vấn chiến lược tích hợp AI (từ Proof of Concept đến triển khai Production).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Tư vấn giải pháp chuyển đổi hạ tầng sang Cloud/Edge Computing an toàn và tối ưu chi phí.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Thực hiện các dự án nghiên cứu Proof of Concept (PoC) với các công nghệ đột phá tại Phòng Lab của WENet.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066cc] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
