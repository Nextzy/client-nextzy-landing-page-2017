import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import menus from '../../constants/menus'
import {NavItem} from 'react-bootstrap'
import './HeaderNavigation.css'
import logo from '../../images/logo_nextzy_black.png'

export default class HeaderNavigation extends React.Component {
  constructor (props) {
    super(props)
    this._renderMenu = this._renderMenu.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect (eventKey) {
    if (menus[eventKey - 1].link.indexOf('#') !== -1) {
      document
        .getElementById(`${menus[eventKey - 1].link.substring(1)}`)
        .scrollIntoView({
          behavior: 'smooth'
        })
    } else {
      window.open(menus[eventKey - 1].link)
    }
  }

  _renderMenu (data) {
    return (
      data &&
      data.map(menu => (
        <NavItem key={menu.key} eventKey={menu.key} href={menu.link}>
          {menu.name}
        </NavItem>
      ))
    )
  }

  render () {
    return (
      <div>
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
            <Nav pullRight onSelect={this.handleSelect}>
              {this._renderMenu(menus)}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
