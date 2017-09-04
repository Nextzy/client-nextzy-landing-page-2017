import React from 'react'
import { Col } from 'react-bootstrap'
import ClientsTitle from '../../components/ClientsTitle'
import Slider from 'react-slick'
import Client from '../../components/Client'
import { clients } from '../../constants/clients'
import './Clients.css'
import generator from 'generate-password'

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

class Clients extends React.Component {
  constructor(props) {
    super(props)
    this._renderClient = this._renderClient.bind(this)
  }

  _renderClient(data) {
    if (data !== null) {
      return data.map(client => (
        <Client
          key={generator.generate({ length: 18, numbers: true, symbols: true })}
          img={client.img}
          name={client.name}
        />
      ))
    }
  }

  render() {
    return (
      <Col className="Clients" xs={12} sm={12} md={12} lg={12}>
        <ClientsTitle />
        <Col className="clients-slider-wrapper" xs={12} sm={12} md={12} lg={12}>
          <Slider className="clients-slider" {...settings}>
            {this._renderClient(clients).map(slide => (
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
      </Col>
    )
  }
}

export default Clients
