import React from 'react'
import facebookIcon from '../../images/icons/icon_facebook_outline_white.png'
import linkedinIcon from '../../images/icons/icon_linkedin_outline_white.png'
import githubIcon from '../../images/icons/icon_github_outline_white.png'
import emailIcon from '../../images/icons/icon_email_outline_white.png'
import styled from 'styled-components'

const FooterContactsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;

  @media only screen and (max-width: 425px) {
    flex: 0 0 100%;
    display: flex;
    justify-content: space-around;
  }
`

const ImageIcon = styled.img`height: 32px;`

export default class FooterContacts extends React.Component {
  render () {
    return (
      <FooterContactsContainer>
        <a href="https://www.facebook.com/nextzy">
          <ImageIcon src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/company/3755640/">
          <ImageIcon src={linkedinIcon} alt="Linkedin" />
        </a>
        <a href="https://github.com/Nextzy">
          <ImageIcon src={githubIcon} alt="Github" />
        </a>
        <a href="mailto:contact@nextzy.com">
          <ImageIcon src={emailIcon} alt="E-mail" />
        </a>
      </FooterContactsContainer>
    )
  }
}
