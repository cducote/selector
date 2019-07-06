import React, { useState } from 'react'
import { Container, Card, Image, Row, Form, Col, Button } from 'react-bootstrap'

function Light({ index, light, changeQty }) {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        changeQty(index, value)
        setValue('')
    }
    return(
        <Container>
        <Row>
          <Col>
          <Image alt="test" src={light.image} height="100"/>
          </Col>
          <Col>
          <div id="lightName">{light.partnumber}</div>
          {/* <Button>Quantity</Button> */}
          <Form onSubmit={handleSubmit} light={light}>
            <Form.Control size='sm' type='text' name='count' value={value} onChange={e => setValue(e.target.value)}/>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
          </Col>
          <Col>{light.qty}</Col>
        </Row>
    </Container>
    )
}


function CheckoutPage({ cart }) {
    console.log(cart)
    const [finalCart, setCart] = useState(cart)
    const changeQty = (index, qty) => {
    const newCart = [...cart]
    newCart[index].qty = qty
    setCart(newCart)
      }
    
        return (
            <div>
                {finalCart.map((light, index) =>(
                    <Light key={index} index={index} light={light} changeQty={changeQty}/>
                ))}
            </div>
        )

}
    
export default CheckoutPage