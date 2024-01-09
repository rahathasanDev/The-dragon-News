import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';
import bg from '../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className='mb-2' variant="outline-primary"><FaGoogle />Login With Google</Button>
      <Button variant="outline-secondary"><FaGithub />Login with Github</Button>
      <div className='mt-3'>
        <h4>Find Us on</h4>
        <ListGroup >
          <ListGroup.Item ><FaFacebook />Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter />Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg} alt="" />
      </div>

    </div>
  );
};

export default RightNav;