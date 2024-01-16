'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function BillBoard() {
  const session = useSession()

  const [billData, setBillData] = useState({
    registeredEvents: [],
    totalPayment: '',
  })
  const [load, setLoad] = useState(false)

  useEffect(() => {
    async function getReq() {
      if (session.status == 'authenticated') {
        const req = await fetch('/api/payment/getBill', {
          method: 'post',
          body: JSON.stringify({
            id: session.data.user.id,
            tharID: session.data.user.tharID,
          }),
        })
        const data = await req.json()

        setBillData(data)
        setLoad(true)
      }
    }
    getReq()
  }, [session])

  return (
    <>
      {load && (
        <div
          className="bg-black/50 w-full min-h-[75vh] flex flex-col items-end px-2 pt-4 relative text-right"
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          }}
        >
          <h2 className="mb-2">
            Hello, <strong>{session.data.user.name}</strong>
          </h2>
          <div className="divider-horizontal"></div>
          <h2 className="">Payment Details</h2>
          <h2 className="font-bold">₹{billData?.totalPayment}</h2>

          <h3>Payment Description</h3>
          <div className="flex flex-col items-end">
            {billData.registeredEvents.map(bill => (
              <div className="flex flex-col items-end text-right" key={bill.id}>
                <h4 className="text-white/60">{bill.eventName}</h4>
                <h3>{bill.regFee}</h3>
              </div>
            ))}
          </div>
          <Link href={'/checkout/payment'} className="absolute btn btn-primary w-full bottom-0">
            Pay Now
          </Link>
        </div>
      )}
    </>
  )
}
