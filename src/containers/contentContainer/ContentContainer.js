import React from 'react'
import Title from '../../components/title'

export default class ContentContainer extends React.Component {
  constructor (props) {
    super(props)
    const wrap = `${this.props.leftRightPanel
      ? `wrap${this.props.reverse ? '-reverse' : ''}`
      : undefined}`
    const direction = `${this.props.leftRightPanel ? 'row' : 'column'}`
    this.state = {
      style: {
        display: 'flex',
        flexWrap: wrap || 'nowrap',
        justifyContent: this.props.justifyContent || 'center',
        alignItems: 'center',
        flexDirection: direction
      }
    }
  }

  render () {
    return (
      <div className="container is-fluid" style={{padding: '24px'}}>
        {this.props.title ? <Title>{this.props.title}</Title> : null}
        <div style={this.state.style}>{this.props.children}</div>
      </div>
    )
  }
}
