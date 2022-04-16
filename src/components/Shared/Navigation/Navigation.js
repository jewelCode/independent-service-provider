import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Shan's Lawyer Services</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>About Me</Nav.Link>
                        <Nav.Link>Services</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link>Login</Nav.Link>
                    <Nav.Link>
                        Register
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;