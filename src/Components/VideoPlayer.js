// src/VideoPlayer.js
import React from 'react';
import { Card } from 'react-bootstrap';

function VideoPlayer() {
  return (
    <Card className="video-player mb-4 shadow">
      <Card.Body className="p-0">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="YouTube Video"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/mSTlGeXUI8o"
            allowFullScreen
            style={{ border: 'none' }}
          />
        </div>
        <div className="p-3">
          <h5 className="card-title">IPTV</h5>
          <p className="card-text">
            Sample video about the iptv usage
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default VideoPlayer;
