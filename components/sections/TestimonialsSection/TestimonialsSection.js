import Image from 'next/image';
import styles from './TestimonialsSection.module.css';
import { useTranslation } from 'react-i18next';

export default function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      img: '/photo_2021-07-27_14-57-11.jpg',
      quote: t('testimonials.0.quote'),
      name: t('testimonials.0.name'),
      role: t('testimonials.0.role'),
    },
    {
      img: '/photo_2021-07-27_14-57-11.jpg',
      quote: t('testimonials.1.quote'),
      name: t('testimonials.1.name'),
      role: t('testimonials.1.role'),
    },
    {
      img: '/photo_2021-07-27_14-57-11.jpg',
      quote: t('testimonials.2.quote'),
      name: t('testimonials.2.name'),
      role: t('testimonials.2.role'),
    },
  ];

  return (
    <section id="ourChamps" className={styles.section}>
      <h2 className={styles.title}>{t('testimonials.title')}</h2>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div className={styles.card} key={i}>
            <div className={styles['testimonial-img']}>
              <Image
                src={t.img}
                alt={t.name}
                width={150}
                height={150}
                className={styles.rounded}
              />
            </div>
            <p>"{t.quote}"</p>
            <p>
              <strong>{t.name}</strong>
              <small>{t.role}</small>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
