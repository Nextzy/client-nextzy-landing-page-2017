import React from 'react'

export default class ContentContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        display: 'flex',
        flexWrap: this.props.wrap || 'nowrap',
        justifyContent: this.props.justifyContent || 'center',
        alignItems: 'center',
        flexDirection: this.props.direction || 'row',
        height: 'auto',
        width: '100%',
        ...this.props.background
      }
    }
  }

  render () {
    return <div style={this.state.style}>{this.props.children}</div>
  }
}
