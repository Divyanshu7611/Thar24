import MunUser from '@/models/munUser/munUser'
import User from '@/models/user/user'
import { DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { id, tharID, munWon, munCount } = await req.json()
  try {
    const user = await User.findOne({ _id: id })
    console.log(user)
    if (user) {
      const munuser = await MunUser.findOne({ tharID: tharID })
      if (!munuser) {
        const newmunuser = await MunUser.create({
          tharID,
          munWon,
          munCount,
        }).then(async (munuser: any) => {
          await User.findOneAndUpdate({ isMunRegistered: true })
        })
      }
    }
    await DisconnectMongoDB()
    return NextResponse.json({ message: 'ok' }, { status: 200 })
  } catch {
    return NextResponse.error()
  }
}
