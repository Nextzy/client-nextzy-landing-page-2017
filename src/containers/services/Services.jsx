import React from 'react'
import Service from '../../components/service/Service'
import ServiceTitle from '../../components/service/ServiceTitle'
import {services} from '../../constants/services'
import styled from 'styled-components'

const ServicesContainer = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export default class Services extends React.Component {
  constructor (props) {
    super(props)
    this._renderServices = this._renderServices.bind(this)
  }

  _renderServices (data) {
    return (
      data &&
      data.map((service, index) => (
        <Service
          key={index}
          icon={service.icon}
          name={service.name}
          description={service.description}
        />
      ))
    )
  }

  render () {
    return (
      <ServicesContainer className="columns is-desktop is-gapless">
        <div className="column is-half">{this._renderServices(services)}</div>
        <div className="column is-half">
          <ServiceTitle />
        </div>
      </ServicesContainer>
    )
  }
}
