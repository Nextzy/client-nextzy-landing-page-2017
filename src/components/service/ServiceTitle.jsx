import React from 'react'
import serviceIcon from '../../images/icon_our_service.png'
import Title from '../title'
import './ServiceTitle.css'

export default class ServiceTitle extends React.Component {
  render () {
    return (
      <div className="ServiceTitle" style={{height: '100%'}}>
        <img
          id="ufo"
          src={serviceIcon}
          className="animated infinite swing"
          alt="Our Services"
          style={{height: '200px'}}
        />
        <Title textColor="#EEEEEE">OUR SERVICES</Title>
      </div>
    )
  }
}
