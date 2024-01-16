'use client'
import React from 'react'
import gokart from '../assets/gokart.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Starts() {
  const router = useRouter()
  return (
    <div>
      <div className="relative h-screen w-screen overflow-x-hidden overflow-y-hidden flex justify-center main text-[Montserrat]">
        <Image
          alt=""
          src={'/events/Framerobowar.png'}
          objectFit="cover"
          fill
          className="h-screen w-screen absolute object-top"
        />
        {/* <div className="absolute h-screen w-screen bg-[#3F030A] opacity-[73%]"></div> */}
        {/* <div className="absolute bg-[#181818] opacity-75 h-[140%] w-3/4 -rotate-[35deg] -translate-x-[40%] black"></div> */}
        {/* content */}
        <div className="absolute flex flex-col w-full justify-between max-w-[75vw] m-10 content md:flex-row h-1/2">
          <div className="flex justify-center">
            <div className="flex flex-col gap-5 text-[Orbitron]">
              <div className="font-bold">
                <h2>
                  UNLEASH THE <span className="text-[#ff0000]">THRILL</span>
                </h2>
                <h3>
                  WHERE <span className="text-[#ff6b00]">SPEEDS</span> MEETS
                  <br />
                  <span className="text-[#ff6b00]">PRECISION</span>
                </h3>
              </div>
              <div className="regButton mx-auto md:mx-0 flex md:flex-row flex-col gap-5">
                <button
                  className="bg-blue-950 hover:bg-blue-500 px-5 py-2 rounded-lg font-bold"
                  onClick={() => router.push('/competitions/8F39B429')}
                >
                  REGISTER ( 15 KG )
                </button>
                <button
                  className="bg-blue-950 hover:bg-blue-500 px-5 py-2 rounded-lg font-bold"
                  onClick={() => router.push('/competitions/FD40EE2B')}
                >
                  REGISTER ( 30 KG )
                </button>
              </div>
            </div>
          </div>
          {/* Side content */}
          <div className="flex flex-col md:mt-20 mt-15 gap-5 md:gap-5">
            <div className="font-bold text-[Orbitron] text-center sidecont">
              <h3 className="head text-3xl">CRANK YOUR ENGINE</h3>
              <h4 className="head2 text-2xl">BETWEEN JAN</h4>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-[#ffffff81] rounded-xl items-center justify-center box flex">
                <h1 className="text-center font-bold md:text-4xl text-2xl date">
                  22<span className="text-sm">ND</span>
                </h1>
              </div>
              <div className="h-1 w-1/4 bg-[#ffffff81]"></div>
              <div className="bg-[#ffffff81] rounded-xl flex items-center justify-center box">
                <h1 className="text-center font-bold md:text-4xl text-xl date">
                  24<span className="text-sm">TH</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
