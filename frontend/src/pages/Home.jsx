import React from 'react'
import Navbar from '../Homepage/Header/Navbar'
import Hero from '../Homepage/Header/Hero'
import About from '../Homepage/About/About'
import News from '../Homepage/News/News'
import Footer from '../Homepage/Footer/Footer'
import Stats from '../Homepage/Header/Stats'
import Executives from '../Homepage/Executives/Executives'
import Executivemobile from '../Homepage/Executives/Executivemobile'
import Aboutcomponent from '../Homepage/Aboutpresident/Aboutcomponent'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Stats/>
      <About/>
      <News/>
      <Executives/>
      <Executivemobile/>
      <Aboutcomponent/>
      <Footer/>
    </div>
  )
}

export default Home