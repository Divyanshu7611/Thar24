import React from 'react'
import Navbar from '@/components/Events/RcNitro/RcNavbar'
import RcNitro from '@/components/Events/RcNitro/RcNitro'
import About from '@/components/Events/RcNitro/About'
import Team from '@/components/Events/RcNitro/Team'
import Footer from '@/components/global/Footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <RcNitro />
      <About />
      <Team />
      <Footer />
    </div>
  )
}
