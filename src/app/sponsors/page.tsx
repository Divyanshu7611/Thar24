import React from 'react'
import Navbar from '@/components/global/Navbar'
import Stars from '@/components/global/Stars/index'
import Footer from '@/components/global/Footer'
import Section from '@/components/sponsors/Section'

export default function page() {
  return (
    <div>
      <Navbar />
      <Stars />
      <Section />
      <Footer />
    </div>
  )
}
