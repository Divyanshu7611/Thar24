import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaYoutube, FaTelegram, FaLinkedin, FaFacebookF, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="w-full p-10 bg-base-100 text-neutral-content mx-auto flex md:flex-row flex-col-reverse items-start md:items-center justify-between text-xl border-t-2 border-t-white/50 gap-y-6 mt-32">
      <div>
        <Image src={'/logo-white.png'} alt="" height={100} width={200} />
        <p>
          THAR Rajasthan Technical University
          <br />
          Rawatbhata Road, Akelgarh, Kota (324010)
        </p>
      </div>
      <nav>
        <header className="footer-title">Socials</header>
        <div className="grid grid-flow-col gap-4">
          <a target="blank" href="https://instagram.com/thar.rtu">
            <FaInstagram size={24} />
          </a>
          <a target="blank" href="https://www.youtube.com/@rtuthar2023">
            <FaYoutube size={24} />
          </a>
          <a target="blank" href="https://t.me/tharopen">
            <FaTelegram size={24} />
          </a>
          <a target="blank" href="https://www.linkedin.com/company/rtuthar/">
            <FaLinkedin size={24} />
          </a>
          <a target="blank" href="https://www.facebook.com/rtuthar/">
            <FaFacebookF size={24} />
          </a>
          <a target="blank" href="https://twitter.com/rtuthar2023/">
            <FaXTwitter size={24} />
          </a>
        </div>
      </nav>
    </footer>
  )
}
