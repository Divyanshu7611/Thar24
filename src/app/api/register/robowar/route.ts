import RoboWarUser from '@/models/robowarUser/robowarUser'
import User from '@/models/user/user'
import { DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { id, teamName, captainId, membersId } = await req.json()
  try {
    const user = await User.findOne({ _id: id })
    console.log(user)
    if (user) {
      const robowaruser = await RoboWarUser.findOne({ captainId: captainId })
      if (!robowaruser) {
        const newrobowaruser = await RoboWarUser.create({
          captainId,
          teamName,
          membersId,
        }).then(async (robowarUser: any) => {
          await User.findOneAndUpdate({ isRoboWarRegistered: true })
        })
      }
    }
    await DisconnectMongoDB()
    return NextResponse.json({ message: 'ok' }, { status: 200 })
  } catch {
    return NextResponse.error()
  }
}
