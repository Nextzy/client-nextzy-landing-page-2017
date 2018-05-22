import React from 'react'
import Work from '../../components/work/Work'
import {workList} from '../../constants/works'
import ContentContainer from '../contentContainer'

export default class Works extends React.Component {
  constructor (props) {
    super(props)
    this._renderWork = this._renderWork.bind(this)
  }

  _renderWork (works) {
    return works.map((work, index) => (
      <div key={index}>
        <Work img={work.img} title={work.title} subtitle={work.subtitle} />
      </div>
    ))
  }

  render () {
    return (
      <ContentContainer
        title="OUR WORKS"
        alignItems="flex-start"
        padding="0px"
        leftRightPanel={true}
      >
        {this._renderWork(workList)}
      </ContentContainer>
    )
  }
}
