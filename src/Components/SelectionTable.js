import React, { useState } from 'react';
import { Table, Image, Form, } from 'react-bootstrap'

    function Light({ index, light, changeQty }) {
        const [value, setValue] = useState("");
      
        const handleSubmit = e => {
          e.preventDefault();
          changeQty(index, value);
          setValue("");
        };
      
        return (

                    <tr>
                        <td><Image alt='light' src={light.image} height="50"/></td>
                        <td>{light.partnumber}</td>
                        <td>
                            <Form onSubmit={handleSubmit} light={light}>
                                <Form.Control 
                                    size='sm'
                                    md="2"
                                    type='text'
                                    name='count'
                                    placeholder='enter qty'
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                />
                            </Form>
                        </td>
                        <td>{light.qty}</td>
                    </tr>
        );
      }

      function SelectionTable({ cart }) {
        console.log(cart);
        const [finalCart, setCart] = useState(cart);
        const changeQty = (index, qty) => {
          const newCart = [...cart];
          newCart[index].qty = qty;
          setCart(newCart);
        };

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Light Pic</th>
                        <th>Part Number</th>
                        <th colSpan="2">Qty</th>
                        
                    </tr>
                    </thead>
                    <tbody>
              {finalCart.map((light, index) => ( 
                 <Light key={index} index={index} light={light} changeQty={changeQty} />
               ))}
               </tbody>
            </Table>
          );
        }


export default SelectionTable;