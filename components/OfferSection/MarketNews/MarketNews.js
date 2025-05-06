import styles from "./MarketNews.module.css"

export default function MarketNews() {
  return (
    <aside className={styles["market-news"]}>
      <h3>MARKET NEWS</h3>
      <ul>
        <li>
          Global Stocks Edge Higher Ahead of US CPI Data
        <p>16 HUR AGO</p>
          <button className={styles.button}>Get the Scoop</button>
        </li>
        <li>
          Euro Falls as ECB Signals Pause in Rate Hikes
          <p>16 HUR AGO</p>
          <button className={styles.button}>Dive In</button>
        </li>
        <li>
          Bitcoin Hits $60K Amid Renewed Investor Interest
          <p>16 HUR AGO</p>
          <button className={styles.button}>Learn the Secrets</button>
        </li>
      </ul>
    </aside>
  );
}