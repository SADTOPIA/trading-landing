import styles from './FormModal.module.css';

export default function FormModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={onClose}>×</span>
        <h2 className={styles.title}>Join the Elite – Open Your Account Now</h2>
        <p className={styles.subtitle}>
          Fill in your details and take the first step to market domination.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <input type="text" placeholder="Your Country" required />
          <button type="submit">Submit & Dominate</button>
        </form>
      </div>
    </div>
  );
}
