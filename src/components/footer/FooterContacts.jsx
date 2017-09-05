import React from 'react'
import { Col } from 'react-bootstrap'
import facebook_icon from '../../images/icon_facebook_outline_white.png'
import linkedin_icon from '../../images/icon_linkedin_outline_white.png'
import github_icon from '../../images/icon_github_outline_white.png'
import email_icon from '../../images/icon_email_outline_white.png'
import './FooterContacts.css'

class FooterContacts extends React.Component {
  render() {
    return (
      <Col
        xs={12}
        sm={12}
        mdOffset={3}
        md={3}
        lgOffset={3}
        lg={3}
        className="FooterContacts"
      >
        <a href="https://www.facebook.com/nextzy">
          <img src={facebook_icon} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/company/3755640/">
          <img src={linkedin_icon} alt="Linkedin" />
        </a>
        <a href="https://github.com/Nextzy">
          <img src={github_icon} alt="Github" />
        </a>
        <a href="mailto:contact@nextzy.com">
          <img src={email_icon} alt="E-mail" />
        </a>
      </Col>
    )
  }
}

export default FooterContacts
