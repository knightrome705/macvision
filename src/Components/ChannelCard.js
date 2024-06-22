// src/ChannelCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

function ChannelCard({ channel }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{channel.name}</Card.Title>
        <Card.Text>{channel.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ChannelCard;
