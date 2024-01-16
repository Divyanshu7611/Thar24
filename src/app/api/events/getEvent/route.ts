import EventsModel from '@/models/events/eventModel'
import { ConnectMongoDB, DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const eventID = searchParams.get('id')

  try {
    await ConnectMongoDB()
    const events = await EventsModel.findOne({ id: eventID })

    await DisconnectMongoDB()

    return NextResponse.json(
      {
        events: events,
      },
      {
        status: 200,
      },
    )
  } catch (error) {}
}
