'use client';

import styles from './HeroSection.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function HeroSection({ onStartClick }) {
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
    <header id="elite" className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{t('heroTitle')}</h1>
        <p className={styles.paragraph}>{t('heroParagraph1')}</p>
        <button className={styles.button} onClick={onStartClick}>
          {t('heroButton')}
        </button>
      </div>
    </header>
  );
}
