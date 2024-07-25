import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/logo.jpg';
import Collapse from 'react-bootstrap/Collapse';
import Buttons from './Buttons';

function Header({ scrollToBreakfast, scrollToLunch, scrollToDinner, scrollToSnacks, scrollToDrinks }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar className="custom-navbar">
        <Container className="d-flex justify-content-between align-items-center">
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
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="mt-3"
            variant="secondary"
          >
            <i className="bi bi-list toggle-icon"></i>
          </Button>
        </Container>
      </Navbar>
      <Container>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <Buttons 
              scrollToBreakfast={scrollToBreakfast}
              scrollToLunch={scrollToLunch}
              scrollToDinner={scrollToDinner}
              scrollToSnacks={scrollToSnacks}
              scrollToDrinks={scrollToDrinks}
            />
          </div>
        </Collapse>
      </Container>
    </>
  );
}

export default Header;
