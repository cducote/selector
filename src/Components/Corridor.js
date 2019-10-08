import React, { Component } from 'react';
import {Container, Card, Image, Modal, Row, Button} from "react-bootstrap";
import ImageMapper from "react-image-mapper";
import CImageMap from './CImageMap'
import CorridorNoEM from '../Images/corridor/CorridorNoEM.png'
import _ from 'lodash'
import axios from 'axios'

let CORMAP = CImageMap

class Cooridor extends Component {
  state = {
    areaClicked: 0,
    showModalHP: false,
    showModalHL: false,
    showModdalSP: false,
    products: [],
    selectedProduct: null,
    exHall: [],
    exWall: [],
    Stairs: []
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

  componentDidMount = async () => {
    await this.getAllProducts()
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
    let areaClicked = this.state.areaClicked
    const cart2 = this.props.currentUser.cart
    await cart2.push(light);
    this.setState({
      showModalHP: false,
      showModalHL: false,
      showModalSP: false
    });
    this.props.updateCartCount()
    this.props.updateCartCountNav()
    this.placeSpan(light, areaClicked)
    await this.setState({ areaClicked: null })
  }

  placeSpan(light, areaClicked) {
    console.log(light.image)
    console.log(areaClicked)
    let imgSrc = light.image
    let spanCoords = this.state.areaClicked.scaledCoords
    this.setState({ selectedLight: light })
    this.setState({ products: [...this.state.products, {imgSrc, spanCoords} ]  })
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
        textAlign: 'center',
      }

      const selectedProduct = this.state.products.map((e, i) =>(
        <img key={i} 
          alt='x' 
          src={e.imgSrc} 
          style={{
            position: "absolute",
            zIndex: 2,
            left: `${e.spanCoords[0] + 25}px`,
            top: `${e.spanCoords[1] + 10}px`,
            width: 100,
            height: 100,
            pointerEvents: "none"
          }}
          />
      
    ))
      const wallCard = this.state.exWall.map((light, i) => {
        return (
          <Card key={i}>
            <Container onClick={() => this.pushToCartC(light)}  style={cardStyles}>
                  <Image alt="test" src={light.image} height="133"/>
                  <div className='partNumber'>{light.partnumber}</div>
            </Container>
          </Card>
        );
      });
      const hallCard = this.state.exHall.map((light, i) => {
        return (
          <Card key={i}>
            <Container onClick={() => this.pushToCartC(light)}  style={cardStyles}>
                  <Image alt="test" src={light.image} height="133"/>
                  <div className='partNumber'>{light.partnumber}</div>
            </Container>
          </Card>
        );
      });
      const stairsCard = this.state.Stairs.map((light, i) => {
        return (
          <Card key={i}>
            <Container onClick={() => this.pushToCartC(light)}  style={cardStyles}>
                  <Image alt="test" src={light.image} height="133"/>
                  <div className='partNumber'>{light.partnumber}</div>
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
                <Container className="unitContainerC">
                     <div>
                        {responsiveUnitMapper}
                        {selectedProduct}
                     </div>
                    
                </Container>
               

                {/* Hallway Wall */}
        <Modal
          show={this.state.showModalHP}
          onHide={this.handleCloseModalHP}
        >
          <Modal.Header closeButton>
            <Modal.Title>Hallway Pendant</Modal.Title>
          </Modal.Header>
          <Modal.Body><Row>{wallCard}</Row></Modal.Body>
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
          <Modal.Body><Row>{hallCard}</Row></Modal.Body>
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
          <Modal.Body><Row>{stairsCard}</Row></Modal.Body>
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