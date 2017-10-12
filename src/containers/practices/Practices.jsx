import React from 'react'
import Practice from '../../components/practice/Practice'
import {practices} from '../../constants/practices'
import {Col} from 'react-bootstrap'
import './Practices.css'

export default class Practices extends React.Component {
  constructor (props) {
    super(props)
    this._renderPractices = this._renderPractices.bind(this)
  }

  _renderPractices (data) {
    return (
      data &&
      data.map((practice, index) => (
        <Practice icon={practice.icon} text={practice.text} key={index} />
      ))
    )
  }

  render () {
    return (
      <Col className="Practices" id="practices" xs={12} sm={12} md={12} lg={12}>
        <Col className="title" xs={12} sm={6} md={6} lg={6}>
          <div className="text">
            <h1>OUR</h1>
            <h1>PRACTICES</h1>
          </div>
        </Col>
        <Col className="description" xs={12} sm={6} md={6} lg={6}>
          {this._renderPractices(practices)}
        </Col>
      </Col>
    )
  }
}
