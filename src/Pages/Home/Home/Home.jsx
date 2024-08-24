import Explore from "../HomeComponents/Explore/Explore";
import Hero from "../HomeComponents/Hero/Hero";
import Media from "../HomeComponents/Media/Media";
import ServiceComponent from "../HomeComponents/ServiceComponents/ServiceComponent";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ServiceComponent></ServiceComponent>
      <Explore />
      <Media />
    </div>
  );
};

export default Home;
