import React from 'react'
// import './CompanyName.css'

export default class CompanyName extends React.Component {
  render () {
    return (
      <div
        className="CompanyName"
        style={{
          flex: 3,
          display: 'flex',
          alignItems: 'center',
          color: '#EEEEEE'
        }}
      >
        <h4>&copy; 2017 Nextzy Technologies Co., Ltd.</h4>
      </div>
    )
  }
}
