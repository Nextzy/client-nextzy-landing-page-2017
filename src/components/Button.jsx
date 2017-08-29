import React from 'react'

class Button extends React.Component {
  render() {
    return <button type={this.props.btn_type}>{this.props.btn_text}</button>
  }
}

export default Button
