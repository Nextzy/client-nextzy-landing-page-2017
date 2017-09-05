import React from 'react'
import { Col } from 'react-bootstrap'
import CompanyName from '../../components/footer/CompanyName'
import FooterContacts from '../../components/footer/FooterContacts'
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={12} className="Footer">
        <CompanyName />
        <FooterContacts />
      </Col>
    )
  }
}

export default Footer
