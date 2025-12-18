import React from 'react'
import Main from './section/Main'
import Navbar from './components/navbar'
import StarTypes from './section/StarTypes'
import StarGallery from './section/StarGallery'
import AboutSection from './section/About'
import ContactSection from './section/Contact'
import Footer from './components/footer'
function App() {
  return (
  <>
  <Navbar/>
    <Main />
    <StarTypes/>
    <StarGallery/>
    <AboutSection/>
    <ContactSection/>
    <Footer/>
  </>
  )
}

export default App