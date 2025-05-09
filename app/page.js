"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import OfferSection from "@/components/OfferSection/OfferSection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import GuideSection from "@/components/GuideSection/GuideSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import GiftSection from "@/components/GiftSection/GiftSection";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import AdModal from "@/components/modals/AdModal/AdModal";
import FormModal from "@/components/modals/FormModal/FormModal";

export default function HomePage() {
  const [showAd, setShowAd] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const adTimerRef = useRef(null);

  useEffect(() => {
    adTimerRef.current = setTimeout(() => {
      setShowAd(true);
    }, 10000);

    return () => {
      if (adTimerRef.current) {
        clearTimeout(adTimerRef.current);
      }
    };
  }, []);

  const cancelAdTimer = () => {
    if (adTimerRef.current) {
      clearTimeout(adTimerRef.current);
      adTimerRef.current = null;
    }
  };

  const handleAdClose = () => {
    cancelAdTimer();
    setShowAd(false);
  };

  const handleClaimClick = () => {
    cancelAdTimer();
    setShowAd(false);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <NavBar />
      <HeroSection onStartClick={() => setShowForm(true)} />
      <OfferSection />
      <FeaturesSection />
      <GuideSection />
      <AboutSection onStartClick={() => setShowForm(true)} />
      <TestimonialsSection />
      <GiftSection onStartClick={() => setShowForm(true)}/>
      <Footer />

      <AdModal isOpen={showAd} onClose={handleAdClose} onClaim={handleClaimClick} />
      <FormModal isOpen={showForm} onClose={handleFormClose} />
    </>
  );
}
