'use client'

import styles from "./Footer.module.css"
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {FacebookIcon, TwitterIcon, InstagramIcon,} from '@/components/ui/svg/SvgIcons';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      const onInit = () => setIsReady(true);
      i18n.on('initialized', onInit);
      return () => {
        i18n.off('initialized', onInit);
      };
    }
  }, [i18n]);

  if (!isReady) return null;

  return (
    <footer id="contactUs"  className={`${styles.section} ${styles.footer}`}>
      <p>{t('footer.copyright')}</p>
      <p>{t('footer.rights')}</p>
      <div className={styles["social-icons"]}>
        <div className={styles["social-icons"]}>
          <span><FacebookIcon/></span>
          <span><TwitterIcon/></span>
          <span><InstagramIcon/></span>
        </div>
      </div>
    </footer>
  );
}