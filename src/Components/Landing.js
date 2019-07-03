import React, { Component } from 'react';
import UnitOverlay from './UnitOverlay'
import NavComponent from './NavComponent'
import UserModal from './UserModal'

class Landing extends Component {
  
    render() {
        return (
            <div className='main'>
            <NavComponent/>
            {/* <h1>Product Selector</h1> */}
            <UnitOverlay updateCart={this.props.updateCart} currentUser={this.props.currentUser}/>
            <UserModal updateUser={this.props.updateUser}/>
            </div>
        );
    }
}

export default Landing;