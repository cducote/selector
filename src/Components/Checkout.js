import React, { Component } from 'react';
import { Container, Card, Image, Row, Form, Button } from 'react-bootstrap'

class Checkout extends Component {

  state = {
    lights: this.props.cart,
    editCount: {
      count: ''
    }
  }
  
  getLight = async () => {
    this.props.updateLight(this.state.editCount.count)
    console.log(this.state.editCount)
  }
  componentDidMount() {
    const lightInCart = this.props.cart[0]
    console.log(lightInCart)
  }
  handleChange = (e) => {
    const lights = [ ...this.props.cart ]
    const editCount = { ...lights }
    editCount[e.target.count] = e.target.value
    this.setState({ editCount })
    console.log()
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const editCount = { ...this.state.editCount }
    this.setState({ editCount })
    await this.getLight()
  }

    render() {
        const finalCart = this.props.cart
        const cartCard = finalCart.map((light, i) => {
            return (
              <Card key={i}>
                <Container>
                    <Row>
                      <Image alt="test" src={light.image} height="50"/>
                      <div id="lightName">{light.partnumber}</div>
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Control size='sm' type='text' name='count' value={this.state.editCount.count} onChange={this.handleChange}/>
                        <Button variant="primary" type="submit">Submit</Button>
                      </Form>
                      
                    </Row>
                </Container>
              </Card>
            );
          });
        return (
            <div>
                <h1>Checkout Page</h1>
                <div>
                    <h3>You have selected...</h3>
                    {cartCard}
                </div>
            </div>
        );
    }
}

export default Checkout;