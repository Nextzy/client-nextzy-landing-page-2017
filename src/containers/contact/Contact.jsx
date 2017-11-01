import React from 'react'
import ContactDetail from '../../components/contact/ContactDetail'
import NextzyMap from '../../components/contact/NextzyMap'
import './Contact.css'

export default class Contact extends React.Component {
  render () {
    return (
      <div className="Contact" id="contact">
        <div className="map">
          <NextzyMap />
        </div>
        <div className="detail">
          <ContactDetail />
        </div>
      </div>
    )
  }
}
