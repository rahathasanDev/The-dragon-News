import React from 'react';
import { Container, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="about-container">
      <h2>About Us</h2>
      <p>Welcome to our project! We are passionate about [describe your project]. Our mission is to [state the mission or purpose of the project].</p>

    
        <Col>
          <h3>Our Team</h3>
          <ul>
            <li>
              <h2><strong>Maruf Ahmed</strong> - Founder and CEO</h2>
            </li>
            <li>
              <h2><strong>Rahat Hasan</strong> - Co-Founder</h2>
            </li>
            <li>
              <h2><strong>Oli Dollar</strong> - Designer</h2>
            </li>
          </ul>
        </Col>

        <Col>
          <h3>Why Choose Us?</h3>
          <p>We believe in [insert project values or principles]. Our team is dedicated to delivering high-quality [product/service] to meet your needs. Join us on this exciting journey!</p>
        </Col>
     
    </Container>
  );
};

export default About;
