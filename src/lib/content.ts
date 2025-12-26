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
    description: 'Nâng cao hiệu suất kinh doanh bằng nguồn nhân lực tinh nhuệ được đào tạo theo triết lý LẤY NGƯỜI HỌC LÀM TRUNG TÂM. Chúng tôi cung cấp giải pháp nhân sự kỹ thuật cao, sáng tạo bền vững, đáp ứng mọi thách thức chuyển đổi số.',
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
    description: 'WENet là cầu nối độc đáo giữa Nhà trường – Doanh nghiệp – Chuyên gia Toàn cầu. Nơi kiến thức chuyên sâu được chắt lọc từ đội ngũ tinh hoa, đảm bảo đầu ra nhân lực Nhiệt huyết & Kỷ luật.',
    cta1: { label: 'KẾT NỐI HỆ SINH THÁI ĐỐI TÁC', href: '#about' },
    cta2: { label: 'GẶP GỠ ĐỘI NGŨ CHUYÊN GIA', href: '#about' },
    bg: 'from-emerald-900 to-emerald-700',
    image: '/images/hero/slide2.jpg',
    active: true,
  },
  {
    id: 3,
    headline: 'TALENT GATEWAY',
    subheadline: 'LỐI ĐI TẮT ĐẾN SỰ NGHIỆP CÔNG NGHỆ CAO - CHUYỂN GIAO KỸ NĂNG THỰC CHIẾN CLOUD, AI & EDGE',
    description: 'Biến tiềm năng thành Năng lực làm việc ngay từ ghế nhà trường. Áp dụng triết lý học tập lấy người học làm trung tâm qua công nghệ VR/AR tiên tiến. Cam kết đầu ra Chất lượng - Kỷ luật - Thấu hiểu.',
    cta1: { label: 'HÃY XEM CÁC CHƯƠNG TRÌNH ĐÀO TẠO ĐỘT PHÁ', href: '#training' },
    cta2: { label: 'CƠ HỘI THỰC TẬP & VIỆC LÀM NGAY', href: '#contact' },
    bg: 'from-purple-900 to-purple-700',
    image: '/images/hero/slide3.jpg',
    active: true,
  },
  {
    id: 4,
    headline: 'TĂNG TỐC SỰ NGHIỆP CÔNG NGHỆ',
    subheadline: 'MASTERING CLOUD, AI & EDGE TRONG KỶ NGUYÊN ĐỔI MỚI',
    description: 'Nâng cấp chuyên môn lên tầm cao mới. Khai thác kinh nghiệm thực chiến từ các chuyên gia hàng đầu đang làm việc tại Mỹ và cho các doanh nghiệp Nhật Bản. Đào tạo chuyên sâu theo mô hình Sáng tạo bền vững.',
    cta1: { label: 'HÃY TÌM HIỂU CÁC KHÓA HỌC CỦA CHÚNG TÔI', href: '#training' },
    cta2: { label: 'LIÊN HỆ TƯ VẤN LỘ TRÌNH SỰ NGHIỆP', href: '#contact' },
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
    content: 'Công ty Cổ phần WENet Hà Nội được thành lập với khát vọng trở thành nhà đào tạo và nhà cung cấp nguồn nhân lực công nghệ cao dẫn đầu Việt Nam. Chúng tôi chuyên sâu trong ba trụ cột công nghệ then chốt của tương lai: Cloud Service, Trí tuệ Nhân tạo (AI), và Chuyển giao Phương pháp Đào tạo Đột phá. WENet Hà Nội không chỉ cung cấp giải pháp nhân sự; chúng tôi định hình các kiến trúc sư và kỹ sư tiên phong sẵn sàng cho kỷ nguyên số.',
    icon: '🎯',
    image: '/images/about/vision.jpg',
    active: true,
  },
  {
    id: 'mission',
    title: 'SỨ MỆNH',
    subtitle: 'CẦU NỐI GIỮA ĐỔI MỚI VÀ HIỆU SUẤT KINH DOANH',
    content: 'WENet cam kết thực hiện ba sứ mệnh song hành: Đào tạo nhân lực kỹ thuật cao với kiến thức, kỹ năng và thái độ chuyên nghiệp trong lĩnh vực Edge Computing, Cloud Service, và AI. Cung cấp Nguồn Nhân lực Tinh nhuệ đáp ứng ngay lập tức nhu cầu nhân sự Onshore/Offshore Development. Tiên phong R&D trong Giáo dục với công nghệ VR, AR, XR theo triết lý Lấy người học làm trung tâm.',
    icon: '🚀',
    image: '/images/about/mission.jpg',
    active: true,
  },
  {
    id: 'values',
    title: 'GIÁ TRỊ CỐT LÕI',
    subtitle: 'VĂN HÓA LÀM VIỆC DỰA TRÊN KỶ LUẬT VÀ SÁNG TẠO',
    content: 'WENet xây dựng chất lượng nhân sự và dịch vụ dựa trên bốn giá trị không thể thay đổi: Nhiệt Huyết - luôn giữ lửa đam mê, tinh thần chủ động. Nguyên Tắc & Kỷ Luật - tuân thủ quy trình kỹ thuật và đạo đức nghề nghiệp nghiêm ngặt. Sáng tạo bền vững - không ngừng đổi mới công nghệ và phương pháp. Lắng Nghe & Thấu Hiểu - cung cấp giải pháp cá nhân hóa, tối ưu nhất.',
    icon: '💎',
    image: '/images/about/values.jpg',
    active: true,
  },
  {
    id: 'strength',
    title: 'THẾ MẠNH',
    subtitle: 'SỨC MẠNH TỪ HỆ SINH THÁI CHUYÊN GIA',
    content: 'Đội ngũ Chuyên gia Toàn cầu: Giảng viên là các chuyên gia Cloud Service người Việt đang sinh sống tại Hoa Kỳ, cùng các nhà quản lý AI và nhân sự từ các tập đoàn Nhật Bản. Vị thế Học thuật: Trụ sở công ty đặt tại khuôn viên một trường đại học lớn, tạo điều kiện cho R&D liên tục. Mạng lưới Doanh nghiệp Rộng khắp: Đảm bảo cơ hội thực tập, việc làm, và chuyển giao nhân sự chất lượng cao.',
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
    subtitle: 'TALENT GATEWAY: LỐI ĐI TẮT ĐẾN SỰ NGHIỆP CÔNG NGHỆ CAO - CHUYỂN GIAO KỸ NĂNG THỰC CHIẾN CLOUD, AI & EDGE',
    description: 'Biến tiềm năng thành Năng lực làm việc ngay từ ghế nhà trường. Áp dụng triết lý học tập lấy người học làm trung tâm qua công nghệ VR/AR tiên tiến. Cam kết đầu ra Chất lượng - Kỷ luật - Thấu hiểu.',
    benefits: [
      'Được tiếp cận mô hình AI/Cloud/Edge trong môi trường thực chiến',
      'Tối ưu hóa thời gian học với công nghệ VR/AR/XR',
      'Nghiên cứu & phát triển (R&D) ngay tại khuôn viên đại học',
      'Có cơ hội thực tập & việc làm ưu tiên tại mạng lưới đối tác',
      'Tạo được lợi thế cạnh tranh nhờ kỷ luật và nguyên tắc làm việc',
    ],
    color: 'purple',
    image: '/images/training/student.jpg',
    active: true,
  },
  {
    id: 'professional',
    title: 'Dành cho Người lao động công nghệ',
    subtitle: 'TĂNG TỐC SỰ NGHIỆP CÔNG NGHỆ: MASTERING CLOUD, AI & EDGE TRONG KỶ NGUYÊN ĐỔI MỚI',
    description: 'Nâng cấp chuyên môn lên tầm cao mới. Khai thác kinh nghiệm thực chiến từ các chuyên gia hàng đầu đang làm việc tại Mỹ và cho các doanh nghiệp Nhật Bản. Đào tạo chuyên sâu theo mô hình Sáng tạo bền vững.',
    benefits: [
      'Nâng cấp Kỹ năng lên kiến trúc sư (Architect Level): Thiết kế hệ thống Cloud quy mô lớn, triển khai mô hình AI trong Production',
      'Làm chủ công nghệ VR/AR/XR cho môi trường công việc',
      'Sử dụng các phòng lab ảo để thực hành xử lý sự cố phức tạp (Troubleshooting)',
      'Tối ưu hóa hệ thống với kinh nghiệm từ chuyên gia quốc tế',
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
    description: 'Nghiên cứu các thuật toán nén mô hình học sâu (Model Compression), lượng tử hóa (Quantization) và tối ưu hóa chip để triển khai AI hiệu quả trên các thiết bị tài nguyên thấp (Edge Devices).',
    impact: 'Giảm độ trễ, tăng cường bảo mật và tiết kiệm băng thông, là chìa khóa cho các giải pháp IoT và Smart City.',
    icon: '🧠',
    color: 'blue',
    image: '/images/rnd/edge-ai.jpg',
    active: true,
  },
  {
    id: 'cloud',
    title: 'Kiến trúc Cloud lai & phân tán',
    subtitle: 'Hybrid & Distributed Cloud Architectures',
    description: 'Phát triển các mô hình quản lý, điều phối (Orchestration) và bảo mật dữ liệu trên các môi trường Cloud Lai (Hybrid) và Đa Cloud (Multi-Cloud).',
    impact: 'Giúp doanh nghiệp đạt được khả năng mở rộng (Scalability) và linh hoạt tối đa, đặc biệt quan trọng trong các ngành tài chính và bán lẻ.',
    icon: '☁️',
    color: 'emerald',
    image: '/images/rnd/cloud-architecture.jpg',
    active: true,
  },
  {
    id: 'xr',
    title: 'Phương pháp học tập tương tác thực tại',
    subtitle: 'Cross-Reality Learning Methods',
    description: 'Sử dụng VR, AR, XR không chỉ để mô phỏng mà để tạo ra các "Twin Kỹ thuật số" (Digital Twins) của môi trường làm việc phức tạp, cho phép thực hành xử lý sự cố trong môi trường không rủi ro.',
    impact: 'Đây là cốt lõi của "Chuyển giao Phương pháp Đào tạo Mới", đảm bảo người học và nhân sự có kinh nghiệm đạt được kỹ năng thực hành sâu nhất.',
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
