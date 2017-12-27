import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ClientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
`

const OuterFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 90%;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #08ebe2;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;
  width: 85%;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 6px #fff;
  overflow: hidden;
`

export default class Client extends React.Component {
  render () {
    return (
      <ClientContainer>
        <OuterFrame>
          <ImageWrapper>
            <img
              src={this.props.img}
              alt={this.props.name}
              style={{height: 'auto', width: '90%'}}
            />
          </ImageWrapper>
        </OuterFrame>
      </ClientContainer>
    )
  }
}
