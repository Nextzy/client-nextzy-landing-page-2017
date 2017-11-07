import React from 'react'
import CompanyName from '../../components/footer/CompanyName'
import FooterContacts from '../../components/footer/FooterContacts'
import './Footer.css'

export default class Footer extends React.Component {
  render () {
    return (
      <div
        style={{
          display: 'flex',
          padding: '30px',
          background: '#000000',
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'wrap-reverse',
          alignContent: 'center'
        }}
      >
        <CompanyName />
        <FooterContacts />
      </div>
    )
  }
}
