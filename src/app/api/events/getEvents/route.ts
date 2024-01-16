import EventsModel from '@/models/events/eventModel'
import { ConnectMongoDB, DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    await ConnectMongoDB()
    const events = await EventsModel.find()

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
