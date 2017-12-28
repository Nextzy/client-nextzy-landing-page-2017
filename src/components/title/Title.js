import React from 'react'
import styled from 'styled-components'

const TitleComponent = styled.h1`
  font-weight: bold !important;
  @media screen and (min-width: 425px) {
    font-size: 24pt;
  }
  @media screen and (min-width: 768px) {
    font-size: 26pt;
  }
  @media screen and (min-width: 1024px) {
    font-size: 22pt;
  }
`
export default class Title extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textStyle: {
        color: this.props.textColor || '#333333',
        letterSpacing: '0.2em',
        textAlign: this.props.textAlign || 'center',
        margin: '0px'
      }
    }
  }

  render () {
    return (
      <div className="content" style={{marginBottom: '50px'}}>
        <TitleComponent style={this.state.textStyle}>
          {this.props.children}
        </TitleComponent>
      </div>
    )
  }
}
