import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import menus from '../../constants/menus'
import RouteNavItem from '../../components/RouteNavItem'
import './HeaderNavigation.css'
import logo from '../../images/logo_nextzy_black.png'

class HeaderNavigation extends React.Component {
  constructor(props) {
    super(props)
    this._renderMenu = this._renderMenu.bind(this)
  }

  _renderMenu(data) {
    if (data !== null) {
      return data.map(menu => {
        return (
          <RouteNavItem key={menu.key} eventKey={menu.key} href={menu.link}>
            {menu.name}
          </RouteNavItem>
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
