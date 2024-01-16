import EventsModel from '@/models/events/eventModel'
import TeamRegistration from '@/models/events/teamEventModel'
import TharUser from '@/models/tharUser/TharUser'
import User from '@/models/user/user'
import { ConnectMongoDB, DisconnectMongoDB } from '@/utils/dbConnect'
import { events } from '@/utils/events'
import { NextResponse } from 'next/server'

const tharFee: number = 300
const accomodationFee: number = 600
let totalPayment: number = 0
const registeredEvents = []

export async function POST(req: Request) {
  const { id, tharID } = await req.json()

  try {
    await ConnectMongoDB()
    const user = await User.findOne({ _id: id })

    if (user) {
      if (user.tharID == tharID) {
        const tharUser = await TharUser.findOne({ tharID })

        if (tharUser) {
          let isUserRegistered = false

          const eventFee = await TeamRegistration.find(
            { captainTharID: tharID, paymentStatus: false },
            { eventID: 1, _id: 0 },
          )

          for (let event in eventFee) {
            const eventData = events.find(o => o.id == eventFee[event].eventID)
            if (eventData) {
              isUserRegistered = true
              totalPayment += eventData.regFee
              registeredEvents.push({
                id: eventData.id,
                eventName: eventData.eventName,
                regFee: eventData.regFee,
              })
            }
          }

          if (!isUserRegistered) {
            totalPayment += tharFee
            registeredEvents.push({
              id: 'THAR',
              eventName: 'THAR Base Fee',
              regFee: tharFee,
            })
          }

          const responseData = {
            registeredEvents: [...registeredEvents],
            totalPayment,
          }
          registeredEvents.splice(0, registeredEvents.length)
          totalPayment = 0

          await DisconnectMongoDB()
          return NextResponse.json(responseData, {
            status: 200,
          })
        } else {
          await DisconnectMongoDB()

          return NextResponse.json(
            {
              message: 'not Thar User',
            },
            {
              status: 200,
            },
          )
        }
      } else {
        await DisconnectMongoDB()

        return NextResponse.json(
          {
            message: 'not Thar User',
          },
          {
            status: 200,
          },
        )
      }
    } else {
      await DisconnectMongoDB()
      return NextResponse.json(
        {
          message: 'not User',
        },
        {
          status: 200,
        },
      )
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: 'not User',
      },
      {
        status: 200,
      },
    )
  }
}
