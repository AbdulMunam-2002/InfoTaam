import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Snacks() {
  return (
    <>
      <div className='container mt-5'>
        <h1>Snacks</h1>
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
              <td>Veg Samosa</td>
              <td>Rs. 30</td>
              <td>Rs. 30</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Chicken Samosa</td>
              <td>Rs. 30</td>
              <td>Rs. 30</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Spring roll</td>
              <td>Rs. 50</td>
              <td>Rs. 50</td>
            </tr>
            <tr>
              <td>4</td>
              <td>French Fries</td>
              <td>Rs. 70</td>
              <td>Rs. 100</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Cheese ball</td>
              <td>Rs. 30</td>
              <td>Rs. 30</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Vonton</td>
              <td>Rs. 30</td>
              <td>-</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Club Sandwich</td>
              <td>Rs. 80</td>
              <td>-</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Fried Sandwich (Chicken/Veg)</td>
              <td>Rs. 80</td>
              <td>-</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Chana Chaat</td>
              <td>Rs. 100</td>
              <td>Rs. 100</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Fruit chaat</td>
              <td>Rs. 100</td>
              <td>Rs. 100</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Chicken Zinger burger</td>
              <td>Rs. 350</td>
              <td>Rs. 350</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Chicken broast</td>
              <td>Rs. 350/qtr</td>
              <td>Rs. 350/qtr</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Chicken Shawarma</td>
              <td>-</td>
              <td>Rs. 150</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Chicken paratha roll</td>
              <td>Rs. 120</td>
              <td>-</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>  
  );
}

export default Snacks;
