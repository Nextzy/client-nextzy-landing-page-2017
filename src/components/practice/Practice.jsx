import React from 'react'
// import './Practice.css'

export default class Practice extends React.Component {
  render () {
    return (
      <div
        className="Practice"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '40px 0 40px 0'
        }}
      >
        <img
          style={{paddingRight: '20px', height: '60px'}}
          src={this.props.icon}
          alt={this.props.text}
        />
        <h4 className="subtitle is-5">{this.props.text}</h4>
      </div>
    )
  }
}
