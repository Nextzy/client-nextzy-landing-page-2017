import React from 'react'
import Title from '../../components/title'
import Slider from 'react-slick'
import Client from '../../components/clients/Client'
import {clients} from '../../constants/clients'
import {settings} from './sliderSetting'
import styled from 'styled-components'
import './Clients.css'

const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(45deg, #181a41, #03375f);
  padding: 50px;
`

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
      <ClientsContainer>
        <Title textColor="#EEEEEE">OUR CLIENTS</Title>
        <div className="clients-slider-wrapper">
          <Slider className="clients-slider" {...settings}>
            {this._renderClient(clients).map((slide, index) => (
              <div key={index}>{slide}</div>
            ))}
          </Slider>
        </div>
      </ClientsContainer>
    )
  }
}
