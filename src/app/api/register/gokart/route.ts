import GoKartUser from '@/models/gokartUser/gokartUser'
import User from '@/models/user/user'
import { DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { id, teamName, captainId, membersId } = await req.json()
  try {
    const user = await User.findOne({ _id: id })
    console.log(user)
    if (user) {
      const gokartuser = await GoKartUser.findOne({ captainId: captainId })
      if (!gokartuser) {
        const newgokartuser = await GoKartUser.create({
          captainId,
          teamName,
          membersId,
        }).then(async (gokartUser: any) => {
          await User.findOneAndUpdate({ isGoKartRegistered: true })
        })
      }
    }
    await DisconnectMongoDB()
    return NextResponse.json({ message: 'ok' }, { status: 200 })
  } catch {
    return NextResponse.error()
  }
}
