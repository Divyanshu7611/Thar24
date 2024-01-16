'use client'
import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [Scrolling, setIsScrolled] = useState(false)

  const navigate = useCallback(
    name => {
      router.push(name)
      setIsOpen(false)
    },
    [router],
  )
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
    <div className={`navbar fixed z-30 bg-opacity-80 hover:bg-opacity-90`}>
      <div className="flex flex-col absolute right-0">
        <div className="lg:hidden md:hidden relative z-50 m-5">
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
        <nav className="lg:hidden md:hidden fixed backdrop:blur-md bg-black h-screen w-screen top-0 left-0 justify-center items-center">
          <ul className="flex flex-col gap-3 items-center">
            <li>
              <button onClick={() => navigate('/robowar')}>HOME</button>
            </li>
            <li>
              <button onClick={() => navigate('robowar/#roboabout')}>ABOUT US</button>
            </li>
            <li>
              <button onClick={() => navigate('robowar/#roboteam')}>TEAM</button>
            </li>
            <li>
              <button onClick={() => navigate('#')}>RULEBOOK</button>
            </li>
            <li>
              <button onClick={() => navigate('/')}>Go Back</button>
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
          <Image alt="" src={'/static/rtuLogo.png'} height={60} width={60} />
        </div>
        <ul className="border flex justify-evenly gap-10 w-2/4 rounded-full font-bold bg-[#00000052] p-2">
          <li>
            <button onClick={() => navigate('/gokart')} className="text-[#ff6b00]">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => navigate('#roboabout')}>ABOUT US</button>
          </li>
          <li>
            <button onClick={() => navigate('#roboteam')}>TEAM</button>
          </li>
          <li>
            <button onClick={() => navigate('#')}>RULEBOOK</button>
          </li>
        </ul>
        <Image alt="" src={'/static/tharLogo.png'} height={60} width={60} />
      </nav>
    </div>
  )
}
