import React, { Component } from 'react';
import {Container, Card, Image, Modal, Row, Button} from "react-bootstrap";
import ImageMapper from "react-image-mapper";
import entryLights from '../API/sampleEntry'
import pendants from '../API/samplePendants'
import CImageMap from './CImageMap'
import CorridorNoEM from '../Images/corridor/CorridorNoEM.png'

let CORMAP = CImageMap

class Cooridor extends Component {
  state = {
    areaClicked: 0,
    showModalHP: false,
    showModalHL: false,
    showModdalSP: false,
  }

  determineModal() {
    let areaId = this.state.areaClicked.id;
    if (areaId === 1) {
      this.handleShowModalSP();
    } else if (areaId === 2) {
      this.handleShowModalHP();
    } else if (areaId === 3) {
      this.handleShowModalHL();
      }
    }

  areaCheck = async area => {
    await this.setState({ areaClicked: area });
    this.determineModal();
  };

  pushToCartC = async light => {
    // let areaClicked = this.state.areaClicked
    const cart2 = this.props.currentUser.cart
    await cart2.push(light);
    this.setState({
      showModalHP: false,
      showModalHL: false,
      showModalSP: false
    });
    this.props.updateCartCount()
    this.props.updateCartCountNav()
  }

  handleCloseModalHP = async () => {
    this.setState({ showModalHP: false });
  };
  handleShowModalHP = async () => {
    this.setState({ showModalHP: true });
  };
  handleCloseModalHL = async () => {
    this.setState({ showModalHL: false });
  };
  handleShowModalHL = async () => {
    this.setState({ showModalHL: true });
  };
  handleCloseModalSP = async () => {
    this.setState({ showModalSP: false });
  };
  handleShowModalSP = async () => {
    this.setState({ showModalSP: true });
  };

    render() {
      let cardStyles = {
        textAlign: 'center'
      }
      const pendantCard = pendants.map((light, i) => {
        return (
          <Card key={i}>
            <Container onClick={() => this.pushToCartC(light)}  style={cardStyles}>
                  <Image alt="test" src={light.image} height="133"/>
                  <div className='partNumber'>{light.partnumber}</div>
            </Container>
          </Card>
        );
      });
      const entryCard = entryLights.map((light, i) => {
        return (
          <Card key={i}>
            <Container onClick={() => this.pushToCartC(light)}  style={cardStyles}>
                  <Image alt="test" src={light.image} height="133"/>
                  <div>{light.partnumber}</div>
            </Container>
          </Card>
        );
      });

    let small = 375;
    let medium = 750;
    let large = 1024
    let responsive = 400
    let width = window.innerWidth
    if (width >= 900) {
      responsive = large
    } else if (width >= 700){
      responsive = medium
    } else {
      responsive = small
    }
    let responsiveUnitMapper = (
      <ImageMapper
            src={CorridorNoEM}
            width={responsive}
            imgWidth={1920}
            map={CORMAP}
            onClick={area => this.areaCheck(area)}
          />
    )

        return (
            <>
                <Container fluid className="unitContainer">
                     <div>
                        {responsiveUnitMapper}
                     </div>
                </Container>

                {/* Hallway Pendant */}
        <Modal
          show={this.state.showModalHP}
          onHide={this.handleCloseModalHP}
        >
          <Modal.Header closeButton>
            <Modal.Title>Hallway Pendant</Modal.Title>
          </Modal.Header>
          <Modal.Body><Row>{entryCard}</Row></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalHP}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
                {/* Hallway Ceiling Light */}
        <Modal
          show={this.state.showModalHL}
          onHide={this.handleCloseModalHL}
        >
          <Modal.Header closeButton>
            <Modal.Title>Hallway Ceiling</Modal.Title>
          </Modal.Header>
          <Modal.Body><Row>{entryCard}</Row></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalHL}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
                {/* Stairwell */}
        <Modal
          show={this.state.showModalSP}
          onHide={this.handleCloseModalSP}
        >
          <Modal.Header closeButton>
            <Modal.Title>Stairwell</Modal.Title>
          </Modal.Header>
          <Modal.Body><Row>{pendantCard}</Row></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalSP}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
            </>
        );
    }
}

export default Cooridor;