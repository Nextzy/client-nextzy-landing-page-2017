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
      hover: false,
      facebook: this.props.facebook ? this.props.facebook : null,
      github: this.props.github ? this.props.github : null,
      linkedin: this.props.linkedin ? this.props.linkedin : null
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
        {!this.state.hover ? (
          <div className="profile-wrapper normal">
            <img src={this.props.image.normal} alt="Profile" />
          </div>
        ) : (
          <div className="profile-wrapper hover">
            <img src={this.props.image.hover} alt="Profile" />
          </div>
        )}
        {!this.state.hover ? (
          <MemberDetail
            first_name={this.props.first_name}
            last_name={this.props.last_name}
            position={this.props.position}
          />
        ) : (
          <MemberSocial
            facebook={this.state.facebook}
            github={this.state.github}
            linkedin={this.state.linkedin}
          />
        )}
      </div>
    )
  }
}

export default Member
