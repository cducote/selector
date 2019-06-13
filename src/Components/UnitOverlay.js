import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap'
// import UnitModal from './UnitModal'
import unit from '../Images/units/unit.png'
import ImageMapper from 'react-image-mapper'

let MAP = {
	id: 'map', name: 'my-map',
	areas: [
		{id: 1, shape: 'rect', coords: [564,153,352,10], preFillColor: 'clear'},
		{id: 2, shape: 'rect', coords: [769,14,980,150], preFillColor: 'pink'},
		{id: 3, shape: 'rect', coords: [1154,10,1371,151], preFillColor: 'yellow'},
		{id: 4, shape: 'rect', coords: [320,368,535,509], preFillColor: 'red'},
        {id: 5, shape: 'rect', coords: [1387,307,1600,443], preFillColor: 'orange'},
        {id: 6, shape: 'rect', coords: [367,997,584,1136], preFillColor: 'teal'},
        {id: 7, shape: 'rect', coords: [804,1001,1019,1135], preFillColor: 'purple'},
        {id: 8, shape: 'rect', coords: [1254,1001,1466,1136], preFillColor: 'lightgreen'},
        {id: 9, shape: 'rect', coords: [516,1294,732,1428], preFillColor: 'darkred'},
        {id: 10, shape: 'rect', coords: [1034,1292,1246,1428], preFillColor: 'blue'}
	]
};

class UnitOverlay extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
    // state = {
    //     buttons: {
    //         id: [1,2,3,4,5,6,7,8,9,10]
    //     },
    //     show: false,
        
    // }
    
    handleClick() {
        console.log('click happened')
    }
    handleClose() {
        this.setState({ show: false });
      }
    handleShow() {
        this.setState({ show: true });
      }

    render() {
        return (
        <div className='unitOverlay'>
            <ImageMapper src={unit} width={1440} imgWidth={1920} map={MAP} onClick={()=> this.handleClick()}/>
            <Button variant="primary" onClick={this.handleShow}>
          Launch modal
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
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
                        <Button variant="primary" onClick={this.handleShow}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>
        </div>
        );
    }
}

export default UnitOverlay;