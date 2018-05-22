import React from 'react'
import facebookLogo from '../../images/icons/icon_facebook_black.png'
import githubLogo from '../../images/icons/icon_github_black.png'
import linkedinLogo from '../../images/icons/icon_linkedin_black.png'
import styled from 'styled-components'
import FadeIn from '../FadeInAnimation'

const MemberSocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 30px 0 30px;
  padding: 18px;
  padding-bottom: 30px;
  animation: ${FadeIn} 0.75s;
  -moz-animation: ${FadeIn} 0.75s;
  -webkit-animation: ${FadeIn} 0.75s;
  -o-animation: ${FadeIn} 0.75s;
`

const PlaceHolder = styled.div`height: 20px;`

const SocialIconImage = styled.img`
  width: 20px;
  height: auto;
`

export default class MemberSocial extends React.Component {
  render () {
    return (
      <MemberSocialContainer>
        {this.props.facebook ? (
          <a href={'https://fb.com/' + this.props.facebook}>
            <SocialIconImage
              className="social_icon_logo"
              src={facebookLogo}
              alt="Facebook"
            />
          </a>
        ) : null}
        {this.props.github ? (
          <a href={'https://github.com/' + this.props.github}>
            <SocialIconImage
              className="social_icon_logo"
              src={githubLogo}
              alt="Github"
            />
          </a>
        ) : null}
        {this.props.linkedin ? (
          <a href={'https://www.linkedin.com/in/' + this.props.linkedin}>
            <SocialIconImage
              className="social_icon_logo"
              src={linkedinLogo}
              alt="Linkedin"
            />
          </a>
        ) : null}
        {!this.props.facebook && !this.props.github && !this.props.linkedin ? (
          <PlaceHolder />
        ) : null}
      </MemberSocialContainer>
    )
  }
}
