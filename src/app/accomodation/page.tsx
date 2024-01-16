import React from 'react'
import Stars from '@/components/global/Stars'
import About from '@/components/accomodation/About'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
export default function page() {
  return (
    <div>
      <Stars />
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}
