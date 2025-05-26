'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { useEffect, useState } from 'react';

export default function I18nProvider({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true);
    } else {
      const onInit = () => setReady(true);
      i18n.on('initialized', onInit);
      return () => i18n.off('initialized', onInit);
    }
  }, []);

  if (!ready) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
