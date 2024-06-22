// src/components/AddIPTVUrlPage.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './UploadM3U.css'; // Import custom CSS for AddIPTVUrlPage styling

function UploadM3U() {
  return (
    <Container fluid className="add-iptv-url-page">
      <Row className="py-5">
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h1>Add IPTV Channel URL</h1>
          <p className="lead">Enter the URL for your IPTV channel to add it to your list.</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="iptvUrl">
              <Form.Label>Enter IPTV Channel URL</Form.Label>
              <Form.Control type="text" placeholder="https://example.com/iptv-channel" />
              <Form.Text className="text-muted">
                Enter the full URL including http:// or https://
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Channel
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UploadM3U;
