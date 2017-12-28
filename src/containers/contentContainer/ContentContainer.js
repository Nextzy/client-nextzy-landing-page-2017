import React from 'react'
import Title from '../../components/title'

export default class ContentContainer extends React.Component {
  constructor (props) {
    super(props)
    const direction = `${this.props.leftRightPanel ? 'row' : 'column'}`
    this.state = {
      style: {
        justifyContent: this.props.justifyContent || 'center',
        alignItems: this.props.alignItems || 'center',
        alignContent: this.props.alignContent || 'center',
        flexWrap: 'wrap',
        flexDirection: direction
      },
      padding: this.props.padding || '24px'
    }
  }

  render () {
    return (
      <div className="contentContainer" style={{padding: this.state.padding}}>
        {this.props.title ? <Title>{this.props.title}</Title> : null}
        <div className="columns is-desktop is-gapless" style={this.state.style}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
