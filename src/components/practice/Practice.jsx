import React from 'react'
import './Practice.css'

class Practice extends React.Component {
  render() {
    return (
      <div className="Practice">
        <img src={this.props.icon} alt={this.props.text} />
        <h3>{this.props.text}</h3>
      </div>
    )
  }
}

export default Practice
