'use client'
import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { IoArrowBackOutline } from 'react-icons/io5'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import tharlogo from '../assets/thar-logo.png'

const Navbar = () => {
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
    <div
      className={`navbar fixed top-0 left-0 z-30 bg-opacity-80 hover:bg-opacity-90 transition-all duration-500 ${
        Scrolling ? 'bg-[#222222] p-4 backdrop-blur-md' : 'bg-transparent p-6'
      }`}
    >
      <div className="flex justify-between items-center absolute">
        <div className="lg:hidden md:hidden z-30">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <nav className="lg:hidden md:hidden justify-center items-center h-screen w-screen bg-[#222222] top-0 left-0 fixed">
          <ul className="flex flex-col gap-3">
            <li>
              <button onClick={() => navigate('/mun')}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate('/mun#committe')}>Committee</button>
            </li>

            <li>
              <button onClick={() => navigate('/mun/#foot')}>Contact</button>
            </li>

            <li>
              <button onClick={() => navigate('/')}>Go Back</button>
            </li>
          </ul>
        </nav>
      )}

      {/* for larger screens */}
      <nav className="hidden justify-between w-full lg:flex lg:items-center lg:ml-4 lg:mr-4 md:flex md:items-center md:ml-4">
        <ul className="flex gap-5 justify-between items-center m-0 p-0">
          <li>
            <button
              onClick={() => navigate('/')}
              className="border border-black rounded-lg p-2 text-black hover:bg-slate-300 hover:text-black transition-all duration-500 bg-[#dce0e8] shadow-gray-900 shadow-sm font-medium"
            >
              <div className="flex justify-center place-items-baseline gap-2 items-center">
                <MdOutlineArrowBackIos />
                <h4 className="">Go Back</h4>
              </div>
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/mun')}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate('/mun/#committe')}>Committee</button>
          </li>

          <li>
            <button onClick={() => navigate('/mun/#foot')}>Contact</button>
          </li>
        </ul>
        <Image alt="" src={tharlogo} height={60} width={60} />
      </nav>
    </div>
  )
}

export default Navbar
