import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Container className='w-50 mx-auto '>
      <h3>Please Register</h3>
      <Form className='mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" required />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Photo URl</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Enter Photo Url" required />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password"  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="accept" label="Accept terms and condition" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
      <Form.Text className="text-danger p-3">
          Already Have an account ? <Link to="/register">Login</Link>
        </Form.Text>
        <br />
    
    </Form>
    </Container>
  );
};

export default Register;