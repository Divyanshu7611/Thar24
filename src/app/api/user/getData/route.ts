import CaUser from '@/models/ca/caUser'
import TharUser from '@/models/tharUser/TharUser'
import User from '@/models/user/user'
import { ConnectMongoDB, DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { id } = await request.json()

  try {
    await ConnectMongoDB()

    const user = await User.findOne({ _id: id })

    if (user) {
      const { tharID } = await user

      const ca = await TharUser.findOne({ tharID: tharID })

      await DisconnectMongoDB()

      return NextResponse.json(ca, { status: 200 })
    }
  } catch {
    return NextResponse.json(
      {
        message: 'Bad Request',
      },
      {
        status: 401,
      },
    )
  }
}
