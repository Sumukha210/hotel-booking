import About from "../components/common/CustomAbout";
import Header from "../components/Layouts/Home/Header";
import Services from "../components/Layouts/Home/Services";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <About />
      <Services />
    </div>
  );
};

export default Home;
