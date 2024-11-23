import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

export const Footer = ({ activeComponent, setActiveComponent }) => {
  const buttons = [
    { id: "today", label: "Today's Weather" },
    { id: "details", label: "Weather Details" },
    { id: "forecast", label: "Daily Forecast" },
    { id: "news", label: "Weather News" },
  ];

  return (
    <div className="w-full h-[90vh] md:h-56 flex justify-center items-center bg-neutral-900 z-10">
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center text-center">
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`relative w-full h-full text-xl duration-200 ${
              activeComponent === button.id
                ? "md:-translate-y-4 font-bold bg-gradient-to-br from-[#5EFCE8] to-[#736EFE] text-white"
                : "font-extralight"
            }`}
            onClick={() => setActiveComponent(button.id)}
          >
            <span className="hidden md:flex w-full justify-center items-center">
              <IoIosArrowRoundUp
                className={`absolute top-4 text-2xl ${
                  activeComponent === button.id ? "block" : "hidden"
                }`}
              />
            </span>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};
