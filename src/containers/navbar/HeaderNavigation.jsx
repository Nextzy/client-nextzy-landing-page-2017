import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import menus from '../../constants/menus'
import { NavItem } from 'react-bootstrap'
import './HeaderNavigation.css'
import logo from '../../images/logo_nextzy_black.png'
import Scrollchor from 'react-scrollchor'

class HeaderNavigation extends React.Component {
  constructor(props) {
    super(props)
    this._renderMenu = this._renderMenu.bind(this)
  }

  _renderMenu(data) {
    if (data !== null) {
      return data.map(menu => {
        return (
          <NavItem key={menu.key} eventKey={menu.key}>
            <Scrollchor to={menu.link}>{menu.name}</Scrollchor>
          </NavItem>
        )
      })
    }
  }

  render() {
    return (
      <Navbar className="HeaderNavigation" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                alt="Nextzy Technologies"
                className="navbar-logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>{this._renderMenu(menus)}</Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default HeaderNavigation
