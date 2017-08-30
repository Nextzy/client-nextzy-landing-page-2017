import React from 'react'
import './Banner.css'

class Banner extends React.Component {
  render() {
    return (
      <div className="top-banner">
        <div className="description">
          <h1 className="text-title">{this.props.title}</h1>
          <h6 className="text-title">{this.props.subtitle}</h6>
        </div>
      </div>
    )
  }
}

export default Banner
