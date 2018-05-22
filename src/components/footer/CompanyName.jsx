import React from 'react'
import styled from 'styled-components'

const CompanyContainer = styled.div`
  display: flex;
  flex: 3;
  align-items: center;
  color: #eeeeee;

  @media only screen and (max-width: 425px) {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    color: #eeeeee;
  }
`

export default class CompanyName extends React.Component {
  render () {
    return (
      <CompanyContainer>
        <h4>&copy; 2017 Nextzy Technologies Co., Ltd.</h4>
      </CompanyContainer>
    )
  }
}
