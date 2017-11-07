import React from 'react'
import serviceIcon from '../../images/icon_our_service.png'
import Title from '../title'

export default class ServiceTitle extends React.Component {
  render () {
    return (
      <div
        className="ServiceTitle"
        style={{
          background:
            'radial-gradient(circle at center, #03375F 0%, #181A41 100%)',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <img
          id="ufo"
          src={serviceIcon}
          className="animated infinite swing"
          alt="Our Services"
          style={{height: '200px', animationDuration: '4s'}}
        />
        <Title textColor="#EEEEEE">OUR SERVICES</Title>
      </div>
    )
  }
}
