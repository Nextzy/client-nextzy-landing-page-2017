import React from 'react'
import Member from '../../components/team/Member'
import Slider from 'react-slick'
import {members} from '../../constants/members'
import Title from '../../components/title'
import {settings} from './sliderSetting'
import './Team.css'

export default class Team extends React.Component {
  constructor (props) {
    super(props)
    this._renderTeamMember = this._renderTeamMember.bind(this)
  }

  _renderTeamMember (data) {
    return (
      data &&
      data.map((member, index) => (
        <Member
          key={index}
          first_name={member.first_name}
          last_name={member.last_name}
          position={member.position}
          image={member.image}
          facebook={member.facebook}
          github={member.github}
          linkedin={member.linkedin}
        />
      ))
    )
  }

  render () {
    return (
      <div className="Team" id="team">
        <Title>OUR TEAM</Title>
        <Slider className="member-slider" {...settings}>
          {this._renderTeamMember(members).map((slide, index) => (
            <div key={index}>{slide}</div>
          ))}
        </Slider>
      </div>
    )
  }
}
