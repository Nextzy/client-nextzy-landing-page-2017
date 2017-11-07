import React from 'react'
import Title from '../title'
import './ContactDetail.css'

export default class ContactDetail extends React.Component {
  render () {
    return (
      <div className="content" style={{color: '#EEEEEE', padding: '12px'}}>
        <Title textColor="#EEEEEE">
          <b>CONTACT US</b>
        </Title>
        <h3 className="title has-text-light">Address</h3>
        <p>
          Nextzy Technologies Co., Ltd.<br />
          219/22 Asoke Towers 7<sup>th</sup>
          <br />
          Soi Sukhumvit 21 Rd., Klongtoey Nua,<br />
          Wattana, Bangkok 10110, Thailand.
        </p>
        <h3 className="title has-text-light">Phones</h3>
        <p>
          02-664-3364<br />
          Fax 02-664-0886<br />
        </p>
        <h3 className="title has-text-light">E-mail</h3>
        <p>
          contact@nextzy.com<br />
          geek@nextzy.com<br />
        </p>
      </div>
    )
  }
}
