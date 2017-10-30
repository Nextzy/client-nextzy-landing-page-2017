import React from 'react'
import {Col} from 'react-bootstrap'
import Member from '../../components/team/Member'
import Slider from 'react-slick'
import {members} from '../../constants/members'
import CenterTitle from '../../components/centerTitle'
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
      <Col className="Team" id="team" xs={12} sm={12} md={12} lg={12}>
        <CenterTitle>OUR TEAM</CenterTitle>
        <Slider className="member-slider" {...settings}>
          {this._renderTeamMember(members).map((slide, index) => (
            <div key={index}>{slide}</div>
          ))}
        </Slider>
      </Col>
    )
  }
}
