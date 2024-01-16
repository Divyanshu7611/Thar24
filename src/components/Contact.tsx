"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import ContactCard from './Contact/ContactCard'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'top 25%',
          scrub: 1,
          // markers: true,
        },
      })
      .from(sectionRef.current, {
        transformOrigin: 'top',
        rotateX: 90,
      })
  }, [])

  return (
    <section
      className="max-w-[75rem] flex items-center justify-center mx-auto bg-white/20 my-8 p-1"
      style={{
        clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
      }}
      ref={sectionRef}
    >
      <main
        className="w-full text-gray-600 body-font relative max-w-[75rem] mx-auto py-8 bg-black/50 px-4 md:px-12 flex-col"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
          <div
            className="lg:w-2/3 md:w-1/2 bg-gray-300 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7223.663324962325!2d75.79477965504338!3d25.141381443946532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f835f077c3ccb%3A0x4bb166c16c662eea!2sRajasthan%20Technical%20University%2C%20Akelgarh%2C%20Kota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1698827365749!5m2!1sen!2sin"
              style={{ filter: 'grayscale(1) contrast(1.2)' }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Rajasthan Technical University</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-[#c21420] leading-relaxed">thar.techfest@rtu.ac.in</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 text-gray-100 gap-y-2">
            <ContactCard name={'Anirudh Soni'} number={7240543202} />
            <ContactCard name={'Aman Sharma'} number={9549385384} />
            <ContactCard name={'Dishantar Jangid'} number={6378464482} />
            <ContactCard name={'Abhishek Jaiswal'} number={9621436603} />
            <ContactCard name={'Moin Khan'} number={9376619630} />
            <ContactCard name={'Pankaj Nagar'} number={7733004077} />
          </div>
        </div>
      </main>
    </section>
  )
}
