// src/components/HotelServicesPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Service.css'; // Import custom CSS for HotelServicesPage styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faSwimmingPool, faUtensils } from '@fortawesome/free-solid-svg-icons';

function ServicesPage() {
  const services = [
    {
      icon: faDumbbell,
      title: 'Gym Facilities',
      description: 'State-of-the-art gym equipment for your fitness needs.'
    },
    {
      icon: faSwimmingPool,
      title: 'Swimming Pool',
      description: 'Relax and unwind in our luxurious swimming pool.'
    },
    {
      icon: faUtensils,
      title: 'Fine Dining',
      description: 'Enjoy exquisite dining options from our renowned chefs.'
    },
    // Add more services as needed
  ];

  return (
    <Container fluid className="hotel-services-page">
      <Row className="py-5">
        <Col md={{ span: 8, offset: 2 }} className="text-center">
          <h1>Hotel Services</h1>
          <p className="lead">Explore the range of services offered by our hotel.</p>
        </Col>
      </Row>

      <Row className="services-list py-5">
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="service-card shadow">
              <Card.Body>
                <FontAwesomeIcon icon={service.icon} className="service-icon" />
                <h3 className="mt-3">{service.title}</h3>
                <p>{service.description}</p>
                <Button variant="primary">Add Service</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default  ServicesPage;
