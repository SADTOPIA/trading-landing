import styles from "./GiftSection.module.css"

export default function GiftSection() {
  return (
    <section id="gift" className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.heading}>SPECIAL GIFT</h1>
        <p className={styles.paragraph}>Fordere deinen kostenlosen Handelsstrategieleitfaden an!</p>
        <button className={styles.button}>JETZT HERUNTERLADEN</button>
      </div>
    </section>
  );
}