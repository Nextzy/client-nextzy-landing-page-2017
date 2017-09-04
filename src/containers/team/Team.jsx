import React from 'react'
import { Col } from 'react-bootstrap'
import Member from '../../components/team/Member'
import generator from 'generate-password'
import Slider from 'react-slick'
import { members } from '../../constants/members'
import TeamTitle from '../../components/team/TeamTitle'
import { settings } from './sliderSetting'
import './Team.css'

class Team extends React.Component {
  constructor(props) {
    super(props)
    this._renderTeamMember = this._renderTeamMember.bind(this)
  }

  _renderTeamMember(data) {
    if (data !== null) {
      return data.map(member => (
        <Member
          key={generator.generate({ length: 18, numbers: true, symbols: true })}
          first_name={member.first_name}
          last_name={member.last_name}
          position={member.position}
          image={member.image}
          facebook={member.facebook}
          github={member.github}
          linkedin={member.linkedin}
        />
      ))
    }
  }

  render() {
    return (
      <Col className="Team" id="team" xs={12} sm={12} md={12} lg={12}>
        <TeamTitle />
        <Slider className="member-slider" {...settings}>
          {this._renderTeamMember(members).map(slide => (
            <div
              key={generator.generate({
                length: 18,
                numbers: true,
                symbols: true
              })}
            >
              {slide}
            </div>
          ))}
        </Slider>
      </Col>
    )
  }
}

export default Team
