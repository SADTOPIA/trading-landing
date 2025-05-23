import { useCallback, useEffect, useRef, useState } from "react";

export default function useAdPopup(delay = 5000) {
  const [showAd, setShowAd] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const adTimerRef = useRef(null);

  const cancelAdTimer = useCallback(() => {
    if (adTimerRef.current) {
      clearTimeout(adTimerRef.current);
      adTimerRef.current = null;
    }
  }, []);

  const startAdTimer = useCallback(() => {
    if (adTimerRef.current) return;
    adTimerRef.current = setTimeout(() => {
      adTimerRef.current = null;
      setShowAd(true);
    }, delay);
  }, [delay]);

  useEffect(() => {
    startAdTimer();
    return cancelAdTimer;
  }, [startAdTimer, cancelAdTimer]);

  const openForm = () => {
    cancelAdTimer();         // ← Очистка таймера при любом открытии формы
    setShowAd(false);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    startAdTimer();
  };

  const closeAd = () => {
    setShowAd(false);
    startAdTimer();
  };

  return {
    showAd,
    showForm,
    openForm,
    closeForm,
    closeAd,
  };
}
