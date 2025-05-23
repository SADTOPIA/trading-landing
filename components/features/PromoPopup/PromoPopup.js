'use client';
import styles from './PromoPopup.module.css';
import { useTranslation, Trans } from 'react-i18next';

export default function PromoPopup({ isOpen, onClose, onClaim }) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={onClose}>×</span>
        <h2 className={styles.title}>{t('modal.title')}</h2>
        <p className={styles.text}>
          <Trans i18nKey="modal.text" components={{ strong: <span className={styles.highlight} /> }} />
        </p>
        <button className={styles.cta} onClick={onClaim}>
          {t('modal.cta')}
        </button>
      </div>
    </div>
  );
}
