import React, { Component } from 'react';
import UnitOverlay from './UnitOverlay'
import Cooridor from './Cooridor'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import SelectionTable from './SelectionTable'

const StyledButton = styled(Button)`
    &&&{
        display: flex;
        margin-top: 20px;
        position: relative;
        bottom: 0;
        align-self: center;
        margin: auto;
       }
`

class Landing extends Component {

    state = {
        corridorSelection: false,
        finalPageShow: false,
        cartCount: this.props.currentUser.cart.length
    }
    

    handlePageChange = async () => {
        //handlePageChange now removes any dupes before page change
        const currentUser = this.props.currentUser
        const cartArray = currentUser.cart.filter((light,index) => {
            return index === currentUser.cart.findIndex(obj => {
            return JSON.stringify(obj) === JSON.stringify(light);
        });
    });
        currentUser.cart.length = 0
        currentUser.cart = cartArray
        this.setState({ corridorSelection: true })
    }
    
    handlePageChangeFinal = async ()=> {
        const currentUser = this.props.currentUser
        const cartArray = currentUser.cart.filter((light,index) => {
            return index === currentUser.cart.findIndex(obj => {
            return JSON.stringify(obj) === JSON.stringify(light);
        });
    });
        currentUser.cart.length = 0
        currentUser.cart = cartArray
        this.setState({ corridorSelection: false })
        this.setState({ finalPageShow: true })
    }
    updateCartCount = () => {
        this.setState({ cartCount: this.props.currentUser.cart.length })
    }

    printDocument = () => {
        window.print()
      }

    removeTheDupe = () => {
        const currentUser = this.props.currentUser
        const cartArray = currentUser.cart.filter((light,index) => {
            return index === currentUser.cart.findIndex(obj => {
            return JSON.stringify(obj) === JSON.stringify(light);
        });
    });
        currentUser.cart.length = 0
        currentUser.cart = cartArray
    }

    
      
    render() {
        const corridorSelection = this.state.corridorSelection
        const finalPage = this.state.finalPageShow
        let page;
        if (corridorSelection) {
            // 2
            page =  <div className='main'> 
                      <Cooridor  updateCart={this.props.updateCart} currentUser={this.props.currentUser} updateCartCount={this.updateCartCount} updateCartCountNav={this.props.updateCartCountNav}/>  
                      <StyledButton variant='info' onClick={this.handlePageChangeFinal}>Finished</StyledButton>
                    </div>
        
        } else if (finalPage){ 
            // 3
            page = <>
                    <SelectionTable cart={this.props.currentUser.cart}/>
                    <Button variant='info' onClick={this.printDocument}>PRINT</Button>
                   </>

        } else {
            // 1
            page = <div className='main'>
                    
                        <UnitOverlay updateCart={this.props.updateCart} currentUser={this.props.currentUser} updateCartCount={this.updateCartCount} updateCartCountNav={this.props.updateCartCountNav}/>
                        <StyledButton variant='info' onClick={this.handlePageChange}> Corridor Selection </StyledButton>

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