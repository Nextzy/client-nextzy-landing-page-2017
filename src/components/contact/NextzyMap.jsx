import React from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

const GoogleMapContainer = withGoogleMap(props => (
  <GoogleMap defaultZoom={17} defaultCenter={{lat: 13.7456, lng: 100.5623}}>
    {<Marker {...props.marker} />}
  </GoogleMap>
))

class NextzyMap extends React.Component {
  render () {
    return (
      <GoogleMapContainer
        className="NextzyMap"
        containerElement={<div style={{width: '100%', height: `100%`}} />}
        mapElement={<div style={{width: '100%', height: `100%`}} />}
        marker={{
          position: {
            lat: 13.7456,
            lng: 100.5623
          },
          key: 'Asoke Tower',
          defaultAnimation: 2
        }}
      />
    )
  }
}

export default NextzyMap
