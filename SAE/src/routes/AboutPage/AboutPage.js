import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import App from '../../components/App'
import logo from './logo.svg'
import './AboutPage.css'

export default class About extends React.Component {
  render() {
    return (
      <App>
        <Container>
          <h1 className='pageTitle' data-aos='fade-down'> About Us </h1>
          <Row className='align-items-center'>
            <Col md='5' sm='12' data-aos='fade-right'>
              <img src={logo} alt='' className='letters' />
            </Col>

            <Col md={{ size: 6, offset: 1 }} xs='12' data-aos='fade-left'>
              <h1> Vision </h1>
              <p>Through friendship, scholarship, leadership, and service, <b className='purple'>Sigma Alpha Epsilon</b> finds men with <b>impeccable character</b> and helps them achieve their <b>full potential</b>, letting them <b>rise up</b> to face every challenge before them--today and tomorrow. We achieve this by grooming our members to become <b className='purple'>True Gentlemen</b>. </p>
            </Col>
          </Row>
        </Container>
        <Container fluid className='TG' data-aos='fade-up'>
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <h1> The True Gentlemen </h1>
              <p> The True Gentleman is the man whose conduct proceeds from good will and an acute sense of propriety, and whose self-control is equal to all emergencies; who does not make the poor man conscious of his poverty, the obscure man of his obscurity, or any man of his inferiority or deformity; who is himself humbled if necessity compels him to humble another; who does not flatter wealth, cringe before power, or boast of his own possessions or achievements; who speaks with frankness but always with sincerity and sympathy; whose deed follows his word; who thinks of the rights and feelings of others, rather than his own; and who appears well in any company, a man with whom honor is sacred and virtue safe. </p>
              <p> - John Walter Wayland </p>
            </Col>
          </Row>
        </Container>
        <Container className='Mission Statements' data-aos='fade-down'>
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <h1> Our Mission Statements </h1>
              <h3><b>Fraternity</b> </h3>
              <p>Advancing the highest standards of friendship, scholarship, leadership and service for our members throughout life.</p>
              <h3><b>FINANCIAL & HOUSING</b> </h3>
              <p>To provide healthy, safe housing environments for our members and guests with high-level property management, resource acquisition, and services.</p>
              <h3><b>FOUNDATION</b> </h3>
              <p>To support philanthropic efforts that let those who rise above become the True Gentleman they strive to be.</p>
              <h3><b>OUR VISION</b> </h3>
              <p>True Gentlemen making our global community better.</p>
            </Col>
          </Row>
        </Container>
      </App>
    )
  }
}