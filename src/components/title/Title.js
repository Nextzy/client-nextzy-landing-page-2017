import React from 'react'
import styled from 'styled-components'

export default class Title extends React.Component {
  constructor (props) {
    super(props)
    this.getTitleComponent = this.getTitleComponent.bind(this)
  }

  getTitleComponent () {
    return styled.h1`
      color: ${this.props.textColor || '#333333'} !important;
      letter-spacing: 0.2em;
      font-weight: bold !important;
      text-align: ${this.props.textAlign || 'center'};
      margin-bottom: ${this.props.marginBottom || '50px'};
      @media screen and (min-width: 320px) {
        font-size: 22pt !important;
      }
      @media screen and (min-width: 425px) {
        font-size: 28pt !important;
      }
      @media screen and (min-width: 768px) {
        font-size: 38pt !important;
      }
      @media screen and (min-width: 1024px) {
        font-size: 28pt !important;
      }
    `
  }

  render () {
    const TitleComponent = this.getTitleComponent()
    return (
      <div className="content">
        <TitleComponent>{this.props.children}</TitleComponent>
      </div>
    )
  }
}
