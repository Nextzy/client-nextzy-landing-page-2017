import React from 'react'
import menus from '../../constants/menus'
import './HeaderNavigation.css'
import logo from '../../images/logo_nextzy_black.png'
import Scrollchor from 'react-scrollchor'
import 'bulma/css/bulma.css'

export default class HeaderNavigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isBurgerClick: false
    }
    this._renderMenu = this._renderMenu.bind(this)
    this.onBurgerClick = this.onBurgerClick.bind(this)
  }

  _renderMenu (data) {
    return (
      data &&
      data.map(menu => (
        <Scrollchor
          key={menu.key}
          to={menu.link}
          className="navbar-item is-hidden-desktop-only"
          animate={{offset: -80, duration: 600}}
        >
          {menu.name}
        </Scrollchor>
      ))
    )
  }

  onBurgerClick () {
    this.setState({
      isBurgerClick: !this.state.isBurgerClick
    })
  }

  render () {
    return (
      <nav className="navbar HeaderNavigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              id="nextzy-logo"
              src={logo}
              alt="Nextzy Technologies"
              height="200"
            />
          </a>
        </div>

        <div
          className={`burger navbar-burger ${this.state.isBurgerClick
            ? 'is-active'
            : ''}`}
          data-target="menuItem"
          onClick={this.onBurgerClick}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          id="menuItem"
          className={`navbar-menu ${this.state.isBurgerClick
            ? 'is-active'
            : ''}`}
        >
          <div className="navbar-end">
            {this._renderMenu(menus)}
            <a
              className="navbar-item"
              href="https://blog.nextzy.me/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Blog
            </a>
            <a
              className="navbar-item"
              href="http://nextzy.me/careers/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Careers
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
