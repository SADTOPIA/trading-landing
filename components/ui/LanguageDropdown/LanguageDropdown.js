'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './LanguageDropdown.module.css';
import { useTranslation } from 'react-i18next';
import {
  EnglishFlagIcon,
  DeutschFlagIcon,
  ItalianoFlagIcon,
  PolskiFlagIcon,
} from '@/components/ui/svg/SvgIcons';

const languages = [
  { code: 'en', icon: <EnglishFlagIcon />, label: 'EN' },
  { code: 'de', icon: <DeutschFlagIcon />, label: 'DE' },
  { code: 'it', icon: <ItalianoFlagIcon />, label: 'IT' },
  { code: 'pl', icon: <PolskiFlagIcon />, label: 'PL' },
];

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleChange = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button onClick={() => setOpen(!open)} className={styles.toggle}>
        {currentLang.icon}
      </button>
      {open && (
        <ul className={styles.menu}>
          {languages.map(({ code, icon, label }) => (
            <li key={code}>
              <button onClick={() => handleChange(code)} className={styles.option}>
                {icon} <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
