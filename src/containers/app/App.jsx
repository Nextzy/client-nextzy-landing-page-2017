import React, { Component } from 'react'
import Banner from '../banner/Banner'
import { nextzy, tech, subtitle } from '../../constants/banner'
import HeaderNavigation from '../navbar/HeaderNavigation'
import Practices from '../practices/Practices'
import { Grid } from 'react-bootstrap'
import banner from '../../images/banner_header.jpg'
import './App.css'

const appStyle = {
  backgroundImage: `url(${banner})`
}

class App extends Component {
  render() {
    return (
      <div className="App" style={appStyle}>
        <HeaderNavigation />
        <Grid className="containers">
          <Banner nextzy={nextzy} tech={tech} subtitle={subtitle} />
          <Practices />
        </Grid>
      </div>
    )
  }
}

export default App
