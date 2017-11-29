import React from 'react'
import ContactDetail from '../../components/contact/ContactDetail'
import NextzyMap from '../../components/contact/NextzyMap'
import styled from 'styled-components'

const ContactContainer = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export default class Contact extends React.Component {
  render () {
    return (
      <ContactContainer className="columns is-desktop is-gapless">
        <div className="column is-half" style={{height: '100vh'}}>
          <NextzyMap />
        </div>
        <div className="column is-half">
          <ContactDetail />
        </div>
      </ContactContainer>
    )
  }
}
