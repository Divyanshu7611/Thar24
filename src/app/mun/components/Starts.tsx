'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState, useCallback } from 'react'
import MunMain from '../assets/MunMain.png'
import Rectangle from '../assets/Rectangle.png'
import logoMun from '../assets/MUN RTU LOGO 1.png'
import Countdown from 'react-countdown'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaAngleDoubleDown } from 'react-icons/fa'
import rect2 from '../assets/Rectangle 5.png'

export default function Starts() {
  const router = useRouter()
  const [date, setDate] = useState<any>(null)

  const navigate = useCallback(
    name => {
      router.push(name)
    },
    [router],
  )

  useEffect(() => {
    setDate(new Date(2024, 0, 22))
  }, [])
  const renderer = ({ days, hours, minutes }) => {
    return (
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span className="text-white text-sm font-normal">Days</span>
          <span className="text-white text-sm font-normal">Hours</span>
          <span className="text-white text-sm font-normal">Minutes</span>
        </div>
        <div className="flex gap-2">
          <div className="flex">
            <div className="border-[#C9984E] border-4 rounded-md h-12 w-12 flex flex-col items-center justify-center">
              <span className="text-white text-2xl font-bold">{days}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border-[#C9984E] border-4 rounded-md h-12 w-12 flex flex-col items-center justify-center">
              <span className="text-white text-2xl font-bold">{hours}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border-[#C9984E] border-4 rounded-md h-12 w-12 flex flex-col items-center justify-center">
              <span className="text-white text-2xl font-bold">{minutes}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden">
      <div className="relative w-full h-screen">
        <Image src={MunMain} layout="fill" objectFit="cover" alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-[Montserrat]">
          <Image src={Rectangle} width={1100} height={1207} alt="" className="relative image" />
          <Image src={rect2} alt="" className="image2 relative" />
          <div className="flex flex-wrap-reverse items-center justify-center gap-5 absolute m-16 p-10">
            {/* left side div */}
            <div className="flex flex-col">
              <div className="w-full regButton">
                <button
                  className="border bg-[#C9984E] px-5 py-2 font-medium"
                  onClick={() => navigate('/competitions/33B59EE6')}
                >
                  Register
                </button>
              </div>

              <div className="mt-4 md:mt-8">
                <h3 className="text-sm md:text-lg font-semibold">Starting In:</h3>
                <div className="flex gap-5 mt-2">
                  <div>
                    {date != null && (
                      <Countdown className="text-lg tracking-wide font-extrabold" date={date} renderer={renderer} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center lg:pb-6 mb-5">
              <Image src={logoMun} width={170} height={210} alt="" />
              <div className="text-center mt-4 md:mt-0 md:items-end">
                <h1 className="font-extrabold text-xl md:text-4xl">MUN-RTU</h1>
                <div className="h-1 bg-[#FFFFFF] mt-1 w-full"></div>
                <h3 className="font-medium text-sm md:text-lg">The Delegates’ Symposium</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
