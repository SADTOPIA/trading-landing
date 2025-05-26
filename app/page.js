"use client";

import PromoPopup from "@/components/features/PromoPopup/PromoPopup";
import FormPopup from "@/components/features/FormPopup/FormPopup";
import useAdPopup from "@/hooks/useAdPopup";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import OfferSection from "@/components/sections/OfferSection/OfferSection";
import FeaturesSection from "@/components/sections/FeaturesSection/FeaturesSection";
import GuideSection from "@/components/sections/GuideSection/GuideSection";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection/TestimonialsSection";
import GiftSection from "@/components/sections/GiftSection/GiftSection";
import Footer from "@/components/sections/Footer/Footer";
import NavBar from "@/components/ui/NavBar/NavBar";

export default function HomePage() {
  const {
    showAd,
    showForm,
    openForm,
    closeForm,
    closeAd,
  } = useAdPopup();

  return (
    <>
      <NavBar />
      <HeroSection onStartClick={openForm} />
      <OfferSection />
      <FeaturesSection />
      <GuideSection />
      <AboutSection onStartClick={openForm} />
      <TestimonialsSection />
      <GiftSection onStartClick={openForm} />
      <Footer />

      <PromoPopup isOpen={showAd} onClose={closeAd} onClaim={openForm} />
      <FormPopup isOpen={showForm} onClose={closeForm} />
    </>
  );
}
