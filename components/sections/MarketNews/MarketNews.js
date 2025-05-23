import styles from "./MarketNews.module.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function MarketNews() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      const onInit = () => setIsReady(true);
      i18n.on("initialized", onInit);
      return () => i18n.off("initialized", onInit);
    }
  }, [i18n]);

  if (!isReady) return null;

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
