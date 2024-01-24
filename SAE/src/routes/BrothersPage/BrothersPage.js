import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import App from '../../components/App'
import Brother from '../../components/Brother'
import allBrothers from './brothers.json'
import './BrothersPage.css'
import { media } from 'bootstrap-css'

export default class BrothersPage extends React.Component {
  constructor() {
    super();

    this.state = {
      exec: [],
      brothers: []
    };
  }

  componentWillMount() {
    let exec = [];
    
    let brothers = Object.keys(allBrothers).map(function(name, id) {
      let chair = allBrothers[name];
      let content = (
        <Col md='4' sm='6' xs='12' key={id}>
          <Brother chair={chair} brotherName={name} />
        </Col>
      );
      if (window.innerWidth <= 768){ //Mobile
        if (chair === 'Eminent Deputy Archon') {
          exec[1] = content;
        } else if (chair === 'Eminent Archon') {
          exec[0] = content;
        } else if (chair === 'Eminent Recorder') {
          exec[2] = content;
        } else if (chair === 'Eminent Warden') {
          exec[3] = content;
        } else if (chair === 'Eminent Treasurer') {
          exec[4] = content;
        } else if (chair === 'Recruitment Chairman') {
          exec[5] = content;
        } else {
          return content;
        }
      }else {
      if (chair === 'Eminent Deputy Archon') {
        exec[0] = content;
      } else if (chair === 'Eminent Archon') {
        exec[1] = content;
      } else if (chair === 'Eminent Recorder') {
        exec[2] = content;
      } else if (chair === 'Eminent Warden') {
        exec[3] = content;
      } else if (chair === 'Eminent Treasurer') {
        exec[4] = content;
      } else if (chair === 'Recruitment Chairman') {
        exec[5] = content;
      } else {
        return content;
      }
    }

      return '';
    });

    this.setState({
      exec: exec,
      brothers: brothers
    });
  }

  currentSemester() {
    let now = new Date();

    return `${(now.getMonth() > 8 ? "Fall" : "Spring")} ${now.getFullYear()}`
  }

  render() {
    return (
      <App>
        <Container fluid>
          <h1 className='pageTitle' data-aos='fade-down'> Brothers </h1>
          <h2 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'>{this.currentSemester()}</h2>
          <Row className='brothers text-center justify-content-start'>
            
            {this.state.exec}
            {this.state.brothers}
          </Row>
        </Container>
      </App>
    );
  }
}