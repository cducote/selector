import React, { Component } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap'

class NavComponent extends Component {
    render() {
        return (
            
            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row noGutters>
                   <Col>
                    <Nav sticky='top'>
                        <Nav.Item className='main'>
                            <Nav.Link href='/'> Vineyard Lighting </Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                   
                    <Col>
                    <Nav className='justify-content-end'>
                        <Nav.Item>
                            <Nav.Link href='/'> Home </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/'> About </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/'> Products </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/'> Our Services </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/'> Contact Us </Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                </Row>

            </Container>
            
            
        );
    }
}

export default NavComponent;