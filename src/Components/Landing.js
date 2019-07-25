import React, { Component } from 'react';
import UnitOverlay from './UnitOverlay'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import UserModal from './UserModal'
import CheckoutPage from './CheckoutPage';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const Page = styled.div`
    background: white;
    height: 100%;
`
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
        doneShopping: false,
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
        this.setState({ doneShopping: true })
    }
       
    updateCartCount = () => {
        this.setState({ cartCount: this.props.currentUser.cart.length })
    }

    printDocument = () => {
        const input = document.getElementById('print');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', -22, 0, 250, 300);
            pdf.save("download.pdf");
          })
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
        const doneShopping = this.state.doneShopping
        let page;
        if (doneShopping) {
            page =  <Page id='print'>
                        <p>Checkout</p>
                        <div>
                        <CheckoutPage cart={this.props.currentUser.cart} updateLight={this.props.updateLight}/>
                        </div>
                        <button onClick={this.printDocument}>Print</button>
                    </Page>
        } else {
            page = <div className='main'>
                    <h1>Selector</h1>
                        <UnitOverlay updateCart={this.props.updateCart} currentUser={this.props.currentUser} updateCartCount={this.updateCartCount} updateCartCountNav={this.props.updateCartCountNav}/>
                        <UserModal updateUser={this.props.updateUser}/>
                        <StyledButton variant='info' onClick={this.handlePageChange}><FaShoppingCart/> Checkout ({this.state.cartCount})</StyledButton>
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