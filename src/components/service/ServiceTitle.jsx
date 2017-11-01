import React from 'react'
import serviceIcon from '../../images/icon_our_service.png'
import './ServiceTitle.css'

export default class ServiceTitle extends React.Component {
  render () {
    return (
      <div className="ServiceTitle">
        <div className="icon">
          <img
            id="ufo"
            src={serviceIcon}
            className="animated infinite swing"
            alt="Our Services"
          />
        </div>
        <div className="title">
          <h1>OUR SERVICES</h1>
        </div>
      </div>
    )
  }
}
