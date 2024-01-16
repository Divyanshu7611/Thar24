'use client'

import React, { Key } from 'react'
import CompetitionCard from './CompetitionCard'

export default function CardSection({ searchData }: { searchData: any }) {
  console.log(searchData[0])
  return (
    <main className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 items-center justify-items-center">
      {searchData &&
        searchData.map(data => (
          <CompetitionCard
            key={data.id}
            image={data.image}
            eventName={data.eventName}
            id={data.id}
            isTeam={data.isTeam}
            teamSize={data.teamSize}
          />
        ))}
    </main>
  )
}
