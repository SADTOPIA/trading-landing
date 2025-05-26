import styles from './FeaturesSection.module.css';
import { useTranslation } from 'react-i18next';
import {AnalyseIcon, SecurityIcon, SupportIcon, CommunityIcon,} from '@/components/ui/svg/SvgIcons';

const features = [
  {
    key: 'analyse',
    icon: AnalyseIcon,
  },
  {
    key: 'security',
    icon: SecurityIcon,
  },
  {
    key: 'support',
    icon: SupportIcon,
  },
  {
    key: 'community',
    icon: CommunityIcon,
  },
];

export default function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section id="features" className={styles.section}>
      <h2>{t('featuresTitle')}</h2>
      <div className={styles.grid}>
        {features.map((f, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.icon}>{f.icon}</div>
            <h3>{t(`features.${f.key}.title`)}</h3>
            <p>{t(`features.${f.key}.text`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
