import SettingModal from "../components/SettingsModal";
import Timer from "../components/Timer";
import Timerselector from "../components/TimerSelector";
import { useReducer, useState } from "react";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState("pomodoro");
  const [timerState, dispatchTimer] = useReducer(
    (state) => {
      return {
        ...state,
        ...timerState,
      };
    },
    {
      pomodoro: 1500,
      shortBreak: 300,
      longBreak: 600,
    }
  );
  const {pomodoro, shortBreak, longBreak} = timerState

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-blue-950">
      <h1 className="text-white font-bold text-3xl m-4">pomodoro</h1>
      <Timerselector timer={timer} setTimer={setTimer} />
      <Timer>
        <div>
          {timer === "pomodoro"
            ? pomodoro
            : timer === "sBreak"
            ?  shortBreak 
            :  longBreak }
        </div>
      </Timer>
      <button onClick={() => setIsOpen(true)}>button</button>
      {isOpen ? <SettingModal /> : <></>}
    </div>
  );
}

export default HomePage;
