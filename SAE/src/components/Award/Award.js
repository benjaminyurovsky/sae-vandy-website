import React from 'react'
import { Col } from 'reactstrap'
import './Award.css'

export default class Award extends React.Component {
  render() {
    let classes = 'award z-depth-3 '
    classes += (this.props.alt) ? 'alt' : '';

    return (
      <Col xs={'12'} sm={'6'} md={'4'} className={'awardCol'} data-aos='fade'>
        <div className={classes}>
          <h1> {this.props.year} </h1>
          <h2> {this.props.awardName} </h2>
          <p> {this.props.info} </p>
        </div>
      </Col>
    );
  }
}