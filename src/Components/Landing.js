import React, { Component } from 'react';
import UnitOverlay from './UnitOverlay'
import Corridor from './Corridor'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import SelectionTable from './SelectionTable'
import { FaChevronRight, FaChevronLeft, FaPrint } from 'react-icons/fa'

const StyledButton = styled(Button)`
    &&&{
        display: flex;
        margin-top: 20px;
        position: relative;
        bottom: 0;
        align-self: center;
        justify-content: center;
        align-items: center;
       }
`

class Landing extends Component {

    state = {
        selectedUnitLights: [],
        selectedCorridorLights: [],
        corridorSelection: false,
        finalPageShow: false,
        hideButtons: false,
        nullBox: null,
        cartCount: this.props.currentUser.cart.length
    }
    
    handlePageChange = async () => {
        //handlePageChange now removes any dupes before page change
        const currentUser = this.props.currentUser
        const cart = this.props.currentUser.cart
        // console.log(cart)
        const cartArray = currentUser.cart.filter((light,index) => {
            return index === currentUser.cart.findIndex(obj => {
            return JSON.stringify(obj) === JSON.stringify(light);
        });
    });
        currentUser.cart = cartArray
        // Removes old selected light and replaces it with new light in same square
        const newCartArray = cart.filter((light, i, array) => {
            return !array.slice(i + 1).some(obj => obj.areaId === light.areaId);
          })
        //   console.log(newCartArray)
        currentUser.cart = newCartArray      

        
        this.setState({ corridorSelection: true })
    }

    handleGoBack = async () => {
       this.setState({ corridorSelection: false }) 
    }

    handleGoBack2 = async () => {
        this.setState({ corridorSelection: true })
        this.setState({ finalPageShow: false }) 
     }
    
    handlePageChangeFinal = async ()=> {
        const cart = this.props.currentUser.cart
        const currentUser = this.props.currentUser
        const cartArray = currentUser.cart.filter((light,index) => {
            return index === currentUser.cart.findIndex(obj => {
            return JSON.stringify(obj) === JSON.stringify(light);
        });
    });
        currentUser.cart = cartArray 
        // Removes old selected light and replaces it with new light in same square
        const newCartArray = cart.filter((light, i, array) => {
            return !array.slice(i + 1).some(obj => obj.areaId === light.areaId);
          })
        //   console.log(newCartArray)
        currentUser.cart = newCartArray


        this.setState({ corridorSelection: false })
        this.setState({ finalPageShow: true })
    }
    updateCartCount = () => {
        this.setState({ cartCount: this.props.currentUser.cart.length })
    }

    printDocument = () => {
        this.setState({ hideButtons: true })
        setTimeout(() => { window.print() }, 1000);
      }

    render() {
        const corridorSelection = this.state.corridorSelection
        const finalPage = this.state.finalPageShow
        const hideButtons = this.state.hideButtons
        let page;
        let buttonBox = <div className='buttonBox'>
                            <StyledButton variant='secondary' onClick={this.handleGoBack2}> <FaChevronLeft/>&nbsp;Back</StyledButton>&emsp;
                            <StyledButton variant='secondary' onClick={this.printDocument}>Print&nbsp;<FaPrint/></StyledButton>
                        </div>
        if (hideButtons){
            buttonBox = <div>Thank you!</div>
        }
        if (corridorSelection) {
            // 2
            page =  <div className='main'> 
                      <Corridor  
                        updateCart={this.props.updateCart} 
                        currentUser={this.props.currentUser} 
                        updateCartCount={this.updateCartCount}
                        updateCartCountNav={this.props.updateCartCountNav}
                        corridorLights={this.state.selectedCorridorLights}
                         />  
                      <div className='buttonBox'>
                        <StyledButton variant='secondary' onClick={this.handleGoBack}><FaChevronLeft/>&nbsp;Back</StyledButton>&emsp;
                        <StyledButton variant='secondary' onClick={this.handlePageChangeFinal}>Summary&nbsp;<FaChevronRight/></StyledButton>
                      </div>
                    </div>
        } else if (finalPage){ 
            // 3
            page = <>
                    <SelectionTable cart={this.props.currentUser.cart}/>
                    <div>
                    {buttonBox}
                    </div>
                   </>
        } else {
            // 1
            page = <div className='main'>
                    
                        <UnitOverlay 
                            updateCart={this.props.updateCart} 
                            currentUser={this.props.currentUser} 
                            updateCartCount={this.updateCartCount} 
                            updateCartCountNav={this.props.updateCartCountNav} 
                            unitLights={this.state.selectedUnitLights}
                            />
                        <div className='buttonBox'>
                            <StyledButton variant='secondary' onClick={this.handlePageChange}>
                               To Corridor Selection&nbsp;
                                <FaChevronRight/> 
                            </StyledButton>
                        </div>
                   </div>
        }
        return (
            <>
            {page}
            </>
        );
    }
}

export default Landing;