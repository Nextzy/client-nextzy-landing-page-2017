import React from 'react'
import CompanyName from '../../components/footer/CompanyName'
import FooterContacts from '../../components/footer/FooterContacts'
import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  padding: 30px;
  background: #000000;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-content: center;
`

export default class Footer extends React.Component {
  render () {
    return (
      <FooterContainer>
        <CompanyName />
        <FooterContacts />
      </FooterContainer>
    )
  }
}
