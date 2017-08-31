import React from 'react'
import service_icon from '../images/icon_our_service.png'
import './ServiceTitle.css'

class ServiceTitle extends React.Component {
  render() {
    return (
      <div className="ServiceTitle">
        <div className="icon">
          <img src={service_icon} alt="Our services" />
        </div>
        <div className="title">
          <h1>Our Services</h1>
        </div>
      </div>
    )
  }
}

export default ServiceTitle
