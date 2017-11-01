import React from 'react'
import CompanyName from '../../components/footer/CompanyName'
import FooterContacts from '../../components/footer/FooterContacts'
import './Footer.css'

export default class Footer extends React.Component {
  render () {
    return (
      <div className="Footer">
        <CompanyName />
        <FooterContacts />
      </div>
    )
  }
}
