import React from 'react'
import { Col } from 'react-bootstrap'
import './CompanyName.css'

class CompanyName extends React.Component {
  render() {
    return (
      <Col xs={12} sm={12} md={6} lg={6} className="company-name">
        <h4>&copy; 2016 Nextzy Technologies Co., Ltd.</h4>
      </Col>
    )
  }
}

export default CompanyName