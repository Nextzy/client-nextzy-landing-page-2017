import React from 'react'
import Service from '../../components/Service'
import practices from '../../constants/practices'
import { Col } from 'react-bootstrap'

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
      <section className="section-content">
        {this._renderPractices(practices)}
      </section>
    )
  }
}

export default Practices
