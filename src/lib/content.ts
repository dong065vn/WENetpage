/**
 * CONTENT CONFIGURATION
 * =====================
 * Quản lý tất cả nội dung của landing page từ một nơi
 * Dashboard admin sẽ đọc/ghi vào file này
 */

// ============ HERO SLIDES ============
export const heroSlides = [
  {
    id: 1,
    headline: 'KIẾN TẠO TƯƠNG LAI CÔNG NGHỆ CAO',
    subheadline: 'CHUYÊN GIA SỐ VỀ CLOUD, AI & EDGE',
    description: 'Nâng cao hiệu suất kinh doanh bằng nguồn nhân lực tinh nhuệ được đào tạo theo triết lý LẤY NGƯỜI HỌC LÀM TRUNG TÂM.',
    cta1: { label: 'TÌM HIỂU GIẢI PHÁP NHÂN SỰ', href: '#services' },
    cta2: { label: 'KHÁM PHÁ CHƯƠNG TRÌNH ĐÀO TẠO', href: '#training' },
    bg: 'from-blue-900 to-blue-700',
    image: '/images/hero/slide1.jpg',
    active: true,
  },
  {
    id: 2,
    headline: 'HỆ SINH THÁI KẾT NỐI VÀNG',
    subheadline: 'TỪ TRI THỨC HỌC THUẬT ĐẾN THỰC CHIẾN CÔNG NGHỆ TOÀN CẦU',
    description: 'WENet là cầu nối độc đáo giữa Nhà trường – Doanh nghiệp – Chuyên gia Toàn cầu.',
    cta1: { label: 'KẾT NỐI HỆ SINH THÁI ĐỐI TÁC', href: '#about' },
    cta2: { label: 'GẶP GỠ ĐỘI NGŨ CHUYÊN GIA', href: '#about' },
    bg: 'from-emerald-900 to-emerald-700',
    image: '/images/hero/slide2.jpg',
    active: true,
  },
  {
    id: 3,
    headline: 'TALENT GATEWAY',
    subheadline: 'LỐI ĐI TẮT ĐẾN SỰ NGHIỆP CÔNG NGHỆ CAO',
    description: 'Biến tiềm năng thành Năng lực làm việc ngay từ ghế nhà trường.',
    cta1: { label: 'XEM CHƯƠNG TRÌNH ĐÀO TẠO', href: '#training' },
    cta2: { label: 'CƠ HỘI THỰC TẬP & VIỆC LÀM', href: '#contact' },
    bg: 'from-purple-900 to-purple-700',
    image: '/images/hero/slide3.jpg',
    active: true,
  },
  {
    id: 4,
    headline: 'TĂNG TỐC SỰ NGHIỆP CÔNG NGHỆ',
    subheadline: 'MASTERING CLOUD, AI & EDGE TRONG KỶ NGUYÊN ĐỔI MỚI',
    description: 'Nâng cấp chuyên môn lên tầm cao mới với các chuyên gia hàng đầu.',
    cta1: { label: 'TÌM HIỂU CÁC KHÓA HỌC', href: '#training' },
    cta2: { label: 'TƯ VẤN LỘ TRÌNH SỰ NGHIỆP', href: '#contact' },
    bg: 'from-orange-900 to-orange-700',
    image: '/images/hero/slide4.jpg',
    active: true,
  },
];

// ============ ABOUT BLOCKS ============
export const aboutBlocks = [
  {
    id: 'vision',
    title: 'ĐỊNH VỊ CHIẾN LƯỢC VÀ TẦM NHÌN',
    subtitle: 'DẪN ĐẦU KIẾN TẠO NHÂN LỰC CÔNG NGHỆ CAO VIỆT NAM',
    content: 'Công ty Cổ phần WENet Hà Nội được thành lập với khát vọng trở thành nhà đào tạo và nhà cung cấp nguồn nhân lực công nghệ cao dẫn đầu Việt Nam.',
    icon: '🎯',
    image: '/images/about/vision.jpg',
    active: true,
  },
  {
    id: 'mission',
    title: 'SỨ MỆNH',
    subtitle: 'CẦU NỐI GIỮA ĐỔI MỚI VÀ HIỆU SUẤT KINH DOANH',
    content: 'WENet cam kết thực hiện ba sứ mệnh song hành: Đào tạo nhân lực kỹ thuật cao, Cung cấp Nguồn Nhân lực Tinh nhuệ, và Tiên phong R&D trong Giáo dục.',
    icon: '🚀',
    image: '/images/about/mission.jpg',
    active: true,
  },
  {
    id: 'values',
    title: 'GIÁ TRỊ CỐT LÕI',
    subtitle: 'VĂN HÓA LÀM VIỆC DỰA TRÊN KỶ LUẬT VÀ SÁNG TẠO',
    content: 'Nhiệt Huyết - Nguyên Tắc & Kỷ Luật - Sáng tạo bền vững - Lắng Nghe & Thấu Hiểu.',
    icon: '💎',
    image: '/images/about/values.jpg',
    active: true,
  },
  {
    id: 'strength',
    title: 'THẾ MẠNH',
    subtitle: 'SỨC MẠNH TỪ HỆ SINH THÁI CHUYÊN GIA',
    content: 'Đội ngũ Chuyên gia Toàn cầu từ Hoa Kỳ và Nhật Bản. Trụ sở tại khuôn viên đại học lớn.',
    icon: '🌟',
    image: '/images/about/strength.jpg',
    active: true,
  },
];

// ============ SERVICES ============
export const services = [
  {
    id: 'hr',
    title: 'DỊCH VỤ CUNG ỨNG VÀ PHÁT TRIỂN NHÂN LỰC CÔNG NGHỆ CAO',
    subtitle: 'GIẢI PHÁP NHÂN SỰ CÔNG NGHỆ CAO CHO DOANH NGHIỆP',
    description: 'Chúng tôi chuyên cung cấp nguồn nhân lực tinh nhuệ, được đào tạo theo tiêu chuẩn thực chiến nghiêm ngặt.',
    features: [
      { name: 'Cloud Service', desc: 'Kỹ sư Cloud Architect/DevOps chuyên sâu về AWS, Azure, Google Cloud' },
      { name: 'AI/ML', desc: 'Data Scientist, ML Engineer, Computer Vision, NLP' },
      { name: 'Edge Computing & IoT', desc: 'Kỹ sư lập trình thiết bị Edge, tích hợp dữ liệu' },
    ],
    models: ['Offshore Development Center (ODC)', 'Onshore/Staff Augmentation'],
    icon: '👥',
    color: 'blue',
    image: '/images/services/hr-service.jpg',
    active: true,
  },
  {
    id: 'tech',
    title: 'DỊCH VỤ CÔNG NGHỆ & ĐỔI MỚI',
    subtitle: 'NGHIÊN CỨU ỨNG DỤNG VÀ CHUYỂN GIAO PHƯƠNG PHÁP ĐÀO TẠO ĐỘT PHÁ',
    description: 'Biến các kết quả nghiên cứu thành giải pháp kinh doanh cho các tổ chức.',
    features: [
      { name: 'Chuyển giao công nghệ đào tạo', desc: 'Triết lý Lấy người học làm trung tâm với VR, AR, XR' },
      { name: 'Tư vấn & R&D ứng dụng', desc: 'Chiến lược tích hợp AI, chuyển đổi Cloud/Edge Computing' },
      { name: 'Proof of Concept', desc: 'Dự án nghiên cứu PoC với công nghệ đột phá' },
    ],
    models: ['Training Methodology Transfer', 'Consulting & Applied R&D'],
    icon: '⚡',
    color: 'emerald',
    image: '/images/services/tech-service.jpg',
    active: true,
  },
];

// ============ TRAINING FEATURES ============
export const trainingFeatures = [
  { id: 1, icon: '🥽', title: 'VR/AR/3D Simulations', desc: 'Mô phỏng môi trường làm việc thực tế', active: true },
  { id: 2, icon: '🤖', title: 'AI Learning Paths', desc: 'Lộ trình học tập cá nhân hóa bằng AI', active: true },
  { id: 3, icon: '☁️', title: 'TrainerEdge™ Platform', desc: 'Nền tảng đào tạo cloud-edge tiên tiến', active: true },
  { id: 4, icon: '🌐', title: 'English & Japanese', desc: 'Đào tạo song ngữ Anh - Nhật', active: true },
  { id: 5, icon: '💼', title: 'Job Matching', desc: 'Kết nối việc làm với đối tác', active: true },
  { id: 6, icon: '✈️', title: 'Visa Support', desc: 'Hỗ trợ visa làm việc nước ngoài', active: true },
];

// ============ TRAINING AUDIENCES ============
export const trainingAudiences = [
  {
    id: 'student',
    title: 'Dành cho Sinh viên',
    subtitle: 'TALENT GATEWAY: LỐI ĐI TẮT ĐẾN SỰ NGHIỆP CÔNG NGHỆ CAO',
    benefits: [
      'Tiếp cận mô hình AI/Cloud/Edge trong môi trường thực chiến',
      'Tối ưu hóa thời gian học với công nghệ VR/AR/XR',
      'Nghiên cứu & phát triển ngay tại khuôn viên đại học',
      'Cơ hội thực tập & việc làm ưu tiên tại mạng lưới đối tác',
    ],
    color: 'purple',
    image: '/images/training/student.jpg',
    active: true,
  },
  {
    id: 'professional',
    title: 'Dành cho Người lao động công nghệ',
    subtitle: 'TĂNG TỐC SỰ NGHIỆP: MASTERING CLOUD, AI & EDGE',
    benefits: [
      'Nâng cấp Kỹ năng lên Architect Level',
      'Thiết kế hệ thống Cloud quy mô lớn',
      'Triển khai mô hình AI trong Production',
      'Làm chủ công nghệ VR/AR/XR cho môi trường công việc',
    ],
    color: 'orange',
    image: '/images/training/professional.jpg',
    active: true,
  },
];

// ============ R&D AREAS ============
export const rndAreas = [
  {
    id: 'edge-ai',
    title: 'AI được tối ưu hóa trên Edge',
    subtitle: 'Optimized Edge AI',
    description: 'Nghiên cứu các thuật toán nén mô hình học sâu, lượng tử hóa và tối ưu hóa chip.',
    impact: 'Giảm độ trễ, tăng cường bảo mật - chìa khóa cho IoT và Smart City.',
    icon: '🧠',
    color: 'blue',
    image: '/images/rnd/edge-ai.jpg',
    active: true,
  },
  {
    id: 'cloud',
    title: 'Kiến trúc Cloud lai & phân tán',
    subtitle: 'Hybrid & Distributed Cloud',
    description: 'Phát triển các mô hình quản lý, điều phối và bảo mật dữ liệu trên Cloud Lai.',
    impact: 'Giúp doanh nghiệp đạt được khả năng mở rộng và linh hoạt tối đa.',
    icon: '☁️',
    color: 'emerald',
    image: '/images/rnd/cloud-architecture.jpg',
    active: true,
  },
  {
    id: 'xr',
    title: 'Phương pháp học tập XR',
    subtitle: 'Cross-Reality Learning',
    description: 'Sử dụng VR, AR, XR để tạo ra các Digital Twins của môi trường làm việc.',
    impact: 'Cốt lõi của Chuyển giao Phương pháp Đào tạo Mới.',
    icon: '🥽',
    color: 'purple',
    image: '/images/rnd/xr-learning.jpg',
    active: true,
  },
];

// ============ NEWS ============
export const newsItems = [
  {
    id: 1,
    title: 'WENet Hà Nội ký kết hợp tác với các trường Đại học hàng đầu',
    excerpt: 'Mở rộng hệ sinh thái đào tạo nhân lực công nghệ cao với các đối tác chiến lược.',
    date: '15/12/2024',
    category: 'Hợp tác',
    image: '/images/news/news1.jpg',
    active: true,
  },
  {
    id: 2,
    title: 'Cơ hội thị trường Cloud & AI tại Việt Nam 2025',
    excerpt: 'Phân tích xu hướng và nhu cầu nhân lực công nghệ trong năm tới.',
    date: '10/12/2024',
    category: 'Thị trường',
    image: '/images/news/news2.jpg',
    active: true,
  },
  {
    id: 3,
    title: 'Ra mắt chương trình đào tạo VR/AR cho doanh nghiệp',
    excerpt: 'Ứng dụng công nghệ thực tế ảo trong đào tạo nhân sự kỹ thuật cao.',
    date: '05/12/2024',
    category: 'Đào tạo',
    image: '/images/news/news3.jpg',
    active: true,
  },
];

// ============ CONTACT INFO ============
export const contactInfo = {
  address: 'Khuôn viên Đại học, Hà Nội, Việt Nam',
  phone: '+84 xxx xxx xxx',
  email: 'contact@wenet.vn',
  departments: [
    { name: 'Phòng Kinh doanh', email: 'sales@wenet.vn' },
    { name: 'Phòng Đào tạo', email: 'training@wenet.vn' },
  ],
  social: [
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'YouTube', url: '#', icon: '📺' },
  ],
};

// ============ SITE SETTINGS ============
export const siteSettings = {
  siteName: 'WENet Hà Nội',
  tagline: 'Kiến tạo Nhân lực Công nghệ Cao',
  description: 'Chuyên gia số về Cloud, AI & Edge. Đào tạo và cung cấp nguồn nhân lực công nghệ cao hàng đầu Việt Nam.',
  logo: '/images/logo/wenet-logo.png',
  logoWhite: '/images/logo/wenet-logo-white.png',
  primaryColor: '#0066cc',
  secondaryColor: '#f97316',
};

// Type exports
export type HeroSlide = typeof heroSlides[0];
export type AboutBlock = typeof aboutBlocks[0];
export type Service = typeof services[0];
export type TrainingFeature = typeof trainingFeatures[0];
export type TrainingAudience = typeof trainingAudiences[0];
export type RnDArea = typeof rndAreas[0];
export type NewsItem = typeof newsItems[0];
