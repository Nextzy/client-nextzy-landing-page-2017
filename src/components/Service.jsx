import React from 'react'
import './Service.css'

class Service extends React.Component {
  render() {
    return (
      <div className="Services">
        <img src={this.props.icon} alt={this.props.text} />
        <h3>{this.props.text}</h3>
      </div>
    )
  }
}

export default Service
