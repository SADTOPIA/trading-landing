import { useEffect, useState } from "react";

export default function useCountdown(startSeconds) {
  const [timeLeft, setTimeLeft] = useState(startSeconds);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setExpired(true);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = () => {
    const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const secs = String(timeLeft % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return { timeLeft, expired, formatTime };
}
