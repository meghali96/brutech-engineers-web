import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/layout/PageTransition';
import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import ClientsCarousel from '@/components/home/ClientsCarousel';
import FAQSection from '@/components/home/FAQSection';
import SEO, { localBusinessSchema } from '@/components/SEO';

const Index = () => {
  return (
    <PageTransition>
      <SEO
        title="Brutech Engineers | Industrial Solutions & Precision Machine Parts"
        description="Brutech Engineers delivers precision machine parts, assembly solutions, pneumatic lifting, heavy torque tools & customized material handling across India."
        keywords="Brutech Engineers, industrial solutions, precision machine parts, assembly solutions, pneumatic lifting, railing systems, heavy torque tools, material handling, Hyderabad"
        jsonLd={localBusinessSchema}
      />
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
