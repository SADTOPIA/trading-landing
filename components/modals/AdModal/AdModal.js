import styles from './AdModal.module.css';
import {useEffect, useState} from "react";
import {useTranslation, Trans} from "react-i18next";

export default function AdModal({ isOpen, onClose, onClaim }) {
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

  if (!isOpen) return null;

  const handleClaim = () => {
    onClaim();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={onClose}>×</span>
        <h2 className={styles.title}>{t('modal.title')}</h2>
        <p className={styles.text}>
          <Trans i18nKey="modal.text" components={{ strong: <span className={styles.highlight} /> }} />
        </p>
        <button className={styles.cta} onClick={handleClaim}>
          {t('modal.cta')}
        </button>
      </div>
    </div>
  );
}
