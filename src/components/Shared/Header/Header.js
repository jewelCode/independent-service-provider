import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Slider from '../../Home/Slider/Slider';
import Main from '../Main/Main';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () =>{
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/">Shan's Lawyer Services</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="about">About</Nav.Link>
                    <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                </Nav>
                <Nav>
                {
                    user ? <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link> : <Nav.Link as={Link} to="login">Login</Nav.Link>
                    
                }
                <Nav.Link as={Link} to="register">
                    Register
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;