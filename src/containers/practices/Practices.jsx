import React from 'react'
import Service from '../../components/Service'
import practices from '../../constants/practices'
import { Grid, Row, Col } from 'react-bootstrap'

class Practices extends React.Component {
  constructor(props) {
    super(props)
    this._renderPractices = this._renderPractices.bind(this)
  }

  _renderPractices(list) {
    if (list !== null) {
      return list.map(practice => {
        return (
          <Col sm={6} md={4}>
            <Service icon={practice.icon} text={practice.text} />
          </Col>
        )
      })
    }
  }

  render() {
    return (
      <Row className="section-content">{this._renderPractices(practices)}</Row>
    )
  }
}

export default Practices
