import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Navigation = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav> <Nav.Link href="#home">Login</Nav.Link></Nav>
                    <Nav> <Nav.Link href="#home">Sign up</Nav.Link></Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;