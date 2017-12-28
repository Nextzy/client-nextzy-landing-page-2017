import React from 'react'
import ContactDetail from '../../components/contact/ContactDetail'
import NextzyMap from '../../components/contact/NextzyMap'
import styled from 'styled-components'
import {office} from '../../constants/office'

const ContactContainer = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isBangkok: true
    }
    this.switchLocation = this.switchLocation.bind(this)
  }

  switchLocation () {
    this.setState({
      isBangkok: !this.state.isBangkok
    })
  }

  render () {
    return (
      <ContactContainer className="columns is-desktop is-gapless">
        <div className="column is-half" style={{height: '100vh'}}>
          <NextzyMap
            lat={
              this.state.isBangkok ? office.bangkok.lat : office.chiangmai.lat
            }
            lng={
              this.state.isBangkok ? office.bangkok.lng : office.chiangmai.lng
            }
            officeKey={
              this.state.isBangkok ? office.bangkok.key : office.chiangmai.key
            }
          />
        </div>
        <div className="column is-half">
          <ContactDetail
            switchLocation={this.switchLocation}
            isBangkok={this.state.isBangkok}
            officeAddress={
              this.state.isBangkok ? (
                office.bangkok.address
              ) : (
                office.chiangmai.address
              )
            }
          />
        </div>
      </ContactContainer>
    )
  }
}
