import RcNitroUser from '@/models/rcnitroUser/rcnitroUser'
import User from '@/models/user/user'
import { DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { id, teamName, captainId, membersId } = await req.json()
  try {
    const user = await User.findOne({ _id: id })
    console.log(user)
    if (user) {
      const rcnitrouser = await RcNitroUser.findOne({ captainId: captainId })
      if (!rcnitrouser) {
        const newrcnitrouser = await RcNitroUser.create({
          captainId,
          teamName,
          membersId,
        }).then(async (rcnitroUser: any) => {
          await User.findOneAndUpdate({ isRcNitroRegistered: true })
        })
      }
    }
    await DisconnectMongoDB()
    return NextResponse.json({ message: 'ok' }, { status: 200 })
  } catch {
    return NextResponse.error()
  }
}
