import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React from 'react';
import Banner from '../Assets/banner.jpg';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/logo.jpg';
import Buttons from './Buttons';

function Home() {
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
      <Buttons/>
      <div className='container mt-3'>
        <img
          src={Banner}
          alt='InfoTaam Banner'
          className='banner-image'
        />
      </div>
    </>
  );
}

export default Home;
