import styles from './FormPopup.module.css';
import { useTranslation } from "react-i18next";

export default function FormPopup({ isOpen, onClose }) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={onClose}>×</span>
        <h2 className={styles.title}>{t('formModal.title')}</h2>
        <p className={styles.subtitle}>{t('formModal.subtitle')}</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder={t('formModal.name')} required />
          <input type="email" placeholder={t('formModal.email')} required />
          <input type="tel" placeholder={t('formModal.phone')} required />
          <input type="text" placeholder={t('formModal.country')} required />
          <button type="submit">{t('formModal.submit')}</button>
        </form>
      </div>
    </div>
  );
}