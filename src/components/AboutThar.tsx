/* eslint-disable @next/next/no-img-element */
'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

export default function AboutThar() {
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
      className="max-w-[75rem] flex items-center justify-center mx-auto bg-white/20 mt-8 p-1"
      style={{
        clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
      }}
      ref={sectionRef}
    >
      <section
        className="flex items-center justify-center mx-auto gap-8 py-8 bg-black/50 px-12 bg-blend-multiply"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <div className="flex-grow w-1/2 hidden md:block">
          <div
            className="p-1 bg-white/50"
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <img
              src="/static/thar-logo.png"
              alt=""
              className="h-full w-full bg-black/70"
              style={{
                clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
              }}
            />
          </div>
        </div>
        <div className="flex-grow w-1/2">
          <h1 className="mars text-2xl md:text-4xl mb-2">About THAR</h1>
          <p className="text-sm md:text-xl tracking-wide md:text-justify">
            THAR, the flagship techno-management fest of Rajasthan Technical University, Kota, is a three-day event that
            provides a platform for students to showcase their technical and management skills, network with industry
            experts, and learn from successful entrepreneurs. The fest&apos;s theme, &quot;Navigating the Technical
            Dunes,&quot; reflects the ever-changing and challenging landscape of the tech industry, and the need for
            students to be adaptable, skilled, and resourceful. Each day of the fest features a variety of events,
            including competitions, workshops, and pronites.
          </p>
        </div>
      </section>
    </section>
  )
}
