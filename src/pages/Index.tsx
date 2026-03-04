import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/layout/PageTransition';
import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import ClientsCarousel from '@/components/home/ClientsCarousel';
import FAQSection from '@/components/home/FAQSection';

const Index = () => {
  return (
    <PageTransition>
      <Layout>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <ClientsCarousel />
        <FAQSection />
      </Layout>
    </PageTransition>
  );
};

export default Index;
