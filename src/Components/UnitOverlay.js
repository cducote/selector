import React, { Component } from "react";
import { Button, Modal, Container,Image, Card, Row } from "react-bootstrap";
import unit from "../Images/units/unit.png";
import ImageMapper from "react-image-mapper";
import ImageMap from "./ImageMap";
import entryLights from '../API/sampleEntry'
import kitchen from '../API/sampleKitchen'
import pendants from "../API/samplePendants"
import fans from '../API/sampleFans'
import vanity from '../API/sampleVanity'
import outdoorLights from '../API/sampleBalcony'
import _ from 'lodash'
import axios from 'axios'


let MAP = ImageMap;

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
    products: [],
    // productsAPI: [],
    selectedLight: null
  };
  componentDidMount() {
    this.getAllProducts()
  }
  
  getAllProducts = async ()=> { 
      const API_KEY = process.env.REACT_APP_API_KEY
      const response = await axios.get(`https://www.vineyardlighting.com/api/allProducts.php?key=${API_KEY}`)
      let obj = response.data
      this.setState({ 
        productsAPI: {
          lights: obj
        }
      })
      this.chunkArray()
    }

    chunkArray() {
      let allProducts = this.state.productsAPI.lights
      let grouped = _.groupBy(allProducts, 'use')
      let bar = grouped.bar
      let vanity = grouped.vanity
      let kitchen = grouped.stairs
      let shower = grouped['bedroom, closet, entry, hall, laundry, living, sho']
      let balcony = grouped.balcony.concat(grouped['balcony, corrdiorwall']).concat(grouped.balconyceiling)
      let hallway = grouped['bedroom, closet, entry, hall, laundry, living, sho'].concat(grouped['bedroom, closet, entry, hall, laundry, living'])
      let entry = grouped.entry.concat(grouped['bedroom, closet, entry, hall, laundry, living']).concat(grouped['bedroom, closet, entry, hall, laundry, living, sho'])
      let living = grouped['bedroom, living'].concat(grouped['bedroom, closet, entry, hall, laundry, living, sho']).concat(grouped['bedroom, closet, entry, hall, laundry, living'])
      let bedroom = grouped['bedroom, living'].concat(grouped['bedroom, closet, entry, hall, laundry, living, sho']).concat(grouped['bedroom, closet, entry, hall, laundry, living'])
      let closet = grouped['closet, laundry'].concat(grouped['bedroom, closet, entry, hall, laundry, living, sho']).concat(grouped['bedroom, closet, entry, hall, laundry, living'])
      this.setState({ Balcony: balcony })
      this.setState({ Living: living })
      this.setState({ Bedroom: bedroom })
      this.setState({ Bar: bar })
      this.setState({ Closet: closet })
      this.setState({ Hallway: hallway })
      this.setState({ Shower: shower })
      this.setState({ Kitchen: kitchen })
      this.setState({ Entry: entry })
      this.setState({ exHall: hallway })
      this.setState({ Stairs: kitchen })
      this.setState({ exWall: balcony })
      this.setState({ Vanity: vanity })
      }
 

  determineModal() {
    let areaId = this.state.areaClicked.id;
    if (areaId === 1) {
      this.handleShowModalShower();
    } else if (areaId === 2) {
      this.handleShowModalVanity();
    } else if (areaId === 3) {
      this.handleShowModalCloset();
    } else if (areaId === 4) {
      this.handleShowModalHall();
    } else if (areaId === 5) {
      this.handleShowModalBF();
    } else if (areaId === 6) {
      this.handleShowModalLaundry();
    } else if (areaId === 7) {
      this.handleShowModalBalcony();
    } else if (areaId === 8) {
      this.handleShowModalLF();
    } else if (areaId === 9) {
      this.handleShowModalBP();
    } else if (areaId === 10) {
      this.handleShowModalEntry();
    } else if (areaId === 11) {
      this.handleShowModalKitchen();
    }

  }

  areaCheck = async area => {
    await this.setState({ areaClicked: area });
    this.determineModal();
  };

  pushToCart = async light => {
    let areaClicked = this.state.areaClicked
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
      showModalBP: false,
      showModalLaundry: false
    });
    this.props.updateCartCount()
    this.props.updateCartCountNav()
    this.placeSpan(light, areaClicked)
    this.setState({ areaClicked: null })
  };
  placeSpan(light) {
    console.log(light)
    console.log(this.state.areaClicked)
    let imgSrc = light.image
    let spanCoords = this.state.areaClicked.scaledCoords
    this.setState({ selectedLight: light })
    this.setState({ products: [...this.state.products, {imgSrc, spanCoords} ]  })
  }

  handleCloseModalBF = async () => {
    this.setState({ showModalBF: false });
  };
  handleShowModalBF = async () => {
    this.setState({ showModalBF: true });
    console.log(this.props.lights)
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
  handleCloseModalLaundry = async () => {
    this.setState({ showModalLaundry: false });
  };
  handleShowModalLaundry = async () => {
    this.setState({ showModalLaundry: true });
  };

  render() {
    let cardStyles = {
      textAlign: 'center'
    }

    const selectedProduct = this.state.products.map((e, i) =>(
        <img key={i} 
          alt='x' 
          src={e.imgSrc} 
          style={{
            position: "absolute",
            zIndex: 2,
            left: `${e.spanCoords[0] + 38}px`,
            top: `${e.spanCoords[1] + 10}px`,
            // width: `15%`,
            height: `15%`,
            pointerEvents: "none"
          }}
          />
      
    ))

    const pendantCard = pendants.map((light, i) => {
      return (
        <Card key={i}>
          <Container onClick={() => this.pushToCart(light)}  style={cardStyles}>
                <Image alt="test" src={light.image} height="133"/>
                <div className='partNumber'>{light.partnumber}</div>
          </Container>
        </Card>
      );
    });
    const entryCard = entryLights.map((light, i) => {
      return (
        <Card key={i}>
          <Container onClick={() => this.pushToCart(light)}  style={cardStyles}>
                <Image alt="test" src={light.image} height="133"/>
                <div>{light.partnumber}</div>
          </Container>
        </Card>
      );
    });
    const kitchenCard = kitchen.map((light, i) => {
      return (
        <Card key={i}>
          <Container onClick={() => this.pushToCart(light)}  style={cardStyles}>
                <Image alt="test" src={light.image} height="133"/>
                <div>{light.partnumber}</div>
          </Container>
        </Card>
      );
    });
    const fanCard = fans.map((light, i) => {
      return (
        <Card key={i}>
          <Container onClick={() => this.pushToCart(light)} style={cardStyles}>
                <Image alt="test" src={light.image} height="133"/>
                <div>{light.partnumber}</div>
          </Container>
        </Card>
      );
    });
    const balconyCard = outdoorLights.map((light, i) => {
      return (
        <Card key={i}>
          <Container onClick={() => this.pushToCart(light)}  style={cardStyles}>
                <Image alt="test" src={light.image} height="133"/>
                <div>{light.partnumber}</div>
          </Container>
        </Card>
      );
    });
    const vanityCard = vanity.map((light, i) => {
      return (
        <Card key={i}>
          <Container onClick={() => this.pushToCart(light)}  style={cardStyles}>          
                <Image alt="test" src={light.image} height="133"/>
                <div>{light.partnumber}</div>
          </Container>
        </Card>
      );
    });
    
    
    let small = 360;
    let medium = 725;
    let large = 1140
    let responsive = 400
    let rotateStyle = {}
    let width = window.innerWidth
    if (width >= 900) {
      responsive = large
    } else if (width >= 700){
      responsive = medium
    } else {
      responsive = small
      // rotateStyle = { transform:  [{ rotate: '90deg'}]}
    }
    let responsiveUnitMapper = (
      <ImageMapper
            style={rotateStyle}
            src={unit}
            width={responsive}
            imgWidth={1920}
            map={MAP}
            onClick={area => this.areaCheck(area)}
          />
          
    )
    
    return (
      <>
       
        <Container className="unitContainer">
            
              {responsiveUnitMapper}
              {selectedProduct}
            
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
          <Modal.Body>
            <Row>
              {fanCard}
            </Row>
         
          
          </Modal.Body>
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
          <Modal.Body>
            <Row>
              {fanCard} 
            </Row>
          </Modal.Body>
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
          <Modal.Body>
            <Row>{balconyCard}</Row>
          </Modal.Body>
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
          <Modal.Body><Row>{entryCard}</Row></Modal.Body>
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
          <Modal.Body><Row>{entryCard}</Row></Modal.Body>
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
          <Modal.Body><Row>{entryCard}</Row></Modal.Body>
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
          <Modal.Body><Row>{vanityCard}</Row></Modal.Body>
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
          <Modal.Body><Row>{entryCard}</Row></Modal.Body>
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
          <Modal.Body><Row>{kitchenCard}</Row></Modal.Body>
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
          <Modal.Body><Row>{pendantCard}</Row></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalBP}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Laundry Modal */}
        <Modal show={this.state.showModalLaundry} onHide={this.handleCloseModalLaundry}>
          <Modal.Header closeButton>
            <Modal.Title>Laundry</Modal.Title>
          </Modal.Header>
          <Modal.Body><Row>{entryCard}</Row></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModalLaundry}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UnitOverlay;
