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

export default class ContactDetail extends React.Component {
  render () {
    return (
      <ContactContainer>
        <div style={{marginTop: '50px'}}>
          <Title textColor="#EEEEEE">CONTACT US</Title>
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
            <ContactTitle className="title has-text-light">
              Address
            </ContactTitle>
            <p>
              Nextzy Technologies Co., Ltd.<br />
              219/22 Asoke Towers 7<sup>th</sup>
              <br />
              Soi Sukhumvit 21 Rd., Klongtoey Nua,<br />
              Wattana, Bangkok 10110, Thailand.
            </p>
            <br />
          </div>
          <div>
            <ContactTitle className="title has-text-light">Phones</ContactTitle>
            <p>
              02-664-3364<br />
              Fax 02-664-0886<br />
            </p>
            <br />
          </div>
          <div>
            <ContactTitle className="title has-text-light">E-mail</ContactTitle>
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
