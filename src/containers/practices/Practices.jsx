import React from 'react'
import Service from 'components/Service'
import practices from 'constants/practices'
import { Grid, Row, Col } from 'react-boostrap'

class Practices extends React.Component {
  constructor(props) {
    super(props)
    this._renderPractices = this._renderPractices.bind(this)
  }

  _renderPractices(data) {
    if (data !== null) {
      data.list.map(practice => {
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
      <Grid>
        <Row className="section-content">
          {this._renderPractices(practices)}
        </Row>
      </Grid>
    )
  }
}

export default Practices
