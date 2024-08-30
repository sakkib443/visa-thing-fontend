import Explore from "../HomeComponents/Explore/Explore";
import Hero from "../HomeComponents/Hero/Hero";
import ServiceComponent from "../HomeComponents/ServiceComponents/ServiceComponent";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ServiceComponent></ServiceComponent>
      <Explore />
    </div>
  );
};

export default Home;
