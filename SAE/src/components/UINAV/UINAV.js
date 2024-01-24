import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink as BNavLink } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import logo from './PurpleShield.png'
import 'bootstrap/dist/css/bootstrap.css'
import wShield from './PurpleShield.png'
import rShield from './PurpleShield.png'
import './UINav.css'

export default class UINav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      title1: "SAE Vandy",
      title2: "TN Nu",
      saeSrc: rShield
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  saeHover() {
    let updatedSrc = (this.state.saeSrc === wShield) ? rShield : wShield;
    this.setState({ saeSrc: updatedSrc });
  }

  updateDimensions(first) {
    if (this.refs.navbar || first) { // https://stackoverflow.com/q/34544314/8327287
      if (window.innerWidth > 420 && !(window.innerWidth > 767 && window.innerWidth < 845)) {
        this.setState({title1: "SAE Vandy", title2: "TN Nu"});
      } else {
        this.setState({title1: "SAE Vandy", title2: "TN Nu"});
      }
    }
  }

  componentWillMount() {
    this.updateDimensions(true);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this, false));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this, false));
  }

  render() {
    
    return (
      <div ref="navbar">
        <Navbar color='faded' light expand="sm" fixed={(this.props.fixed) && "bottom"}>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand className="abs">
            {this.state.title1}
            <img src={logo} alt='Tennessee Nu'/>
            {this.state.title2}
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <BNavLink exact tag={NavLink} activeClassName="active" to='/'>Home</BNavLink>
              </NavItem>
              <NavItem>
                <BNavLink tag={NavLink} activeClassName="active" to='/about'>About</BNavLink>
              </NavItem>
              <NavItem>
                <BNavLink tag={NavLink} activeClassName="active" to='/brothers'>Brothers</BNavLink>
              </NavItem>
            </Nav>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <BNavLink tag={NavLink} activeClassName="active" to='/rush'>Rush</BNavLink>
              </NavItem>
              <NavItem>
                <BNavLink tag={NavLink} activeClassName="active" to='/awards'>Awards</BNavLink>
              </NavItem>
              
              <NavItem>
                <BNavLink
                  href='https://portal.sae.net'
                  target='_blank'
                  onMouseEnter={this.saeHover.bind(this)}
                  onMouseLeave={this.saeHover.bind(this)}
                  onTouchStart={this.saeHover.bind(this)}
                  onTouchEnd={this.saeHover.bind(this)}>
                    <img src={this.state.saeSrc} alt='The SAE Portal' />
                </BNavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}