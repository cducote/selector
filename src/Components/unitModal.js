import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'


class UnitModal extends Component {
   
state = {
    show: false
}
handleOpen = () => this.setState({ show: true })
handleClose() {
    this.setState({ show: false });
  }
handleShow() {
    this.setState({ show: true });
  }
editModal = () => (
    <Modal show={this.state.show} onClick={this.handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is the body text
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
            </Modal>
)

    render() {
        return (
            this.editModal()
        );
    }
}

export default UnitModal;