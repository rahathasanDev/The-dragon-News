import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Leftnav/LeftNav';
import RightNav from '../RightNav/RightNav';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
      <Row>
        <Col lg={3}>
          <LeftNav></LeftNav>
        </Col>
        <Col lg={6}>
          <h2>main content coming</h2>
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

export default Main;