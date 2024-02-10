import {
  ShieldCheckmarkOutline,
  EarthOutline,
  BedOutline,
} from "react-ionicons";

const Features = () => {
  const featuresList = [
    {
      icon: <BedOutline color="#60a5fa" style={{ width: 60, height: 60 }} />,
      title: "Hotels on the House",
      description:
        "Indulge in our handpicked selection of luxury accommodations, ensuring your stay is nothing short of extraordinary.",
    },
    {
      icon: (
        <ShieldCheckmarkOutline
          color="#60a5fa"
          style={{ width: 60, height: 60 }}
        />
      ),
      title: "Safe to Trust",
      description:
        "Rest easy knowing your safety is our top priority. We implement rigorous security measures for a worry-free experience.",
    },
    {
      icon: <EarthOutline color="#60a5fa" style={{ width: 60, height: 60 }} />,
      title: "Worldwide Customers",
      description:
        "Join a community of worldwide travelers who have experienced the unparalleled service and satisfaction that our brand delivers.",
    },
  ];
  return (
    <div
      className="flex w-full py-20 md:px-20 px-8 flex-col gap-16 justify-center items-center"
      id="features"
    >
      <div className="flex flex-col w-full items-center">
        <span className="font-semibold text-blue-500">Our Features</span>
        <span className="font-semibold text-slate-700 text-3xl mt-1 text-center">
          Our Priceless Features
        </span>
        <p className="max-w-[400px] text-center mt-4">
          Elevate your travels with our unique features designed to redefine
          luxury. Your journey, enriched.
        </p>
      </div>
      <div className="flex md:flex-row flex-col w-full items-center justify-between md:gap-0 gap-5">
        {featuresList.map((feature) => {
          return (
            <div
              className="bg-white py-5 px-12 flex flex-col items-center justify-center gap-5 rounded-[10px] transition-all duration-300 cursor-pointer hover:scale-[1.05]"
              style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 / 5%)" }}
              key={feature.title}
            >
              {feature.icon}
              <span className="font-semibold text-gray-700 text-xl text-center">
                {feature.title}
              </span>
              <span className="max-w-[360px] text-center leading-7">
                {feature.description}
              </span>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
