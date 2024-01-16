import React from 'react'
import Navbar from './components/Navbar'
import Starts from './components/Starts'
import About from './components/About'
import Team from './components/Team'
import Footer from '@/components/global/Footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <Starts />
      <About />
      <Team />
      <Footer />
    </div>
  )
}
