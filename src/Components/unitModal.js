import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap'
import light1 from '../Images/lights/10A19M60WCL.jpg'
import kitchenlight from '../Images/lights/21L303004 BN.jpg'
import { Button, Modal,  Container, Card, } from 'reactstrap';


class UnitModal extends Component {
   
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
          show: false,
        };
      }

handleOpen = () => this.setState({ show: true })
handleClose() {
    this.setState({ show: false });
  }
handleShow() {
    this.setState({ show: true });
  }
// editModal = () => (
//     <Modal show={this.state.show} onHide={this.handleClose}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Selection</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <Container>
//                                 <Accordion>
//                                     <Card>
//                                         <Accordion.Toggle eventKey="0">
//                                             Entry
//                                         </Accordion.Toggle>
//                                         <Accordion.Collapse eventKey='0'>
//                                             <Card.Body>
//                                                 <img alt='test' src={light1}/>
//                                             </Card.Body>
//                                         </Accordion.Collapse>
//                                     </Card>
//                                     <Card>
//                                         <Accordion.Toggle eventKey="1">
//                                             Kitchen
//                                         </Accordion.Toggle>
//                                         <Accordion.Collapse  eventKey='1'>
//                                             <Card.Body>
//                                                 <img alt='test' src={kitchenlight}/>
//                                             </Card.Body>
//                                         </Accordion.Collapse>
//                                     </Card>                        
//                                     <Card>
//                                         <Accordion.Toggle eventKey="2">
//                                             Bar Pendant
//                                         </Accordion.Toggle>
//                                         <Accordion.Collapse  eventKey='2'>
//                                             <Card.Body>
//                                                 <img alt='test' src={light1}/>
//                                             </Card.Body>
//                                         </Accordion.Collapse>
//                                     </Card>
//                                     <Card>
//                                         <Accordion.Toggle eventKey="3">
//                                             Living Room
//                                         </Accordion.Toggle>
//                                         <Accordion.Collapse  eventKey='3'>
//                                             <Card.Body>
//                                                 <img alt='test' src={light1}/>
//                                             </Card.Body>
//                                         </Accordion.Collapse>
//                                     </Card>
//                                     <Card>
//                                         <Accordion.Toggle eventKey="4">
//                                             Bedroom
//                                         </Accordion.Toggle>
//                                         <Accordion.Collapse  eventKey='4'>
//                                             <Card.Body>
//                                                 <img alt='test' src={light1}/>
//                                             </Card.Body>
//                                         </Accordion.Collapse>
//                                     </Card>
//                                     <Card>
//                                         <Accordion.Toggle eventKey="5">
//                                             Vanity
//                                         </Accordion.Toggle>
//                                         <Accordion.Collapse  eventKey='5'>
//                                             <Card.Body>
//                                                 <img alt='test' src={light1}/>
//                                             </Card.Body>
//                                         </Accordion.Collapse>
//                                     </Card>
//                                     <Card>
//                                         <Accordion.Toggle eventKey="6">
//                                             Shower
//                                         </Accordion.Toggle>
//                                         <Accordion.Collapse  eventKey='6'>
//                                             <Card.Body>
//                                                 <img alt='test' src={light1}/>
//                                             </Card.Body>
//                                         </Accordion.Collapse>
//                                     </Card>
//                                     <Card>
//                                         <Accordion.Toggle eventKey="7">
//                                             Closet
//                                         </Accordion.Toggle>
//                                         <Accordion.Collapse  eventKey='7'>
//                                             <Card.Body>
//                                                 <img alt='test' src={light1}/>
//                                             </Card.Body>
//                                         </Accordion.Collapse>
//                                     </Card>
//                                     <Card>
//                                         <Accordion.Toggle eventKey="8">
//                                             Hall
//                                         </Accordion.Toggle>
//                                         <Accordion.Collapse  eventKey='8'>
//                                             <Card.Body>
//                                                 <img alt='test' src={light1}/>
//                                             </Card.Body>
//                                         </Accordion.Collapse>
//                                     </Card>
//                                     <Card>
//                                         <Accordion.Toggle eventKey="9">
//                                             Patio
//                                         </Accordion.Toggle>
//                                         <Accordion.Collapse  eventKey='9'>
//                                             <Card.Body>
//                                                 <img alt='test' src={light1}/>
//                                             </Card.Body>
//                                         </Accordion.Collapse>
//                                     </Card>
//                                </Accordion>
//                         </Container>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="secondary" onClick={this.handleClose}>
//                             Close
//                         </Button>
//                         <Button variant="primary" onClick={this.handleShow}>
//                             Save Changes
//                         </Button>
//                         </Modal.Footer>
//                 </Modal>
// )

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Selection</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle eventKey="0">
                                            Entry
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey='0'>
                                            <Card.Body>
                                                <img alt='test' src={light1}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle eventKey="1">
                                            Kitchen
                                        </Accordion.Toggle>
                                        <Accordion.Collapse  eventKey='1'>
                                            <Card.Body>
                                                <img alt='test' src={kitchenlight}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>                        
                                    <Card>
                                        <Accordion.Toggle eventKey="2">
                                            Bar Pendant
                                        </Accordion.Toggle>
                                        <Accordion.Collapse  eventKey='2'>
                                            <Card.Body>
                                                <img alt='test' src={light1}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle eventKey="3">
                                            Living Room
                                        </Accordion.Toggle>
                                        <Accordion.Collapse  eventKey='3'>
                                            <Card.Body>
                                                <img alt='test' src={light1}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle eventKey="4">
                                            Bedroom
                                        </Accordion.Toggle>
                                        <Accordion.Collapse  eventKey='4'>
                                            <Card.Body>
                                                <img alt='test' src={light1}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle eventKey="5">
                                            Vanity
                                        </Accordion.Toggle>
                                        <Accordion.Collapse  eventKey='5'>
                                            <Card.Body>
                                                <img alt='test' src={light1}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle eventKey="6">
                                            Shower
                                        </Accordion.Toggle>
                                        <Accordion.Collapse  eventKey='6'>
                                            <Card.Body>
                                                <img alt='test' src={light1}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle eventKey="7">
                                            Closet
                                        </Accordion.Toggle>
                                        <Accordion.Collapse  eventKey='7'>
                                            <Card.Body>
                                                <img alt='test' src={light1}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle eventKey="8">
                                            Hall
                                        </Accordion.Toggle>
                                        <Accordion.Collapse  eventKey='8'>
                                            <Card.Body>
                                                <img alt='test' src={light1}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle eventKey="9">
                                            Patio
                                        </Accordion.Toggle>
                                        <Accordion.Collapse  eventKey='9'>
                                            <Card.Body>
                                                <img alt='test' src={light1}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                               </Accordion>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleShow}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>
        );
    }
}

export default UnitModal;