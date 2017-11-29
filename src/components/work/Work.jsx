import React from 'react'
import styled from 'styled-components'

const WorkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    border-bottom: 1px solid #e2e2e2;
  }

  @media only screen and (min-width: 1024px) {
    margin: 16px;
  }
`

const WorkPreviewContainer = styled.div`
  flex-grow: 1;
  display: flex;
  background: #333;
  height: 250px;
  width: 250px;
  overflow: hidden;
  justify-content: center;
`

const WorkPreviewImage = styled.img`height: 100%;`

const WorkDetail = styled.div`
  flex-grow: 3;
  display: flex;
  padding: 20px;
  width: 380px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #eeeeee;
`

export default class Work extends React.Component {
  render () {
    return (
      <WorkContainer>
        <WorkPreviewContainer>
          <WorkPreviewImage src={this.props.img} alt={this.props.title} />
        </WorkPreviewContainer>
        <WorkDetail>
          <h2 className="title">{this.props.title}</h2>
          <h3 className="subtitle">{this.props.subtitle}</h3>
        </WorkDetail>
      </WorkContainer>
    )
  }
}
