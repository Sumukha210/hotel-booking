import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavLinks from "./NavLinks";
import { useRouter } from "next/router";
import CustomBtn from "../CustomBtn";

const NavBar = () => {
  const { push } = useRouter();

  const isAuthenticated = false;

  const handleLogout = () => {};
  const handleLogin = () => {
    push("/authForm");
  };

  return (
    <div className="NavBar">
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand onClick={() => push("/")}>perl</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLinks />

              <CustomBtn
                name={isAuthenticated ? "logout" : "login"}
                btnFun={isAuthenticated ? handleLogout : handleLogin}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      ;
    </div>
  );
};

export default NavBar;
