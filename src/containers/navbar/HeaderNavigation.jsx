import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import menus from '../../constants/menus'
import './HeaderNavigation.css'

class HeaderNavigation extends React.Component {
  constructor(props) {
    super(props)
    this._renderMenu = this._renderMenu.bind(this)
  }

  _renderMenu(data) {
    if (data !== null) {
      return data.map(menu => {
        return (
          <NavItem key={menu.key} eventKey={menu.key} href={menu.href}>
            {menu.name}
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
            <a href="/">Nextzy</a>
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
