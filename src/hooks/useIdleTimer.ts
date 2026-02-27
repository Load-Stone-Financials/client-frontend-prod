import { useEffect, useRef, useState } from "react";

interface UseIdleTimerProps {
  timeoutInSeconds: number;
  onIdle: () => void;
  paused: boolean;
}

const useIdleTimer = ({
  timeoutInSeconds,
  onIdle,
  paused,
}: UseIdleTimerProps) => {
  const [isIdle, setIsIdle] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeoutInSeconds);
  const timerRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const clearTimers = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }
  };

  const resetTimer = () => {
    clearTimers();
    setIsIdle(false);
    setTimeLeft(timeoutInSeconds);

    if (paused) return;

    timerRef.current = window.setTimeout(() => {
      setIsIdle(true);
      onIdle && onIdle();
    }, timeoutInSeconds * 1000);

    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
  };

  useEffect(() => {
    resetTimer();

    const events: Array<keyof WindowEventMap> = [
      "mousemove",
      "keydown",
      "mousedown",
      "touchstart",
      "scroll",
    ];

    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    return () => {
      clearTimers();
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isIdle, timeLeft };
};

export default useIdleTimer;

