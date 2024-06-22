// src/HomePage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Dashboard.css'; // Import custom CSS for HomePage styling
import VideoPlayer from '../Components/VideoPlayer';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="homepage">
      {/* Background Image and Overlay */}
      <div className="background-overlay">
        <Container fluid className="p-0">
          {/* Hero Section */}
          <Row className="hero-section m-0 text-center py-5 text-white">
            <Col>
              <h1>Welcome to IPTV</h1>
              <p className="lead">Your ultimate source for high-quality TV channels</p>
              <Link to={'/login'}>
              <Button variant="danger" size="lg">Get Started</Button>
              </Link>
            </Col>
          </Row>

          {/* Features Section */}
          <Row className="features-section m-0 py-5 text-white">
            <Col md={4} className="text-center">
              <i className="fas fa-tv fa-4x mb-3 text-primary"></i>
              <h3>Wide Selection</h3>
              <p>Choose from a variety of channels and genres</p>
            </Col>
            <Col md={4} className="text-center">
              <i className="fas fa-play-circle fa-4x mb-3 text-primary"></i>
              <h3>High Quality Streaming</h3>
              <p>Enjoy HD streaming on any device</p>
            </Col>
            <Col md={4} className="text-center">
              <i className="fas fa-wifi fa-4x mb-3 text-primary"></i>
              <h3>Anytime, Anywhere</h3>
              <p>Access your favorite channels from anywhere</p>
            </Col>
          </Row>

          {/* Video Section */}
          <Row className="video-section m-0 py-5 text-white">
            <Col md={6} className="text-center">
              <VideoPlayer />
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h2>Watch Anywhere, Anytime</h2>
                <p className="lead">Stream your favorite shows on the go with our IPTV service.</p>
                <Button variant="primary">Explore Channels</Button>
              </div>
            </Col>
          </Row>

          {/* Call to Action Section */}
          <Row className="call-to-action m-0 py-5 text-center text-white">
            <Col>
              <h2>Ready to get started?</h2>
             <Link to={'/signup'}>
             <Button variant="danger" size="lg">Sign Up Now</Button>
             </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;
