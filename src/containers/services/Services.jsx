import React from 'react'
import { Col } from 'react-bootstrap'
import Service from '../../components/Service'
import ServiceTitle from '../../components/ServiceTitle'
import { services } from '../../constants/services'
import './Services.css'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this._renderServices = this._renderServices.bind(this)
  }

  _renderServices(data) {
    if (data !== null) {
      return data.map(service => (
        <Col key={service.name}>
          <Service
            icon={service.icon}
            name={service.name}
            description={service.description}
          />
        </Col>
      ))
    }
  }

  render() {
    return (
      <Col className="Services" xs={12} sm={12} md={12} lg={12}>
        <Col className="service-items" xs={12} sm={12} md={6} lg={6}>
          {this._renderServices(services)}
        </Col>
        <Col className="service-title" xs={12} sm={12} md={6} lg={6}>
          <ServiceTitle />
        </Col>
      </Col>
    )
  }
}

export default Services
