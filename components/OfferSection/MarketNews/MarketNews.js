import styles from "./MarketNews.module.css"

export default function MarketNews() {
  return (
    <aside className={styles["market-news"]}>
      <h3>
        <p>MARKET</p>
        <p>NEWS</p>
      </h3>
      <ul>
        <li>Global Stocks Edge Higher Ahead of US CPI Data</li>
        <li>Euro Falls as ECB Signals Pause in Rate Hikes</li>
        <li>Bitcoin Hits $60K Amid Renewed Investor Interest</li>
      </ul>
    </aside>
  );
}