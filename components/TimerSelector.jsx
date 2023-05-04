const Timerselector = ({timer, setTimer}) => {

    return(
        <div>
            <button className={timer ==="pomodoro"?"text-red-400":"text-blue-100"} onClick={() => setTimer("pomodoro")}>pomodoro</button>
            <button className={timer ==="sBreak"?"text-red-400":"text-blue-100"} onClick={() => setTimer("sBreak")}>short break</button>
            <button className={timer ==="lBreak"?"text-red-400":"text-blue-100"} onClick={() => setTimer("lBreak")}>long break</button>
        </div>
    )
}

export default Timerselector