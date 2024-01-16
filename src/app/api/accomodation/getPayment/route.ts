import AccoPayment from '@/models/accomodation/AccoPayment'
import TharUser from '@/models/tharUser/TharUser'
import User from '@/models/user/user'
import { ConnectMongoDB } from '@/utils/dbConnect'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { id, tharID, txnNumber, file, amount } = await req.json()

  try {
    await ConnectMongoDB()

    const user = await User.findOne({ _id: id })
    if (user) {
      const tharUser = await TharUser.findOne({ tharID: tharID })
      if (tharUser) {
        const accomodationData = await AccoPayment.create({
          tharID: tharID,
          txnID: txnNumber,
          paymentAmount: amount,
          file: file,
        })
        if (accomodationData) {
          return NextResponse.json(
            {
              message: 'ok',
            },
            {
              status: 200,
            },
          )
        } else {
          return NextResponse.error()
        }
      } else {
        return NextResponse.error()
      }
    } else {
      return NextResponse.error()
    }
  } catch (error) {
    return NextResponse.error()
  }
}
