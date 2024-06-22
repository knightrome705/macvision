// src/components/AddFoodItemPage.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './FoodItem.css'; // Import custom CSS for AddFoodItemPage styling

function AddFoodItemPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission (not implemented in this example)
  };

  return (
    <Container fluid className="add-food-item-page">
      <Row className="justify-content-between">
        {/* Sidebar */}
        <Col md={3} className="sidebar">
          <div className="sidebar-sticky">
            <h4 className="my-4">Categories</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">Veg</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Non-Veg</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Appetizers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Main Course</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Desserts</a>
              </li>
              {/* Add more categories as needed */}
            </ul>
          </div>
        </Col>

        {/* Main Content Area */}
        <Col md={8} className="main-content">
          <Row>
            <Col>
              <h1>Add Food Item</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="foodName">
                  <Form.Label>Food Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter food name" />
                </Form.Group>

                <Form.Group controlId="foodDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter food description" />
                </Form.Group>

                <Form.Group controlId="foodCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select">
                    <option>Veg</option>
                    <option>Non-Veg</option>
                    <option>Appetizers</option>
                    <option>Main Course</option>
                    <option>Desserts</option>
                    {/* Add more category options as needed */}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="foodPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="text" placeholder="Enter food price" />
                </Form.Group>

                <Form.Group controlId="foodImage">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control type="text" placeholder="Enter image URL" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Add Food Item
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AddFoodItemPage;
