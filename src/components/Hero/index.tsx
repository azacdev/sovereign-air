import plane from "../../assets/images/plane.png";

const Hero = () => {
  return (
    <div className="hero z-[1] w-full h-full grid place-items-center bg-[#141b2b] relative py-40">
      <div className="flex lg:flex-row flex-col items-center w-full md:px-20 px-8 justify-between md:gap-20 gap-28">
        <div className="flex-1 flex flex-col gap-3 left-animation w-full justify-center text-start">
          <h1 className="text-blue-500 text-3xl font-semibold mb-4">
            Welcome to Our Exclusive World
          </h1>
          <p className="text-white font-medium md:text-6xl text-4xl text-start">
            Elevate your journey with{" "}
            <span className="text-white">Luxury Travel Solutions</span>.
          </p>
          <p className="text-white text-sm lg:text-base max-w-[500px] text-justify">
            Embark on a seamless experience where opulence meets convenience.
            Discover unparalleled comfort, personalized services, and
            unforgettable moments with every mile traveled.
          </p>

          <div className="flex items-center gap-3 md:gap-5 mt-5">
            <button className="bg-blue-400 px-6 py-3 text-gray-900 font-semibold rounded-full">
              Book Flight
            </button>
            <button className="border-[2px] border-blue-400 px-6 py-3 text-white font-semibold rounded-full">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={plane} className="w-full right-animation" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
