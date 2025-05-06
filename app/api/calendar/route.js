export async function GET() {
  const apiKey = process.env.TRADING_ECONOMICS_API_KEY;

  const res = await fetch(
    `https://api.tradingeconomics.com/calendar?c=${apiKey}&f=json`
  );

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }

  const data = await res.json();
  return Response.json(data);
}
