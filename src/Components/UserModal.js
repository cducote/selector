import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap'


   


class UserModal extends Component {

    state = {
        showUserModal: false
    }

    handleCloseUserModal = async () => {
        this.setState({ showUserModal: false })
    }
    handleShowUserModal = async () => {
        this.setState({ showUserModal: true })
    }

    render() {
        return (
            <Button onClick={this.handleShowUserModal}> Sign in
                 <Modal show={this.state.showUserModal} onHide={this.handleCloseUserModal}>
                    <Modal.Header>
                        Sign In or continue as a Guest
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
            </Modal>
            </Button>
        );
    }
}

export default UserModal;