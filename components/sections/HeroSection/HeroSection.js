import styles from './HeroSection.module.css';
import { useTranslation } from 'react-i18next';
import StartButton from '@/components/ui/StartFormButton/StartFormButton';

export default function HeroSection({ onStartClick }) {
  const { t } = useTranslation();

  return (
    <header id="elite" className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{t('heroTitle')}</h1>
        <p className={styles.paragraph}>{t('heroParagraph1')}</p>
        <StartButton onClick={onStartClick} labelKey="heroButton" className={styles.button} />
      </div>
    </header>
  );
}
