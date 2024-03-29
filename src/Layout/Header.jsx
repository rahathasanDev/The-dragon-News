import logo from '../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';





const Header = () => {
  
    
  return (
    <Container className='mt-4'>
      <div className="text-center">
        <Link to='/category/0'><img   src={logo} alt="" /></Link>
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

    </Container>
  );
};

export default Header;