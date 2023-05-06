import SettingModal from "../components/SettingsModal";
import Timer from "../components/Timer";
import Timerselector from "../components/TimerSelector";
import { useEffect, useReducer, useState } from "react";
import formatTime from "../tools/formatTime";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState("pomodoro");
  const [color, setColor] = useState("color1")
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

  const handleTime = (word) => {
    if(word === "pomodoro") return pomodoro
    if(word === "sBreak") return shortBreak
    return longBreak
  }

  

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-blue-900">
      <h1 className="text-white font-bold text-3xl m-4">pomodoro</h1>
      <Timerselector timer={timer} setTimer={setTimer} color={color} />
      <Timer totalTime={handleTime(timer)} color={color} />
      <button onClick={() => setIsOpen(true)}>button</button>
      {isOpen ? <SettingModal isOpen={isOpen} setIsOpen={setIsOpen} /> : <></>}
    </div>
  );
}

export default HomePage;
