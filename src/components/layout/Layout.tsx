import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BackToTop from './BackToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px] lg:pt-[120px]">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Layout;
