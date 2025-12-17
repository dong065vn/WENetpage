import { Header, Footer } from '@/components/navigation';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  TrainingSection,
  RnDSection,
  NewsSection,
  ContactSection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrainingSection />
        <RnDSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
