import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BackToTop from './BackToTop';
import AddressMarquee from './AddressMarquee';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <AddressMarquee />
      <Header />
      <main className="flex-grow pt-[80px] lg:pt-[100px]">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Layout;
