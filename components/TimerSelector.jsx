const Timerselector = ({ timer, setTimer, color }) => {
  const handleTimer = (word) => {
    if (word === timer) return `bg-${color}`;
    return "text-gray-400";
  };

  return (
    <div className="px-3 py-2 rounded-[33px] bg-[#161932] m-11 lg:m-8 lg:px-2 lg:py-1">
      <button
        className={
          "rounded-[33px] py-4 px-8 text-sm font-bold hover:cursor-pointer lg:py-3 lg:px-6  " +
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
          "rounded-[33px] py-4 px-8 text-sm font-bold hover:cursor-pointer lg:py-3 lg:px-6 " +
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
          "rounded-[33px] py-4 px-8 text-sm font-bold hover:cursor-pointer lg:py-3 lg:px-6 " +
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
