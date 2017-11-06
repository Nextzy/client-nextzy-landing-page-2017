import React from 'react'
import ContactDetail from '../../components/contact/ContactDetail'
import NextzyMap from '../../components/contact/NextzyMap'
import ContentContainer from '../contentContainer'
import './Contact.css'

export default class Contact extends React.Component {
  render () {
    return (
      <ContentContainer leftRightPanel={true}>
        <div className="map">
          <NextzyMap />
        </div>
        <div style={{background: 'linear-gradient(45deg, #181A41, #03375F)'}}>
          <ContactDetail />
        </div>
      </ContentContainer>
    )
  }
}
