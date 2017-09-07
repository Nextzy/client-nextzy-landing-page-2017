import React from 'react'
import facebook_logo from '../../images/icon_facebook_black.png'
import github_logo from '../../images/icon_github_black.png'
import linkedin_logo from '../../images/icon_linkedin_black.png'
import './MemberSocial.css'

class MemberSocial extends React.Component {
  render() {
    return (
      <div className="MemberSocial">
        {this.props.facebook ? (
          <a href={'https://fb.com/' + this.props.facebook}>
            <img
              className="social_icon_logo"
              src={facebook_logo}
              alt="Facebook"
            />
          </a>
        ) : null}
        {this.props.github ? (
          <a href={'https://github.com/' + this.props.github}>
            <img className="social_icon_logo" src={github_logo} alt="Github" />
          </a>
        ) : null}
        {this.props.linkedin ? (
          <a href={'https://www.linkedin.com/in/' + this.props.linkedin}>
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
