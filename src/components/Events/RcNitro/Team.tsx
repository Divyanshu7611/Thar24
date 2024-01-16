import React from 'react'
import TeamCard from '@/components/Team/TeamCard'

export default function Team() {
  return (
    <section
      className="max-w-7xl flex items-center justify-center mx-auto bg-white/20 mt-8 p-1"
      id="rcteam"
      style={{
        clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
      }}
    >
      <main
        className="w-full max-w-7xl py-8 bg-black/50 px-12"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <div className="flex flex-wrap justify-center items-center gap-10">
          <TeamCard name={'Arpit Pareta'} imgUrl={'/teachers/unknown.jpg'} post={'RcNitro Coordinator'} />
          <TeamCard name={'Abhijeet Bhuwalia'} imgUrl={'/teachers/unknown.jpg'} post={'RcNitro Coordinator'} />
        </div>
      </main>
    </section>
  )
}
