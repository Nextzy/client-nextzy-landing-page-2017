import React from 'react'
import { Col } from 'react-bootstrap'
import './CompanyName.css'

class CompanyName extends React.Component {
  render() {
    return (
      <Col xs={12} sm={12} md={6} lg={6} className="CompanyName">
        <h4>&copy; 2017 Nextzy Technologies Co., Ltd.</h4>
      </Col>
    )
  }
}

export default CompanyName
