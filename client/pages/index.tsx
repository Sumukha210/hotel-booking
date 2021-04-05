import About from "../components/common/CustomAbout";
import Header from "../components/Layouts/Home/Header";
import Services from "../components/Layouts/Home/Services";
import SpecialRooms from "../components/Layouts/Home/Rooms";
import WhyChooseUs from "../components/Layouts/Home/WhyChooseUs";
import ExploreGallery from "../components/Layouts/Home/ExploreGallery";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <About />
      <Services />
      <SpecialRooms />
      {/* review section */}
      <WhyChooseUs />
      <ExploreGallery />
    </div>
  );
};

export default Home;
