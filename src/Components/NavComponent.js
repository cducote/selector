import React, { Component } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap'

class NavComponent extends Component {
    render() {
        return (
            <Navbar sticky='top'>
                <Navbar.Brand id='main'>
                    Vineyard Lighting 
                </Navbar.Brand>
            </Navbar>
            // <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            //     <Row noGutters>
            //        <Col>
            //         <Nav sticky='top'>
            //             <Nav.Item id='main'>
            //                 <Nav.Link href='/' > Vineyard Lighting </Nav.Link>
            //             </Nav.Item>
            //             </Nav>
            //         </Col>
                   
            //         <Col>
            //         <Nav className='justify-content-end'>
            //             <Nav.Item>
            //                 <Nav.Link href='/'> Home </Nav.Link>
            //             </Nav.Item>
            //             <Nav.Item>
            //                 <Nav.Link href='/'> About </Nav.Link>
            //             </Nav.Item>
            //             <Nav.Item>
            //                 <Nav.Link href='/'> Products </Nav.Link>
            //             </Nav.Item>
            //             <Nav.Item>
            //                 <Nav.Link href='/'> Our Services </Nav.Link>
            //             </Nav.Item>
            //             <Nav.Item>
            //                 <Nav.Link href='/'> Contact Us </Nav.Link>
            //             </Nav.Item>
            //             </Nav>
            //         </Col>
            //     </Row>

            // </Container>
            
            
        );
    }
}

export default NavComponent;