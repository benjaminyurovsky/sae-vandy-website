import React from 'react'
import Navbar from '../UINav'
import Footer from '../UIFooter'
import AOS from 'aos'
import 'aos/dist/aos.css';
import 'font-awesome/css/font-awesome.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div>
        <Navbar fixed={this.props.HomePage} />
        {this.props.children}
        {(!this.props.HomePage) ? <Footer /> : ''}
      </div>
    );
  }
}