import React, { Component } from 'react';
import { Table } from 'react-bootstrap'

class SelectionTable extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                      
                        <th>Part Number</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                       
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                      
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                     
                        <td>Larry the Bird</td>
                        <td>Berb</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default SelectionTable;