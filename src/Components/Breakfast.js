import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Breakfast() {
  return (
    <>
      <div className='container mt-5'>
        <h1>Breakfast</h1>
        <Table striped bordered hover className='text-center'>
          <thead>
            <tr>
              <th rowSpan={2}>S. no</th>
              <th rowSpan={2}>Item</th>
              <th colSpan={2}>Complementary</th>
              <th colSpan={2}>Price</th>
            </tr>
            <tr>
              <th>SIBAian Cafe</th>
              <th>Central Cafe</th>
              <th>SIBAian Cafe</th>
              <th>Central Cafe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Tea</td>
              <td>-</td>
              <td>-</td>
              <td>Rs. 50</td>
              <td>Rs. 50</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Anda</td>
              <td>-</td>
              <td>-</td>
              <td>Rs. 50</td>
              <td>Rs. 60</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Paratha</td>
              <td>-</td>
              <td>-</td>
              <td>Rs. 50</td>
              <td>Rs. 60</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Puri</td>
              <td>Chana</td>
              <td>Chana, Aalu Tarkari and Halwa</td>
              <td>Rs. 50</td>
              <td>Rs. 80</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Breakfast;
