import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import ImageMapper from "react-image-mapper";
import entryLights from '../API/sampleEntry'
import outdoorLights from '../API/sampleBalcony'
import CImageMap from './CImageMap'
import CorridorNoEM from '../Images/corridor/CorridorNoEM.png'

let CORMAP = CImageMap

class Cooridor extends Component {
    render() {

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
            </>
        );
    }
}

export default Cooridor;