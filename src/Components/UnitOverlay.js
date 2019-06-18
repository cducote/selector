import React, { Component } from 'react';
import {Button, Modal, Container, Card} from 'react-bootstrap'
import unit from '../Images/units/unit.png'
import ImageMapper from 'react-image-mapper'
import ImageMap from './ImageMap'
import sampledata from './sampledata'
let MAP = ImageMap
let LIGHTS = sampledata

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
          cart: [],

          light: {
            "11L300701 WH": {
                id: 0,
                name: "11L300701 WH",
                image: require('../Images/lights/11L300701 WH.jpg'),
                price: 10
        },
            "21L303004 BN": {
                id: 1,
                name: "21L303004 BN",
                image: require('../Images/lights/21L303004 BN.jpg'),
                price: 13
            },
            "140511 BN": {
                id: 2,
                name: "140511 BN",
                image: require('../Images/lights/140511 BN.jpg'),
                price: 32
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
    pushToCart = async (light) => {
        console.log(LIGHTS)
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
        const light = this.state.light
        const test = LIGHTS
        return (
        <div className='unitOverlay'>
            <ImageMapper src={unit} width={1440} imgWidth={1920} map={MAP} 
                        onClick={(area)=> this.areaCheck(area)} 
                        />
        {/* Bed Fan */}
        <Modal className='BedFan' show={this.state.showModalBF} onHide={this.handleCloseModalBF}>
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
                                        <img alt='test' src={test[0].image} onClick={(light) => this.pushToCart(light)}/>
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
                                                <img alt='test' src={light["11L300701 WH"].image}/>
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
                                        <img alt='test' src={this.state.light["11L300701 WH"].image}/>
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
                                        <img alt='test' src={light["11L300701 WH"].image}/>
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
                                                <img alt='test' src={light["11L300701 WH"].image}/>
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
                                        <img alt='test' src={light["11L300701 WH"].image}/>
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
                                        <img alt='test' src={light["11L300701 WH"].image}/>
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
                                        <img alt='test' src={light["11L300701 WH"].image}/>
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
                                        <img alt='test' src={light["21L303004 BN"].image}/>
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
                        <Modal.Title>Bar Pendant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Card>
                                <Card.Header>
                                    select a light
                                </Card.Header>
                                <Card.Body>
                                    <img alt='test' src={light["140511 BN"].image}/>
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
                <Button variant="danger" href='/checkout'>All Done</Button>
        </div>
        );
    }
}

export default UnitOverlay;
