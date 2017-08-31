import React from 'react'

class Service extends React.Component {
  render() {
    return (
      <div className="Service">
        <img src={this.props.icon} alt={this.props.name} />
        {this.props.name}
        {this.props.description}
      </div>
    )
  }
}

export default Service
