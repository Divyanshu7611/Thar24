import User from '@/models/tharUser/TharUser'
import { ConnectMongoDB, DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    await ConnectMongoDB()

    const allUsers = await User.find({})

    await DisconnectMongoDB()

    return NextResponse.json(allUsers, { status: 200 })
  } catch (error) {
    console.error('Error fetching all users:', error)
    return NextResponse.json(
      {
        message: 'Error fetching all users',
      },
      {
        status: 500,
      },
    )
  }
}
