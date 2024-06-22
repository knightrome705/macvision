import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>For any inquiries, feel free to reach out to us:</p>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:info@example.com" className="text-white">info@example.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <span className="text-white">+123 456 7890</span>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <h5>Follow Us</h5>
            <p>Stay connected with us on social media:</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="text-white">Facebook</a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">Twitter</a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light mt-4" />
        <p className="mb-0 text-center">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
