import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience'
import Contacts from './components/contacts/Contacts'
import Testimonials from './components/testimonials/Testimonials'


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>   
      <Experience/>   
      <Portfolio/>    
      <Testimonials/>
      <Contacts/>
      <Footer/>      
    </>
  )
}

export default App