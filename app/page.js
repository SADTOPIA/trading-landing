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

  const startAdTimer = () => {
    if (adTimerRef.current !== null) return;

    adTimerRef.current = setTimeout(() => {
      adTimerRef.current = null;
      setShowAd(true);
    }, 5000);
  };

  const cancelAdTimer = () => {
    clearTimeout(adTimerRef.current);
    adTimerRef.current = null;
  };

  useEffect(() => {
    startAdTimer();

    return () => {
      cancelAdTimer();
    };
  }, []);

  const handleAdClose = () => {
    setShowAd(false);
    startAdTimer();
  };

  const handleClaimClick = () => {
    setShowAd(false);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    startAdTimer();
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
      <GiftSection onStartClick={() => setShowForm(true)} />
      <Footer />

      <AdModal isOpen={showAd} onClose={handleAdClose} onClaim={handleClaimClick} />
      <FormModal isOpen={showForm} onClose={handleFormClose} />
    </>
  );
}
