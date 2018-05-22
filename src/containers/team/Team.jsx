import React from 'react'
import Member from '../../components/team/Member'
import Slider from 'react-slick'
import {members} from '../../constants/members'
import Title from '../../components/title'
import {settings} from './sliderSetting'
import styled from 'styled-components'

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`

const TeamTitle = styled.div`padding-bottom: 50px;`

const TeamMembers = styled.div`padding: 0px 26px 20px 26px;`

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
      <TeamContainer>
        <TeamTitle>
          <Title>OUR TEAM</Title>
        </TeamTitle>
        <TeamMembers>
          <Slider className="memberSlider" {...settings}>
            {this._renderTeamMember(members).map((slide, index) => (
              <div key={index}>{slide}</div>
            ))}
          </Slider>
        </TeamMembers>
      </TeamContainer>
    )
  }
}
