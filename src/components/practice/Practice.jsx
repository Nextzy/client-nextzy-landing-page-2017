import React from 'react'
import styled from 'styled-components'

const PracticeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 0 40px 0;
`

const ImageIcon = styled.img`
  padding-right: 20px;
  height: 60px;
`

export default class Practice extends React.Component {
  render () {
    return (
      <PracticeContainer>
        <ImageIcon src={this.props.icon} alt={this.props.text} />
        <h4 className="subtitle is-5">{this.props.text}</h4>
      </PracticeContainer>
    )
  }
}
