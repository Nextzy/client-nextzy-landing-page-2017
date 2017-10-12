import React, {Component} from 'react'
import {nextzy, tech, subtitle} from '../../constants/banner'
import {Grid} from 'react-bootstrap'
import HeaderNavigation from '../navbar/HeaderNavigation'
import Banner from '../banner/Banner'
import Practices from '../practices/Practices'
import Services from '../services/Services'
import Works from '../works/Works'
import Clients from '../clients/Clients'
import Team from '../team/Team'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderNavigation />
        <Grid className="containers">
          <Banner nextzy={nextzy} tech={tech} subtitle={subtitle} />
          <Practices />
          <Services />
          <Works />
          <Clients />
          <Team />
          <Contact />
          <Footer />
        </Grid>
      </div>
    )
  }
}
