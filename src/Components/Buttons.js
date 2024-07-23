import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Buttons() {
    return (
      <>
        <Container className="mt-5">
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
        </Container>
      </>
    )
}

export default Buttons;