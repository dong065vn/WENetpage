# 📸 Hướng dẫn thêm ảnh cho Website WENet

## Cấu trúc thư mục

```
public/images/
├── logo/           # Logo công ty
├── hero/           # Ảnh banner slider (4 slides)
├── about/          # Ảnh phần Giới thiệu
├── services/       # Ảnh phần Dịch vụ
├── training/       # Ảnh phần Đào tạo
├── rnd/            # Ảnh phần R&D
├── contact/        # Ảnh phần Liên hệ
├── team/           # Ảnh đội ngũ (optional)
├── partners/       # Logo đối tác (optional)
└── bg/             # Ảnh nền (optional)
```

## Danh sách ảnh cần thêm

### 1. Logo (`logo/`)
| File | Kích thước đề xuất | Mô tả |
|------|-------------------|-------|
| `wenet-logo.png` | 200x200px | Logo chính (nền trong suốt) |
| `wenet-logo-white.png` | 200x200px | Logo trắng cho footer |
| `favicon.ico` | 32x32px | Icon tab browser |

### 2. Hero Slider (`hero/`)
| File | Kích thước đề xuất | Mô tả |
|------|-------------------|-------|
| `slide1.jpg` | 1920x1080px | Cloud, AI & Edge |
| `slide2.jpg` | 1920x1080px | Hệ sinh thái kết nối |
| `slide3.jpg` | 1920x1080px | Talent Gateway - Sinh viên |
| `slide4.jpg` | 1920x1080px | Tăng tốc sự nghiệp |

### 3. About Section (`about/`)
| File | Kích thước đề xuất | Mô tả |
|------|-------------------|-------|
| `vision.jpg` | 800x600px | Tầm nhìn chiến lược |
| `mission.jpg` | 800x600px | Sứ mệnh |
| `values.jpg` | 800x600px | Giá trị cốt lõi |
| `strength.jpg` | 800x600px | Thế mạnh |
| `video-thumbnail.jpg` | 1280x720px | Thumbnail video giới thiệu |
| `intro-video.mp4` | - | Video giới thiệu (optional) |

### 4. Services Section (`services/`)
| File | Kích thước đề xuất | Mô tả |
|------|-------------------|-------|
| `hr-service.jpg` | 800x450px | Dịch vụ nhân sự |
| `tech-service.jpg` | 800x450px | Dịch vụ công nghệ |
| `cloud.jpg` | 400x300px | Cloud Service |
| `ai.jpg` | 400x300px | AI/ML |
| `edge.jpg` | 400x300px | Edge Computing |

### 5. Training Section (`training/`)
| File | Kích thước đề xuất | Mô tả |
|------|-------------------|-------|
| `training-main.jpg` | 1200x600px | Ảnh chính đào tạo |
| `vr-training.jpg` | 800x600px | Đào tạo VR/AR |
| `student.jpg` | 800x400px | Dành cho sinh viên |
| `professional.jpg` | 800x400px | Dành cho chuyên gia |

### 6. R&D Section (`rnd/`)
| File | Kích thước đề xuất | Mô tả |
|------|-------------------|-------|
| `rnd-main.jpg` | 1200x600px | Ảnh chính R&D |
| `edge-ai.jpg` | 600x400px | Edge AI |
| `cloud-architecture.jpg` | 600x400px | Cloud Architecture |
| `xr-learning.jpg` | 600x400px | XR Learning |
| `xr-lab.jpg` | 600x400px | Phòng lab XR |

### 7. Contact Section (`contact/`)
| File | Kích thước đề xuất | Mô tả |
|------|-------------------|-------|
| `office.jpg` | 800x600px | Văn phòng công ty |
| `map.jpg` | 800x400px | Bản đồ vị trí |

## Cách thêm ảnh

1. **Đặt ảnh vào đúng thư mục** theo cấu trúc trên
2. **Đặt tên file đúng** như trong bảng
3. **Refresh trang** để xem kết quả

## Lưu ý

- Ảnh nên được tối ưu (compress) trước khi upload
- Định dạng khuyến nghị: `.jpg` cho ảnh, `.png` cho logo có nền trong suốt
- Nếu không có ảnh, website sẽ hiển thị gradient màu thay thế
- Để thay đổi đường dẫn ảnh, sửa file: `src/lib/images.ts`

## Công cụ tối ưu ảnh

- [TinyPNG](https://tinypng.com/) - Nén PNG/JPG
- [Squoosh](https://squoosh.app/) - Nén và chuyển đổi định dạng
- [Remove.bg](https://remove.bg/) - Xóa nền ảnh
