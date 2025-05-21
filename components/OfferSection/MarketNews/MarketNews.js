import styles from "./MarketNews.module.css";
import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";

export default function MarketNews() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      i18n.on('initialized', () => {
        setIsReady(true);
      });
    }
  }, [i18n]);

  if (!isReady) return null;

  return (
    <aside className={styles["market-news"]}>
      <h3>{t("marketNews.title")}</h3>
      <ul>
        <li>
          {t("marketNews.item1.headline")}
          <p>{t("marketNews.item1.time")}</p>
          <a href="#elite" className={styles.button}>{t("marketNews.item1.button")}</a>
        </li>
        <li>
          {t("marketNews.item2.headline")}
          <p>{t("marketNews.item2.time")}</p>
          <a href="#elite" className={styles.button}>{t("marketNews.item2.button")}</a>
        </li>
        <li>
          {t("marketNews.item3.headline")}
          <p>{t("marketNews.item3.time")}</p>
          <a href="#elite" className={styles.button}>{t("marketNews.item3.button")}</a>
        </li>
      </ul>
    </aside>
  );
}
