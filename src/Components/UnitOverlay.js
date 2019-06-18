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

class UnitOverlay extends Component {
        state = {
          areaClicked: 0,
          showModalBF: false,
          showModalLF: false,
          showModalBalcony: false,
          showModalCloset: false,
          showModalHall: false,
          showModalShower: false,
          showModalVanity: false,
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
    
    determineModal() {
        let areaId = this.state.areaClicked
        if (areaId === 1){
            this.handleShowModalBF()
        } else if (areaId === 2){
            this.handleShowModalLF()
        } else if (areaId === 3){
            this.handleShowModalBalcony()
        } else if (areaId === 4){
            this.handleShowModalCloset()
        } else if (areaId === 5){
            this.handleShowModalHall()
        } else if (areaId === 6){
            this.handleShowModalShower()
        } else if (areaId === 7){
            this.handleShowModalKitchen()
        } else if (areaId === 8){
            this.handleShowModalVanity()
        } else if (areaId === 9){
            this.handleShowModalBP()
        } else if (areaId === 10) {
            this.handleShowModalEntry()
        }
        console.log(areaId)
    }    
    areaCheck = async (area) => {
        await this.setState({ areaClicked: area.id })
        this.determineModal()
    }
    
    handleCloseModalBF = async () =>{
        this.setState({ showModalBF: false });
      }
    handleShowModalBF = async () => {
        this.setState({ showModalBF: true });
      }
    handleCloseModalLF = async () =>{
        this.setState({ showModalLF: false });
      }
    handleShowModalLF = async () => {
        this.setState({ showModalBP: true });
      }
    handleCloseModalBalcony = async () =>{
        this.setState({ showModalBalcony: false });
      }
    handleShowModalBalcony = async () => {
        this.setState({ showModalBalcony: true });
      }
    handleCloseModalCloset = async () =>{
        this.setState({ showModalCloset: false });
      }
    handleShowModalCloset = async () => {
        this.setState({ showModalCloset: true });
      }
    handleCloseModalHall = async () =>{
        this.setState({ showModalHall: false });
      }
    handleShowModalHall = async () => {
        this.setState({ showModalHall: true });
      }
    handleCloseModalShower = async () =>{
        this.setState({ showModalShower: false });
      }
    handleShowModalShower = async () => {
        this.setState({ showModalShower: true });
      }
    handleCloseModalVanity = async () =>{
        this.setState({ showModalVanity: false });
      }
    handleShowModalVanity = async () => {
        this.setState({ showModalVanity: true });
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
        {/* Bed Fan */}
        <Modal show={this.state.showModalBF} onHide={this.handleCloseModalBF}>
                    <Modal.Header closeButton>
                        <Modal.Title>Bed Room</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Card>
                                <Card.Header>
                                    Choose a fan by clicking below 
                                </Card.Header>
                                    <Card.Body>
                                        <img alt='test' src={this.state.lights["11L300701 WH"].image}/>
                                    </Card.Body>
                            </Card>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModalBF}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleShowModalBF}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>
        {/* Living Room Fan */}
        <Modal show={this.state.showModalLF} onHide={this.handleCloseModalLF}>
                    <Modal.Header closeButton>
                        <Modal.Title>Living Room</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                                    <Card>
                                       <Card.Header>
                                       Choose a fan by clicking below
                                        </Card.Header>
                                            <Card.Body>
                                                <img alt='test' src={this.state.lights["11L300701 WH"].image}/>
                                            </Card.Body>
                                    </Card>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModalLF}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleShowModalLF}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>
        {/* Balcony Modal */}
        <Modal show={this.state.showModalBalcony} onHide={this.handleCloseModalBalcony}>
                    <Modal.Header closeButton>
                        <Modal.Title>Balcony</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Card>
                                <Card.Header>
                                    Select a light
                                </Card.Header>
                                    <Card.Body>
                                        <img alt='test' src={this.state.lights["11L300701 WH"].image}/>
                                    </Card.Body>
                            </Card>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModalBalcony}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleShowModalBalcony}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>
        {/* Closet */}
        <Modal show={this.state.showModalCloset} onHide={this.handleCloseModalCloset}>
                    <Modal.Header closeButton>
                        <Modal.Title>Closet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Card>
                                <Card.Header>
                                    select a light
                                </Card.Header>
                                    <Card.Body>
                                        <img alt='test' src={this.state.lights["11L300701 WH"].image}/>
                                    </Card.Body>
                            </Card>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModalCloset}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleShowModalCloset}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>
        {/* Hallway */}
        <Modal show={this.state.showModalHall} onHide={this.handleCloseModalHall}>
                    <Modal.Header closeButton>
                        <Modal.Title>Hallway</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                                    <Card>
                                       <Card.Header>
                                            select a hallway light
                                        </Card.Header>
                                            <Card.Body>
                                                <img alt='test' src={this.state.lights["11L300701 WH"].image}/>
                                            </Card.Body>
                                    </Card>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModalHall}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleShowModalHall}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>
        {/* Shower */}
        <Modal show={this.state.showModalShower} onHide={this.handleCloseModalShower}>
                    <Modal.Header closeButton>
                        <Modal.Title>Shower</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Card>
                                <Card.Header>
                                    select a shower light
                                </Card.Header>
                                    <Card.Body>
                                        <img alt='test' src={this.state.lights["11L300701 WH"].image}/>
                                    </Card.Body>
                            </Card>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModalShower}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleShowModalShower}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>
        {/* Vanity */}
        <Modal show={this.state.showModalVanity} onHide={this.handleCloseModalVanity}>
                    <Modal.Header closeButton>
                        <Modal.Title>Vanity</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Card>
                                <Card.Header>
                                    selct a vanity light
                                </Card.Header>
                                    <Card.Body>
                                        <img alt='test' src={this.state.lights["11L300701 WH"].image}/>
                                    </Card.Body>
                            </Card>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModalVanity}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleShowModalVanity}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>    
        {/* Entry Modal */}
        <Modal show={this.state.showModalEntry} onHide={this.handleCloseModalEntry}>
                    <Modal.Header closeButton>
                        <Modal.Title>Entryway</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Card>
                                <Card.Header>
                                    select and entryway light
                                </Card.Header>
                                    <Card.Body>
                                        <img alt='test' src={this.state.lights["11L300701 WH"].image}/>
                                    </Card.Body>
                            </Card>
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
                        <Modal.Title>Kitchen</Modal.Title>
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
