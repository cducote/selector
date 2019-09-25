import React, { Component } from 'react';
import UnitOverlay from './UnitOverlay'
import Cooridor from './Cooridor'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import SelectionTable from './SelectionTable'
// import CheckoutPage from './CheckoutPage';
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'

const StyledButton = styled(Button)`
    &&&{
        margin-top: 20px;
        position: fixed;
        bottom: 0;
        align-self: center;  
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

    // printDocument = () => {
    //     const input = document.getElementById('print');
    //     html2canvas(input)
    //       .then((canvas) => {
    //         const imgData = canvas.toDataURL('image/png');
    //         const pdf = new jsPDF();
    //         pdf.addImage(imgData, 'JPEG', -22, 0, 250, 300);
    //         pdf.save("download.pdf");
    //       })
    //   }

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
            page =  <div className='main'> 
                   
                      <Cooridor  updateCart={this.props.updateCart} currentUser={this.props.currentUser} updateCartCount={this.updateCartCount} updateCartCountNav={this.props.updateCartCountNav}/>  
                      <Button onClick={this.handlePageChangeFinal}>FINAL</Button>
                    </div>
        
        } else if (finalPage){
            page = <>
                   
                    <SelectionTable cart={this.props.currentUser.cart}/>
                   </>

        } else {
            page = <div className='main'>
                    
                        <UnitOverlay updateCart={this.props.updateCart} currentUser={this.props.currentUser} updateCartCount={this.updateCartCount} updateCartCountNav={this.props.updateCartCountNav}/>
                        <StyledButton variant='info' onClick={this.handlePageChange}> Cooridor Selection </StyledButton>

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