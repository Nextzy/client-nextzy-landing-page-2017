import React from 'react'
import Service from '../../components/service/Service'
import ServiceTitle from '../../components/service/ServiceTitle'
import {services} from '../../constants/services'
import ContentContainer from '../contentContainer'
// import './Services.css'

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
      <ContentContainer leftRightPanel={true} reverse={true} padding="0 0 0 0">
        <div style={{flex: 1}}>{this._renderServices(services)}</div>
        <div style={{flex: 1, height: '100%'}}>
          <ServiceTitle />
        </div>
      </ContentContainer>
    )
  }
}
