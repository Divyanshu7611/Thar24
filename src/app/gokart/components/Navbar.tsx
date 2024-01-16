'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import rtulogo from '../assets/rtuLogo.png'
import tharlogo from '../assets/tharLogo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [Scrolling, setIsScrolled] = useState(false)
  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', HandleScroll)
    return () => {
      window.removeEventListener('scroll', HandleScroll)
    }
  }, [])

  return (
    <div className={`navbar fixed top-0 right-0 z-30 bg-opacity-80 hover:bg-opacity-90`}>
      <div className="flex flex-col">
        <div className="lg:hidden md:hidden z-30 top-0 right-0 m-5">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Collapsible menu for mobile */}
      {isOpen && (
        <nav className="lg:hidden md:hidden fixed top-0 left-0">
          <ul className="flex flex-col gap-3 backdrop:blur-md top-0 right-0 bg-black h-screen w-screen justify-center items-center">
            <li>
              <Link href="/gokart">HOME</Link>
            </li>
            <li>
              <Link href="#goabout">ABOUT US</Link>
            </li>
            <li>
              <Link href="#goteam">TEAM</Link>
            </li>
            <li>
              <Link href="#">RULEBOOK</Link>
            </li>
          </ul>
        </nav>
      )}

      {/* for larger screens */}
      <nav
        className={`hidden justify-between fixed w-screen top-0 left-0 lg:flex lg:items-center md:flex transition-all md:items-center
      ${Scrolling ? 'bg-grey backdrop-blur-2xl p-2' : 'bg-transparent p-1'}
      `}
      >
        <div>
          <Image alt="" src={rtulogo} height={60} width={60} />
        </div>
        <ul className="border flex justify-evenly gap-10 w-2/4 rounded-full font-bold bg-[#00000052] p-3">
          <li className="text-[#ff6b00]">
            <Link href="/gokart">HOME</Link>
          </li>
          <li>
            <Link href="#goabout">ABOUT US</Link>
          </li>
          <li>
            <Link href="#goteam">TEAM</Link>
          </li>
          <li>
            <Link href="#">RULEBOOK</Link>
          </li>
        </ul>
        <Image alt="" src={tharlogo} height={60} width={60} />
      </nav>
    </div>
  )
}
