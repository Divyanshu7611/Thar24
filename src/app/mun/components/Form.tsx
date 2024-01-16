'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import munBackground from '../assets/munRegister.png'
export default function Form({
  id,
  tharID,
  name,
  image,
  email,
}: {
  id: string
  tharID: string
  name: string
  image: string
  email: string
}) {
  const router = useRouter()
  const [formData, setFormData] = useState<Object>({
    id: id,
    tharID: tharID,
    munWon: '',
    munCount: '',
  })

  const munCounterRef = useRef<string | undefined>('')
  const munWomRef = useRef<string | undefined>('')

  const submittingRef = useRef<boolean>(false)

  async function handleSubmit() {
    formData['id'] = id
    formData['tharID'] = tharID
    formData['munWon'] = munWomRef.current.toUpperCase()
    formData['munCount'] = munCounterRef.current.toUpperCase()

    if (munWomRef.current == '' || munCounterRef.current == '') {
      alert('Please fill all Data')
    } else {
      setFormData({
        ...formData,
      })
      console.log(formData)
      fetch('/api/register/mun', {
        method: 'post',
        body: JSON.stringify(formData),
      })
    }
  }
  return (
    <>
      <Navbar />

      <section
        className="flex h-screen flex-col items-center justify-center"
        style={{
          backgroundImage: `url("/events/munRegister.png")`,
          objectFit: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <div
          className="p-1 bg-white/20"
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          }}
        >
          <form
            className={`bg-black/70 py-12 max-w-2xl w-full mx-auto flex flex-col items-center justify-center px-8`}
            onSubmit={async e => {
              e.preventDefault()
              submittingRef.current = true
              await handleSubmit()
              submittingRef.current = false
            }}
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Number Of Muns Participated</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
                onChange={e => {
                  munWomRef.current = e.target.value
                }}
              />
            </div>

            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text text-lg font-bold">Numbers of Muns Awards Won In The Past</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
                onChange={e => {
                  munCounterRef.current = e.target.value
                }}
              />
            </div>
            <button
              className={`w-full btn mx-auto btn-primary disabled:btn-primary self-end max-w-xs mt-2 btn-sm px-1 ${
                submittingRef.current === true ? 'animate-pulse select-none' : ''
              }`}
              disabled={submittingRef.current}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
