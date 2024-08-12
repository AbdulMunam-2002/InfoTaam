import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Buttons from './Buttons';
import logo from '../Assets/logo1.png';

function Header({ scrollToBreakfast, scrollToLunch, scrollToDinner, scrollToSnacks, scrollToDrinks }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar className="custom-navbar fixed-top">
        <Container className="d-flex justify-content-between align-items-center">
          <Link
            to="/Home"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
              setOpen(false); // Close the menu if open
            }}
            className='company-logo'
          >
            <Navbar.Brand>
              <img
                src={logo}
                width="120"
                height="120"
                className="d-inline-block align-top"
                alt="InfoTaam logo"
              />
            </Navbar.Brand>
          </Link>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="menu-collapse"
            aria-expanded={open}
            className="toggle-button"
            variant="warning"
          >
            <i className="bi bi-list toggle-icon"></i>
          </Button>
        </Container>
      </Navbar>
      <Collapse in={open} className="menu-collapse">
        <div id="menu-collapse">
          <Buttons 
            scrollToBreakfast={scrollToBreakfast}
            scrollToLunch={scrollToLunch}
            scrollToDinner={scrollToDinner}
            scrollToSnacks={scrollToSnacks}
            scrollToDrinks={scrollToDrinks}
            closeMenu={() => setOpen(false)}
          />
        </div>
      </Collapse>
    </>
  );
}

export default Header;
