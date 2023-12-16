import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <Container>
        <Navbar variant="dark" bg="dark">
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="ml-auto">
                <Nav.Link href="/">Cadastrar Usuário</Nav.Link>
                <Nav.Link href="/listarUsuario">Listar Usuário</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>
    )
}

export default Menu;