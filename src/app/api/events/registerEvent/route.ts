import { ConnectMongoDB, DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'
import User from '@/models/user/user'
import TharUser from '@/models/tharUser/TharUser'

export async function POST(request: Request) {
  const { id, tharID, eventID } = await request.json()

  try {
    await ConnectMongoDB()
    const user = await User.findOne({ _id: id })

    if (user) {
      const tharUser = await TharUser.findOne({ tharID: tharID })

      if (tharUser) {
        const eventField = tharUser.registeredEvents

        if (eventField) {
          const isAlreadyRegistered = tharUser.registeredEvents.includes(eventID)

          if (!isAlreadyRegistered && eventID) {
            const newEvent = await TharUser.findOneAndUpdate(
              { tharID: tharID },
              { $push: { registeredEvents: eventID } },
            )

            if (newEvent)
              return NextResponse.json(
                {
                  message: 'done',
                },
                {
                  status: 201,
                },
              )
          } else if (isAlreadyRegistered) {
            return NextResponse.json(
              {
                message: 'already registered',
              },
              {
                status: 202,
              },
            )
          } else {
            return NextResponse.json(
              {
                message: 'Event ID not provided',
              },
              {
                status: 203,
              },
            )
          }
        } else {
          const newEvent = await TharUser.findOneAndUpdate({ tharID: tharID }, { $push: { registeredEvents: eventID } })
        }
      } else {
        return NextResponse.json(
          {
            message: 'register for thar user first',
          },
          {
            status: 203,
          },
        )
      }
      await DisconnectMongoDB()
    } else {
      return NextResponse.json(
        {
          message: 'Yaha bhi Gali sunega kya, BKL',
        },
        {
          status: 403,
        },
      )
    }
  } catch (error) {
    return NextResponse.error()
  }
}
