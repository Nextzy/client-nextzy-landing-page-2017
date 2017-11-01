import React from 'react'
import menus from '../../constants/menus'
import logo from '../../images/logo_nextzy_black.png'
import Scroll from 'react-scroll'

const Link = Scroll.Link
const Events = Scroll.Events
const scrollSpy = Scroll.scrollSpy

export default class HeaderNavigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isBurgerClick: false
    }
    this._renderMenu = this._renderMenu.bind(this)
    this.onBurgerClick = this.onBurgerClick.bind(this)
  }

  componentDidMount () {
    Events.scrollEvent.register('begin', () => {})
    Events.scrollEvent.register('end', () => {})
    scrollSpy.update()
  }

  _renderMenu (data) {
    return (
      data &&
      data.map(menu => (
        <Link
          key={menu.key}
          to={menu.link}
          activeClass="active"
          className="navbar-item"
          spy={true}
          smooth={true}
          duration={500}
          onClick={this.onBurgerClick}
        >
          {menu.name}
        </Link>
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
            <Link
              key="brand"
              to="banner"
              activeClass="active"
              className="navbar-item"
              spy={true}
              smooth={true}
              duration={500}
              onClick={this.onBurgerClick}
            >
              <img id="nextzy-logo" src={logo} alt="Nextzy Technologies" />
            </Link>

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
