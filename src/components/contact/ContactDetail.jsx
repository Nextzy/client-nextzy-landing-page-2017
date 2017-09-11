import React from 'react'
import './ContactDetail.css'

class ContactDetail extends React.Component {
  render() {
    return (
      <div className="ContactDetail">
        <h1>CONTACT US</h1>
        <h3>Address</h3>
        <h5>
          Nextzy Technologies Co., Ltd.<br />
          219/22 Asoke Towers 7<sup>th</sup>
          <br />
          Soi Sukhumvit 21 Rd., Klongtoey Nua,<br />
          Wattana, Bangkok 10110, Thailand.
        </h5>
        <h3>Phones</h3>
        <h5>
          02-664-3364<br />
          Fax 02-664-0886<br />
        </h5>
        <h3>E-mail</h3>
        <h5>
          contact@nextzy.com<br />
          geek@nextzy.com<br />
        </h5>
      </div>
    )
  }
}

export default ContactDetail
