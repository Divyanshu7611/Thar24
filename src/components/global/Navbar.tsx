'use client'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { CgMenuMotion, CgClose } from 'react-icons/cg'
import { FaAngleDown } from 'react-icons/fa6'

export default function Navbar() {
  const ref = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const imageRef2 = useRef<HTMLImageElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)

  const session = useSession()
  const router = useRouter()

  function toggleMenu() {
    menuRef.current?.classList.toggle('show')
  }

  useEffect(() => {
    if (session.status === 'authenticated') {
      setLoggedIn(true)
    }

    window.addEventListener('scroll', e => {
      if (window.scrollY >= 20 && ref.current) {
        ref.current.classList.add('navbarBlur')
        if (imageRef.current && imageRef2.current && buttonRef.current) {
          imageRef.current.width = 60
          imageRef2.current.width = 60
          buttonRef.current.classList.add('btn-sm')
        }
      } else if (ref.current) {
        ref.current.classList.remove('navbarBlur')
        if (imageRef.current && imageRef2.current && buttonRef.current) {
          imageRef.current.width = 100
          imageRef2.current.width = 100
          buttonRef.current.classList.remove('btn-sm')
        }
      }
    })
  }, [session])

  return (
    <>
      <div
        className="lg:hidden fixed z-[9999] show h-screen w-screen bg-black inset-0 transition-transform flex flex-col items-center justify-center"
        ref={menuRef}
      >
        <div className="lg:hidden absolute h-10 w-10 left-4 top-4 cursor-pointer " onClick={toggleMenu}>
          <CgClose size={32} />
        </div>

        <ul className="w-full text-2xl flex flex-col items-center justify-center space-y-4">
          <li onClick={toggleMenu}>
            <Link href="/accomodation">Accomodation</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/competitions">Competitions</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/workshops">Workshops</Link>
          </li>
          <li onClick={toggleMenu}>
            <ul className="w-full text-2xl flex flex-col items-center justify-center space-y-4">
              <li>
                <Link href={'/mun'}>MUN</Link>
              </li>

              <li>
                <Link href={'/robowar'}>Robowar</Link>
              </li>
              <li>
                <Link href={'/rcnitro'}>RC Nitro</Link>
              </li>
              <li>
                <Link href={'/gokart'}>Go Kart</Link>
              </li>
            </ul>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/sponsors">Sponsors</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/ca">CA</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href={'/user'} className="btn btn-primary btn-sm" ref={buttonRef}>
              {isLoggedIn ? 'Dashboard' : 'Register'}
            </Link>
          </li>
        </ul>
      </div>
      <nav
        className="heading fixed top-0 inset-x-0 py-4 w-full grid lg:grid-cols-3 text-xs px-4 lg:px-16 z-50 tracking-tighter transition-all"
        ref={ref || null}
      >
        <ul className="hidden lg:flex items-center justify-start gap-x-8">
          {/* <li>sponsors</li> */}
          <li>
            <Link href="/competitions">Competitions</Link>
          </li>
          <li>
            <Link href="/sponsors">sponsors</Link>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="m-2 flex items-center justify-center gap-1">
                Events <FaAngleDown />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link href={'/mun'}>MUN</Link>
                </li>
                <li>
                  <Link href={'/robowar'}>Robowar</Link>
                </li>
                <li>
                  <Link href={'/rcnitro'}>RC Nitro</Link>
                </li>
                <li>
                  <Link href={'/gokart'}>GO Kart</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="relative flex items-center justify-center w-full">
          <div className="lg:hidden absolute h-12 w-12 left-0 cursor-pointer" onClick={toggleMenu}>
            <CgMenuMotion size={36} />
          </div>
          <Link href={'/'}>
            <Image
              src="/static/rtuLogo.png"
              alt="logo"
              height={1000}
              width={100}
              ref={imageRef}
              className="transition-all"
            />
          </Link>
          <Link href={'/'}>
            <Image
              src="/static/tharLogo.png"
              alt="logo"
              height={1000}
              width={100}
              className="transition-all border-l-[1px] border-l-white pl-2"
              ref={imageRef2}
            />
          </Link>
        </div>
        <ul className="hidden lg:flex items-center justify-end gap-x-8">
          <li>
            <Link href="/accomodation">Accomodation</Link>
          </li>

          <li>
            <Link href="/ca">CA</Link>
          </li>
          <li>
            <Link href={'/user'} className="btn btn-primary btn-sm" ref={buttonRef}>
              {isLoggedIn ? 'Dashboard' : 'Register'}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
