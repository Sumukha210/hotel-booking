import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { roomInfo } from "../Home/Rooms/index";
import Room, { IRoom } from "./Room";

const Rooms = () => {
  return (
    <div className="RoomPage my-5">
      <Container>
        <Row>
          {roomInfo.map(({ name, bed, size, img, price, services }: IRoom) => (
            <Room
              name={name}
              bed={bed}
              size={size}
              img={img}
              services={services}
              price={price}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Rooms;
