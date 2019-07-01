import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class NavComponent extends Component {
    render() {
        return (
            <>
            <Navbar expand='lg' >
                <Navbar.Brand id='main'>
                    Vineyard Lighting 
                </Navbar.Brand> 
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav'">
                <Nav className='justify-content-end mr-auto'>
                    <Nav.Link href='/'> Home </Nav.Link>
                    <Nav.Link href='/'> About </Nav.Link>
                    <Nav.Link href='/'> Products </Nav.Link>
                    <Nav.Link href='/'> Our Services </Nav.Link>
                    <Nav.Link href='/'> Contact Us </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>
        );
    }
}

export default NavComponent;