import { CheckmarkCircleOutline } from "react-ionicons";
import mask from "../../assets/images/mask.png";

const About = () => {
  return (
    <div
      className="w-full md:px-20 px-8 flex lg:flex-row flex-col items-center justify-between py-10 lg:gap-0 gap-16"
      id="about"
    >
      <div
        className="md:w-[500px] md:h-[500px] w-[350px] h-[350px] bg-no-repeat bg-cover relative plane-mask"
        style={{ backgroundImage: `url(${mask})` }}
      />
      <div className="flex flex-col lg:w-[48%] w-full md:px-0 px-8">
        <span className="text-[15px] text-blue-600 font-semibold">
          ABOUT US
        </span>
        <span className="text-[30px] font-medium text-gray-700 mt-1">
          We Are Here To Bring You All The <br /> Comfort And Pleasure
        </span>
        <p className="max-w-[650px] text-gray-600 leading-7 mt-5">
          At Sovereign Air, we are dedicated to providing you with an
          extraordinary experience that goes beyond expectations. Our commitment
          to excellence ensures your journey is filled with comfort, luxury, and
          unforgettable moments.
        </p>
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex items-center gap-3">
            <CheckmarkCircleOutline color="#60a5fa" />
            <span>Personalized Service Tailored to Your Needs</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckmarkCircleOutline color="#60a5fa" />
            <span>
              Luxurious Accommodations and State-of-the-Art Facilities
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckmarkCircleOutline color="#60a5fa" />
            <span>Unmatched Attention to Detail for a Seamless Experience</span>
          </div>
        </div>
        <button className="bg-blue-400 px-6 py-3 text-white font-semibold rounded-full w-[200px] mt-12 shadow-md">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default About;
