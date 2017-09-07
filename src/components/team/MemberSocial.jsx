import React from 'react'
import facebook_logo from '../../images/icon_facebook_black.png'
import github_logo from '../../images/icon_github_black.png'
import linkedin_logo from '../../images/icon_linkedin_black.png'
import './MemberSocial.css'

class MemberSocial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      facebook: 'https://fb.com/' + this.props.facebook,
      github: 'https://github.com/' + this.props.github,
      linkedin: 'https://www.linkedin.com/in/' + this.props.linkedin
    }
  }

  render() {
    return (
      <div className="MemberSocial">
        {this.props.facebook.length > 0 ? (
          <a href={this.state.facebook} target="_blank">
            <img
              className="social_icon_logo"
              src={facebook_logo}
              alt="Facebook"
            />
          </a>
        ) : null}
        {this.state.github.length > 0 ? (
          <a href={this.state.github} target="_blank">
            <img className="social_icon_logo" src={github_logo} alt="Github" />
          </a>
        ) : null}
        {this.state.linkedin.length > 0 ? (
          <a href={this.state.linkedin} target="_blank">
            <img
              className="social_icon_logo"
              src={linkedin_logo}
              alt="Linkedin"
            />
          </a>
        ) : null}
      </div>
    )
  }
}

export default MemberSocial
