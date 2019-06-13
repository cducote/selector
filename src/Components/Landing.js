import React, { Component } from 'react';
import UnitOverlay from './UnitOverlay'
import UnitModal from './UnitModal'

class Landing extends Component {
    render() {
        return (
            <>
            <h1>Unit Product Selector</h1>
            <UnitOverlay>
            <UnitModal/>
            </UnitOverlay>  
            </>
        );
    }
}

export default Landing;