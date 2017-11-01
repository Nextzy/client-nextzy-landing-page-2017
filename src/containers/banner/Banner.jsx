import React from 'react'
import banner from '../../images/bg-head.png'
import astronaut from '../../images/astronaut.png'
import {Col} from 'react-bootstrap'
import './Banner.css'

class Banner extends React.Component {
  render () {
    return (
      <section className="Banner" id="banner">
        <div className="top-banner">
          <img className="background-image" src={banner} alt="Nextzy" />
          <div className="text-layer">
            <Col className="iconImage1" xs={12} sm={12} md={4} lg={4}>
              <img
                id="astronaut"
                className="animated infinite pulse"
                src={astronaut}
                alt="Astronaut"
              />
            </Col>
            <Col className="description" xs={12} sm={12} md={8} lg={8}>
              <h1 className="text-title">{this.props.nextzy}</h1>
              <h1 className="text-title">{this.props.tech}</h1>
              <h6 className="text-subtitle">{this.props.subtitle}</h6>
            </Col>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner
