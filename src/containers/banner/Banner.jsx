import React from 'react'
import ContentContainer from '../contentContainer'
import banner from '../../images/bg-head.png'
import astronaut from '../../images/astronaut.png'
import './style.css'

export default class Banner extends React.Component {
  render () {
    return (
      <ContentContainer>
        <div className="top-banner">
          <img className="background-image" src={banner} alt="Nextzy" />
          <div className="text-layer container is-fluid">
            <div className="iconImage">
              <img
                id="astronaut"
                className="animated infinite pulse"
                src={astronaut}
                alt="Astronaut"
              />
            </div>
            <div className="description">
              <h1 className="title">{this.props.nextzy}</h1>
              <h1 className="title">{this.props.tech}</h1>
              <h2 className="subtitle">{this.props.subtitle}</h2>
            </div>
          </div>
        </div>
      </ContentContainer>
    )
  }
}
