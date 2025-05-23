import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { MarketInsightsSection } from '@/components/market-insights-section';
import { FeaturedProductsSection } from '@/components/featured-products-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTASection } from '@/components/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <MarketInsightsSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}