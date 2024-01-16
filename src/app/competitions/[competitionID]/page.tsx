import CompetitionPageCard from '@/components/competitions/CompetitionPageCard'
import Navbar from '@/components/global/Navbar'
import Stars from '@/components/global/Stars'
import { events } from '@/utils/events'

async function getEventData(id: string) {
  const event = events.find(ev => ev.id === id)
  return event
}

export default async function Page({ params }: { params: { competitionID: string } }) {
  const { competitionID } = params

  const event = await getEventData(competitionID)

  return (
    <>
      <Navbar />
      <Stars />
      <main className="min-h-screen w-full max-w-[75rem] flex items-center justify-center mx-auto">
        <CompetitionPageCard data={event} />
      </main>
    </>
  )
}
