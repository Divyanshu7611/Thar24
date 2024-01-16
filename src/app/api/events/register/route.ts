import { ConnectMongoDB, DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'
import User from '@/models/user/user'
import TharUser from '@/models/tharUser/TharUser'
import TeamRegistration from '@/models/events/teamEventModel'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: Request) {
  const { id, tharID, teamName, eventID, captainTharID, teamMembers } = await request.json()

  try {
    await ConnectMongoDB()
    const user = await User.findOne({ _id: id })

    console.log(user.tharID)

    if (user) {
      const tharUser = await TharUser.findOne({ tharID: tharID })

      if (tharUser) {
        const alreadyRegistered = await TeamRegistration.findOne({ captainTharID: captainTharID, eventID: eventID })

        if (!alreadyRegistered) {
          const teamID = uuidv4().split('-')[0].toUpperCase()

          await TeamRegistration.create({
            id: teamID,
            eventID,
            teamName,
            captainTharID,
            teamMembersTharID: teamMembers,
            paymentStatus: false,
          })

          await DisconnectMongoDB()

          return NextResponse.json(
            {
              message: 'Registered',
            },
            {
              status: 200,
            },
          )
        } else {
          return NextResponse.json(
            {
              message: 'Already Registered',
            },
            {
              status: 202,
            },
          )
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
