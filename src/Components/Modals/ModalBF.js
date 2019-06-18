import React, { Component } from 'react';
import {Button, Modal, Container, Card} from 'react-bootstrap'
 

class ModalBF extends Component {
    state = {
        showModalBF: false,
        
    }
    componentDidMount(){
        this.handleShowModalBF()
    }
    handleCloseModalBF = async () =>{
        this.setState({ showModalBF: false });
      }
    handleShowModalBF = async () => {
        this.setState({ showModalBF: true });
      }
    render() {
        return (
            <Modal show={this.state.showModalBF} onHide={this.handleCloseModalBF}>
            <Modal.Header closeButton>
                <Modal.Title>Bed Room</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Card>
                        <Card.Header>
                            Choose a fan by clicking below 
                        </Card.Header>
                            <Card.Body>
                                {/* <img alt='test' src={this.state.lights["11L300701 WH"].image}/> */}
                            </Card.Body>
                    </Card>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleCloseModalBF}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.handleShowModalBF}>
                    Save Changes
                </Button>
                </Modal.Footer>
        </Modal>
        );
    }
}

export default ModalBF;