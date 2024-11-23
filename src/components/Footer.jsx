import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="w-full h-[90vh] md:h-40 flex justify-center items-center bg-neutral-900 z-10">
        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center text-center">
          <button className="w-full h-full text-xl font-extralight">
            Today's Weather
          </button>
          <button className="w-full h-full text-xl font-extralight">
            Weather Details
          </button>
          <button className="w-full h-full text-xl font-extralight">
            Daily Forecast
          </button>
          <button className="w-full h-full text-xl font-extralight">
            Weather News
          </button>
        </div>
      </div>
    </>
  );
};
