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
      },
      padding: this.props.padding || '24px'
    }
  }

  render () {
    return (
      <div className="contentContainer" style={{padding: this.state.padding}}>
        {this.props.title ? <Title>{this.props.title}</Title> : null}
        <div className="columns is-gapless is-desktop">
          {this.props.children}
        </div>
      </div>
    )
  }
}
