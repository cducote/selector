import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'


class NavComponent extends Component {
    state= {
        cartCount: this.props.cartCount
    }
    
    updateCartCountNav = async () => {
        await this.setState({ cartCount: this.props.currentUser.cart.length })
    }
    componentWillReceiveProps(){
        this.updateCartCountNav()
    }
    
    render() {
        let styles = {
            color: 'white'
        }
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
                        <Nav.Link href='/index.html#aboutsection'> About </Nav.Link>
                        <Nav.Link href='/productspages/products.php'> Products </Nav.Link>
                        <Nav.Link href='/index.html#services'> Our Services </Nav.Link>
                        <Nav.Link href='/selection2' style={styles}> Product Selector </Nav.Link>
                        <Nav.Link href='/index.html#contact'> Contact Us </Nav.Link>
                        {/* <Nav.Link style={styles}> <FaShoppingCart/> ({this.state.cartCount})</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>
        );
    }
}

export default NavComponent;