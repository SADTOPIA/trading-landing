import MarketNews from "./MarketNews";

export default function OfferSection() {
  return (
    <section className="section offer-news">
      <div className="offer">
        <p className="highlight">⚡ Limited-Time Power Offer:</p>
        <h2>MACGU-IN IN 24 EASY ENDS IN</h2>
        <p className="timer">25:40</p>
      </div>
      <MarketNews />
    </section>
  );
}