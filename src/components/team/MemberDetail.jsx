import React from 'react'
import './MemberDetail.css'

export default class MemberDetail extends React.Component {
  render () {
    return (
      <div className="MemberDetail">
        <h5>
          {this.props.first_name} {this.props.last_name}
        </h5>
        <h6>{this.props.position}</h6>
      </div>
    )
  }
}
