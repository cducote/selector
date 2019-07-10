import React, { Component } from 'react';
import UnitOverlay from './UnitOverlay'
import { Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import UserModal from './UserModal'
import CheckoutPage from './CheckoutPage';
import styled from 'styled-components'

const Page = styled.div`
    background: grey;
    height: 1200px;
`

class Landing extends Component {

    state = {
        done: false,
        cartCount: this.props.currentUser.cart.length
    }
    handlePageChange = async () => {
        this.setState({ done: true })
    }
    
    updateCartCount = () => {
        this.setState({ cartCount: this.props.currentUser.cart.length })
    }
  
    render() {
        const done = this.state.done
        let page;
        if (done) {
            page =  <Page>
                        <CheckoutPage cart={this.props.currentUser.cart} updateLight={this.props.updateLight}/>
                    </Page>
        } else {
            page = <div className='main'>
                        <UnitOverlay updateCart={this.props.updateCart} currentUser={this.props.currentUser} updateCartCount={this.updateCartCount} updateCartCountNav={this.props.updateCartCountNav}/>
                        <UserModal updateUser={this.props.updateUser}/>
                        <Button variant='info' onClick={this.handlePageChange}><FaShoppingCart/> Checkout ({this.state.cartCount})</Button>
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