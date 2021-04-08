import CustomHeader from "../components/common/Header";
import Reviews from "../components/common/Reviews";
import AboutInfo from "../components/Layouts/about/AboutInfo";
import WhyChooseUs from "../components/Layouts/Home/WhyChooseUs";

const About = () => {
  return (
    <>
      <CustomHeader title="about us" />
      <AboutInfo />
      <div style={{ margin: "6rem 0" }}>
        <WhyChooseUs />
      </div>
      <Reviews />
    </>
  );
};

export default About;
