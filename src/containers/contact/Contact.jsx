import React from 'react'
import ContactDetail from '../../components/contact/ContactDetail'
import NextzyMap from '../../components/contact/NextzyMap'

export default class Contact extends React.Component {
  render () {
    return (
      <div className="columns is-desktop is-gapless is-mobile-reverse">
        <div className="column is-half" style={{height: '100vh'}}>
          <NextzyMap />
        </div>
        <div className="column is-half">
          <ContactDetail />
        </div>
      </div>
    )
  }
}
