import { useTranslation } from "react-i18next";
import MarketNews from "../MarketNews/MarketNews";
import styles from "./OfferSection.module.css";
import useCountdown from "@/hooks/useCountdown";

export default function OfferSection() {
  const { t } = useTranslation();
  const { expired, formatTime } = useCountdown(30 * 60);

  return (
    <section id="marketNews" className={`${styles.section} ${styles["offer-news"]}`}>
      <div className={styles.offer}>
        <p className={styles.highlight}>⚡ {t("offer.highlight")}</p>
        <h2 className={styles.highlight}>{t("offer.title")}</h2>
        <p className={styles.timer}>
          {expired ? t("offer.expired") : formatTime()}
        </p>
        <iframe
          className={styles.frame}
          src="https://tradingeconomics.com/calendar"
          title="Economic Calendar"
          loading="lazy">
        </iframe>
      </div>
      <MarketNews className={styles["market-news"]} />
    </section>
  );
}
