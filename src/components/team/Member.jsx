import React from 'react'
import MemberDetail from './MemberDetail'
import MemberSocial from './MemberSocial'
import styled from 'styled-components'
import FadeIn from '../FadeInAnimation'

const MemberContainer = styled.div`
  box-shadow: 0 0 0 2px #9d9d9d;
  background: #fff;
  width: 250px;
  height: 320px;
`

const MemberFadeInNormal = styled.div`
  animation: ${FadeIn} 0.75s;
  -moz-animation: ${FadeIn} 0.75s;
  webkit-animation: ${FadeIn} 0.75s;
  -o-animation: ${FadeIn} 0.75s;
`

const MemberFadeInHover = styled.div`
  animation: ${FadeIn} 0.75s;
  -moz-animation: ${FadeIn} 0.75s;
  webkit-animation: ${FadeIn} 0.75s;
  -o-animation: ${FadeIn} 0.75s;
`

const ImageIcon = styled.img`
  width: 250px;
  height: auto;
`

export default class Member extends React.Component {
  constructor (props) {
    super(props)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = {
      hover: false,
      facebook: this.props.facebook ? this.props.facebook : null,
      github: this.props.github ? this.props.github : null,
      linkedin: this.props.linkedin ? this.props.linkedin : null
    }
  }

  onMouseEnter () {
    this.setState({
      hover: true
    })
  }

  onMouseLeave () {
    this.setState({
      hover: false
    })
  }

  render () {
    return (
      <MemberContainer
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {!this.state.hover ? (
          <MemberFadeInNormal>
            <ImageIcon src={this.props.image.normal} alt="Profile" />
          </MemberFadeInNormal>
        ) : (
          <MemberFadeInHover>
            <ImageIcon src={this.props.image.hover} alt="Profile" />
          </MemberFadeInHover>
        )}
        {!this.state.hover ? (
          <MemberDetail
            first_name={this.props.first_name}
            last_name={this.props.last_name}
            position={this.props.position}
          />
        ) : (
          <MemberSocial
            facebook={this.state.facebook}
            github={this.state.github}
            linkedin={this.state.linkedin}
          />
        )}
      </MemberContainer>
    )
  }
}
