import React from 'react'
import './style.css'

export default class CenterTitle extends React.Component {
  render () {
    return (
      <div className="CenterTitle">
        <h1 style={{color: this.props.textColor || '#333333'}}>
          {this.props.children}
        </h1>
      </div>
    )
  }
}
