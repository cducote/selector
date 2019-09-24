import React, { Component } from 'react';
import UnitOverlay from './UnitOverlay'
import Cooridor from './Cooridor'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import UserModal from './UserModal'
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
            page =  <> 
                    <h1>Selector</h1>
                      <Cooridor  updateCart={this.props.updateCart} currentUser={this.props.currentUser} updateCartCount={this.updateCartCount} updateCartCountNav={this.props.updateCartCountNav}/>  
                      <Button onClick={this.handlePageChangeFinal}>FINAL</Button>
                    </>
        
        } else if (finalPage){
            page = <>
                    <h1>Final Page</h1>
                    <SelectionTable currentUser={this.props.currentUser}/>
                   </>

        } else {
            page = <div className='main'>
                    <h1>Selector</h1>
                        <UnitOverlay updateCart={this.props.updateCart} currentUser={this.props.currentUser} updateCartCount={this.updateCartCount} updateCartCountNav={this.props.updateCartCountNav}/>
                        <UserModal updateUser={this.props.updateUser}/>
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