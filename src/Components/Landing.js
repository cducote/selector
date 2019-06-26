import React, { Component } from 'react';
import UnitOverlay from './UnitOverlay'
import NavComponent from './NavComponent'

class Landing extends Component {
    render() {
        return (
            <div className='main'>
            <NavComponent/>
            <h1>Product Selector</h1>
            <UnitOverlay/>
              
            </div>
        );
    }
}

export default Landing;