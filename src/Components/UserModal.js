import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";

class UserModal extends Component {
  state = {
    showUserModal: false
  };

  handleCloseUserModal = async () => {
    this.setState({ showUserModal: false });
  };
  handleShowUserModal = async () => {
    this.setState({ showUserModal: true });
  };

  handleChange = (e) => {
    const editUser = { ...this.state.editUser }
    editUser[e.target.name] = e.target.value
    this.setState({ editUser })
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ showUserModal: false })
    await this.props.getUser()
  }  


  render() {
    return (
      <div>
        <Button onClick={this.handleShowUserModal}>Sign in</Button>
        <Modal
          show={this.state.showUserModal}
          onHide={this.handleCloseUserModal}
        >
          <Modal.Header closeButton>
            Sign In or continue as a Guest
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
                <Form.Control size="lg" type="text" defaultValue="Guest"/>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseUserModal}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UserModal;
