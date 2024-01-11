import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaCircleUser, FaUser } from 'react-icons/fa6';



const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container className='mt-4'>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className='text-secondery'><small>Journalism Without Fear or Favour</small></p>
        <p>{moment().format('LLLL')}</p>
      </div>
      <div className='d-flex'>
        <Button variant="danger">Primary</Button>
        <Marquee className='text-danger' speed={100}>
          I can be a React component, multiple React components, or just some text.
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">career</Nav.Link>

            </Nav>
            <Nav>
             { user && <Nav.Link href="#deets">
                <FaCircleUser style={{ fontSize: '2rem' }} />
              </Nav.Link>}
              <Nav.Link eventKey={2} href="#memes">
                {user ? 
                <Button variant="secondary">Logout</Button>:
                <Link to="/login">
                <Button variant="secondary">Login</Button>
                </Link>
              }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;