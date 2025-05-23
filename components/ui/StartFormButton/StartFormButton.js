'use client';

import { useTranslation } from 'react-i18next';

export default function StartButton({ onClick, labelKey, className = '' }) {
  const { t } = useTranslation();

  return (
    <button className={className} onClick={onClick}>
      {t(labelKey)}
    </button>
  );
}