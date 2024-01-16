'use client'
import React, { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import UPIForm from './UPIForm'
import QRcode from 'react-qr-code'
import { PaymentQRURI } from '@/utils/qrCodeLink'

export default function QRPage() {
  const session = useSession()
  const [qrLink, setQRlink] = useState<string>('')
  const [paymentAmount, setPaymentAmount] = useState<string>('')

  useEffect(() => {
    async function handle() {
      const req = await fetch('/api/accomodation/getBill', {
        method: 'post',
        body: JSON.stringify({
          id: session.data.user.id,
          tharID: session.data.user.tharID,
        }),
      })
      const data = await req.json()
      setPaymentAmount(data.totalPayment)
      setQRlink(PaymentQRURI(data.totalPayment, session.data.user.tharID))
    }
    if (session.status === 'authenticated') {
      handle()
    }
  })

  return (
    <section className="mt-32 grid grid-cols-1 md:grid-cols-2 w-full max-w-[75rem] mx-auto gap-4 items-start">
      <div
        className="bg-white/20 p-1"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <div
          className="bg-black/50 w-full md:min-h-[75vh] flex flex-col items-center justify-center p-8 relative text-right"
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          }}
        >
          {qrLink !== '' && (
            <QRcode
              value={qrLink}
              size={1000}
              className="w-11/12 h-[91.666667%] m-auto"
              bgColor="transparent"
              fgColor="#bebebec7"
            />
          )}
          {qrLink === '' && <img src="/static/payment.jpg" alt="" />}
        </div>
      </div>
      <div
        className="p-1 bg-white/20"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        {qrLink === '' && (
          <div
            className="bg-black/50 w-full min-h-[75vh] flex flex-col items-end justify-center px-2 pt-4 relative text-right"
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <button
              className="btn btn-accent"
              onClick={() => {
                signIn('google')
              }}
            >
              Login
            </button>
          </div>
        )}
        {qrLink !== '' && <UPIForm amount={paymentAmount} />}
      </div>
    </section>
  )
}
