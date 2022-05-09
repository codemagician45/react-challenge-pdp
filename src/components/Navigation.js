import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export function Navigation() {
    return ( 
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img src="react-logo.png" className="navbar-logo" alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Link to="/" className="navbar-link">Home</Link>
                        <Link to="/add-student" className="navbar-link">Add Student</Link>
                        <Link to="/about-us" className="navbar-link">About Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
