import React from 'react'
import banner from '../../images/banner_header.jpg'
import './Banner.css'

class Banner extends React.Component {
  render() {
    return (
      <section className="Banner" id="banner">
        <div className="top-banner">
          <img className="background-image" src={banner} alt="Nextzy" />
          <div className="description">
            <h1 className="text-title">{this.props.nextzy}</h1>
            <h1 className="text-title">{this.props.tech}</h1>
            <h6 className="text-subtitle">{this.props.subtitle}</h6>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner
