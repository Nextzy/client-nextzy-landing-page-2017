import React from 'react'
import { Col } from 'react-bootstrap'
import ContactDetail from '../../components/contact/ContactDetail'
import NextzyMap from '../../components/contact/NextzyMap'
import './Contact.css'

class Contact extends React.Component {
  render() {
    return (
      <Col className="Contact" id="contact" xs={12} sm={12} md={12} lg={12}>
        <Col className="map" xs={12} sm={12} md={6} lg={6}>
          <NextzyMap />
        </Col>
        <Col className="detail" xs={12} sm={12} md={6} lg={6}>
          <ContactDetail />
        </Col>
      </Col>
    )
  }
}

export default Contact
