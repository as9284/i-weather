import Sunny from "../assets/sunny.webp";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Home = () => {
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
          <Footer />
        </div>
      </div>
    </>
  );
};
