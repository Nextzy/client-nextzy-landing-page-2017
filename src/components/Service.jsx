import React from 'react'
import './Service.css'

class Service extends React.Component {
  render() {
    return (
      <div className="Service">
        <div className="icon">
          <img src={this.props.icon.icon_normal} alt={this.props.name} />
        </div>
        <div className="name">
          <h3>{this.props.name}</h3>
        </div>
        <div className="description">
          <h6>{this.props.description}</h6>
        </div>
      </div>
    )
  }
}

export default Service
