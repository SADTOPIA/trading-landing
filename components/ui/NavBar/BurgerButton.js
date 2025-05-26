export default function BurgerButton({ isOpen, onToggle, className }) {
  return (
    <button
      className={className}
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      ☰
    </button>
  );
}
