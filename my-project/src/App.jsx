import React from 'react'
import Head from './components/Head'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import FooterBanner from './components/FooterBanner'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Head/>
      <Navbar/>
      <Banner/>
      <About/>
      <Cards/>
      <Footer/>
      <FooterBanner/>

    </div>
  )
}

export default App
