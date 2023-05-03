import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
        <img src='/imagenes/dragon-logo-5196B4EDA3-seeklogo.com.png' width={50} height={50} alt="img" />
        <Navbar.Brand id='dragon' href="#home">Dragon Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#link">Pc</Nav.Link>
            <NavDropdown title="Mas" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Componentes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                Perifericos
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Contactanos
            </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        <CartWidget/>
    </Container>
    </Navbar>
);
}

export default NavBar;