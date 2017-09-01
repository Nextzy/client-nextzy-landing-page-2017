import React from 'react'
import { Col } from 'react-bootstrap'
import Slider from 'react-slick'
import Client from '../../components/Client'
import { clients } from '../../constants/clients'
import './Clients.css'

const settings = {
  autoplay: true,
  infinite: true,
  dots: true,
  speed: 500,
  draggable: true,
  fade: true,
  vertical: false
}

class Clients extends React.Component {
  constructor(props) {
    super(props)
    this._renderClient = this._renderClient.bind(this)
  }

  _renderClient(data) {
    if (data !== null) {
      return data.map(client => (
        <Client key={client.name} img={client.img} name={client.name} />
      ))
    }
  }

  render() {
    return (
      <Col className="Clients" xs={12} sm={12} md={12} lg={12}>
        <Slider {...settings}>{this._renderClient(clients)}</Slider>
      </Col>
    )
  }
}

export default Clients
