// src/Home.js
import React from 'react';
import { Container, Row, Col, Carousel, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import macvision1 from '../Images/macvision1.png'
import macvision2 from '../Images/macvision2.png'
import macvision3 from '../Images/macvision3.png'
import { yellow } from '@mui/material/colors';

function Home() {
  return (
    <Container fluid className="p-0">
      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-5">
        <Container>
          <h1>Welcome to MacVision</h1>
          <p className="lead">Your success starts here</p>
          <Link to={'/upload'}>
          <Button variant="danger" size="lg">Get Started</Button>
          </Link>
        </Container>
      </section>

      {/* Carousel Section */}
      <section className="my-5">
        <Container>
          <Carousel interval={3000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={macvision1}
                alt="MacVision 1"
              />
              <Carousel.Caption>
                <h3 style={{'background':'red'}}>MacVision 1</h3>
                <p style={{'background':'black'}}>Stream hundreds of channels in HD quality with our IPTV service.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={macvision2}
                alt="MacVision 2"
              />
              <Carousel.Caption>
                <h3 style={{'background':'red'}}>MacVision 2</h3>
                <p style={{'background':'black'}}>Enjoy seamless access to live TV and on-demand content with IPTV.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={macvision3}
                alt="MacVision 3"
              />
              <Carousel.Caption>
                <h3 style={{'background':'red'}}>MacVision 3</h3>
                <p style={{'background':'black'}}>Experience limitless entertainment with IPTV—your gateway to global TV.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Channels</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                 <Link to={'/upload'}>
                 <Button variant="warning">Learn More</Button>
                 </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Services</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                 <Link to={'/service'}>
                 <Button variant="danger">Available</Button>
                 </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Available Food</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Link to={'/food'}>
                  <Button variant="primary">Learn More</Button></Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

    </Container>
  );
}

export default Home;
