import React from 'react'
import serviceIcon from '../../images/icons/icon_our_service.png'
import Title from '../title'
import styled from 'styled-components'

const ServiceTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fafafa;
  background: radial-gradient(circle at center, #03375f 0%, #181a41 100%);
  padding: 60px;
  height: 100%;
`

const ImageIcon = styled.img`
  animation-duration: 4s !important;
  height: 200px;
`

export default class ServiceTitle extends React.Component {
  render () {
    return (
      <ServiceTitleContainer>
        <ImageIcon
          id="ufo"
          src={serviceIcon}
          className="animated infinite swing"
          alt="Our Services"
        />
        <Title textColor="#EEEEEE">OUR SERVICES</Title>
      </ServiceTitleContainer>
    )
  }
}
