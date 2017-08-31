import React from 'react'
import Practice from '../../components/Practice'
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
          <Col key={practice.text}>
            <Practice icon={practice.icon} text={practice.text} />
          </Col>
        )
      })
    }
  }

  render() {
    return (
      <Col className="Practices" xs={12} sm={12} md={12} lg={12}>
        <Col className="title" xs={12} sm={12} md={6} lg={6}>
          <div className="text">
            <h1>Our</h1>
            <h1>Practices</h1>
          </div>
        </Col>
        <Col className="description" xs={12} sm={12} md={6} lg={6}>
          {this._renderPractices(practices)}
        </Col>
      </Col>
    )
  }
}

export default Practices
