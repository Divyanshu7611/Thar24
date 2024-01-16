'use client'
import React, { useEffect, useRef } from 'react'
import TeamCard from '@/components/Team/TeamCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Team() {
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
      <main
        className="w-full max-w-[75rem] flex items-center justify-center mx-auto gap-8 py-8 bg-black/50 px-12 flex-col"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        {/* <h1 className="mars text-4xl mb-2">Coordinators</h1> */}
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex flex-col items-center gap-4 mb-8">
                <h1 className="text-2xl md:text-3xl">Chief-Patreon</h1>
                <TeamCard name={'Prof. S.K. Singh'} imgUrl={'/teachers/vc.jpg'} post={'Vice Chancellor, RTU'} />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl md:text-3xl">Patreon</h1>
                <TeamCard name={'Prof. A.K. Dwivedi'} imgUrl={'/teachers/dean.jpg'} post={'Dean SW & FA, RTU'} />
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-2xl md:text-3xl">Coordinators</h1>
              <div className="flex flex-col md:flex-row gap-10">
                <TeamCard
                  name={'Prof. Dr. D.K Sambariya'}
                  imgUrl={'/teachers/sambariyasir.jpg'}
                  post={'THAR Coordinator, RTU'}
                />
                <TeamCard
                  name={'Prof. Dr. Brijesh Tripathi'}
                  imgUrl={'/teachers/proctor.jpg'}
                  post={'THAR Co-Coordinator, RTU'}
                />
              </div>
            </div>
            {/* cocoorinator */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col md:flex-row gap-10">
                <TeamCard
                  name={'Prof. Dr. Deepak Bhatia'}
                  imgUrl={'/teachers/deepakBhatia.jpg'}
                  post={'THAR Co-Coordinator, RTU'}
                />
                <TeamCard
                  name={'Prof. Dr. M.L Meena'}
                  imgUrl={'/teachers/mlmeena.jpg'}
                  post={'THAR Co-Coordinator, RTU'}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
