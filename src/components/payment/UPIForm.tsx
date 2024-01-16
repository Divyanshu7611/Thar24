'use client'
import toDataURL from '@/utils/toDataUrl'
import { useSession } from 'next-auth/react'
import React, { useRef } from 'react'

export default function UPIForm({ amount }) {
  const txnRef = useRef<string>()
  const fileRef = useRef<File>()
  const session = useSession()
  const submittingRef = useRef<boolean>(false)

  async function handleUPI() {
    if (session.status === 'authenticated') {
      const file = fileRef.current

      const blob = new Blob([file], { type: file.type })
      const imageURL = URL.createObjectURL(blob)

      toDataURL(imageURL, async base64url => {
        const req = await fetch('/api/payment/getPayment', {
          method: 'post',
          body: JSON.stringify({
            id: session.data.user.id,
            tharID: session.data.user.tharID,
            txnNumber: txnRef.current.toUpperCase(),
            file: base64url,
            amount: amount,
          }),
        })
        const reqStatus = req.status
        if (reqStatus === 200) {
            alert('Submitted Successfully')
          //   submittingRef.current = false
        } else {
          alert('Something went wrong')
        }
      })
    } else {
      alert('login error')
    }
  }

  return (
    <form
      className="bg-black/50 w-full md:min-h-[75vh] flex flex-col items-end justify-center px-2 pt-4 relative text-right py-12"
      style={{
        clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
      }}
      onSubmit={async e => {
        e.preventDefault()
        submittingRef.current = true

        await handleUPI()
        submittingRef.current = false
      }}
    >
      <label htmlFor="txnID" className="label">
        Transaction ID /UPI Ref ID
      </label>
      <input
        type="text"
        className="input input-primary w-full"
        placeholder="Transaction ID/ UPI Ref ID"
        required
        onChange={e => {
          txnRef.current = e.target.value
        }}
      />
      <label htmlFor="txnID" className="label">
        Payment Screenshot
      </label>
      <input
        type="file"
        className="file-input file-input-primary file-input-bordered w-full"
        accept="image/*"
        required
        onChange={e => {
          fileRef.current = e.target.files[0]
        }}
      />
      <button type="submit" className="btn btn-primary mt-2" disabled={submittingRef.current ? true : false}>
        Submit
      </button>
    </form>
  )
}
