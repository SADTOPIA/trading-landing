'use client';

import styles from "./AboutSection.module.css";
import { useTranslation } from 'react-i18next';
import {useEffect, useState} from "react";

export default function AboutSection({ onStartClick }) {
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
    <section id="aboutUs" className={styles.section}>
      <h2 className={styles.title}>{t('aboutTitle')}</h2>
      <div className={styles.paragraph}>
        <p>{t('aboutParagraph1')}</p>
        <p>{t('aboutParagraph2')}</p>
      </div>
      <button className={styles.button} onClick={onStartClick}>
        {t('aboutButton')}
      </button>
    </section>
  );
}