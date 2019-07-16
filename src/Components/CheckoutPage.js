import React, { useState } from "react";
import styled from 'styled-components'
import {
  Container,
  Image,
  Row,
  Form,
  Col,
} from "react-bootstrap";

const StyledContainer = styled(Container)`
  &&& {
    background: white;
    border: 1px solid black;
  }
`
const StyledRow = styled(Row)`
  &&& {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  }
`
const StyledQty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.2em;
  font-weight: bold;
`

function Light({ index, light, changeQty }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    changeQty(index, value);
    setValue("");
  };

  return (
    <StyledContainer>
      <div className='paper'>
      <Row>
        <Col>
          <StyledRow>
          <Image alt="test" src={light.image} height="100" />
          <div id="lightName">{light.partnumber}</div>
          </StyledRow>
        </Col>
        <Col>
          <StyledQty>
          <Form onSubmit={handleSubmit} light={light}>
            <Form.Control
              size="sm"
              type="text"
              name="count"
              placeholder='enter quantity'
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </Form>
          </StyledQty>
        </Col>
        <Col>
          <StyledQty>
            {light.qty}
          </StyledQty>
        </Col>
      </Row>
      </div>  
    </StyledContainer>
   
  );
}


function CheckoutPage({ cart }) {
  console.log(cart);
  const [finalCart, setCart] = useState(cart);
  const changeQty = (index, qty) => {
    const newCart = [...cart];
    newCart[index].qty = qty;
    setCart(newCart);
  };

  // const printDocument = () => {
  //   const input = document.getElementById('print');
  //   html2canvas(input)
  //     .then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF();
  //       pdf.addImage(imgData, 'JPEG', 0, 0);
  //       // pdf.output('dataurlnewwindow');
  //       pdf.save("download.pdf");
  //     })
  // }

  return (
    <div>
      {finalCart.map((light, index) => (
        <Light key={index} index={index} light={light} changeQty={changeQty} />
      ))}
    </div>
  );
}

export default CheckoutPage;
