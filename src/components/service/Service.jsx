import React from 'react'
import './Service.css'
import {normalStyle, hoverStyle} from '../../constants/servicesStyle'

export default class Service extends React.Component {
  constructor (props) {
    super(props)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = {
      icon: this.props.icon.icon_normal,
      componentStyle: normalStyle
    }
  }

  onMouseEnter () {
    this.setState({
      icon: this.props.icon.icon_hover,
      componentStyle: hoverStyle
    })
  }

  onMouseLeave () {
    this.setState({
      icon: this.props.icon.icon_normal,
      componentStyle: normalStyle
    })
  }

  render () {
    return (
      <div
        className="Service"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={this.state.componentStyle}
      >
        <div className="iconImage">
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
