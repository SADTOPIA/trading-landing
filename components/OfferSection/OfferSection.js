"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MarketNews from "./MarketNews/MarketNews";
import styles from "./OfferSection.module.css";

export default function OfferSection() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [expired, setExpired] = useState(false);

  // Проверка и установка готовности i18n
  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      const onInit = () => setIsReady(true);
      i18n.on('initialized', onInit);
      return () => i18n.off('initialized', onInit);
    }
  }, [i18n]);

  // Таймер для обратного отсчёта
  useEffect(() => {
    if (!isReady) return; // не запускаем таймер пока i18n не инициализирован

    if (timeLeft <= 0) {
      setExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isReady]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  if (!isReady) return null; // пока i18n не готов — не рендерим

  return (
    <section id="marketNews" className={`${styles.section} ${styles["offer-news"]}`}>
      <div className={styles.offer}>
        <p className={styles.highlight}>⚡ {t("offer.highlight")}</p>
        <h2 className={styles.highlight}>{t("offer.title")}</h2>
        <p className={styles.timer}>
          {expired ? t("offer.expired") : formatTime(timeLeft)}
        </p>
        <div></div>
        <iframe
          className={styles.frame}
          src="https://tradingeconomics.com/calendar"
          title="Economic Calendar"
          loading="lazy"
        ></iframe>
      </div>
      <MarketNews className={styles["market-news"]} />
    </section>
  );
}
