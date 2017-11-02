import React from 'react'

export default class ContentContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      leftRightPanel: false,
      reverse: false,
      style: {
        display: 'flex',
        flexWrap: 'nowrap'
      }
    }
  }

  componentWillMount () {
    if (this.state.leftRightPanel) {
      const flexWrap = this.state.reverse ? 'wrap' : 'wrap-reverse'
      this.setState(({style}) => ({
        style: {
          ...style,
          flexWrap: flexWrap
        }
      }))
    }
  }

  render () {
    return <div style={this.state.style}>{this.props.children}</div>
  }
}
