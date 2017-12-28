import React from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

export default class NextzyMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      key: this.props.officeKey
    }
    this.getGoogleMapContainer = this.getGoogleMapContainer.bind(this)
  }

  getGoogleMapContainer () {
    return withGoogleMap(props => (
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{lat: this.state.lat, lng: this.state.lng}}
      >
        {<Marker {...props.marker} />}
      </GoogleMap>
    ))
  }

  render () {
    const GoogleMapContainer = this.getGoogleMapContainer()
    return (
      <GoogleMapContainer
        className="NextzyMap"
        containerElement={<div style={{width: '100%', height: `100%`}} />}
        mapElement={<div style={{width: '100%', height: `100%`}} />}
        marker={{
          position: {
            lat: this.state.lat,
            lng: this.state.lng
          },
          key: 'Asoke Tower',
          defaultAnimation: 2
        }}
      />
    )
  }
}
