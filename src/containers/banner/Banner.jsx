import React from 'react'
import ContentContainer from '../contentContainer'
import Title from '../../components/title'
import banner from '../../images/bg-head.png'
import astronaut from '../../images/astronaut.png'
// import './style.css'

export default class Banner extends React.Component {
  render () {
    return (
      <ContentContainer
        background={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          overflow: 'hidden',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }}
        wrap="wrap"
      >
        <div className="bannerIcon">
          <img
            id="astronaut"
            className="animated infinite pulse"
            src={astronaut}
            alt="Astronaut"
            style={{height: '160px'}}
          />
        </div>
        <div className="companyDescription">
          <Title textColor="#EEEEEE" textAlign="start">
            {this.props.nextzy}
            <br />
            {this.props.tech}
          </Title>
          <h2 className="subtitle">{this.props.subtitle}</h2>
        </div>
      </ContentContainer>
    )
  }
}
