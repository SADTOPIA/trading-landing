'use client';

import styles from './NavBar.module.css';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import {
  EnglishFlagIcon,
  DeutschFlagIcon,
  ItalianoFlagIcon,
  PolskiFlagIcon,
} from '@/components/ui/svg/SvgIcons';
import BurgerButton from './BurgerButton';
import LanguageDropdown from "@/components/ui/LanguageDropdown/LanguageDropdown";

const navLinks = [
  { id: 'marketNews', label: 'nav.marketNews' },
  { id: 'guide', label: 'nav.guide' },
  { id: 'aboutUs', label: 'nav.aboutUs' },
  { id: 'gift', label: 'nav.gift' },
  { id: 'contactUs', label: 'nav.contactUs' },
];

const languages = [
  { code: 'en', icon: <EnglishFlagIcon /> },
  { code: 'de', icon: <DeutschFlagIcon /> },
  { code: 'it', icon: <ItalianoFlagIcon /> },
  { code: 'pl', icon: <PolskiFlagIcon /> },
];

export default function NavBar({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>{t('nav.logo')}</div>

        <div className={`${styles.content} ${menuOpen ? styles.show : ''}`}>
          <ul className={styles.menu}>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                {id === 'contactUs' ? (
                  <button onClick={onContactClick} className={styles.linkButton}>
                    {t(label)}
                  </button>
                ) : (
                  <a href={`#${id}`}>{t(label)}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.languages}>
          <LanguageDropdown />
        </div>

        <BurgerButton
          isOpen={menuOpen}
          onToggle={() => setMenuOpen(!menuOpen)}
          className={styles.burger}
        />
      </div>
    </nav>
  );
}
