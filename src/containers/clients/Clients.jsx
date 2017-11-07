import React from 'react'
import Title from '../../components/title'
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
      <div className="Clients">
        <Title textColor="#EEEEEE">OUR CLIENTS</Title>
        <div className="clients-slider-wrapper">
          <Slider className="clients-slider" {...settings}>
            {this._renderClient(clients).map((slide, index) => (
              <div key={index}>{slide}</div>
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}
