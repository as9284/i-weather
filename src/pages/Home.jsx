import React, { useState } from "react";
import Sunny from "../assets/sunny.webp";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Today } from "../components/Today";
import { Details } from "../components/Details";
import { Forecast } from "../components/Forecast";
import { News } from "../components/News";

export const Home = () => {
  const [activeComponent, setActiveComponent] = useState("today");

  const renderComponent = () => {
    switch (activeComponent) {
      case "today":
        return <Today />;
      case "details":
        return <Details />;
      case "forecast":
        return <Forecast />;
      case "news":
        return <News />;
      default:
        return <Today />;
    }
  };

  return (
    <>
      <div className="relative w-full min-h-dvh m-auto flex justify-center items-center">
        <img
          className="absolute w-full h-full object-cover"
          src={Sunny}
          alt="Sunny day"
        />
        <div className="w-full min-h-dvh flex flex-col justify-between items-center">
          <Header />
          <div className="hidden md:flex flex-grow justify-center items-center z-20">
            {renderComponent()}
          </div>
          <Footer
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
          />
        </div>
      </div>
    </>
  );
};
