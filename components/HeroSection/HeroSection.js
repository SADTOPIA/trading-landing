import styles from './HeroSection.module.css';

export default function HeroSection({ onStartClick }) {
  return (
    <header id="elite" className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          BEHERRSCHE DEN MARKT MIT ELITE-TRADING-POWER
        </h1>
        <p className={styles.paragraph}>
          Entfessele dein Potenzial mit unseren unvergleichlichen Tools und Expertenrat
        </p>
        <button className={styles.button} onClick={onStartClick}>
          JETZT STARTEN
        </button>
      </div>
    </header>
  );
}
