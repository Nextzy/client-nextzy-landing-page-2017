import React from 'react'
import { Col } from 'react-bootstrap'
import Service from '../../components/service/Service'
import ServiceTitle from '../../components/service/ServiceTitle'
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
        <Service
          key={service.name}
          icon={service.icon}
          name={service.name}
          description={service.description}
        />
      ))
    }
  }

  render() {
    return (
      <Col className="Services" xs={12} sm={12} md={12} lg={12}>
        <Col className="service-items" xs={12} sm={12} md={6} lg={6}>
          {this._renderServices(services)}
        </Col>
        <ServiceTitle />
      </Col>
    )
  }
}

export default Services
