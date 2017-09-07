import React from 'react'
import service_icon from '../../images/icon_our_service.png'
import { Col } from 'react-bootstrap'
import './ServiceTitle.css'

class ServiceTitle extends React.Component {
  render() {
    return (
      <Col className="ServiceTitle" xs={12} sm={12} md={6} lg={6}>
        <div className="icon">
          <img src={service_icon} alt="Our Services" />
        </div>
        <div className="title">
          <h1>O U R &nbsp;S E R V I C E S</h1>
        </div>
      </Col>
    )
  }
}

export default ServiceTitle
