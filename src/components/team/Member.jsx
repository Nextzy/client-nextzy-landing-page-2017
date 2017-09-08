import React from 'react'
import MemberDetail from './MemberDetail'
import MemberSocial from './MemberSocial'
import './Member.css'
import { CSSTransitionGroup } from 'react-transition-group'

class Member extends React.Component {
  constructor(props) {
    super(props)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = {
      hover: false,
      facebook: this.props.facebook ? this.props.facebook : null,
      github: this.props.github ? this.props.github : null,
      linkedin: this.props.linkedin ? this.props.linkedin : null,
      image: this.props.image.normal
    }
  }

  onMouseEnter() {
    this.setState({
      hover: true,
      image: this.props.image.hover
    })
  }

  onMouseLeave() {
    this.setState({
      hover: false,
      image: this.props.image.normal
    })
  }

  render() {
    return (
      <div
        className="Member"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <CSSTransitionGroup
          className="cross-fade-wrapper"
          transitionName="cross-fade"
        >
          <img src={this.state.image} alt="Profile" />
        </CSSTransitionGroup>
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
