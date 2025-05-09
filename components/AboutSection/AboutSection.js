import styles from "./AboutSection.module.css"

export default function AboutSection({ onStartClick }) {
  return (
    <section id="aboutUs" className={styles.section}>
      <h2 className={styles.title}>ABOUT US</h2>
      <div className={styles.paragraph}>
        <p>Wir sind eine Plattform, die professionelle Handelsinstrumente mit Expertenkenntnissen kombiniert, um Ihnen einen Vorteil auf dem Markt zu verschaffen.</p>
        <p>Unsere innovative Plattform ist darauf ausgelegt, sowohl erfahrenen Tradern als auch Anfängern leistungsstarke Tools zu bieten.</p>
      </div>
      <button className={styles.button} onClick={onStartClick}>
        Open Your Winning Account
      </button>
    </section>
  );
}