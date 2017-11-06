import React from 'react'
import ContentContainer from '../contentContainer'
import Title from '../../components/title'
import banner from '../../images/bg-head.png'
import astronaut from '../../images/astronaut.png'

export default class Banner extends React.Component {
  render () {
    return (
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: 'norepeat',
          backgroundSize: 'cover',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ContentContainer leftRightPanel="true">
          <div style={{padding: '20px'}}>
            <img
              id="astronaut"
              className="animated infinite pulse"
              src={astronaut}
              alt="Astronaut"
              style={{height: '160px'}}
            />
          </div>
          <div
            className="companyDescription"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexDirection: 'column'
            }}
          >
            <Title textColor="#EEEEEE" textAlign="start">
              {this.props.nextzy}
              <br />
              {this.props.tech}
            </Title>
            <h2 className="subtitle" style={{color: '#EEEEEE'}}>
              {this.props.subtitle}
            </h2>
          </div>
        </ContentContainer>
      </div>
    )
  }
}
