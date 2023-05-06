const Timerselector = ({ timer, setTimer, color }) => {
  const handleTimer = (word) => {
    if (word === timer) return `bg-${color}`;
    return "text-gray-400";
  };

  return (
    <div className="p-2 rounded-[33px] bg-[#161932] m-11">
      <button
        className={
          "rounded-[33px] py-4 px-8 text-sm font-bold hover:cursor-pointer " +
          (timer === "pomodoro"
            ? color === "color1"
              ? "bg-color1"
              : color === "color2"
              ? "bg-color2"
              : "bg-color3"
            : "text-[#D7E0FF]")
        }
        onClick={() => setTimer("pomodoro")}
      >
        pomodoro
      </button>
      <button
        className={
          "rounded-[33px] py-4 px-8 text-sm font-bold hover:cursor-pointer " +
          (timer === "sBreak"
            ? color === "color1"
              ? "bg-color1"
              : color === "color2"
              ? "bg-color2"
              : "bg-color3"
            : "text-[#D7E0FF]")
        }
        onClick={() => setTimer("sBreak")}
      >
        short break
      </button>
      <button
        className={
          "rounded-[33px] py-4 px-8 text-sm font-bold hover:cursor-pointer " +
          (timer === "lBreak"
            ? color === "color1"
              ? "bg-color1"
              : color === "color2"
              ? "bg-color2"
              : "bg-color3"
            : "text-[#D7E0FF]")
        }
        onClick={() => setTimer("lBreak")}
      >
        long break
      </button>
    </div>
  );
};

export default Timerselector;
