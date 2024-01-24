import React from 'react'
import { Container, Row } from 'reactstrap'
import App from '../../components/App'
import Award from '../../components/Award'
import './AwardsPage.css'

export default class AwardsPage extends React.Component {
  render() {
    return (
      <App>
        <Container fluid>
          <h1 className='pageTitle' data-aos='fade-down'> Awards </h1>
          <Row className='awards'>
            <Award className = 'award' year={'2023'} awardName={'Brother of the Year: Alex Stientjes'} />
            {/* <Award className = 'award' year={'2023'} awardName={'Best Alumni Award'} alt/>
            <Award className = 'award' year={'2023'} awardName={'Outstanding Mental Health Programming'} />
            <Award className = 'award' year={'2019'} awardName={'Best Alumni Award'}alt />
            <Award year={'2018'} awardName={'Best Alumni Award'}  />
            <Award year={'2017'} awardName={'Technology Award'} alt/>
            <Award year={'2017'} awardName={'Best Alumni Award'} />
            <Award year={'2016'} awardName={'Chapter of the Year'} alt />
            <Award year={'2016'} awardName={'Best Alumni Award'} />
            <Award year={'2015'} awardName={'Most Improved Chapter'}alt />
            <Award year={'2015'} awardName={'Best Alumni Award'} />
            <Award year={'2014'} awardName={'Best Alumni Award'} alt/>
            <Award year={'2013'} awardName={'Chapter of the Year'}  />
            <Award year={'2013'} awardName={'Best Alumni Award'} alt/>
            <Award year={'2012'} awardName={'Technology Award'} />
            <Award year={'2012'} awardName={'Athletics Award'}alt /> */}
            
          </Row>
        </Container>
      </App>
    )
  }
}