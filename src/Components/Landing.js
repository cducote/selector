import React, { Component } from 'react';
import UnitOverlay from './UnitOverlay'
import NavComponent from './NavComponent'
import UserModal from './UserModal'

class Landing extends Component {
    state = {
        currentUser: {
            name: ''
        }
    }
    getUser = async () => {
        console.log('user got')
    }
    render() {
        return (
            <div className='main'>
            <NavComponent/>
            <h1>Product Selector</h1>
            <UnitOverlay/>
            <UserModal getUser={this.getUser}/>
            </div>
        );
    }
}

export default Landing;