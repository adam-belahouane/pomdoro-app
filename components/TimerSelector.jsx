const Timerselector = ({timer, setTimer, color}) => {

    const handleTimer = (word) => {
        if(word === timer) return `bg-${color}`
        return "text-gray-400"
    }

    return(
        <div className="p-2 rounded-[33px] bg-[#161932] m-11">
            <button className={"rounded-[33px] py-4 px-8 text-sm font-bold " + handleTimer("pomodoro")} onClick={() => setTimer("pomodoro")}>pomodoro</button>
            <button className={"rounded-[33px] py-4 px-8 text-sm font-bold " + handleTimer("sBreak")} onClick={() => setTimer("sBreak")}>short break</button>
            <button className={"rounded-[33px] py-4 px-8 text-sm font-bold " + handleTimer("lBreak")} onClick={() => setTimer("lBreak")}>long break</button>
        </div>
    )
}

export default Timerselector