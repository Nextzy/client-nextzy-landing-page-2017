import React from 'react'
import Practice from '../../components/practice/Practice'
import {practices} from '../../constants/practices'
import ContentContainer from '../../containers/contentContainer'
import Title from '../../components/title'
import styled from 'styled-components'

const PracticeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PracticesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

const PracticesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default class Practices extends React.Component {
  constructor (props) {
    super(props)
    this._renderPractices = this._renderPractices.bind(this)
  }

  _renderPractices (data) {
    return (
      data &&
      data.map((practice, index) => (
        <Practice
          style={{flexGrow: 1}}
          icon={practice.icon}
          text={practice.text}
          key={index}
        />
      ))
    )
  }

  render () {
    return (
      <ContentContainer leftRightPanel={true}>
        <PracticeTitleContainer>
          <Title textAlign="start">
            OUR<br />
            PRACTICES
          </Title>
        </PracticeTitleContainer>
        <div className="column is-half">
          <PracticesContainer>
            <PracticesContent>
              {this._renderPractices(practices)}
            </PracticesContent>
          </PracticesContainer>
        </div>
      </ContentContainer>
    )
  }
}
