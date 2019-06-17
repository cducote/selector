import React, { Component } from 'react';
import {Button, Modal, Container, Accordion, Card } from 'react-bootstrap'
// import UnitModal from './UnitModal'
import unit from '../Images/units/unit.png'
import ImageMapper from 'react-image-mapper'
import light1 from '../Images/lights/10A19M60WCL.jpg'


let MAP = {
	id: 'map', name: 'my-map',
	areas: [
		{id: 1, shape: 'rect', coords: [564,153,352,10], preFillColor: 'clear'},
		{id: 2, shape: 'rect', coords: [769,14,980,150], preFillColor: 'clear'},
		{id: 3, shape: 'rect', coords: [1154,10,1371,151], preFillColor: 'clear'},
		{id: 4, shape: 'rect', coords: [320,368,535,509], preFillColor: 'clear'},
        {id: 5, shape: 'rect', coords: [1387,307,1600,443], preFillColor: 'clear'},
        {id: 6, shape: 'rect', coords: [367,997,584,1136], preFillColor: 'clear'},
        {id: 7, shape: 'rect', coords: [804,1001,1019,1135], preFillColor: 'clear'},
        {id: 8, shape: 'rect', coords: [1254,1001,1466,1136], preFillColor: 'clear'},
        {id: 9, shape: 'rect', coords: [516,1294,732,1428], preFillColor: 'clear'},
        {id: 10, shape: 'rect', coords: [1034,1292,1246,1428], preFillColor: 'clear'}
	]
};

class UnitOverlay extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
          show: false,
          lights: {
            "11L300701 WH": {
                name: "11L300701 WH",
                image: require('../Images/lights/11L300701 WH.jpg')
        },
            "21L303004 BN": {
                name: "21L303004 BN",
                image: require('../Images/lights/21L303004 BN.jpg')
            },
            "140511 BN": {
                name: "140511 BN",
                image: require('../Images/lights/140511 BN.jpg')
            },
    }
        };
      }
    
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
            <ImageMapper src={unit} width={1440} imgWidth={1920} map={MAP} 
                        onClick={()=> this.handleShow()} 
                        />

        <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Selection</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                                    <Card>
                                       <Card.Header>
                                            Entry
                                        </Card.Header>
                                            <Card.Body>
                                                <img alt='test' src={this.state.lights["11L300701 WH"].image}/>
                                            </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            Kitchen
                                        </Card.Header>
                                            <Card.Body>
                                                <img alt='test' src={this.state.lights["21L303004 BN"].image}/>
                                            </Card.Body>
                                    </Card>                        
                                    <Card>
                                        <Card.Header>
                                            Bar Pendant
                                            </Card.Header>
                                            <Card.Body>
                                                <img alt='test' src={this.state.lights["140511 BN"].image}/>
                                            </Card.Body>
                                        
                                    </Card>
                        </Container>
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
