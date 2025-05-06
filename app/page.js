import HeroSection from "@/components/HeroSection/HeroSection";
import OfferSection from "@/components/OfferSection/OfferSection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import GuideSection from "@/components/GuideSection/GuideSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import GiftSection from "@/components/GiftSection/GiftSection";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function HomePage() {
  return (
    <>
      <NavBar/>
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