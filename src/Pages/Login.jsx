import React, { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthTokenContext } from '../Context/ContextShare';

export const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthToken}=useContext(isAuthTokenContext);
  const navigate=useNavigate();

  const handleSubmit = () => {
    setIsAuthToken(true);
    navigate('/home');
  };
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Row className="w-100 justify-content-center">
        <Col md={4}>
          <Card className="p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form >
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </Form.Group>
                <Link to={'/home'}>
                <Button onClick={handleSubmit} variant="danger" type="submit" className="w-100">
                  Login
                </Button>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
