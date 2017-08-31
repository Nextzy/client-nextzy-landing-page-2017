import React from 'react'
import { Col } from 'react-bootstrap'
import Service from '../../components/Service'
import { services } from '../../constants/services'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this._renderServices = this._renderServices.bind(this)
  }

  _renderServices(data) {
    if (data !== null) {
      return data.map(service => (
        <Col xs={12} sm={12} md={6} lg={6}>
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
      <Col xs={12} sm={12} md={12} lg={12}>
        <Col xs={12} sm={12} md={6} lg={6} />
        <Col xs={12} sm={12} md={6} lg={6}>
          {this._renderServices(services)}
        </Col>
      </Col>
    )
  }
}

export default Services
