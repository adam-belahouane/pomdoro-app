import SettingModal from "../components/SettingsModal";
import Timerselector from "../components/TimerSelector";
import { useState } from "react";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState("pomodoro")


  return(
  <div className="flex flex-col items-center w-screen h-screen bg-blue-950">
    <h1 className="text-white font-bold text-3xl m-4">pomodoro</h1>
    <Timerselector timer={timer} setTimer={setTimer} />
    
    <button onClick={() => setIsOpen(true)}>button</button>
    {isOpen ? <SettingModal /> : <></>}
  </div>)
}

export default HomePage;
