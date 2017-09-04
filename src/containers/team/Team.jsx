import React from 'react'
import { Col } from 'react-bootstrap'
import Member from '../../components/member/Member'
import generator from 'generate-password'
import Slider from 'react-slick'
import { members } from '../../constants/members'

const settings = {
  autoplay: true,
  infinite: true,
  dots: true,
  speed: 500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 100000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

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
      <Col xs={12} sm={12} md={12} lg={12}>
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
