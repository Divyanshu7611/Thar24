'use client'

import React from 'react'
// import CompetitionCard from './CompetitionCard'
import Image from 'next/image'
import CompetitionModal from './CompetitionModal'

export default function CompetitionPageCard({ data }) {
  const teamCount = []

  for (let i = 0; i < data.teamSize - 1; i++) {
    teamCount.push(1)
  }

  return (
    <section
      className="bg-white/20 p-1 mt-32"
      style={{
        clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
      }}
    >
      {data && (
        <div
          className="bg-black/50 grid grid-cols-1 md:grid-cols-12"
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          }}
        >
          <div className="md:col-span-5">
            <Image
              height={450}
              width={450}
              src={'/competitions/' + data.image + '.png'}
              alt="Event"
              className="aspect-square object-cover transition-all"
              loading="lazy"
              style={{
                clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
              }}
            />
          </div>
          <div className="md:col-span-7 md:pl-2 flex flex-col justify-between py-4">
            <div className="">
              <h2 className="mars">{data.eventName}</h2>
              <div className="">
                Registration Fee: <strong>{data.regFee}</strong> Rs.
              </div>
              <h3 className="font-bold">
                Event Description
                <div className="badge badge-secondary">{data.isTeam == 'TRUE' ? 'Team Event' : 'Solo Event'}</div>
                <div className="badge badge-secondary">Max Members {data.teamSize}</div>
              </h3>
              <p className="text-base">{data.eventDescription}</p>
            </div>
            <div className="flex flex-col items-start mt-2">
              <div className="">
                <p>
                  {data.coordinator1} <strong>{data.coordinator1Mobile}</strong>{' '}
                </p>
                <p>
                  {data.coordinator2} <strong> {data.coordinator2Mobile}</strong>{' '}
                </p>
              </div>
              <div className="space-x-2 flex flex-col md:flex-row items-center justify-start mt-2 gap-4 mx-auto md:justify-start md:mx-0">
                <CompetitionModal
                  eventID={data.id}
                  eventName={data.eventName}
                  isTeam={data.isTeam == 'TRUE' ? true : false}
                  teamCount={teamCount}
                />
                <a href={data.rulebook} target="blank" type="button" className="btn btn-accent">
                  Rule-book
                </a>
                <p className="mars">Prize Money:</p>
                <span className="tracking-wide font-bold text-lg">{data.prizeMoney}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
