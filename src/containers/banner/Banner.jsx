import React from 'react'
import banner from '../../images/bg-head.png'
import astronaut from '../../images/astronaut.png'
import './Banner.css'

export default class Banner extends React.Component {
  render () {
    return (
      <section className="Banner" id="banner">
        <div className="top-banner">
          <img className="background-image" src={banner} alt="Nextzy" />
          <div className="text-layer">
            <div className="iconImage">
              <img
                id="astronaut"
                className="animated infinite pulse"
                src={astronaut}
                alt="Astronaut"
              />
            </div>
            <div className="description">
              <h1 className="text-title">{this.props.nextzy}</h1>
              <h1 className="text-title">{this.props.tech}</h1>
              <h6 className="text-subtitle">{this.props.subtitle}</h6>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
