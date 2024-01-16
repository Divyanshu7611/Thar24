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
              src="/events/AboutRobo.png"
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
          <h1 className="mars text-2xl md:text-4xl mb-2">About ROBOWAR</h1>
          <p className="text-sm md:text-xl tracking-wide md:text-justify">
            Welcome to the adrenaline-pumping battlefield of Robo-War! In this event, participants craft and unleash
            their innovative genius by designing and constructing remote-controlled or autonomous robots primed for
            simulated combat. These mechanical gladiators are armed with an array of offensive and defensive weaponry,
            armor, and maneuverability features. Engage in intense showdowns as these robots clash in simulated battles,
            displaying tactical prowess, resilience, and technological prowess. Whether you are a mastermind in robotics
            or a newcomer to engineering marvels, Robo-War offers an electrifying platform to witness the ultimate clash
            of machines. Join us for a riveting spectacle where creativity meets combat, and witness the epic battles
            unfold in this thrilling Robo-War event!
          </p>
        </div>
      </section>
    </div>
  )
}
