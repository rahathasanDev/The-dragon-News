/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { AuthContext } from '../Providers/AuthProvider';


const Navigationbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/career">career</Nav.Link> 

            </Nav>
            <Nav>
              {user && <Nav.Link href="#deets">
                <FaCircleUser style={{ fontSize: '2rem' }} />
              </Nav.Link>}

              {user ?
                <Button variant="secondary">Logout</Button> :
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navigationbar;