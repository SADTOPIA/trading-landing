import styles from "./Footer.module.css"
import {useTranslation} from "react-i18next";
import {FacebookIcon, TwitterIcon, InstagramIcon,} from '@/components/ui/svg/SvgIcons';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contactUs"  className={`${styles.section} ${styles.footer}`}>
      <p>{t('footer.copyright')}</p>
      <p>{t('footer.rights')}</p>
      <div className={styles["social-icons"]}>
        <div className={styles["social-icons"]}>
          <span><FacebookIcon/></span>
          <span><TwitterIcon/></span>
          <span><InstagramIcon/></span>
        </div>
      </div>
    </footer>
  );
}