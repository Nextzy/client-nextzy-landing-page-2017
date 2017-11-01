import React from 'react'
import menus from '../../constants/menus'
import logo from '../../images/logo_nextzy_black.png'
import Scrollchor from 'react-scrollchor'

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
        <div onClick={this.onBurgerClick}>
          <Scrollchor
            key={menu.key}
            to={menu.link}
            className="navbar-item"
            animate={{duration: 600}}
          >
            {menu.name}
          </Scrollchor>
        </div>
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
      <div style={{position: 'fixed', width: '100%', zIndex: 1}}>
        <nav className="navbar" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img id="nextzy-logo" src={logo} alt="Nextzy Technologies" />
            </a>

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
                onClick={this.onBurgerClick}
              >
                Blog
              </a>
              <a
                className="navbar-item"
                href="http://nextzy.me/careers/"
                rel="noopener noreferrer"
                target="_blank"
                onClick={this.onBurgerClick}
              >
                Careers
              </a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
