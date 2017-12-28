import React from 'react'
import Title from '../title'
import styled from 'styled-components'

const ContactContainer = styled.div`
  color: #eeeeee;
  padding: 12px;
  background: linear-gradient(45deg, #181a41, #03375f);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`

const ContactTitle = styled.h3`
  font-weight: bold !important;
  @media screen and (min-width: 425px) {
    font-size: 18pt;
  }
  @media screen and (min-width: 768px) {
    font-size: 26pt;
  }
  @media screen and (min-width: 1024px) {
    font-size: 22pt;
  }
`

const newline = '\n'

export default class ContactDetail extends React.Component {
  nl2br (text) {
    if (typeof text === 'number') {
      return text
    } else if (typeof text !== 'string') {
      return ''
    }

    let lines = text.split(newline)
    return lines.map(function (line, i) {
      return (
        <span key={i}>
          {line}
          <br />
        </span>
      )
    })
  }

  render () {
    return (
      <ContactContainer>
        <div style={{marginTop: '30px'}}>
          <Title textColor="#EEEEEE">CONTACT US</Title>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px'
          }}
        >
          <button
            style={{width: '190px', height: '60px'}}
            className="button is-link is-inverted is-outlined"
            onClick={this.props.switchLocation}
          >
            {this.props.isBangkok ? `Live in Chiang Mai?` : `Live in Bangkok?`}
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '20px',
            height: '100%'
          }}
        >
          <div>
            <ContactTitle
              className="title has-text-light"
              style={{marginBottom: '10px'}}
            >
              Address
            </ContactTitle>
            <p>{this.nl2br(this.props.officeAddress)}</p>
            <br />
          </div>
          <div>
            <ContactTitle
              className="title has-text-light"
              style={{marginBottom: '10px'}}
            >
              Phones
            </ContactTitle>
            <p>
              02-664-3364<br />
              Fax 02-664-0886<br />
            </p>
            <br />
          </div>
          <div>
            <ContactTitle
              className="title has-text-light"
              style={{marginBottom: '10px'}}
            >
              E-mail
            </ContactTitle>
            <p>
              contact@nextzy.com<br />
              geek@nextzy.com<br />
            </p>
          </div>
        </div>
      </ContactContainer>
    )
  }
}
