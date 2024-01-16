import React from 'react'
import About from './components/About'
import Starts from './components/Starts'
import Section from './components/Section'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Contact from './components/Contact'

export default function Page() {
  return (
    <>
      <Navbar />
      <Starts />
      <Section />
      <About />
      <Slider />
      <Footer />
    </>
  )
}
