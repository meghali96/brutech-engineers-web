import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/layout/PageTransition';
import PageBanner from '@/components/layout/PageBanner';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import slide05 from '@/assets/slide-05.jpg';
import about1 from '@/assets/about-1.jpg';
import about2 from '@/assets/about-2.jpg';
import about3 from '@/assets/about-3.jpg';
import about4 from '@/assets/about-4.jpg';
import about5 from '@/assets/about-5.jpg';
import about6 from '@/assets/about-6.jpg';

const blogPosts = [
  { id: 'pneumatic-lifting', title: 'Pneumatic Lifting', excerpt: 'Discover the benefits of pneumatic lifting solutions for industrial material handling.', category: 'Industry Insights', date: 'Feb 28, 2025', image: about2, featured: true },
  { id: 'repairing-services', title: 'Repairing Services', excerpt: 'Essential industrial machinery repair and maintenance services to keep your operations running smoothly.', category: 'Maintenance', date: 'Feb 28, 2025', image: about4, featured: true },
  { id: 'choosing-power-tools', title: 'Choosing the Right Power Tools', excerpt: 'A comprehensive guide to selecting the best power tools for your industrial applications.', category: 'Equipment Guide', date: 'Feb 25, 2025', image: about1 },
  { id: 'hydraulic-vs-pneumatic', title: 'Hydraulic vs Pneumatic Lifting', excerpt: 'Understanding the key differences between hydraulic and pneumatic lifting systems.', category: 'Comparison', date: 'Feb 20, 2025', image: about5 },
  { id: 'safety-best-practices', title: 'Safety Best Practices', excerpt: 'Essential safety guidelines for operating industrial lifting equipment.', category: 'Safety', date: 'Feb 15, 2025', image: about3 },
  { id: 'custom-machine-parts', title: 'Custom Machine Parts', excerpt: 'How custom-made machine parts can improve your manufacturing efficiency.', category: 'Custom Solutions', date: 'Feb 10, 2025', image: about6 },
];

const categories = ['Industry Insights', 'Maintenance', 'Equipment Guide', 'Comparison', 'Safety', 'Custom Solutions'];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } } as const;
const card = { hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 80, damping: 14 } } };

const BlogPage = () => {
  return (
    <PageTransition>
      <SEO
        title="Blog | Brutech Engineers - Industry News & Insights"
        description="Read the latest industry news, engineering insights and updates from Brutech Engineers. Stay informed about industrial solutions and manufacturing trends."
        keywords="Brutech blog, industrial news, engineering insights, manufacturing trends, machine parts industry, industrial solutions blog"
      />
      <Layout>
        <PageBanner title="Blog" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Blog' }]} backgroundImage={slide05} />

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 gap-6">
                  {blogPosts.map((post) => (
                    <motion.article key={post.id} variants={card} whileHover={{ y: -6, scale: 1.02 }} className="blog-card group">
                      <div className="img-zoom aspect-video overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="category-badge">{post.category}</span>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground"><Calendar className="w-4 h-4" />{post.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </div>

              <motion.aside initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ type: 'spring', stiffness: 60, damping: 16 }} className="lg:col-span-1 space-y-8">
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="font-bold text-foreground mb-4">Search</h3>
                  <div className="relative">
                    <input type="text" placeholder="Search articles..." className="form-input pr-10" />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="font-bold text-foreground mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <motion.button whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 300 }} className="w-full text-left py-2 px-3 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">{category}</motion.button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="font-bold text-foreground mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <li key={post.id}>
                        <Link to={`/blog/${post.id}`} className="flex gap-3 group">
                          <img src={post.image} alt={post.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors line-clamp-2">{post.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default BlogPage;
