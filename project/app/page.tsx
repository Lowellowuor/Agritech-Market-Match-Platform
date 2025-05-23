import { HeroSection } from '@/components/hero-section'; 
import { FeaturesSection } from '@/components/features-section';
import { MarketInsightsSection } from '@/components/market-insights-section';
import { FeaturedProductsSection } from '@/components/featured-products-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTASection } from '@/components/cta-section';

export default function Home() {
  const products = [
    {
      id: "1",
      title: "Product 1",
      price: 29.99,
      unit: "kg",
      description: "High quality product from John Doe.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      quantity: 50, // ✅ Added
      location: "Nairobi", // ✅ Added
      seller: {
        name: "John Doe",
        rating: 4.5,
        verified: true,
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
      }
    },
    {
      id: "2",
      title: "Product 2",
      price: 19.99,
      unit: "kg",
      description: "Premium product from Jane Smith.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      quantity: 75, // ✅ Added
      location: "Mombasa", // ✅ Added
      seller: {
        name: "Jane Smith",
        rating: 4.8,
        verified: false,
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      }
    }
  ];

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <MarketInsightsSection />
      <FeaturedProductsSection products={products} />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
