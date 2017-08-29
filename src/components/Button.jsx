import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button
        type={this.props.btn_type}
        name={this.props.btn_name}
        disabled={this.props.btn_disabled}
      >
        {this.props.btn_text}
      </button>
    )
  }
}

export default Button
