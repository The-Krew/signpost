import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import './assets/scss/index.scss';

import Linkbox from "./components/linkbox";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Container>
        <Row>
          <Col xs="3"/>
          <Col xs="6">
            <Linkbox></Linkbox>
          </Col>
          <Col xs="3"/>
        </Row>
      </Container>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
