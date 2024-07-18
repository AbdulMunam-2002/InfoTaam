import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

function Lunch() {
  return (
    <>
      <Header/>
      <div className='container mt-5'>
        <h3>Lunch</h3>
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
              <td>Sabzi</td>
              <td>Rs. 120</td>
              <td>Rs. 120</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Daal/Haleem</td>
              <td>Rs. 120</td>
              <td>Rs. 120</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Chicken Quorma</td>
              <td>Rs. 230</td>
              <td>Rs. 150</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Chicken Biriyani</td>
              <td>Rs. 230</td>
              <td>Rs. 240</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Veg Biriyani</td>
              <td>Rs. 150</td>
              <td>Rs. 150</td>
            </tr>
            <tr>
              <td>6</td>
              <td>White rice with any saalan</td>
              <td>Rs. 150</td>
              <td>Rs. 150</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Chicken shashlik with fried rice</td>
              <td>Rs. 150</td>
              <td>-</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Hotshots with Fried rice</td>
              <td>Rs. 150</td>
              <td>-</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Chapati</td>
              <td>Rs. 15</td>
              <td>Rs. 15</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Lunch;
