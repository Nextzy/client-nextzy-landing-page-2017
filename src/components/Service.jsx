import React from 'react'
import './Service.css'

const normalStyle = {
  background: '#eee',
  color: '#333'
}

const hoverStyle = {
  background: '#0D4868',
  color: '#FAFAFA'
}

class Service extends React.Component {
  constructor(props) {
    super(props)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = {
      icon: this.props.icon.icon_normal,
      componentStyle: normalStyle
    }
  }

  onMouseEnter() {
    this.setState({
      icon: this.props.icon.icon_hover,
      componentStyle: hoverStyle
    })
  }

  onMouseLeave() {
    this.setState({
      icon: this.props.icon.icon_normal,
      componentStyle: normalStyle
    })
  }

  render() {
    return (
      <div
        className="Service"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={this.state.componentStyle}
      >
        <div className="icon">
          <img src={this.state.icon} alt={this.props.name} />
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
