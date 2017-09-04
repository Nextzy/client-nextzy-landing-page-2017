import React from 'react'
import MemberDetail from './MemberDetail'
import MemberSocial from './MemberSocial'
import './Member.css'

class Member extends React.Component {
  constructor(props) {
    super(props)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = {
      hover: false
    }
  }

  onMouseEnter() {
    this.setState({
      hover: true
    })
  }

  onMouseLeave() {
    this.setState({
      hover: false
    })
  }

  render() {
    return (
      <div
        className="Member"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <img
          src={
            !this.state.hover ? this.props.image.normal : this.props.image.hover
          }
          alt="Profile"
        />
        {!this.state.hover ? (
          <MemberDetail
            first_name={this.props.first_name}
            last_name={this.props.last_name}
            position={this.props.position}
          />
        ) : (
          <MemberSocial
            facebook={this.props.facebook}
            github={this.props.github}
            linkedin={this.props.linkedin}
          />
        )}
      </div>
    )
  }
}

export default Member
