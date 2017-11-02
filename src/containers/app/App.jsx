import React, {Component} from 'react'
import {nextzy, tech, subtitle} from '../../constants/banner'
import HeaderNavigation from '../navbar/HeaderNavigation'
import Banner from '../banner/Banner'
import Practices from '../practices/Practices'
import Services from '../services/Services'
import Works from '../works/Works'
import Clients from '../clients/Clients'
import Team from '../team/Team'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Scroll from 'react-scroll'
import 'bulma/css/bulma.css'
import './style.css'

const Element = Scroll.Element

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderNavigation />
        <section className="hero">
          <section className="hero-body App-content">
            <Element name="banner" className="App-element">
              <Banner nextzy={nextzy} tech={tech} subtitle={subtitle} />
            </Element>
            <Practices />
            <Element name="services" className="App-element">
              <Services />
            </Element>
            <Element name="works" className="App-element">
              <Works />
            </Element>
            <Element name="team" className="App-element">
              <Team />
            </Element>
            <Clients />
            <Element name="contact" className="App-element">
              <Contact />
            </Element>
            <Footer />
          </section>
        </section>
      </div>
    )
  }
}
