import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'

class NavComponent extends Component {
    state= {
        cartCount: this.props.currentUser.cart.length
    }
    
    updateCartCountNav = () => {
        this.setState({ cartCount: this.props.currentUser.cart.length })
    }
    

    render() {
        return (
            <>
            <Navbar expand='lg' sticky="top">
                <Navbar.Brand id='main'>
                    Vineyard Lighting 
                </Navbar.Brand> 
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className='mr-auto'/>
                    <Nav className='justify-content-end'>
                    <Nav.Link href='/'> Home </Nav.Link>
                        <Nav.Link href='/'> About </Nav.Link>
                        <Nav.Link href='/'> Products </Nav.Link>
                        <Nav.Link href='/'> Our Services </Nav.Link>
                        <Nav.Link href='/'> Contact Us </Nav.Link>
                        <Nav.Link href='/'> <FaShoppingCart/> ({this.state.cartCount})</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>
        );
    }
}

export default NavComponent;