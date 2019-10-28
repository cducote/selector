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
  handleResize = (event) => {
    const S = 355;
    const M = 725;
    const L = 950;
    const XL = 1140;
    let responsive = 400;
    let xOffset = 25;
    let yOffset = 10;
    let width = window.innerWidth;
    switch(true) {
        case width >= 1200:
            responsive = XL;
            xOffset = 25;
            yOffset = 10;
            break;
        case width >= 900:
            responsive = L;
            xOffset = 25;
            yOffset = 10;
            break;
        case width >= 700:
            responsive = M;
            xOffset = 25;
            yOffset = 10;
            break;
        default:
            responsive = S;
            xOffset = 25;
            yOffset = 10;
    }
    this.setState({ responsive });
    this.setState({ xOffset })
    this.setState({ yOffset })
    let num = responsive/1920
    let x = num.toFixed(5)
    this.setState({ scaled: x })
    // console.log(x)
}

  componentDidMount = async () => {
    await this.getAllProducts()
    window.addEventListener('resize', this.handleResize);
    let width = window.innerWidth
    if (width >= 1200) {
      this.setState({xOffset: 25})
      this.setState({yOffset: 10})
      this.setState({scaled: 0.59375})
    } else if (width >= 900) {
      this.setState({xOffset: 25})
      this.setState({yOffset: 10})
      this.setState({scaled: 0.49479})
    } else if (width >= 700){
      this.setState({xOffset: 25})
      this.setState({yOffset: 10})
      this.setState({scaled: 0.37760})
    } else {
      this.setState({xOffset: 25})
      this.setState({yOffset: 10})
      this.setState({scaled: 0.18490})
    }
  }
  
  componentWillUnmount = async () => {
    window.removeEventListener('resize', this.handleResize);
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
    if (areaId === 12) {
      this.handleShowModalSP();
    } else if (areaId === 13) {
      this.handleShowModalHP();
    } else if (areaId === 14) {
      this.handleShowModalHL();
      }
    }

  areaCheck = async area => {
    await this.setState({ areaClicked: area });
    this.determineModal();
  };

  pushToCartC = async light => {
    let areaId = this.state.areaClicked.id
    let areaClicked = this.state.areaClicked
    const cart2 = this.props.currentUser.cart
    let updatedLight = {...light, areaId}
    await cart2.push(updatedLight);
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
  placeSpan(light) {
    let selectedCorrLights = this.props.corridorLights
    let imgSrc = light.image
    let coords = this.state.areaClicked.coords
    let area = this.state.areaClicked.id
    let use = light.use
    let newLight = Object.assign(light, {coords, area})
    this.setState({ selectedLight: light })
    this.setState({ products: [...this.state.products, {imgSrc, coords, area, use} ]  })
    selectedCorrLights.push(newLight)
  }
  clearSquareC = async => {
    let areaClicked = this.state.areaClicked.id
    let selectedLights = this.props.corridorLights
    // attempt at clear button removing light from cart *not working yet*
    let cart = this.props.currentUser.cart
    _.remove(cart, (i) => {
      return i.areaId === areaClicked
    })
    // Removes light from products array
    _.remove(selectedLights, (n) => {
      return n.area === areaClicked
  })
    this.setState({
      showModalHP: false,
      showModalHL: false,
      showModalSP: false
    });
    this.setState({ areaClicked: null })
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

      const selectedProduct = this.props.corridorLights.map((e, i) =>(
        
        <img key={i} 
          alt='x' 
          src={e.image} 
          style={{
            position: "absolute",
            zIndex: 2,
            left: e.coords[0]*this.state.scaled + this.state.xOffset,
            top: e.coords[1]*this.state.scaled + this.state.yOffset,
            height: `15%`,
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
    let S = 355;
    let M = 725;
    let L = 950
    let XL = 1140
    let responsive = 400
    let width = window.innerWidth
    if (width >= 1200) {
      responsive = XL
    } else if (width >= 900) {
      responsive = L
    } else if (width >= 700){
      responsive = M
    } else {
      responsive = S
    }
  
    // let small = 375;
    // let medium = 750;
    // let large = 1024
    // let responsive = 400
    // let width = window.innerWidth
    // if (width >= 900) {
    //   responsive = large
    // } else if (width >= 700){
    //   responsive = medium
    // } else {
    //   responsive = small
    // }
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
            <Button variant="secondary" onClick={this.clearSquareC}>
              Clear
            </Button>
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
            <Button variant="secondary" onClick={this.clearSquareC}>
              Clear
            </Button>
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
            <Button variant="secondary" onClick={this.clearSquareC}>
              Clear
            </Button>
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