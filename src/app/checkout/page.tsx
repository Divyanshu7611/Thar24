import Navbar from '@/components/global/Navbar'
import Stars from '@/components/global/Stars'
import BillBoard from '@/components/payment/BillBoard'
import React from 'react'

export default function Page() {
  return (
    <>
      <Stars />
      <Navbar />
      <section className="mt-32 grid grid-cols-1 md:grid-cols-2 w-full max-w-[75rem] mx-auto gap-4 items-start">
        <div
          className="hidden md:block bg-white/20 p-1 sticky top-32"
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          }}
        >
          <img
            src="/static/payment.jpg"
            alt=""
            className="object-cover max-h-[80vh]"
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          />
        </div>
        <div
          className="p-1 bg-white/20"
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          }}
        >
          <BillBoard />
        </div>
      </section>
    </>
  )
}
