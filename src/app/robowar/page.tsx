import React from 'react'
import Navbar from '@/components/Events/RoboWar/EventsNavbar'
import RoboWar from '@/components/Events/RoboWar/RoboWar'
import About from '@/components/Events/RoboWar/About'
import Team from '@/components/Events/RoboWar/Team'
import Footer from '@/components/global/Footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <RoboWar />
      <About />
      <Team />
      <Footer />
    </div>
  )
}
