import React from 'react'
import CenterTitle from '../../components/centerTitle'
import Work from '../../components/work/Work'
import {workList} from '../../constants/works'
import './Works.css'

export default class Works extends React.Component {
  constructor (props) {
    super(props)
    this._renderWork = this._renderWork.bind(this)
  }

  _renderWork (works) {
    return works.map((work, index) => (
      <div key={index}>
        <Work img={work.img} title={work.title} subtitle={work.subtitle} />
      </div>
    ))
  }

  render () {
    return (
      <div className="Works" id="works">
        <CenterTitle>OUR WORKS</CenterTitle>
        {this._renderWork(workList)}
      </div>
    )
  }
}
