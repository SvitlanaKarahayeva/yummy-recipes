import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar(props) {
    // ternary operatior: if user is logged in show 1st block, if not- show 2nd block
   
    let nav = props.currentUser ?
    
        // First block
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Yummy in your tummy</Navbar.Brand>
            
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Find your Yummies" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/onlinerecipes">Online Yummies</NavDropdown.Item>
                            <NavDropdown.Item href="/grandmarecipes">Grandma Yummies</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Youtube Yummies</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        <Nav.Link href="#memes"><span>Welcome, {props.currentUser.name}</span></Nav.Link>
                        <Nav.Link href="/" onClick={props.handleLogout}>Logout</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
         
         :
        
        // Second block
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Yummy in your tummy</Navbar.Brand>
            
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     

    return (
        
        <div className='NavBar'>
            {nav}
        </div>
    );
}
    export default NavigationBar;
