import React from 'react'
import Practice from '../../components/practice/Practice'
import {practices} from '../../constants/practices'
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
      <div className="Practices" id="practices">
        <div className="title">
          <div className="text">
            <h1>OUR</h1>
            <h1>PRACTICES</h1>
          </div>
        </div>
        <div className="description">{this._renderPractices(practices)}</div>
      </div>
    )
  }
}
