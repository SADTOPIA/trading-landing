import MarketNews from "./MarketNews/MarketNews";
import styles from "./OfferSection.module.css";

export default function OfferSection() {
  return (
    <section id="marketNews" className={`${styles.section} ${styles["offer-news"]}`}>
      <div className={styles.offer}>
        <p className={styles.highlight}>⚡ Limited-Time Power Offer:</p>
        <h2 className={styles.highlight}>MACGU-IN IN 24 EASY ENDS IN</h2>
        <p className={styles.timer}>25:40</p>
        <div>
        </div>
        <iframe className={styles.frame} src="https://tradingeconomics.com/calendar" title="Economic Calendar" loading="lazy"></iframe>
      </div>
      <MarketNews className={styles["market-news"]} />
    </section>
  );
}
