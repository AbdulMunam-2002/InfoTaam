import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <>
      <Navbar className="custom-navbar" bg='light'>
        <Container>
          <Link to='/Home'>
            <Navbar.Brand className="custom-navbar-brand">InfoTaam</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      <br />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={2} className="mb-2">
            <Link to='/Breakfast'>
              <Button variant="secondary" size="lg" className="w-75">
                Breakfast
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={2} className="mb-2">
            <Link to='/Drinks'>
              <Button variant="secondary" size="lg" className="w-75">
                Drinks
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={2} className="mb-2">
            <Link to='/Snacks'>
              <Button variant="secondary" size="lg" className="w-75">
                Snacks
              </Button>
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={2} className="mb-2">
            <Link to='/Lunch'>
              <Button variant="secondary" size="lg" className="w-75">
                Lunch
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={2} className="mb-2">
            <Link to='/Dinner'>
              <Button variant="secondary" size="lg" className="w-75">
                Dinner
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
