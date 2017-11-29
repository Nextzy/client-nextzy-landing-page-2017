import React from 'react'
import {normalStyle, hoverStyle} from '../../constants/servicesStyle'
import styled from 'styled-components'
import FadeIn from '../FadeInAnimation'

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 38px;
  &:hover {
    animation: ${FadeIn} 0.75s;
    -moz-animation: ${FadeIn} 0.75s;
    -webkit-animation: ${FadeIn} 0.75s;
    -o-animation: ${FadeIn} 0.75s;
  }
`

const ServiceName = styled.h3`
  font-weight: bold;
  @media screen and (min-width: 320px) {
    font-size: 20pt;
  }
  @media screen and (min-width: 768px) {
    font-size: 24pt;
  }
  @media screen and (min-width: 2560px) {
    font-size: 30pt;
  }
`

const ServiceImage = styled.img`
  @media screen and (min-width: 320px) {
    height: 80px;
  }

  @media screen and (min-width: 768px) {
    height: 90px;
  }

  @media screen and (min-width: 1440px) {
    height: 110px;
  }

  @media screen and (min-width: 2560px) {
    height: 130px;
  }
`

const ServiceDescription = styled.h6`
  @media screen and (min-width: 320px) {
    font-size: 12pt;
  }

  @media screen and (min-width: 768px) {
    font-size: 16pt;
  }

  @media screen and (min-width: 2560px) {
    font-size: 20pt;
  }
`

export default class Service extends React.Component {
  constructor (props) {
    super(props)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = {
      icon: this.props.icon.iconNormal,
      componentStyle: normalStyle
    }
  }

  onMouseEnter () {
    this.setState({
      icon: this.props.icon.iconHover,
      componentStyle: hoverStyle
    })
  }

  onMouseLeave () {
    this.setState({
      icon: this.props.icon.iconNormal,
      componentStyle: normalStyle
    })
  }

  render () {
    return (
      <ServiceContainer
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={this.state.componentStyle}
      >
        <div className="iconImage">
          <ServiceImage src={this.state.icon} alt={this.props.name} />
        </div>
        <div className="name">
          <ServiceName>{this.props.name}</ServiceName>
        </div>
        <div className="description">
          <ServiceDescription>{this.props.description}</ServiceDescription>
        </div>
      </ServiceContainer>
    )
  }
}
