import React from "react";

export const Home = () => {
  return (
    <>
      <div className="w-full min-h-dvh m-auto flex justify-center items-center p-4">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h1 className="text-5xl font-bold">iWeather</h1>
          <p className="text-lg font-light uppercase">Coming soon</p>
          <l-ripples size="60" speed="2" color="white"></l-ripples>
        </div>
      </div>
    </>
  );
};
