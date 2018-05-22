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
import styled from 'styled-components'

const Element = Scroll.Element

const AppContainer = styled.div`font-family: 'Montserrat';`

const ContentContainer = styled.section`padding: 0;`

const Content = styled.div`padding-top: 50px;`

export default class App extends Component {
  render () {
    return (
      <AppContainer>
        <HeaderNavigation />
        <section className="hero">
          <ContentContainer>
            <Element name="banner">
              <Content>
                <Banner nextzy={nextzy} tech={tech} subtitle={subtitle} />
              </Content>
            </Element>
            <Practices />
            <Element name="services">
              <Content>
                <Services />
              </Content>
            </Element>
            <Element name="works">
              <Content>
                <Works />
              </Content>
            </Element>
            <Clients />
            <Element name="team">
              <Content>
                <Team />
              </Content>
            </Element>
            <Element name="contact">
              <Content>
                <Contact />
              </Content>
            </Element>
            <Footer />
          </ContentContainer>
        </section>
      </AppContainer>
    )
  }
}
