import React from 'react'
import { FaInstagram } from 'react-icons/fa6'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import Image from 'next/image'

const Template = ({ imageName, name, linkedin, twitter, instagram }) => {
  return (
    <div className="profile">
      <Image src={imageName} alt={name} />
      <h2>{name}</h2>
      <div className="social-links flex justify-between">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <CiLinkedin size={30} />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
      </div>
    </div>
  )
}

export default Template
