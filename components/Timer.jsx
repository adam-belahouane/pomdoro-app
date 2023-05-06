import { useEffect, useState } from "react";
import formatTime from "../tools/formatTime";

const Timer = ({ totalTime, color }) => {
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let timer;

    if (!isPaused) {
      timer = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isPaused, timeRemaining]);

  useEffect(() => {
    setTimeRemaining(totalTime)
  }, [totalTime])

  const calculateProgress = () => {
    return (timeRemaining / totalTime) * 100;
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-96 h-96 flex items-center justify-center flex-col">
        <svg viewBox="0 0 120 120" className={"absolute inset-0 " + `stroke-${color}`}>
          <circle cx="60" cy="60" r="54" fill="none" stroke="none" />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeWidth="4"
            strokeDasharray="339.292"
            strokeDashoffset={339.292 - (calculateProgress() / 100) * 339.292}
            strokeLinecap="round"
            transform="rotate(-90) translate(-120)"
            style={{ transition: "stroke-dashoffset 1s linear" }}
          />
        </svg>
        <div className="font-bold text-white text-8xl leading-snug font-sans">
          {formatTime(timeRemaining)}
        </div>
        <>
          {isPaused ? (
            <div
              className="z-10 text-white font-bold tracking-widest text-xl hover:cursor-pointer"
              onClick={() => setIsPaused(false)}
            >
              PLAY
            </div>
          ) : (
            <div
              className="z-10 text-white font-bold tracking-widest text-xl"
              onClick={() => setIsPaused(true)}
            >
              PAUSE
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Timer;
