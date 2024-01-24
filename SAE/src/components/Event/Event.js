import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Event.css'

export default class Event extends React.Component {
  render() {
    let classes = 'event z-depth-2 '
    classes += (this.props.alt) ? 'alt' : '';

    return (
      <Container className={classes} data-aos='fade-right'>
        <Row className='align-items-center'>
          <Col md='5' xs='12' className='eventDate'>
            <h1> {this.props.date} </h1>
            <h2> {this.props.month} </h2>
            <h5> {this.props.time} </h5>
          </Col>

          <Col md='7' xs='12' className='eventDetails'>
            <h2> {this.props.eventName} </h2>
            {this.props.location &&
                <h4>
                  <i className='fa fa-map-marker'></i>
                  {this.props.location}
                </h4>
            }
            {this.props.children}
          </Col>
        </Row>
      </Container>
    );
  }
}