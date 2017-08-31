import React, { Component } from 'react'
import Banner from '../banner/Banner'
import { nextzy, tech, subtitle } from '../../constants/banner'
import HeaderNavigation from '../navbar/HeaderNavigation'
import Practices from '../practices/Practices'
import { Grid } from 'react-bootstrap'
import Services from '../services/Services'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNavigation />
        <Grid className="containers">
          <Banner nextzy={nextzy} tech={tech} subtitle={subtitle} />
          <Practices />
          <Services />
        </Grid>
      </div>
    )
  }
}

export default App
