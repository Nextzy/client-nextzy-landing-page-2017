import React from 'react'
import {Col} from 'react-bootstrap'
import WorkTitle from '../../components/work/WorkTitle'
import Work from '../../components/work/Work'
import {work_list} from '../../constants/works'
import './Works.css'

export default class Works extends React.Component {
  constructor (props) {
    super(props)
    this._renderWork = this._renderWork.bind(this)
  }

  _renderWork (works) {
    return works.map((work, index) => (
      <Col xs={12} sm={12} md={6} lg={6} key={index}>
        <Work img={work.img} title={work.title} subtitle={work.subtitle} />
      </Col>
    ))
  }

  render () {
    return (
      <Col className="Works" id="works" xs={12} sm={12} md={12} lg={12}>
        <WorkTitle />
        {this._renderWork(work_list)}
      </Col>
    )
  }
}
