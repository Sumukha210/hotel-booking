import CustomHeader from "../components/common/Header";
import Reviews from "../components/common/reviews";
import AboutInfo from "../components/layouts/about/AboutInfo";
import WhyChooseUs from "../components/layouts/home/WhyChooseUs";

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
