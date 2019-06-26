import React, { Component } from 'react';
import { Modal, Form } from 'react-bootstrap'

userModal = () => (
    <Modal show={this.state.showUserModal} onHide={this.handleCloseUserModal}>
                    <Modal.Header>
                        Sign In or continue as a Guest
                    </Modal.Header>

            </Modal>
)

class UserModal extends Component {
    render() {
        return (
            
        );
    }
}

export default UserModal;