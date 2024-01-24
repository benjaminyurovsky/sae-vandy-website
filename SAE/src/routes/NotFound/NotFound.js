import React from 'react'
import { Container } from 'reactstrap'
import App from '../../components/App'

export default class NotFound extends React.Component {
  render() {
    return (
      <App>
        <Container>
          <h1 className='pageTitle purple' data-aos='fade-down'> Whoops. </h1>
          <h3 className='text-center' data-aos='fade-down' data-aos-delay='100'> The page you're looking for doesn't exist! </h3>
        </Container>
      </App>
    )
  }
}