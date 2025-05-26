import styles from './GuideSection.module.css';

export default function GuideCard({ icon, lines, className, t }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <span className={styles.icon}>{icon}</span>
      <div>
        {lines.map((lineKey, idx) => (
          <p key={idx}>{t(lineKey)}</p>
        ))}
      </div>
    </div>
  );
}
