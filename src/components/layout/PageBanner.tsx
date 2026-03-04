import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  title: string;
  breadcrumbs: { name: string; path?: string }[];
  backgroundImage?: string;
}

const PageBanner = ({ title, breadcrumbs, backgroundImage }: PageBannerProps) => {
  return (
    <section
      className="relative py-14 md:py-20 bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : 'linear-gradient(135deg, hsl(0 0% 20%) 0%, hsl(0 0% 30%) 100%)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/75" />

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
          {title}
        </h1>
        <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        <nav className="flex items-center justify-center gap-2 text-background/80">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.name} className="flex items-center gap-2">
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-primary transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-primary">{crumb.name}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-4 h-4" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default PageBanner;
