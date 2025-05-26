import styles from "./AboutSection.module.css";
import { useTranslation } from 'react-i18next';
import StartButton from '@/components/ui/StartFormButton/StartFormButton';

export default function AboutSection({ onStartClick }) {
  const { t } = useTranslation();

  return (
    <section id="aboutUs" className={styles.section}>
      <h2 className={styles.title}>{t('aboutTitle')}</h2>
      <div className={styles.paragraph}>
        <p>{t('aboutParagraph1')}</p>
        <p>{t('aboutParagraph2')}</p>
      </div>
      <StartButton onClick={onStartClick} labelKey="aboutButton" className={styles.button} />
    </section>
  );
}