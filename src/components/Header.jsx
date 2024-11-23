import React, { useEffect, useState } from "react";

import Logo from "../assets/logo.webp";

export const Header = () => {
  const [currentTime, setCurrentTime] = useState("");

  const formatTime = () => {
    const now = new Date();
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    const time = now.toLocaleTimeString("en-US", options);
    const date = now.toLocaleDateString("en-GB");
    return `${time}, ${date}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-[10vh] md:h-[7vh] bg-neutral-900 flex justify-between items-center px-4 select-none z-20 text-center">
        <div className="h-full flex justify-center items-center gap-1">
          <img className="w-6 md:w-7" src={Logo} alt="Weather logo" />
          <h1 className="text-lg md:text-xl font-semibold">iWeather</h1>
        </div>
        <div className="hidden h-full md:flex justify-center items-center font-semibold">
          {currentTime}
        </div>
        <button className="w-20 h-full font-semibold">About</button>
      </div>
    </>
  );
};
