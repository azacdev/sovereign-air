import About from "../../components/About";
import Banner from "../../components/Banner";
import Blog from "../../components/Blog";
import Features from "../../components/Features";
import Hero from "../../components/Hero";
import Plans from "../../components/Plans";
const Home = () => {
  return (
    <div className="overflowHidden">
      <Hero />
      <About />
      <Features />
      <Plans />
      <Blog />
      <Banner />
    </div>
  );
};

export default Home;
