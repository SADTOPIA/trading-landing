import styles from "./MarketNews.module.css";
import { useTranslation } from "react-i18next";

export default function MarketNews() {
  const { t } = useTranslation();

  const newsItems = [
    "marketNews.item1",
    "marketNews.item2",
    "marketNews.item3",
  ];

  return (
    <aside className={styles["market-news"]}>
      <h3>{t("marketNews.title")}</h3>
      <ul>
        {newsItems.map((key) => (
          <li key={key}>
            {t(`${key}.headline`)}
            <p>{t(`${key}.time`)}</p>
            <a href="#elite" className={styles.button}>
              {t(`${key}.button`)}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
