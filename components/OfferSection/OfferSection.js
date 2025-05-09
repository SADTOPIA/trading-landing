"use client";

import { useEffect, useState } from "react";
import MarketNews from "./MarketNews/MarketNews";
import styles from "./OfferSection.module.css";

export default function OfferSection() {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <section id="marketNews" className={`${styles.section} ${styles["offer-news"]}`}>
      <div className={styles.offer}>
        <p className={styles.highlight}>⚡ Limited-Time Power Offer:</p>
        <h2 className={styles.highlight}>MACGU-IN IN 24 EASY ENDS IN</h2>
        <p className={styles.timer}>
          {expired ? "Offer expired" : formatTime(timeLeft)}
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
