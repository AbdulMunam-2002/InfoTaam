import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function Drinks() {
  return (
    <div className='container mt-5'>
      <h3>Drinks</h3>
      <Table striped bordered hover className='text-center'>
        <thead>
          <tr>
            <th rowSpan={2}>S. no</th>
            <th rowSpan={2}>Item</th>
            <th colSpan={2}>Price</th>
          </tr>
          <tr>
            <th>SIBAian Cafe</th>
            <th>Central Cafe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Falsa Juice</td>
            <td>Rs. 120</td>
            <td>Rs. 120</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Apple Juice</td>
            <td>Rs. 150</td>
            <td>Rs. 150</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Orange Juice</td>
            <td>Rs. 150</td>
            <td>Rs. 150</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mango Shake</td>
            <td>Rs. 150</td>
            <td>Rs. 150</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Banana Shake</td>
            <td>Rs. 150</td>
            <td>Rs. 150</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Drinks;
