import React from 'react'
import { Col } from 'react-bootstrap'
import Work from '../../components/Work'
import { work_list } from '../../constants/works'

class Works extends React.Component {
  constructor(props) {
    super(props)
    this._renderWork = this._renderWork.bind(this)
  }

  _renderWork(works) {
    if (works !== null) {
      return works.map(work => (
        <Col xs={12} sm={12} md={6} lg={6}>
          <Work img={work.img} title={work.title} subtitle={work.subtitle} />
        </Col>
      ))
    }
  }

  render() {
    return (
      <Col className="Works" xs={12} sm={12} md={12} lg={12}>
        {this._renderWork(work_list)}
      </Col>
    )
  }
}

export default Works
