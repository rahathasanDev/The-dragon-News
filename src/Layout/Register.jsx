import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, photo, email,password);
    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch(error => {
        console.log(error);
      })

  }
  return (
    <Container className='w-50 mx-auto '>
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister} className='mt-5'>
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
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="accept" label="Accept terms and condition" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Form.Text className="text-danger p-3">
          Already Have an account ? <Link to="/login">Login</Link>
        </Form.Text>
        <br />

      </Form>
    </Container>
  );
};

export default Register;