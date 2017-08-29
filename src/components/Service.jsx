import React from 'react'

class Service extends React.Component {
  render() {
    return (
      <section>
        <i className={this.props.icon} />
        <h3>{this.props.text}</h3>
      </section>
    )
  }
}

export default Service
