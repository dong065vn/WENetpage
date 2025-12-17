'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  heroSlides,
  aboutBlocks,
  services,
  trainingFeatures,
  trainingAudiences,
  rndAreas,
  newsItems,
  contactInfo,
  siteSettings,
} from '@/lib/content';

type TabType = 'overview' | 'hero' | 'about' | 'services' | 'training' | 'rnd' | 'news' | 'contact' | 'settings';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'overview', label: 'Tổng quan', icon: '📊' },
    { id: 'hero', label: 'Hero Slides', icon: '🖼️' },
    { id: 'about', label: 'Giới thiệu', icon: '📝' },
    { id: 'services', label: 'Dịch vụ', icon: '⚙️' },
    { id: 'training', label: 'Đào tạo', icon: '🎓' },
    { id: 'rnd', label: 'R&D', icon: '🔬' },
    { id: 'news', label: 'Tin tức', icon: '📰' },
    { id: 'contact', label: 'Liên hệ', icon: '📞' },
    { id: 'settings', label: 'Cài đặt', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0066cc] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">WENet Admin</h1>
              <p className="text-sm text-gray-500">Quản lý Landing Page</p>
            </div>
          </div>
          <Link href="/" target="_blank" className="px-4 py-2 bg-[#0066cc] text-white rounded-lg hover:bg-[#004d99] transition-colors">
            Xem Website →
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
              <ul className="space-y-1">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-[#0066cc] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-xl">{tab.icon}</span>
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'hero' && <HeroTab />}
            {activeTab === 'about' && <AboutTab />}
            {activeTab === 'services' && <ServicesTab />}
            {activeTab === 'training' && <TrainingTab />}
            {activeTab === 'rnd' && <RnDTab />}
            {activeTab === 'news' && <NewsTab />}
            {activeTab === 'contact' && <ContactTab />}
            {activeTab === 'settings' && <SettingsTab />}
          </main>
        </div>
      </div>
    </div>
  );
}


// ============ OVERVIEW TAB ============
function OverviewTab() {
  const stats = [
    { label: 'Hero Slides', value: heroSlides.length, icon: '🖼️', color: 'blue' },
    { label: 'About Blocks', value: aboutBlocks.length, icon: '📝', color: 'emerald' },
    { label: 'Services', value: services.length, icon: '⚙️', color: 'purple' },
    { label: 'Training Features', value: trainingFeatures.length, icon: '🎓', color: 'orange' },
    { label: 'R&D Areas', value: rndAreas.length, icon: '🔬', color: 'pink' },
    { label: 'News Items', value: newsItems.length, icon: '📰', color: 'cyan' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tổng quan Website</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className={`p-4 rounded-xl bg-${stat.color}-50 border border-${stat.color}-200`}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{stat.icon}</span>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Thông tin Website</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Tên website</p>
            <p className="font-semibold text-gray-900">{siteSettings.siteName}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Tagline</p>
            <p className="font-semibold text-gray-900">{siteSettings.tagline}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg col-span-2">
            <p className="text-sm text-gray-500">Mô tả</p>
            <p className="font-semibold text-gray-900">{siteSettings.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


// ============ HERO TAB ============
function HeroTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Hero Slides ({heroSlides.length})</h2>
          <button className="px-4 py-2 bg-[#0066cc] text-white rounded-lg hover:bg-[#004d99]">+ Thêm Slide</button>
        </div>
        <div className="space-y-4">
          {heroSlides.map((slide, idx) => (
            <div key={slide.id} className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`w-24 h-16 rounded-lg bg-gradient-to-br ${slide.bg} flex items-center justify-center text-white font-bold`}>
                  #{idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{slide.headline}</h3>
                  <p className="text-sm text-gray-600">{slide.subheadline}</p>
                  <p className="text-sm text-gray-500 mt-1">{slide.description}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">{slide.cta1.label}</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{slide.cta2.label}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">✏️</button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded">🗑️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ ABOUT TAB ============
function AboutTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Giới thiệu ({aboutBlocks.length} blocks)</h2>
          <button className="px-4 py-2 bg-[#0066cc] text-white rounded-lg hover:bg-[#004d99]">+ Thêm Block</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aboutBlocks.map((block) => (
            <div key={block.id} className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{block.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-[#0066cc] text-sm">{block.title}</h3>
                  <h4 className="font-semibold text-gray-900">{block.subtitle}</h4>
                  <p className="text-sm text-gray-600 mt-2">{block.content}</p>
                  <p className="text-xs text-gray-400 mt-2">Image: {block.image}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <button className="p-1 text-blue-600 hover:bg-blue-50 rounded text-sm">✏️</button>
                  <button className="p-1 text-red-600 hover:bg-red-50 rounded text-sm">🗑️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// ============ SERVICES TAB ============
function ServicesTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Dịch vụ ({services.length})</h2>
          <button className="px-4 py-2 bg-[#0066cc] text-white rounded-lg hover:bg-[#004d99]">+ Thêm Dịch vụ</button>
        </div>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{service.icon}</span>
                <div className="flex-1">
                  <span className={`text-xs font-bold ${service.color === 'blue' ? 'text-blue-600' : 'text-emerald-600'}`}>{service.title}</span>
                  <h3 className="font-bold text-gray-900">{service.subtitle}</h3>
                  <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-gray-500 mb-1">Features:</p>
                    <ul className="space-y-1">
                      {service.features.map((f, i) => (
                        <li key={i} className="text-sm text-gray-600">• <strong>{f.name}:</strong> {f.desc}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {service.models.map((m) => (
                      <span key={m} className={`px-2 py-1 text-xs rounded ${service.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>{m}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">✏️</button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded">🗑️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ TRAINING TAB ============
function TrainingTab() {
  return (
    <div className="space-y-6">
      {/* Features */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Training Features ({trainingFeatures.length})</h2>
          <button className="px-4 py-2 bg-[#0066cc] text-white rounded-lg hover:bg-[#004d99]">+ Thêm Feature</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {trainingFeatures.map((f) => (
            <div key={f.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{f.icon}</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{f.title}</h4>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded text-sm">✏️</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audiences */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Target Audiences ({trainingAudiences.length})</h2>
          <button className="px-4 py-2 bg-[#0066cc] text-white rounded-lg hover:bg-[#004d99]">+ Thêm Audience</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trainingAudiences.map((a) => (
            <div key={a.id} className={`border-2 rounded-xl p-4 ${a.color === 'purple' ? 'border-purple-200' : 'border-orange-200'}`}>
              <h3 className="font-bold text-gray-900">{a.title}</h3>
              <p className={`text-sm font-semibold ${a.color === 'purple' ? 'text-purple-600' : 'text-orange-600'}`}>{a.subtitle}</p>
              <ul className="mt-3 space-y-1">
                {a.benefits.map((b, i) => (
                  <li key={i} className="text-sm text-gray-600">✓ {b}</li>
                ))}
              </ul>
              <div className="flex gap-2 mt-3">
                <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm">✏️ Sửa</button>
                <button className="px-3 py-1 text-red-600 hover:bg-red-50 rounded text-sm">🗑️ Xóa</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// ============ R&D TAB ============
function RnDTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">R&D Areas ({rndAreas.length})</h2>
          <button className="px-4 py-2 bg-[#0066cc] text-white rounded-lg hover:bg-[#004d99]">+ Thêm Area</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rndAreas.map((area) => (
            <div key={area.id} className={`border-2 rounded-xl p-4 ${
              area.color === 'blue' ? 'border-blue-200' : area.color === 'emerald' ? 'border-emerald-200' : 'border-purple-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">{area.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{area.title}</h3>
                  <p className={`text-xs ${area.color === 'blue' ? 'text-blue-600' : area.color === 'emerald' ? 'text-emerald-600' : 'text-purple-600'}`}>{area.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{area.description}</p>
              <div className={`text-xs p-2 rounded ${area.color === 'blue' ? 'bg-blue-50 text-blue-700' : area.color === 'emerald' ? 'bg-emerald-50 text-emerald-700' : 'bg-purple-50 text-purple-700'}`}>
                <strong>Impact:</strong> {area.impact}
              </div>
              <div className="flex gap-2 mt-3">
                <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm">✏️ Sửa</button>
                <button className="px-3 py-1 text-red-600 hover:bg-red-50 rounded text-sm">🗑️ Xóa</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ NEWS TAB ============
function NewsTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Tin tức ({newsItems.length})</h2>
          <button className="px-4 py-2 bg-[#0066cc] text-white rounded-lg hover:bg-[#004d99]">+ Thêm Tin</button>
        </div>
        <div className="space-y-4">
          {newsItems.map((item) => (
            <div key={item.id} className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-24 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📰</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">{item.category}</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.excerpt}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">✏️</button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded">🗑️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// ============ CONTACT TAB ============
function ContactTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Thông tin Liên hệ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Thông tin chính</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-xl">📍</span>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Địa chỉ</p>
                  <p className="font-medium text-gray-900">{contactInfo.address}</p>
                </div>
                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">✏️</button>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-xl">📞</span>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Điện thoại</p>
                  <p className="font-medium text-gray-900">{contactInfo.phone}</p>
                </div>
                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">✏️</button>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-xl">✉️</span>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{contactInfo.email}</p>
                </div>
                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">✏️</button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Phòng ban</h3>
            <div className="space-y-3">
              {contactInfo.departments.map((dept, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-xl">🏢</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{dept.name}</p>
                    <p className="text-sm text-[#0066cc]">{dept.email}</p>
                  </div>
                  <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">✏️</button>
                </div>
              ))}
              <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-[#0066cc] hover:text-[#0066cc] transition-colors">
                + Thêm Phòng ban
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Mạng xã hội</h3>
        <div className="flex gap-4">
          {contactInfo.social.map((s, i) => (
            <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">{s.icon}</span>
              <span className="font-medium text-gray-900">{s.name}</span>
              <button className="p-1 text-blue-600 hover:bg-blue-50 rounded text-sm">✏️</button>
            </div>
          ))}
          <button className="p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-[#0066cc] hover:text-[#0066cc] transition-colors">
            + Thêm
          </button>
        </div>
      </div>
    </div>
  );
}

// ============ SETTINGS TAB ============
function SettingsTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cài đặt Website</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tên Website</label>
              <input type="text" defaultValue={siteSettings.siteName} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
              <input type="text" defaultValue={siteSettings.tagline} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả SEO</label>
            <textarea defaultValue={siteSettings.description} rows={3} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none resize-none" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Logo chính</label>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🖼️</span>
                </div>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Thay đổi</button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Logo trắng (Footer)</label>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🖼️</span>
                </div>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Thay đổi</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Màu chính</label>
              <div className="flex items-center gap-2">
                <input type="color" defaultValue={siteSettings.primaryColor} className="w-12 h-10 rounded cursor-pointer" />
                <input type="text" defaultValue={siteSettings.primaryColor} className="flex-1 px-4 py-2 border rounded-lg" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Màu phụ</label>
              <div className="flex items-center gap-2">
                <input type="color" defaultValue={siteSettings.secondaryColor} className="w-12 h-10 rounded cursor-pointer" />
                <input type="text" defaultValue={siteSettings.secondaryColor} className="flex-1 px-4 py-2 border rounded-lg" />
              </div>
            </div>
          </div>
          <div className="pt-4 border-t">
            <button className="px-6 py-2 bg-[#0066cc] text-white rounded-lg hover:bg-[#004d99]">Lưu thay đổi</button>
          </div>
        </div>
      </div>
    </div>
  );
}
