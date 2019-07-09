import React, { Component } from 'react';
import UnitOverlay from './UnitOverlay'
import { Button } from 'react-bootstrap'
import UserModal from './UserModal'
import CheckoutPage from './CheckoutPage';

class Landing extends Component {

    state = {
        done: false
    }
    handlePageChange = async () => {
        this.setState({ done: true })
    }
  
    render() {
        const done = this.state.done
        let page;
        if (done) {
            page = <CheckoutPage cart={this.props.currentUser.cart} updateLight={this.props.updateLight}/>
        } else {
            page = <div className='main'>
                        <UnitOverlay updateCart={this.props.updateCart} currentUser={this.props.currentUser}/>
                        <UserModal updateUser={this.props.updateUser}/>
                        <Button variant='danger' onClick={this.handlePageChange}>Checkout</Button>
                   </div>
        }
        return (
            <>
            {page}
            </>
        );
    }
}

export default Landing;