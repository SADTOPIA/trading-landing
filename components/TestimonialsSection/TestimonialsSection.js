import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    img: "/photo_2021-07-27_14-57-11.jpg",
    quote: "The advanced tools transformed my trading. Highly recommended.",
    name: "Olivia M.",
    role: "Professional Trader",
  },
  {
    img: "/photo_2021-07-27_14-57-11.jpg",
    quote: "Outstanding expert guidance tailored to my needs. A game-changer!",
    name: "David R.",
    role: "Individual Investor",
  },
  {
    img: "/photo_2021-07-27_14-57-11.jpg",
    quote: "The community support is unparalleled. I feel empowered!",
    name: "Julia S.",
    role: "Trading Enthusiast",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="ourChamps" className={styles.section}>
      <h2 className={styles.title}>HEAR FROM OUR CHAMPIONS</h2>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div className={styles.card} key={i}>
            <div className={styles["testimonial-img"]}>
              <Image
                src={t.img}
                alt={t.name}
                width={150}
                height={150}
                className={styles.rounded}
              />
            </div>
            <p>"{t.quote}"</p>
            <p><strong>{t.name}</strong><small>{t.role}</small></p>
          </div>
        ))}
      </div>
    </section>
  );
}
