import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <>
      <h1 className="text-center mt-2">InfoTaam</h1>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className="mb-2 mt-5">
          <Button variant="secondary" size="lg" className="mx-2">
            Breakfast
          </Button>{' '}
          <Button variant="secondary" size="lg" className="mx-2">
            Drinks
          </Button>{' '}
          <Button variant="secondary" size="lg" className="mx-2">
            Snacks
          </Button>{' '}
          <Button variant="secondary" size="lg" className="mx-2">
            Lunch
          </Button>{' '}
          <Button variant="secondary" size="lg" className="mx-2">
            Dinner
          </Button>{' '}
        </div>
      </div>
    </>
  );
}

export default Home;
