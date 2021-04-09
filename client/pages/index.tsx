import About from "../components/layouts/about/AboutInfo";
import Header from "../components/layouts/home/Header";
import WhyChooseUs from "../components/layouts/home/WhyChooseUs";
import ExploreGallery from "../components/layouts/home/ExploreGallery";
import Reviews from "../components/common/reviews";
import FeaturedRooms from "../components/layouts/home/featuredRooms";
import Services from "../components/layouts/home/services";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <About />
      <Services />
      <FeaturedRooms />
      <Reviews />
      <WhyChooseUs />
      <ExploreGallery />
    </div>
  );
};

export default Home;
