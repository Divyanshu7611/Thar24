'use client'
import React, { useState } from 'react'

export default function Footer() {
  const [formData, setData] = useState({ query: '' })
  function changeHandler(event) {
    setData(prevformData => {
      return {
        ...prevformData,
        [event.target.name]: event.target.value,
      }
    })
  }
  function submitHandler(event) {
    event.preventDefault()
  }
  return (
    <div
      className="bg-[#070624] text-white justify-center flex text-[Roboto] overflow-x-hidden overflow-y-auto"
      id="foot"
    >
      {/* For mobiles */}
      <div className="flex flex-col gap-3 w-full mobfoot p-5 justify-center">
        <div>
          <h3 className="text-lg">MUN-RTU</h3>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3 justify-between">
            <a href="#" className="hover:text-white text-xs opacity-50 hover:underline">
              HOME
            </a>
            <a href="#" className="hover:text-white text-xs opacity-50 hover:underline">
              ABOUT
            </a>
            <a href="#" className="hover:text-white text-xs opacity-50 hover:underline">
              COMMITTEES
            </a>
            <a href="#" className="hover:text-white text-xs opacity-50 hover:underline">
              CONTACT
            </a>
            <a href="#" className="hover:text-white text-xs opacity-50 hover:underline">
              FAQs
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="flex text-lg">
              If any queries, drop in
              <br /> the box below.
            </h1>
            <form onSubmit={submitHandler}>
              <label className="flex flex-col gap-3">
                <input
                  type="text"
                  name="query"
                  onChange={changeHandler}
                  placeholder="Your email and the query"
                  className="border border-[#EBF0F9] h-16 w-full bg-transparent opacity-30 text-[#EBF0F9] text-sm mb-0 md:mb-1 md:mr-2 rounded-md"
                />
                <div>
                  <button className="border bg-white rounded-md text-black text-base px-4 py-2">Send</button>
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>

      {/* For PCs */}
      <div className="flex w-[1080px] m-6 gap-6 justify-between pcfoot">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="font-bold text-2xl">MUN-RTU</h3>
        </div>

        <div className="text-center md:text-left">
          <div className="flex text-left text-md justify-between w-full h-full gap-5">
            <div className="flex flex-col justify-between font-normal">
              <a href="#" className="hover:text-white opacity-75 font-normal hover:underline">
                Home
              </a>
              <a href="#" className="hover:text-white opacity-75 font-normal hover:underline">
                About Us
              </a>
              <a href="#" className="hover:text-white opacity-75 font-normal hover:underline">
                Events
              </a>
            </div>
            <div className="flex flex-col justify-between">
              <a href="#" className="hover:text-white opacity-75 font-normal hover:underline">
                Team
              </a>
              <a href="#" className="hover:text-white opacity-75 font-normal hover:underline">
                Twitter
              </a>
              <a href="#" className="hover:text-white opacity-75 font-normal hover:underline">
                Events
              </a>
            </div>
            <div className="flex flex-col justify-between">
              <a href="#" className="hover:text-white opacity-75 hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:text-white opacity-75 hover:underline">
                Contact Us
              </a>
              <a href="#" className="hover:text-white opacity-75 hover:underline">
                FaceBook
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:text-xs w-2/5">
          <h1 className="text-2xl font-bold">
            If any queries, drop in
            <br /> the box below.
          </h1>
          <form onSubmit={submitHandler}>
            <label className="flex">
              <input
                type="text"
                name="query"
                onChange={changeHandler}
                placeholder="Your email and the query"
                className="border border-[#EBF0F9] h-16 w-full bg-transparent opacity-30 text-[#EBF0F9] text-base mb-0 md:mb-1 md:mr-2"
              />
              <button className="border bg-white text-black rounded-md text-base px-10 py-4">Send</button>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}
