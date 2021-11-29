import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function NavigationBar() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Yummy in your tummy</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features"></Nav.Link>
                <Nav.Link href="#pricing">Login</Nav.Link>
                <Nav.Link href="#pricing">Logout</Nav.Link>
                <NavDropdown title="Find your Yummies" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/onlinerecipes">Online Yummies</NavDropdown.Item>
                    <NavDropdown.Item href="/grandmarecipes">Grandma Yummies</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Youtube Yummies</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
     </div>
    )
}

export default NavigationBar;
