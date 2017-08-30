import React from 'react'
import Service from '../../components/Service'
import { practices } from '../../constants/practices'
import { Col } from 'react-bootstrap'
import './Practices.css'

class Practices extends React.Component {
  constructor(props) {
    super(props)
    this._renderPractices = this._renderPractices.bind(this)
  }

  _renderPractices(list) {
    if (list !== null) {
      return list.map(practice => {
        return (
          <Col key={practice.text} sm={6} md={4}>
            <Service icon={practice.icon} text={practice.text} />
          </Col>
        )
      })
    }
  }

  render() {
    return (
      <Col className="Practices" xs={12} sm={12} md={12} lg={12}>
        <Col className="title" xs={12} sm={12} md={6} lg={6}>
          <h1>Our practices</h1>
        </Col>
        <Col className="description" xs={12} sm={12} md={6} lg={6}>
          {this._renderPractices(practices)}
        </Col>
      </Col>
    )
  }
}

export default Practices
