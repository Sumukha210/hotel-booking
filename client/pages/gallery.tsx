import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NextImage from "next/image";
import { HotelImages } from "../components/common/HotelImages";
import CustomHeader from "../components/common/Header";

const Gallery = () => {
  return (
    <div className="Gallery">
      <CustomHeader title="our gallery" />
      <Container>
        <Row className="justify-content-start align-items-center my-5">
          {HotelImages.map(url => (
            <Col md={6} lg={4} key={url}>
              <div className="Gallery__card mb-3">
                <NextImage
                  layout="responsive"
                  height={130}
                  width="100%"
                  src={url}
                  alt={url}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
