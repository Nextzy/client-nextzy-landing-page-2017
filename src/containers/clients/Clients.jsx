import React from 'react'
import { Col } from 'react-bootstrap'
import ClientsTitle from '../../components/clients/ClientsTitle'
import Slider from 'react-slick'
import Client from '../../components/clients/Client'
import { clients } from '../../constants/clients'
import './Clients.css'
import generator from 'generate-password'
import { settings } from './sliderSetting'

class Clients extends React.Component {
  constructor(props) {
    super(props)
    this._renderClient = this._renderClient.bind(this)
  }

  _renderClient(data) {
    if (data) {
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
