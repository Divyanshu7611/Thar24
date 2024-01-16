'use client'

import CompetitionContainer from '@/components/competitions/CompetitionContainer'
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import Stars from '@/components/global/Stars'
// import { useState } from 'react'


export default function page() {

  return (
    <>
      <Navbar />
      <Stars />

      <CompetitionContainer />
      <Footer />
    </>
  )
}
