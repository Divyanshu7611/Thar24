import { ConnectMongoDB, DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'
import CaUser from '@/models/ca/caUser'
import { v4 as uuidv4 } from 'uuid'
import User from '@/models/user/user'

export async function POST(request: Request) {
  const {
    id,
    tharID,
    name,
    image,
    email,
    phone,
    age,
    gender,
    collegeName,
    addr,
    city,
    state,
    stream,
    yearOfStudy,
    graduatingYear,
  } = await request.json()

  const caCode = uuidv4().split('-')[0].toUpperCase()

  try {
    await ConnectMongoDB()
    let user = await User.findOne({ _id: id })

    if (user) {
      let ca = await CaUser.findOne({ email })

      if (!ca) {
        await CaUser.create({
          tharID,
          caCode,
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
        }).then(async (caData: any) => {
          await User.findOneAndUpdate({ tharID: caData.tharID }, { caRegistered: true })
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
