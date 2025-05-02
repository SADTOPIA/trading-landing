import HeroSection from "@/components/HeroSection/HeroSection";
import OfferSection from "@/components/OfferSection/OfferSection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import GuideSection from "@/components/GuideSection/GuideSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import GiftSection from "@/components/GiftSection/GiftSection";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OfferSection />
      <FeaturesSection />
      <GuideSection />
      <AboutSection />
      <TestimonialsSection />
      <GiftSection />
      <Footer />
    </>
  );
}