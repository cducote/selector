import React, { Component } from 'react';
import { Container, Card, Image, Row, Form, Col, Button } from 'react-bootstrap'


class Checkout extends Component {

  state = {
    lights: this.props.cart,
    editCount: {
      count: ''
    }
  }
  
  getLight = async () => {
    this.props.updateLight(this.state.editCount)
    // console.log(this.state.editCount)
  }
  // componentDidMount() {
  //   // const lightInCart = this.props.cart[0]
  //   // console.log(lightInCart)
  // }
  handleChange = (e, i) => {
    const lights = [ ...this.props.cart ]
    const editCount = { ...lights[i] } 
    editCount[e.target.name] = e.target.value
    this.setState({ editCount })
  }
  handleSubmit = async (e, i) => {
    e.preventDefault()
    const editCount = { ...this.state.editCount }
    editCount.name = this.props.cart[i]
    this.setState({ editCount })
    await this.getLight()
  }

    render() {
        const finalCart = this.props.cart
        const count = this.state.editCount.count
        const cartCard = finalCart.map((light, i) => {
            return (
              <Card key={i}>
                <Container>
                    <Row>
                      <Col>
                      <Image alt="test" src={light.image} height="100"/>
                      </Col>
                      <Col>
                      <div id="lightName">{light.partnumber}</div>
                      {/* <Button>Quantity</Button> */}
                      <Form onSubmit={this.handleSubmit} light={light}>
                        <Form.Control size='sm' type='text' name='count' value={count} onChange={e => this.handleChange(e, i)}/>
                        <Button variant="primary" type="submit">Submit</Button>
                      </Form>
                      </Col>
                      <Col>{light.count}</Col>
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