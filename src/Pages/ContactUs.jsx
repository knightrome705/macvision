// src/components/ContactUsPage.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './ContactUs.css'; // Import custom CSS for ContactUsPage styling

function ContactUsPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission (not implemented in this example)
  };

  return (
    <Container fluid className="contact-us-page">
      <Container>
        <h1 className="text-center mb-5">Contact Us</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
          </Form.Group>
            <br></br>
            
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <p>
                Aliquam vitae libero eget urna fermentum dapibus sed eu quam. Nulla condimentum
                enim vel magna consequat, quis fringilla elit pharetra. Etiam at augue nec purus
                blandit lacinia in et odio. Phasellus porttitor, lectus at efficitur vehicula,
                leo nulla interdum nisl, sed aliquam nulla est sit amet dui. Pellentesque
                scelerisque, justo in efficitur aliquet, elit mauris mollis ex, nec condimentum
                quam mauris non elit. Cras molestie mi a leo pretium consectetur.
              </p>
              <p>
                Aliquam vitae libero eget urna fermentum dapibus sed eu quam. Nulla condimentum
                enim vel magna consequat, quis fringilla elit pharetra. Etiam at augue nec purus
                blandit lacinia in et odio. Phasellus porttitor, lectus at efficitur vehicula,
                leo nulla interdum nisl, sed aliquam nulla est sit amet dui. Pellentesque
                scelerisque, justo in efficitur aliquet, elit mauris mollis ex, nec condimentum
                quam mauris non elit. Cras molestie mi a leo pretium consectetur.
              </p>
              <p>
                Aliquam vitae libero eget urna fermentum dapibus sed eu quam. Nulla condimentum
                enim vel magna consequat, quis fringilla elit pharetra. Etiam at augue nec purus
                blandit lacinia in et odio. Phasellus porttitor, lectus at efficitur vehicula,
                leo nulla interdum nisl, sed aliquam nulla est sit amet dui. Pellentesque
                scelerisque, justo in efficitur aliquet, elit mauris mollis ex, nec condimentum
                quam mauris non elit. Cras molestie mi a leo pretium consectetur.
              </p>
              <p>
                Aliquam vitae libero eget urna fermentum dapibus sed eu quam. Nulla condimentum
                enim vel magna consequat, quis fringilla elit pharetra. Etiam at augue nec purus
                blandit lacinia in et odio. Phasellus porttitor, lectus at efficitur vehicula,
                leo nulla interdum nisl, sed aliquam nulla est sit amet dui. Pellentesque
                scelerisque, justo in efficitur aliquet, elit mauris mollis ex, nec condimentum
                quam mauris non elit. Cras molestie mi a leo pretium consectetur.
              </p>
              <p>
                Aliquam vitae libero eget urna fermentum dapibus sed eu quam. Nulla condimentum
                enim vel magna consequat, quis fringilla elit pharetra. Etiam at augue nec purus
                blandit lacinia in et odio. Phasellus porttitor, lectus at efficitur vehicula,
                leo nulla interdum nisl, sed aliquam nulla est sit amet dui. Pellentesque
                scelerisque, justo in efficitur aliquet, elit mauris mollis ex, nec condimentum
                quam mauris non elit. Cras molestie mi a leo pretium consectetur.
              </p>
    </Container>
  );
}

export default ContactUsPage;
