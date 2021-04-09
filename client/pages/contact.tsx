import CustomHeader from "../components/common/Header";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactInfo from "../components/layouts/contact/ContactInfo";
import ContactForm from "../components/layouts/contact/ContactForm";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Contact = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("../components/layouts/contact/Map"), {
        loading: () => <LoadingSpinner />,
        ssr: false,
      }),
    []
  );

  return (
    <div className="contact mt-5">
      <Container>
        <Row className="justify-content-between  align-items-start">
          <Col sm={12} lg={5}>
            <ContactInfo />
          </Col>
          <Col sm={12} lg={7}>
            <ContactForm />
          </Col>
        </Row>
        <Map />
      </Container>
    </div>
  );
};

export default Contact;
