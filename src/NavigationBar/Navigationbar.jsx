/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
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
            <Nav className="mx-auto ">
              <Stack direction="horizontal" gap={3}>
                <Link className="p-2" to="/">Home</Link>
                <Link href="/about" to="/about">About</Link>
                <Link href="/career" to="/career">Career</Link>
              </Stack>
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