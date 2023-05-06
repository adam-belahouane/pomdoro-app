import SettingModal from "../components/SettingsModal";
import Timer from "../components/Timer";
import Timerselector from "../components/TimerSelector";
import { useEffect, useReducer, useState } from "react";
import formatTime from "../tools/formatTime";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState("pomodoro");
  const [isPaused, setIsPaused] = useState(true);
  const [timerState, dispatchTimer] = useReducer(
    (state, action) => {
      return {
        ...state,
        ...action,
      };
    },
    {
      pomodoro: 1500,
      shortBreak: 300,
      longBreak: 600,
    }
  );
  const { pomodoro, shortBreak, longBreak } = timerState;

  useEffect(() => {
    let interval;

    if (!isPaused) {
      if (timer === "pomodoro") {
        interval = setInterval(() => {
          dispatchTimer({ pomodoro: timerState.pomodoro - 1 });
        }, 1000);
      } else if (timer === "sBreak") {
        interval = setInterval(() => {
          dispatchTimer({ shortBreak: timerState.shortBreak - 1 });
        }, 1000);
      } else {
        interval = setInterval(() => {
          dispatchTimer({ longBreak: timerState.longBreak - 1 });
        }, 1000);
      }
    }

    return () => clearInterval(interval);
  }, [isPaused, timerState]);

  const calculateProgress = () => {
    return (timerState.pomodoro / 1500) * 100;
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-blue-900">
      <h1 className="text-white font-bold text-3xl m-4">pomodoro</h1>
      <Timerselector timer={timer} setTimer={setTimer} />
      <Timer>
        <div className="relative w-96 h-96 flex items-center justify-center flex-col">
          <svg viewBox="0 0 120 120" className="absolute inset-0">
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="none"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              strokeWidth="4"
              stroke="#0c7eff"
              strokeDasharray="339.292"
              strokeDashoffset={339.292 - (calculateProgress() / 100) * 339.292}
              strokeLinecap="round"
              transform="rotate(-90) translate(-120)"
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>
          <div className="font-bold text-white text-8xl leading-snug">
            {timer === "pomodoro"
              ? formatTime(pomodoro)
              : timer === "sBreak"
              ? formatTime(shortBreak)
              : formatTime(longBreak)}
          </div>
          <>
            {isPaused ? (
              <div className="z-10 text-white font-bold tracking-widest text-xl hover:cursor-pointer" onClick={() => setIsPaused(false)}>PLAY</div>
            ) : (
              <div className="z-10 text-white font-bold tracking-widest text-xl" onClick={() => setIsPaused(true)}>PAUSE</div>
            )}
          </>
        </div>
      </Timer>
      <button onClick={() => setIsOpen(true)}>button</button>
      {isOpen ? <SettingModal isOpen={isOpen} setIsOpen={setIsOpen} /> : <></>}
    </div>
  );
}

export default HomePage;
