import React from 'react'
import TeamCard from '@/components/Team/TeamCard'

export default function Team() {
  return (
    <section
      className="max-w-6xl flex items-center justify-center mx-auto bg-white/20 mt-8 p-1"
      id="goteam"
      style={{
        clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
      }}
    >
      <main
        className="w-full py-8 bg-black/50 px-12"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <div className="flex flex-wrap justify-center items-center gap-10">
          <TeamCard name={'Rohit Meena'} imgUrl={'/teachers/unknown.jpg'} post={'GoKart Coordinator'} />
          <TeamCard name={'Rohit Kumar Meena'} imgUrl={'/teachers/unknown.jpg'} post={'GoKart Coordinator'} />
        </div>
      </main>
    </section>
  )
}
