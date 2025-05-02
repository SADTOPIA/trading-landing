import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          BEHERRSCHE DEN MARKT MIT
          <br/>
          ELITE-TRADING-POWER
        </h1>
        <p className={styles.paragraph}>
          Entfessele dein Potenzial mit unseren unvergleichlichen Tools und Expertenrat
        </p>
        <button className={styles.button}>JETZT STARTEN</button>
      </div>
    </header>
  );
}
