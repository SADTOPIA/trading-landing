import styles from "./GuideSection.module.css";
import { useTranslation } from "react-i18next";
import { OneIcon, TwoIcon, ThreeIcon, FourIcon } from "@/components/ui/svg/SvgIcons";
import GuideCard from "./GuideCard";

const guideSteps = [
  {
    icon: <OneIcon />,
    className: `${styles.horizontal} ${styles.first}`,
    lines: ['guide.card1.line1', 'guide.card1.line2', 'guide.card1.line3'],
  },
  {
    icon: <TwoIcon />,
    className: styles.vertical,
    lines: ['guide.card2.line1', 'guide.card2.line2'],
  },
  {
    icon: <ThreeIcon />,
    className: `${styles.horizontal} ${styles.third}`,
    lines: ['guide.card3.line1', 'guide.card3.line2', 'guide.card3.line3'],
  },
  {
    icon: <FourIcon />,
    className: styles.vertical,
    lines: ['guide.card4.line1', 'guide.card4.line2'],
  },
];

export default function GuideSection() {
  const { t } = useTranslation();

  return (
    <section id="guide" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t('guide.title')}</h2>
      <div className={styles.grid}>
        {guideSteps.map((step, index) => (
          <GuideCard
            key={index}
            icon={step.icon}
            lines={step.lines}
            className={step.className}
            t={t}
          />
        ))}
      </div>
    </section>
  );
}
