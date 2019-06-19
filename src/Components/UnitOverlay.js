import React, { Component } from 'react';
import {Button, Modal, Container, Card} from 'semantic-ui-react'
import unit from '../Images/units/unit.png'
import ImageMapper from 'react-image-mapper'
import ImageMap from './ImageMap'
import sampledata from './sampledata'
import ModalBF from './Modals/ModalBF'
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
        console.log()
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
        <div>
        <div className='unitOverlay'>
            <ImageMapper src={unit} width={1440} imgWidth={1920} map={MAP} 
                        onClick={(area)=> this.areaCheck(area)} 
                        />
            <ModalBF/>
        </div>
                    
        <div>
                <Button variant="danger" href='/checkout'>All Done</Button>
        </div>
        </div>
        );
    }
}

export default UnitOverlay;
