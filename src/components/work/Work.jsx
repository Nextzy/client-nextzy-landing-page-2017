import React from 'react'
import './Work.css'

class Work extends React.Component {
  render() {
    return (
      <div className="Work">
        <div className="preview-image">
          <img src={this.props.img} alt={this.props.title} />
        </div>
        <div className="detail">
          <h2>{this.props.title}</h2>
          <h3>{this.props.subtitle}</h3>
        </div>
      </div>
    )
  }
}

export default Work
