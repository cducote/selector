import React, { Component } from 'react';
import UnitOverlay from './UnitOverlay'
import NavComponent from './NavComponent'
import UserModal from './UserModal'

class Landing extends Component {
  
    render() {
        return (
            <div className='main'>
            <NavComponent/>
            <h1>Product Selector</h1>
            <UnitOverlay/>
            <UserModal updateUser={this.props.updateUser}/>
            </div>
        );
    }
}

export default Landing;