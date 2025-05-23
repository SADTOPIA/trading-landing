import styles from "./GiftSection.module.css"
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import StartButton from '@/components/ui/StartFormButton/StartFormButton';

export default function GiftSection({ onStartClick }) {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      i18n.on('initialized', () => {
        setIsReady(true);
      });
    }
  }, [i18n]);

  if (!isReady) return null;

  return (
    <section id="gift" className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{t('giftSection.title')}</h1>
        <p className={styles.paragraph}>{t('giftSection.paragraph')}</p>
        <StartButton onClick={onStartClick} labelKey="giftSection.button" className={styles.button} />
      </div>
    </section>
  );
}