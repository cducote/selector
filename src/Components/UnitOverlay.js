import React, { Component } from "react";
import { Button, Modal, Container,Image, Card, Row, Col } from "react-bootstrap";
import unit from "../Images/units/unit.png";
// import NothingHere from './NothingHere'
import ImageMapper from "react-image-mapper";
import ImageMap from "./ImageMap";
// import sampledata from "../API/sampledata";
// import bulbs from "../API/sampleBulbs";
import entryLights from '../API/sampleEntry'
import kitchen from '../API/sampleKitchen'
import pendants from "../API/samplePendants"
import fans from '../API/sampleFans'
import vanity from '../API/sampleVanity'
import outdoorLights from '../API/sampleBalcony'
import Swal from 'sweetalert2'
// import axios from 'axios'

let MAP = ImageMap;
// let KEY = NothingHere

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
    products: []
  };

  // componentDidMount() {
  //     this.getAllProducts()
  // }
  // getAllProducts = async ()=> {
  //     const response = await axios.get("../allProducts.json")
  //     this.setState({ products: response.data })
  //     console.log(response.data)
  // }
  // getAllProducts = async ()=> {
  //   this.setState({products: BULBS})
  // }

  determineModal() {
    let areaId = this.state.areaClicked;
    if (areaId === 1) {
      this.handleShowModalBF();
    } else if (areaId === 2) {
      this.handleShowModalLF();
    } else if (areaId === 3) {
      this.handleShowModalBalcony();
    } else if (areaId === 4) {
      this.handleShowModalCloset();
    } else if (areaId === 5) {
      this.handleShowModalHall();
    } else if (areaId === 6) {
      this.handleShowModalShower();
    } else if (areaId === 7) {
      this.handleShowModalKitchen();
    } else if (areaId === 8) {
      this.handleShowModalVanity();
    } else if (areaId === 9) {
      this.handleShowModalBP();
    } else if (areaId === 10) {
      this.handleShowModalEntry();
    }
  }

  areaCheck = async area => {
    await this.setState({ areaClicked: area.id });
    this.determineModal();
    // console.log(area.coords);
  };

  pushToCart = async light => {
    const cart = this.props.currentUser.cart
    await cart.push(light);
    this.setState({
      showModalBF: false,
      showModalLF: false,
      showModalBalcony: false,
      showModalCloset: false,
      showModalHall: false,
      showModalShower: false,
      showModalVanity: false,
      showModalEntry: false,
      showModalKitchen: false,
      showModalBP: false
    });
    console.log(light.partnumber + " added to cart");
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your fixture has been saved',
      showConfirmButton: false,
      timer: 1400
    })
  };

  // cartShifter = async light => {
  //   const parentCart = this.props.currentUser.cart
  //   console.log(newCart)
  // }

  handleCloseModalBF = async () => {
    this.setState({ showModalBF: false });
  };
  handleShowModalBF = async () => {
    this.setState({ showModalBF: true });
  };
  handleCloseModalLF = async () => {
    this.setState({ showModalLF: false });
  };
  handleShowModalLF = async () => {
    this.setState({ showModalLF: true });
  };
  handleCloseModalBalcony = async () => {
    this.setState({ showModalBalcony: false });
  };
  handleShowModalBalcony = async () => {
    this.setState({ showModalBalcony: true });
  };
  handleCloseModalCloset = async () => {
    this.setState({ showModalCloset: false });
  };
  handleShowModalCloset = async () => {
    this.setState({ showModalCloset: true });
  };
  handleCloseModalHall = async () => {
    this.setState({ showModalHall: false });
  };
  handleShowModalHall = async () => {
    this.setState({ showModalHall: true });
  };
  handleCloseModalShower = async () => {
    this.setState({ showModalShower: false });
  };
  handleShowModalShower = async () => {
    this.setState({ showModalShower: true });
  };
  handleCloseModalVanity = async () => {
    this.setState({ showModalVanity: false });
  };
  handleShowModalVanity = async () => {
    this.setState({ showModalVanity: true });
  };
  handleCloseModalEntry = async () => {
    this.setState({ showModalEntry: false });
  };
  handleShowModalEntry = async () => {
    this.setState({ showModalEntry: true });
  };
  handleCloseModalKitchen = async () => {
    this.setState({ showModalKitchen: false });
  };
  handleShowModalKitchen = async () => {
    this.setState({ showModalKitchen: true });
  };
  handleCloseModalBP = async () => {
    this.setState({ showModalBP: false });
  };
  handleShowModalBP = async () => {
    this.setState({ showModalBP: true });
  };

  render() {
    // const lightCard = bulbs.map((light, i) => {
    //   return (
    //     <Card key={i}>
    //       <Container onClick={() => this.pushToCart(light)}>
    //         <Row>
    //           <Col>
    //             <Image alt="test" src={light.image} height="150"/>

    //             <div id="lightName">{light.partnumber}</div>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </Card>
    //   );
    // });
    const pendantCard = pendants.map((light, i) => {
      return (
        <Card key={i}>
          <Container onClick={() => this.pushToCart(light)}>
            <Row>
              <Col>
                <Image alt="test" src={light.image} height="150"/>

                <div id="lightName">{light.partnumber}</div>
              </Col>
            </Row>
          </Container>
        </Card>
      );
    });
    const entryCard = entryLights.map((light, i) => {
      return (
        <Card key={i}>
          <Container onClick={() => this.pushToCart(light)}>
            <Row>
              <Col>
                <Image alt="test" src={light.image} height="150"/>

                <div id="lightName">{light.partnumber}</div>
              </Col>
            </Row>
          </Container>
        </Card>
      );
    });
    const kitchenCard = kitchen.map((light, i) => {
      return (
        <Card key={i}>
          <Container onClick={() => this.pushToCart(light)}>
            <Row>
              <Col>
                <Image alt="test" src={light.image} height="150"/>

                <div id="lightName">{light.partnumber}</div>
              </Col>
            </Row>
          </Container>
        </Card>
      );
    });
    const fanCard = fans.map((light, i) => {
      return (
        <Card key={i}>
          <Container onClick={() => this.pushToCart(light)}>
            <Row>
              <Col>
                <Image alt="test" src={light.image} height="150"/>

                <div id="lightName">{light.partnumber}</div>
              </Col>
            </Row>
          </Container>
        </Card>
      );
    });
    const balconyCard = outdoorLights.map((light, i) => {
      return (
        <Card key={i}>
          <Container onClick={() => this.pushToCart(light)}>
            <Row>
              <Col>
                <Image alt="test" src={light.image} height="150"/>

                <div id="lightName">{light.partnumber}</div>
              </Col>
            </Row>
          </Container>
        </Card>
      );
    });
    const vanityCard = vanity.map((light, i) => {
      return (
        <Card key={i}>
          <Container onClick={() => this.pushToCart(light)}>
            <Row>
              <Col>
                <Image alt="test" src={light.image} height="150"/>

                <div id="lightName">{light.partnumber}</div>
              </Col>
            </Row>
          </Container>
        </Card>
      );
    });

    return (
      <>
        <Container fluid className="unitContainer">
          <ImageMapper
            src={unit}
            width={800}
            imgWidth={1920}
            map={MAP}
            onClick={area => this.areaCheck(area)}
          />
        </Container>
        {/* Bed Fan */}
        <Modal
          className="BedFan"
          show={this.state.showModalBF}
          onHide={this.handleCloseModalBF}
        >
          <Modal.Header closeButton>
            <Modal.Title>Bed Room</Modal.Title>
          </Modal.Header>
          <Modal.Body>{fanCard}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalBF}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Living Room Fan */}
        <Modal show={this.state.showModalLF} onHide={this.handleCloseModalLF}>
          <Modal.Header closeButton>
            <Modal.Title>Living Room</Modal.Title>
          </Modal.Header>
          <Modal.Body>{fanCard}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalLF}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Balcony Modal */}
        <Modal
          show={this.state.showModalBalcony}
          onHide={this.handleCloseModalBalcony}
        >
          <Modal.Header closeButton>
            <Modal.Title>Balcony</Modal.Title>
          </Modal.Header>
          <Modal.Body>{balconyCard}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalBalcony}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Closet */}
        <Modal
          show={this.state.showModalCloset}
          onHide={this.handleCloseModalCloset}
        >
          <Modal.Header closeButton>
            <Modal.Title>Closet</Modal.Title>
          </Modal.Header>
          <Modal.Body>{entryCard}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalCloset}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Hallway */}
        <Modal
          show={this.state.showModalHall}
          onHide={this.handleCloseModalHall}
        >
          <Modal.Header closeButton>
            <Modal.Title>Hallway</Modal.Title>
          </Modal.Header>
          <Modal.Body>{entryCard}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalHall}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Shower */}
        <Modal
          show={this.state.showModalShower}
          onHide={this.handleCloseModalShower}
        >
          <Modal.Header closeButton>
            <Modal.Title>Shower</Modal.Title>
          </Modal.Header>
          <Modal.Body>{entryCard}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalShower}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Vanity */}
        <Modal
          show={this.state.showModalVanity}
          onHide={this.handleCloseModalVanity}
        >
          <Modal.Header closeButton>
            <Modal.Title>Vanity</Modal.Title>
          </Modal.Header>
          <Modal.Body>{vanityCard}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalVanity}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Entry Modal */}
        <Modal
          show={this.state.showModalEntry}
          onHide={this.handleCloseModalEntry}
        >
          <Modal.Header closeButton>
            <Modal.Title>Entryway</Modal.Title>
          </Modal.Header>
          <Modal.Body>{entryCard}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalEntry}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Kitchen Modal */}
        <Modal
          show={this.state.showModalKitchen}
          onHide={this.handleCloseModalKitchen}
        >
          <Modal.Header closeButton>
            <Modal.Title>Kitchen</Modal.Title>
          </Modal.Header>
          <Modal.Body>{kitchenCard}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalKitchen}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Bar Pendant Modal */}
        <Modal show={this.state.showModalBP} onHide={this.handleCloseModalBP}>
          <Modal.Header closeButton>
            <Modal.Title>Bar Pendant</Modal.Title>
          </Modal.Header>
          <Modal.Body>{pendantCard}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalBP}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UnitOverlay;
