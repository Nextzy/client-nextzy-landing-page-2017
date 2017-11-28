import React from 'react'
import ContentContainer from '../contentContainer'
import Title from '../../components/title'
import banner from '../../images/bg-head.png'
import astronaut from '../../images/astronaut.png'
import styled from 'styled-components'

const BannerContainer = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

export default class Banner extends React.Component {
  render () {
    return (
      <BannerContainer>
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
