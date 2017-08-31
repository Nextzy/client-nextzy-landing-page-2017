import React from 'react'
import './Banner.css'
import { Col } from 'react-bootstrap'

class Banner extends React.Component {
  render() {
    return (
      <section className="Banner">
        <div className="top-banner">
          <Col xs={12} sm={12} md={6} lg={6} />
          <Col className="description" xs={12} sm={12} md={6} lg={6}>
            <h1 className="text-title">{this.props.nextzy}</h1>
            <h1 className="text-title">{this.props.tech}</h1>
            <h6 className="text-subtitle">{this.props.subtitle}</h6>
          </Col>
        </div>
      </section>
    )
  }
}

export default Banner
