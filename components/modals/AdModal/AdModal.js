import styles from './AdModal.module.css';

export default function AdModal({ isOpen, onClose, onClaim }) {
  if (!isOpen) return null;

  const handleClaim = () => {
    onClaim();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={onClose}>×</span>
        <h2 className={styles.title}>Wait – Don&apos;t Miss This Opportunity!</h2>
        <p className={styles.text}>
          Act now to claim your exclusive <span className={styles.highlight}>100% bonus</span> and unleash your trading potential.
        </p>
        <button className={styles.cta} onClick={handleClaim}>
          Claim Your Bonus
        </button>
      </div>
    </div>
  );
}
