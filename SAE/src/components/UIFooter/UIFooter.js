import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import logo from './white-logo.svg'
import './UIFooter.css'

const UIFooter = () => (
  <Container fluid className="footer">
    <Container className="social">
      <Row>
        <Col md="4">
          <a href="https://twitter.com/sae1856?lang=en" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-3x fa-twitter"></span>
          </a>
        </Col>
        <Col md="4">
          <a href="https://www.instagram.com/sae.vanderbilt/" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-3x fa-instagram"></span>
          </a>
        </Col>
        <Col md="4">
          <a href="https://www.facebook.com/p/Sigma-Alpha-Epsilon-Nashville-Alumni-Association-100064838374887/?paipv=0&eav=AfZDPKFoRFDHuJJ2LOTJnslM4D18JgFJpgJyhjs_DZ0QB1w_rqTfyLa42Uf6riL3LTA&_rdr" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-3x fa-facebook"></span>
          </a>
        </Col>
      </Row>
    </Container>
    <Container fluid className="contact">
      <span className="fa fa-2x fa-map-marker" />
      <h5><b>2500 Kensington Place</b></h5>
      <h5>Nashville, TN 37212</h5>
      <br />
      <a href="mailto: saevandytnnu@gmail.com" target="_top">
        <span className="fa fa-2x fa-envelope"></span>
        <h5>Contact Us</h5>
      </a>
    </Container>
    <Container fluid className="footerFoot">
      <a href="https://www.sae.net"><img src={logo} alt='Nationals' /></a>
      <h6> Website made by <br />
        <a href="https://www.linkedin.com/in/benjaminyurovsky/" target="_blank" rel="noopener noreferrer">
          <b className="text-uppercase">Benjamin Yurovsky</b>
        </a>
      </h6>
      <h5> © 2024 <b>SIGMA ALPHA EPSILON</b></h5>
    </Container>
  </Container>
);

export default UIFooter;