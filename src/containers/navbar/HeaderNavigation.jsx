import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import menus from '../../constants/menus'
import {NavItem} from 'react-bootstrap'
import './HeaderNavigation.css'
import logo from '../../images/logo_nextzy_black.png'
import Scrollchor from 'react-scrollchor'

export default class HeaderNavigation extends React.Component {
  constructor (props) {
    super(props)
    this._renderMenu = this._renderMenu.bind(this)
  }

  _renderMenu (data) {
    return (
      data &&
      data.map(menu => (
        <NavItem key={menu.key} eventKey={menu.key}>
          <Scrollchor
            to={menu.link}
            className="nav-link"
            animate={{offset: -80, duration: 600}}
          >
            {menu.name}
          </Scrollchor>
        </NavItem>
      ))
    )
  }

  render () {
    return (
      <Navbar className="HeaderNavigation" fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#banner">
              <img src={logo} alt="Nextzy Technologies" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {this._renderMenu(menus)}
            <NavItem
              to="https://blog.nextzy.me/"
              onClick={() => window.open('https://blog.nextzy.me/')}
            >
              Blog
            </NavItem>
            <NavItem
              onClick={() => window.open('http://nextzy.me/careers/')}
              to="http://nextzy.me/careers/"
            >
              Careers
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
