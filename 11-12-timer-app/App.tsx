import "./styles.css";
import { useEffect, useMemo, useState } from "react";

const DEFAULT_MINUTES = 1;

export default function App() {
  const [currentSeconds, setCurrentSeconds] = useState(DEFAULT_MINUTES * 60);
  const [isRunning, setIsRunning] = useState(false);

  const formattedTimer = useMemo(() => {
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedMinutes}:${paddedSeconds}`;
  }, [currentSeconds]);

  useEffect(() => {
    if (currentSeconds <= 0) {
      setIsRunning(false);
    }

    if (!isRunning || currentSeconds <= 0) return;

    const timer = setTimeout(() => {
      setCurrentSeconds(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isRunning, currentSeconds]);

  const onStart = () => setIsRunning(true);
  const onStop = () => setIsRunning(false);
  const onReset = () => {
    setIsRunning(false);
    setCurrentSeconds(DEFAULT_MINUTES * 60);
  }

  return (
    <div className="container">
      <h1>Timer App</h1>
      <h2 className="timer">{formattedTimer}</h2>
      <div className="btn-group">
        <button onClick={onStart} disabled={isRunning}>Start</button>
        <button onClick={onStop} disabled={!isRunning}>Stop</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  )
}
