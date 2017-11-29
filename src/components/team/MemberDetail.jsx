import React from 'react'
import styled from 'styled-components'
import FadeIn from '../FadeInAnimation'

const MemberDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  animation: ${FadeIn} 0.75s;
  -moz-animation: ${FadeIn} 0.75s;
  -webkit-animation: ${FadeIn} 0.75s;
  -o-animation: ${FadeIn} 0.75s;
`

const Name = styled.h5`font-weight: bold;`

export default class MemberDetail extends React.Component {
  render () {
    return (
      <MemberDetailContainer>
        <Name>
          {this.props.first_name} {this.props.last_name}
        </Name>
        <h6>{this.props.position}</h6>
      </MemberDetailContainer>
    )
  }
}
