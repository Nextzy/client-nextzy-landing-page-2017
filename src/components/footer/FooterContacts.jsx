import React from 'react'
import facebookIcon from '../../images/icon_facebook_outline_white.png'
import linkedinIcon from '../../images/icon_linkedin_outline_white.png'
import githubIcon from '../../images/icon_github_outline_white.png'
import emailIcon from '../../images/icon_email_outline_white.png'
import './FooterContacts.css'

export default class FooterContacts extends React.Component {
  render () {
    return (
      <div className="FooterContacts">
        <a href="https://www.facebook.com/nextzy">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/company/3755640/">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>
        <a href="https://github.com/Nextzy">
          <img src={githubIcon} alt="Github" />
        </a>
        <a href="mailto:contact@nextzy.com">
          <img src={emailIcon} alt="E-mail" />
        </a>
      </div>
    )
  }
}
