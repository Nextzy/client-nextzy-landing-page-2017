import React from 'react'

export default class Title extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textStyle: {
        color: this.props.textColor || '#333333',
        letterSpacing: '0.2em',
        textAlign: this.props.textAlign || 'center'
      }
    }
  }

  render () {
    return (
      <h1 className="title is-1" style={this.state.textStyle}>
        {this.props.children}
      </h1>
    )
  }
}
