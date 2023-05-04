import SettingModal from "../components/SettingsModal";
import Timer from "../components/Timer";
import Timerselector from "../components/TimerSelector";
import { useEffect, useReducer, useState } from "react";
import formatTime from "../tools/formatTime";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState("pomodoro");
  const [isPaused, setIsPaused] = useState(true)
  const [timerState, dispatchTimer] = useReducer(
    (state, action) => {
      return {
        ...state,
        ...action
      };
    },
    {
      pomodoro: 1500,
      shortBreak: 300,
      longBreak: 600,
    }
  );
  const {pomodoro, shortBreak, longBreak} = timerState

  useEffect(() => {
    let interval;

    if (!isPaused) {
      if(timer === "pomodoro"){
        interval = setInterval(() => {
          dispatchTimer({pomodoro: timerState.pomodoro -1});
        }, 1000);
      }else if(timer === "sBreak"){
        interval = setInterval(() => {
          dispatchTimer({shortBreak: timerState.shortBreak -1});
        }, 1000);
      }else{
        interval = setInterval(() => {
          dispatchTimer({longBreak: timerState.longBreak -1});
        }, 1000);
      }
      
    }

    return () => clearInterval(interval);
  }, [isPaused, timerState])


  return (
    <div className="flex flex-col items-center w-screen h-screen bg-blue-900">
      <h1 className="text-white font-bold text-3xl m-4">pomodoro</h1>
      <Timerselector timer={timer} setTimer={setTimer} />
      <Timer>
        <div>
          {timer === "pomodoro"
            ? formatTime(pomodoro)
            : timer === "sBreak"
            ?  formatTime(shortBreak)
            :  formatTime(longBreak) }
        </div>
        <>{isPaused?<div onClick={() => setIsPaused(false)}>Play</div>:<div onClick={() => setIsPaused(true)}>Paused</div>}</>
      </Timer>
      <button onClick={() => setIsOpen(true)}>button</button>
      {isOpen ? <SettingModal isOpen={isOpen} setIsOpen={setIsOpen} /> : <></>}
    </div>
  );
}

export default HomePage;
