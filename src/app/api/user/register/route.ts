import { ConnectMongoDB, DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'

import { v4 as uuidv4 } from 'uuid'
import User from '@/models/user/user'
import TharUser from '@/models/tharUser/TharUser'

export async function POST(request: Request) {
  const {
    id,
    tharID,
    name,
    gender,
    age,
    image,
    email,
    phone,
    collegeName,
    addr,
    city,
    state,
    stream,
    yearOfStudy,
    graduatingYear,
    referralCode,
  } = await request.json()

  try {
    await ConnectMongoDB()
    let user = await User.findOne({ _id: id })

    if (user) {
      let user = await TharUser.findOne({ email })

      if (!user) {
        await TharUser.create({
          tharID,
          name,
          age,
          gender,
          image,
          email,
          phone,
          collegeName,
          addr,
          city,
          state,
          stream,
          yearOfStudy,
          graduatingYear,
          referralCode,
        }).then(async (userData: any) => {
          await User.findOneAndUpdate({ tharID: userData.tharID }, { userRegistered: true })
        })
      }
      await DisconnectMongoDB()

      return NextResponse.json(
        {
          message: 'done',
        },
        {
          status: 200,
        },
      )
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
