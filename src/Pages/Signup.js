// Signup.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // Example: Validate inputs, submit data, etc.
  };

  return (
    <Container style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' }}>
      <div style={{ width: '80%', maxWidth: '600px', padding: '20px', backgroundColor: '#ffffff', border: '1px solid #dee2e6', borderRadius: '8px', boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: '#343a40', textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" style={{ borderRadius: '4px' }} required />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" style={{ borderRadius: '4px' }} required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" style={{ borderRadius: '4px' }} required />
          </Form.Group>
          <br></br>
         <Link to={'/login'}>
         <Button variant="primary" type="submit" style={{ borderRadius: '4px', width: '100%', backgroundColor: '#007bff', border: 'none' }}>
            Sign Up
          </Button>
         </Link>
        </Form>
      </div>
    </Container>
  );
};

export default Signup;
