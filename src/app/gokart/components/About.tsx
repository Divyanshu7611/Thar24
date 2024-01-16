import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div>
      <section
        className="flex items-center justify-center mx-auto gap-8 py-8 px-12 bg-blend-multiply max-w-7xl"
        id="roboabout"
      >
        <div className="flex-grow w-1/2 hidden md:block">
          <div
            className="p-1 bg-white/50"
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <Image
              src="/events/AboutGokart.png"
              alt=""
              height="500"
              width="500"
              className="h-full w-full bg-black/70"
              style={{
                clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
              }}
            />
          </div>
        </div>
        <div className="flex-grow w-1/2">
          <h1 className="mars text-2xl md:text-4xl mb-2">About GOKART</h1>
          <p className="text-sm md:text-xl tracking-wide md:text-justify">
            Welcome to the thrill-packed THAR Go-Kart Championship (TGKC), where speed meets engineering finesse! A
            go-kart, synonymous with high-speed racing, takes the center stage in this event, representing the epitome
            of four-wheeled motor prowess. From recreational to high-performance racing models, go-karts are compact,
            lightweight vehicles designed for motorsport training or adrenaline-pumping racing experiences. The TGKC
            presents a series of challenging rounds including design, business, skid pad, auto cross, and an ultimate
            test of endurance. Participants will showcase their innovation in design, business acumen, maneuverability
            on the track, and stamina in a rigorous endurance challenge. Join us for a race-packed event that celebrates
            the spirit of motorsports and engineering brilliance at the THAR Go-Kart Championship!
          </p>
        </div>
      </section>
    </div>
  )
}
