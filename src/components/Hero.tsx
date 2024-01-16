'use client'
import React, { useEffect, useState } from 'react'
import Dunes from './Dunes'
import Countdown from 'react-countdown'

export default function Hero() {
  const [date, setDate] = useState<any>(null)

  useEffect(() => {
    setDate(new Date(2024, 0, 22))
  }, [])

  return (
    <header
      className="relative min-h-[100vh] w-full flex items-center justify-center flex-col animationGradient tracking-tighter z-[-1] overflow-hidden"
      id="home"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="mars text-lg text-center">Rajasthan Technical University</p>
        <p className="mars text-xs">Presents</p>
        <img src="/static/tharText.png" alt="" className="md:h-40 w-full" />
        <p className="mars text-xs">navigating the technical dunes</p>
        <br />
        <p className="text-md font-bold tracking-wide">
          January, 22<sup>nd</sup>-24<sup>th</sup> 2024
        </p>
        <div>{date != null && <Countdown className="text-md tracking-wide font-semibold" date={date} />}</div>
      </div>
      <img src="/static/starship.svg" alt="" className="fixed top-4 mx-auto h-[90vh] opacity-90" id="starship" />
      <Dunes />
    </header>
  )
}
