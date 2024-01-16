'use client'

import SearchBar from './SearchBar'
import CardSection from './CardSection'
import { useEffect, useState } from 'react'
import { events } from '@/utils/events'

async function getAllEvents(setEventData) {
  setEventData(events)
}

export default function CompetitionContainer() {
  // const [searchData, setSearchData] = useState()
  const [eventData, setEventData] = useState()

  useEffect(() => {
    getAllEvents(setEventData)
  }, [])

  return (
    <section className="mt-32 w-full max-w-[60rem] mx-auto flex items-center flex-col">
      <h1 className="mars my-20">COMPETITIONS</h1>

      {eventData && (
        <>
          {/* <SearchBar searchData={eventData} setSearchData={setSearchData} /> */}
          <CardSection searchData={eventData} />
        </>
      )}
    </section>
  )
}
