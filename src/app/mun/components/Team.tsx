'use client'
import React from 'react'
import Template from './Template'
import image from '../assets/JohnDoe.jpeg'

const profileData = {
  imageName: image,
  name: 'John Doe',
  linkedin: 'https://www.linkedin.com/in/johndoe/',
  twitter: 'https://twitter.com/johndoe',
  instagram: 'https://www.instagram.com/johndoe/',
}

export default function Team() {
  return (
    <div className=" text-black bg-white flex justify-center" id="team">
      <div className="m-5 sm:m-10 md:m-20 lg:m-24 text-center flex flex-col gap-5 max-w-6xl">
        <h1 className="underline">Meet The Team</h1>
        <div className="flex flex-col text-center mt-5 mb-5 w-full gap-3 sm:gap-5">
          <h2>Secretariat</h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            <div>
              <Template {...profileData} />
            </div>
            <div>
              <Template {...profileData} />
            </div>
            <div>
              <Template {...profileData} />
            </div>
          </div>
        </div>
        {/* Delegate Div */}
        <div className="flex flex-col gap-3 sm:gap-5">
          <h2>Delegate Affairs</h2>

          <div className="breadcrumbs">
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-5">
              <li>
                <Template {...profileData} />
              </li>
              <li>
                <Template {...profileData} />
              </li>
              <li>
                <Template {...profileData} />
              </li>
              <li>
                <Template {...profileData} />
              </li>
              <li>
                <Template {...profileData} />
              </li>
            </ul>
          </div>
        </div>
        {/* USG DESIGN TEAM */}
        <div className="flex flex-col gap-3 sm:gap-5">
          <h2>USG DESIGN TEAM</h2>

          <div className="breadcrumbs">
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-5">
              <li>
                <Template {...profileData} />
              </li>
              <li>
                <Template {...profileData} />
              </li>
              <li>
                <Template {...profileData} />
              </li>
              <li>
                <Template {...profileData} />
              </li>
              <li>
                <Template {...profileData} />
              </li>
            </ul>
          </div>
        </div>
        {/* USG CONTENT TEAM */}
        <div className="flex flex-col gap-3 sm:gap-5">
          <h2>USG CONTENT TEAM</h2>

          <div className="breadcrumbs">
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-5">
              <li>
                <Template {...profileData} />
              </li>
              <li>
                <Template {...profileData} />
              </li>
              <li>
                <Template {...profileData} />
              </li>
              <li>
                <Template {...profileData} />
              </li>
              <li>
                <Template {...profileData} />
              </li>
            </ul>
          </div>
        </div>
        {/* END */}
      </div>
    </div>
  )
}
