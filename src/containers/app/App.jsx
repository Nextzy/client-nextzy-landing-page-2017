import React, { Component } from 'react'
import Banner from '../banner/Banner'
import { title, subtitle } from '../../constants/banner'
import HeaderNavigation from '../navbar/HeaderNavigation'
import Practices from '../practices/Practices'
import { Grid } from 'react-bootstrap'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNavigation />
        <Grid className="containers">
          <Banner title={title} subtitle={subtitle} />
          <Practices />
        </Grid>
      </div>
    )
  }
}

export default App
