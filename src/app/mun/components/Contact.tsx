'use client'
import React, { useState } from 'react'
import { FaInstagram } from 'react-icons/fa6'
import { AiOutlineYoutube } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
import { PiDiscordLogo } from 'react-icons/pi'

export default function Contact() {
  const [formData, setData] = useState({ Name: '', Email: '', Message: '' })
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
    <div className="bg-white text-black flex justify-center" id="cont">
      <div className="w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-8 mt-16">
        {/* contact form */}
        <div className="w-full md:w-1/2">
          <h2>Contact Us:</h2>
          <form onSubmit={submitHandler}>
            <label className="flex flex-col">
              <p>Name</p>
              <input
                type="text"
                name="Name"
                id="Name"
                onChange={changeHandler}
                value={formData.Name}
                placeholder="Enter Your Name"
                className="border border-black rounded-md"
              />
            </label>

            <br></br>
            <label className="flex flex-col">
              <p>Email</p>
              <input
                type="email"
                name="Email"
                id="Email"
                onChange={changeHandler}
                value={formData.Email}
                className="border border-black rounded-md"
                placeholder="Enter Your Email"
              />
            </label>

            <br></br>
            <label className="flex flex-col">
              <p>Your Message:</p>
              <textarea
                placeholder="Enter Your Message"
                name="Message"
                value={formData.Message}
                onChange={changeHandler}
                className="border border-black rounded-md"
              />
            </label>

            <br></br>
            <div></div>
            <button className="bg-[#C9984E] text-white font-semibold px-4 py-1 rounded-md">SEND</button>
          </form>
        </div>
        {/* Social media Links */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2>Social Media Links:</h2>
          <div className="flex justify-between mt-5">
            <div>
              <FaInstagram size={40} />
            </div>
            <div>
              <AiOutlineYoutube size={40} />
            </div>
            <div>
              <CiLinkedin size={40} />
            </div>
            <div>
              <PiDiscordLogo size={40} />
            </div>
          </div>
          <iframe
            width="100%"
            className="w-full mt-8"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7223.663324962325!2d75.79477965504338!3d25.141381443946532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f835f077c3ccb%3A0x4bb166c16c662eea!2sRajasthan%20Technical%20University%2C%20Akelgarh%2C%20Kota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1698827365749!5m2!1sen!2sin"
            style={{ filter: 'grayscale(1) contrast(1.2)' }}
          ></iframe>
          <div>
            <button
              onClick={() =>
                window.open(
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7223.663324962325!2d75.79477965504338!3d25.141381443946532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f835f077c3ccb%3A0x4bb166c16c662eea!2sRajasthan%20Technical%20University%2C%20Akelgarh%2C%20Kota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1698827365749!5m2!1sen!2sin',
                )
              }
              className="px-3 font-semibold bg-[#C9984E] text-white rounded-md py-1"
            >
              OPEN MAP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
