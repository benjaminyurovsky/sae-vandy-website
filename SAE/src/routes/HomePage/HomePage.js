import React from 'react'
import App from '../../components/App'
import './HomePage.css'
import logo from './logo.png'

export default class HomePage extends React.Component {
  render() {
    return (
      <App HomePage>
        <div className='housepic-img'></div>
        <div className='titlePage'>
            <img src={logo} alt='' data-aos='fade-down' data-aos-delay='100'/>
            <h1 data-aos='fade-down' data-aos-delay='400'>Sigma Alpha Epsilon</h1>
          <h3 data-aos='fade-up' data-aos-delay='400'> <b>True Gentlemen</b> </h3>
          <h4 data-aos='fade-up' data-aos-delay='650'> Vanderbilt University </h4>
        </div>
      </App>
    )
  }
}