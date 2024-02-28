import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-dark py-3">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; JW Websanner</p>
          </Col>
          <Col md={6} className="text-end">
            <p>Contact: jacob_0909@icloud.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
