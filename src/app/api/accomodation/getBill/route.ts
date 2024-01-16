import EventsModel from '@/models/events/eventModel'
import TeamRegistration from '@/models/events/teamEventModel'
import TharUser from '@/models/tharUser/TharUser'
import User from '@/models/user/user'
import { ConnectMongoDB, DisconnectMongoDB } from '@/utils/dbConnect'
import { events } from '@/utils/events'
import { NextResponse } from 'next/server'

const tharFee: number = 500
const accomodationFee: number = 600
let totalPayment: number = 0
const registeredEvents = []

// export async function POST(req: Request) {
//   const { id, tharID } = await req.json()

//   try {
//     await ConnectMongoDB()
//     const user = await User.findOne({ _id: id })

//     if (user) {
//       if (user.tharID == tharID) {
//         const tharUser = await TharUser.findOne({ tharID })

//         if (tharUser) {
//           // let includeTharBaseFee = true
//           // const specificEvents = await TeamRegistration.find({
//           //   captainTharID: tharID,
//           //   eventID: { $in: ['FD40EE2B', '8F39B429', '80A3A948', '33B59EE6', '16EE61FF'] },
//           // })
//           // Check for event registration before adding THAR base fee

//           // if (specificEvents.length > 0) {
//           //   includeTharBaseFee = false // If registered for specific events, exclude THAR base fee
//           // } else if (!tharUser.tharPayment) {
//           //   totalPayment += tharFee
//           //   registeredEvents.push({
//           //     id: 'THAR',
//           //     eventName: 'THAR Base Fee',
//           //     regFee: tharFee,
//           //   })
//           // }
//           // if (tharUser.tharPayment == false) {
//           //   if (tharUser.tharPayment == false) {
//           //     totalPayment += tharFee
//           //     registeredEvents.push({
//           //       id: 'THAR',
//           //       eventName: 'THAR Base Fee',
//           //       regFee: tharFee,
//           //     })
//           //   }

//           if (tharUser.accomodationPayment == false) {
//             totalPayment += accomodationFee

//             registeredEvents.push({
//               id: 'ACCOMODATION',
//               eventName: 'THAR Accomodation',
//               regFee: accomodationFee,
//             })
//           }

//           const eventFee = await TeamRegistration.find(
//             { captainTharID: tharID, paymentStatus: false },
//             { eventID: 1, _id: 0 },
//           )

//           for (let event in eventFee) {
//             const eventData = events.find(o => o.id == eventFee[event].eventID)
//             if (eventData) {
//               totalPayment += eventData.regFee
//               registeredEvents.push({
//                 id: eventData.id,
//                 eventName: eventData.eventName,
//                 regFee: eventData.regFee,
//               })
//             }
//           }

//           const responseData = {
//             registeredEvents: [...registeredEvents],
//             totalPayment,
//           }
//           registeredEvents.splice(0, registeredEvents.length)
//           totalPayment = 0

//           await DisconnectMongoDB()
//           return NextResponse.json(responseData, {
//             status: 200,
//           })
//         } else {
//           await DisconnectMongoDB()

//           return NextResponse.json(
//             {
//               message: 'not Thar User',
//             },
//             {
//               status: 200,
//             },
//           )
//         }
//       } else {
//         await DisconnectMongoDB()

//         return NextResponse.json(
//           {
//             message: 'not Thar User',
//           },
//           {
//             status: 200,
//           },
//         )
//       }
//     } else {
//       await DisconnectMongoDB()
//       return NextResponse.json(
//         {
//           message: 'not User',
//         },
//         {
//           status: 200,
//         },
//       )
//     }
//   } catch (error) {
//     return NextResponse.json(
//       {
//         message: 'not User',
//       },
//       {
//         status: 200,
//       },
//     )
//   }
// }
export async function POST(req: Request) {
  const { id, tharID } = await req.json()

  try {
    await ConnectMongoDB()
    const user = await User.findOne({ _id: id })

    if (user && user.tharID === tharID) {
      const tharUser = await TharUser.findOne({ tharID })

      if (tharUser) {
        let totalPayment = 0
        const registeredEvents = []

        if (tharUser.accomodationPayment === false) {
          totalPayment += accomodationFee

          registeredEvents.push({
            id: 'ACCOMODATION',
            eventName: 'THAR Accommodation',
            regFee: accomodationFee,
          })
        }

        const responseData = {
          registeredEvents: [...registeredEvents],
          totalPayment,
        }

        await DisconnectMongoDB()
        return NextResponse.json(responseData, { status: 200 })
      } else {
        await DisconnectMongoDB()
        return NextResponse.json({ message: 'Not Thar User' }, { status: 200 })
      }
    } else {
      await DisconnectMongoDB()
      return NextResponse.json({ message: 'Not User' }, { status: 200 })
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error occurred' }, { status: 500 })
  }
}
