import React from 'react'
import './Client.css'

class Client extends React.Component {
  render() {
    return (
      <div className="Client">
        <div className="wrapper">
          <img src={this.props.img} alt={this.props.name} />
        </div>
      </div>
    )
  }
}

export default Client
