import React from 'react'
import './Work.css'

export default class Work extends React.Component {
  render () {
    return (
      <div className="Work">
        <div className="preview-image">
          <img src={this.props.img} alt={this.props.title} />
        </div>
        <div className="detail">
          <h2 className="title">{this.props.title}</h2>
          <h3 className="subtitle">{this.props.subtitle}</h3>
        </div>
      </div>
    )
  }
}
