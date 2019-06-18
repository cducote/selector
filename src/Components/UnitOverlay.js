import React, { Component } from 'react';
import {Button, Modal, Container, Card } from 'react-bootstrap'
import unit from '../Images/units/unit.png'
import ImageMapper from 'react-image-mapper'




let MAP = {
	id: 'map', name: 'my-map',
	areas: [
		{id: 1, shape: 'rect', coords: [564,153,352,10], preFillColor: 'clear'},
		{id: 2, shape: 'rect', coords: [769,14,980,150], preFillColor: 'clear'},
		{id: 3, shape: 'rect', coords: [1154,10,1371,151], preFillColor: 'clear'},
		{id: 4, shape: 'rect', coords: [320,368,535,509], preFillColor: 'clear'},
        {id: 5, shape: 'rect', coords: [1387,307,1600,443], preFillColor: 'clear'},
        {id: 6, shape: 'rect', coords: [367,997,584,1136], preFillColor: 'clear'},
        {id: 7, name: 'kitchen', shape: 'rect', coords: [804,1001,1019,1135], preFillColor: 'clear'},
        {id: 8, shape: 'rect', coords: [1254,1001,1466,1136], preFillColor: 'clear'},
        {id: 9, name: 'bar pendant', shape: 'rect', coords: [516,1294,732,1428], preFillColor: 'clear'},
        {id: 10, name: 'entry', href: 'entry', shape: 'rect', coords: [1034,1292,1246,1428], preFillColor: 'clear'}
	]
};

const myMap = MAP.areas

let targetArea = myMap.find(targetArea => targetArea.id === 10)

class UnitOverlay extends Component {
        state = {
          areaClicked: 99,
          showModalEntry: false,
          showModalKitchen: false,
          showModalBP: false,
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

     
    setAreaClicked = () => {
        this.setState({ areaClicked: 9 })
    }
    areaCheck = (area) => {
        console.log(area.name)
        // this.setState({ areaClicked: 9 })
    }
    handleCloseModalEntry = async () => {
        this.setState({ showModalEntry: false });
      }
    handleShowModalEntry = async () => {
        this.setState({ showModalEntry: true });
      }
      handleCloseModalKitchen = async () => {
        this.setState({ showModalKitchen: false });
      }
    handleShowModalKitchen = async () => {
        this.setState({ showModalKitchen: true });
      }
      handleCloseModalBP = async () =>{
        this.setState({ showModalBP: false });
      }
    handleShowModalBP = async () => {
        this.setState({ showModalBP: true });
        
      }
    
    render() {
        return (
        <div className='unitOverlay'>
            <ImageMapper src={unit} width={1440} imgWidth={1920} map={MAP} 
                        onClick={(area)=> this.areaCheck(area)} 
                        />
        {/* Entry Modal */}
        <Modal show={this.state.showModalEntry} onHide={this.handleCloseModalEntry}>
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
                                    {/* <Card>
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
                                        
                                    </Card> */}
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModalEntry}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleShowModalEntry}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>

                {/* Kitch Modal */}
                <Modal show={this.state.showModalKitchen} onHide={this.handleCloseModalKitchen}>
                    <Modal.Header closeButton>
                        <Modal.Title>Selection</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                                    <Card>
                                        <Card.Header>
                                            Kitchen
                                        </Card.Header>
                                            <Card.Body>
                                                <img alt='test' src={this.state.lights["21L303004 BN"].image}/>
                                            </Card.Body>
                                    </Card>              
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModalKitchen}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleShowModalKitchen}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>

                {/* Bar Pendant Modal */}
                <Modal show={this.state.showModalBP} onHide={this.handleCloseModalBP}>
                    <Modal.Header closeButton>
                        <Modal.Title>Selection</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
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
                        <Button variant="secondary" onClick={this.handleCloseModalBP}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleShowModalBP}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>
        </div>
        );
    }
}

export default UnitOverlay;
