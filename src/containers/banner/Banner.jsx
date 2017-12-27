import React from 'react'
import ContentContainer from '../contentContainer'
import Title from '../../components/title'
import banner from '../../images/banner/bg-head.png'
import astronaut from '../../images/banner/astronaut.png'
import styled from 'styled-components'
import Particles from 'react-particles-js'

const BannerContainer = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`

const ImageIcon = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`

const CompanyDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

const particleStyle = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      }
    },
    line_linked: {
      enable: true,
      distance: 160,
      color: '#c8b4b4',
      opacity: 0.4,
      width: 1
    }
  }
}

export default class Banner extends React.Component {
  render () {
    return (
      <BannerContainer id="particles-js">
        <Particles
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: '50px',
            zIndex: 1
          }}
          params={particleStyle}
        />
        <ContentContainer leftRightPanel="true" padding="8px">
          <ImageIcon>
            <img
              id="astronaut"
              className="animated infinite pulse"
              src={astronaut}
              alt="Astronaut"
              style={{height: '160px', animationDuration: '4s'}}
            />
          </ImageIcon>
          <CompanyDescription>
            <Title textColor="#EEEEEE" textAlign="start">
              {this.props.nextzy}
              <br />
              {this.props.tech}
            </Title>
            <h2 className="subtitle" style={{color: '#EEEEEE'}}>
              {this.props.subtitle}
            </h2>
          </CompanyDescription>
        </ContentContainer>
      </BannerContainer>
    )
  }
}
