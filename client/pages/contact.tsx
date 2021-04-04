import CustomHeader from "../components/common/Header";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactInfo from "../components/Layouts/contact/ContactInfo";
import ContactForm from "../components/Layouts/contact/ContactForm";

const Contact = () => {
  // const Map = useMemo(
  //   () =>
  //     dynamic(() => import("../components/Layouts/contact/Map"), {
  //       loading: () => <h3 className="text-center">Loading....</h3>,
  //       ssr: false,
  //     }),
  //   []
  // );

  return (
    <div className="contact mb-5">
      {/* <CustomHeader title="contact us" /> */}
      <Container>
        <Row className="justify-content-between  align-items-start">
          <Col lg={5}>
            <ContactInfo />
          </Col>
          <Col lg={7}>
            <ContactForm />
          </Col>
        </Row>
        {/* <Map /> */}
      </Container>
    </div>
  );
};

export default Contact;
