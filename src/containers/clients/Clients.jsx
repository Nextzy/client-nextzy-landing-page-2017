import React from 'react'
import {Col} from 'react-bootstrap'
import ClientsTitle from '../../components/clients/ClientsTitle'
import Slider from 'react-slick'
import Client from '../../components/clients/Client'
import {clients} from '../../constants/clients'
import './Clients.css'
import {settings} from './sliderSetting'

export default class Clients extends React.Component {
  constructor (props) {
    super(props)
    this._renderClient = this._renderClient.bind(this)
  }

  _renderClient (data) {
    return (
      data &&
      data.map((client, index) => (
        <Client key={index} img={client.img} name={client.name} />
      ))
    )
  }

  render () {
    return (
      <Col className="Clients" xs={12} sm={12} md={12} lg={12}>
        <ClientsTitle />
        <Col className="clients-slider-wrapper" xs={12} sm={12} md={12} lg={12}>
          <Slider className="clients-slider" {...settings}>
            {this._renderClient(clients).map((slide, index) => (
              <div key={index}>{slide}</div>
            ))}
          </Slider>
        </Col>
      </Col>
    )
  }
}
