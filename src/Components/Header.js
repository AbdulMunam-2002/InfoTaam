import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../Assets/logo.jpg';
import Collapse from 'react-bootstrap/Collapse';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar className="custom-navbar" bg='light'>
        <Container>
          <Link to='/Home' className='company-logo'>
            <Navbar.Brand>
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="InfoTaam logo"
              />
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      <br />
      <Container className="mt-2">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="mb-3"
        >
          Toggle Menu
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <Row className="justify-content-center">
              <Col xs={12} md={2} className="mb-2 mb-md-0">
                <Link to='/Breakfast'>
                  <Button variant="secondary" size="lg" className="w-100 custom-button">
                    Breakfast
                  </Button>
                </Link>
              </Col>
              <Col xs={12} md={2} className="mb-2 mb-md-0">
                <Link to='/Drinks'>
                  <Button variant="secondary" size="lg" className="w-100 custom-button">
                    Drinks
                  </Button>
                </Link>
              </Col>
              <Col xs={12} md={2} className="mb-2 mb-md-0">
                <Link to='/Snacks'>
                  <Button variant="secondary" size="lg" className="w-100 custom-button">
                    Snacks
                  </Button>
                </Link>
              </Col>
              <Col xs={12} md={2} className="mb-2 mb-md-0">
                <Link to='/Lunch'>
                  <Button variant="secondary" size="lg" className="w-100 custom-button">
                    Lunch
                  </Button>
                </Link>
              </Col>
              <Col xs={12} md={2} className="mb-2 mb-md-0">
                <Link to='/Dinner'>
                  <Button variant="secondary" size="lg" className="w-100 custom-button">
                    Dinner
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Collapse>
      </Container>
    </>
  );
}

export default Header;
