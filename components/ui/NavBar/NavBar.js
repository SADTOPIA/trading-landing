'use client';

import styles from './NavBar.module.css';
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import {
  EnglishFlagIcon,
  DeutschFlagIcon,
  ItalianoFlagIcon,
  PolskiFlagIcon,
} from '@/components/ui/svg/SvgIcons';

const navLinks = [
  { id: 'marketNews', label: 'nav.marketNews' },
  { id: 'features', label: 'nav.features' },
  { id: 'guide', label: 'nav.guide' },
  { id: 'aboutUs', label: 'nav.aboutUs' },
  { id: 'ourChamps', label: 'nav.ourChamps' },
  { id: 'gift', label: 'nav.gift' },
  { id: 'contactUs', label: 'nav.contactUs' },
];

const languages = [
  { code: 'en', icon: <EnglishFlagIcon /> },
  { code: 'de', icon: <DeutschFlagIcon /> },
  { code: 'it', icon: <ItalianoFlagIcon /> },
  { code: 'pl', icon: <PolskiFlagIcon /> },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { t, i18n } = useTranslation();

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>{t('nav.logo')}</div>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <div className={`${styles.content} ${menuOpen ? styles.show : ''}`}>
          <ul className={styles.menu}>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{t(label)}</a>
              </li>
            ))}
          </ul>

          <div className={styles.languages}>
            {languages.map(({ code, icon }) => (
              <button key={code} onClick={() => changeLanguage(code)} aria-label={`Switch to ${code}`}>
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}


