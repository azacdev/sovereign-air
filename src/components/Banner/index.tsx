import banner from "../../assets/images/sky3.jpg";

const Banner = () => {
  return (
    <div
      className="w-full lg:h-[400px] h-[460px] py-20 bg-fixed bg-cover relative z-[1]"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "bottom",
      }}
      id="newspaper"
    >
      <div className="w-full h-full lg:flex-row flex-col flex items-center justify-between px-10 banner z-[2] md:py-0 py-5 text-center">
        <span className="text-white md:text-5xl text-3xl font-semibold">
          It's Time To Enjoy Your Freedom!
        </span>
        <div className="flex md:flex-row flex-col items-center gap-10 md:mb-0 mb-2">
          <input
            type="text"
            placeholder="Email address"
            className="md:w-[500px] w-[300px] border border-slate-400 outline-none px-3 rounded-[10px] py-3"
          />
          <button className="bg-blue-400 p-3 text-white font-semibold shadow-md rounded-[10px] max-w-[250px]">
            Join Our Newspaper
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
