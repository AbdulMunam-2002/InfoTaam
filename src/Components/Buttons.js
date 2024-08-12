import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

const Buttons = ({ scrollToBreakfast, scrollToLunch, scrollToDinner, scrollToSnacks, scrollToDrinks, closeMenu }) => {
  return (
    <div className="container mt-3">
      <Row className="justify-content-center">
        <Col xs={12} md={2} className="mb-2 mb-md-0">
          <Button variant="outline-warning" size="lg" className="w-100 custom-button" onClick={() => { scrollToBreakfast(); closeMenu(); }}>
            Breakfast
          </Button>
        </Col>
        <Col xs={12} md={2} className="mb-2 mb-md-0">
          <Button variant="outline-warning" size="lg" className="w-100 custom-button" onClick={() => { scrollToLunch(); closeMenu(); }}>
            Lunch
          </Button>
        </Col>
        <Col xs={12} md={2} className="mb-2 mb-md-0">
          <Button variant="outline-warning" size="lg" className="w-100 custom-button" onClick={() => { scrollToDinner(); closeMenu(); }}>
            Dinner
          </Button>
        </Col>
        <Col xs={12} md={2} className="mb-2 mb-md-0">
          <Button variant="outline-warning" size="lg" className="w-100 custom-button" onClick={() => { scrollToSnacks(); closeMenu(); }}>
            Snacks
          </Button>
        </Col>
        <Col xs={12} md={2} className="mb-2 mb-md-0">
          <Button variant="outline-warning" size="lg" className="w-100 custom-button" onClick={() => { scrollToDrinks(); closeMenu(); }}>
            Drinks
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Buttons;
