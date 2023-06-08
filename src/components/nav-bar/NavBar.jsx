import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to={"/"}>
          <img
            src="/imagenes/dragon-logo-5196B4EDA3-seeklogo.com.png"
            width={50}
            height={50}
            alt="img"
          />
        </Link>{" "}
        <Link to={"/"} className="linkdragon">
          <Navbar.Brand id="dragon">Dragon Store</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={`/categoria/pc`}>
              Pc
            </Nav.Link>
            <NavDropdown title="Mas" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categoria/componentes">
                Componentes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/Perifericos">
                Perifericos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action/3.4">
                Contactanos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
