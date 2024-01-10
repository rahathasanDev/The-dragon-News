import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Leftnav/LeftNav';
import RightNav from '../RightNav/RightNav';
import { Outlet } from 'react-router-dom';


const Newslayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          
          <Col lg={9}>
            <Outlet> </Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>

          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Newslayout;