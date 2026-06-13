import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Products } from '@/components/products';
import { Team } from '@/components/team';
import { Achievements } from '@/components/achievements';
import { Stats } from '@/components/stats';
import { Testimonials } from '@/components/testimonials';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'TechVision - Crafting Digital Products With Purpose',
  description:
    'Empowering creators with high-quality tools designed for speed, simplicity, and impact. Production-ready solutions trusted by 500K+ creators worldwide.',
  keywords: 'web development, tools, SaaS, digital products, creator tools, design templates',
  openGraph: {
    title: 'TechVision - Crafting Digital Products With Purpose',
    description: 'Build production-ready AI tools that supercharge your workflow',
    url: 'https://techvision.com',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Team />
        <Achievements />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
