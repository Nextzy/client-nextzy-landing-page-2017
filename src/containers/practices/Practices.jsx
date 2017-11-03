import React from 'react'
import Practice from '../../components/practice/Practice'
import {practices} from '../../constants/practices'
import ContentContainer from '../../containers/contentContainer'
import Title from '../../components/title'

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
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center'
          }}
        >
          <Title textAlign="start">
            OUR<br />
            PRACTICES
          </Title>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            {this._renderPractices(practices)}
          </div>
        </div>
      </ContentContainer>
    )
  }
}
