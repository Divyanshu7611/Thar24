import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div>
      <section
        className="flex items-center justify-center mx-auto gap-8 py-8 px-12 bg-blend-multiply max-w-7xl"
        id="rcabout"
      >
        <div className="flex-grow w-1/2 hidden md:block">
          <div
            className="p-1 bg-white/50"
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <Image
              src="/events/AboutRc.png"
              alt=""
              width="500"
              height="500"
              className="h-full w-full bg-black/70"
              style={{
                clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
              }}
            />
          </div>
        </div>
        <div className="flex-grow w-1/2">
          <h1 className="mars text-2xl md:text-4xl mb-2">ABOUT RCNITRO</h1>
          <p className="text-sm md:text-xl tracking-wide md:text-justify">
            Rev up your engines for the heart-pounding RC Nitro Championship! Experience the adrenaline rush of scaled
            car and buggy racing at its finest, with powerful 1:10 and 1:8 models fueled by nitro-based adrenaline. Feel
            the thrill as these miniature beasts tear up the track with incredible speed and precision. Whether you are
            a seasoned racer or a newcomer to the RC world, this championship promises high-octane excitement, intense
            competition, and roaring engines. Join us for a day of exhilarating races, nail-biting moments, and the
            chance to showcase your skills in the electrifying world of RC Nitro racing
          </p>
        </div>
      </section>
    </div>
  )
}
